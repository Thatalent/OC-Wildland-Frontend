import React, { useState, useEffect } from "react";
import { GRAPHQL_HTTP_URL } from "../lib/apollo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import TimeIcon from "./icons/TimeIcon";
import CalendarIcon from "./icons/CalendarIcon";

type Preferred =
  | "9 AM"
  | "10 AM"
  | "1 PM"
  | "2 PM"
  | "3 PM"
  | "4 PM"
  | (string & {});

const TIME_OPTIONS: { value: Preferred; label: string }[] = [
  { value: "9 AM", label: "9:00 AM" },
  { value: "10 AM", label: "10:00 AM" },
  { value: "1 PM", label: "1:00 PM" },
  { value: "2 PM", label: "2:00 PM" },
  { value: "3 PM", label: "3:00 PM" },
  { value: "4 PM", label: "4:00 PM" },
];

const SPACING = { XS: "4px", SM: "8px", MD: "12px", LG: "24px" } as const;
const SIZES = {
  INPUT_HEIGHT: "40px",
  BUTTON_HEIGHT: "44px",
  ICON_SM: "18px",
  ICON_MD: "5rem",
  CARD_MAX_WIDTH: "584px",
  CARD_HEIGHT: "680px",
} as const;

interface TimeSlotButtonProps {
  value: Preferred;
  label: string;
  selected: boolean;
  isBooked: boolean;
  disabled: boolean;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
}

const TimeSlotButton: React.FC<TimeSlotButtonProps> = ({
  label,
  selected,
  isBooked,
  disabled,
  onClick,
  onKeyDown,
  buttonRef,
}) => {
  const baseClasses =
    "text-btn tracking-ls-1_25pct font-medium transition duration-150 focus:outline-none border border-grey-91 border-solid box-border shadow-none rounded-md w-full h-9 px-[13px] flex items-center";
  const btnClasses = [baseClasses];

  if (disabled) {
    btnClasses.push("bg-gray-100 text-gray-400 cursor-not-allowed");
  } else {
    btnClasses.push(
      "bg-white text-muted-700 hover:bg-[#F34E1B] hover:text-white hover:shadow-time-btn focus:shadow-time-btn active:shadow-time-active"
    );
  }
  if (selected && !disabled) {
    btnClasses.push("bg-[var(--color-orange-50,_#F96B06)] text-white");
  }

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      aria-disabled={disabled}
      onClick={onClick}
      ref={buttonRef}
      onKeyDown={onKeyDown}
      disabled={disabled}
      className={btnClasses.join(" ")}
      style={
        selected && !disabled
          ? {
              backgroundColor: "var(--color-orange-50, #F96B06)",
              color: "#ffffff",
              border: "1px solid #E1E7EF",
            }
          : { border: "1px solid #E1E7EF" }
      }
      title={isBooked ? "Booked" : undefined}
    >
      <TimeIcon className="w-4 h-4 mr-[10px] flex-shrink-0" />
      <span className="truncate">{label}</span>
    </button>
  );
};

export interface ConsultationData {
  date?: string;
  preferredTime?: Preferred | null;
  fullName: string;
  email: string;
}

interface Props {
  className?: string;
  header?: string;
  disabled?: boolean;
  timeOptions?: { value: Preferred; label: string }[];
  minDate?: Date | null;
  maxDate?: Date | null;
  shouldDisableDate?: (date: Date) => boolean;
  disableWeekends?: boolean;
  blackoutDates?: string[];
}

const ScheduleConsultation: React.FC<Props> = ({
  className = "",
  header,
  disabled = false,
  timeOptions,
  minDate,
  maxDate,
  shouldDisableDate,
  disableWeekends = false,
  blackoutDates = [],
}) => {
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [preferredTime, setPreferredTime] = useState<Preferred | null>(null);
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [localBookedTimes, setLocalBookedTimes] = useState<string[]>([]);
  const [bookedTimesLoading, setBookedTimesLoading] = useState(false);
  const [availabilityFetched, setAvailabilityFetched] = useState(false);
  const [fullyBookedDates, setFullyBookedDates] = useState<Set<string>>(
    new Set()
  );
  const [internalLoading, setInternalLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pickerOpen, setPickerOpen] = useState<boolean>(false);

  const EFFECTIVE_TIME_OPTIONS =
    timeOptions && timeOptions.length > 0 ? timeOptions : TIME_OPTIONS;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateValue) {
      setErrorMessage("Please select a date.");
      return;
    }

    const payload: ConsultationData = {
      date: dateValue.toISOString().slice(0, 10),
      preferredTime,
      fullName,
      email,
    };

    setInternalLoading(true);
    setErrorMessage(null);

    try {
      const mutation = `mutation CreateConsultation($data: ConsultationCreateInput!) { createConsultation(data: $data) { id } }`;
      const dataToSend = {
        Schedule_a_Consultation: header || "Schedule a consultation",
        selectDate: payload.date,
        preferredTime: payload.preferredTime,
        fullName: payload.fullName,
        email: payload.email,
      };

      const res = await fetch(GRAPHQL_HTTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: mutation,
          variables: { data: dataToSend },
        }),
      });

      const contentType = res.headers.get("content-type") || "";
      const text = await res.text();

      if (!res.ok) {
        throw new Error(`Request failed: ${res.status} ${res.statusText}`);
      }

      let json: any = null;
      if (text && contentType.includes("application/json")) {
        try {
          json = JSON.parse(text);
        } catch (parseErr: any) {
          throw new Error(`Failed to parse JSON response: ${parseErr.message}`);
        }
      } else if (text && !contentType.includes("application/json")) {
        throw new Error(
          `Expected JSON response but got Content-Type=${contentType}`
        );
      }

      if (json && json.errors && json.errors.length) {
        throw new Error(json.errors[0].message || "GraphQL error");
      }

      setSuccessMessage("Consultation requested — we'll be in touch soon.");
      setDateValue(null);
      setPreferredTime(null);
      setFullName("");
      setEmail("");
      setLocalBookedTimes([]);
      setTimeout(() => setSuccessMessage(null), 5000);
    } catch (err: any) {
      setErrorMessage(err?.message || "Failed to request consultation");
    } finally {
      setInternalLoading(false);
    }
  };

  const fetchBookedTimes = async (isoDate: string) => {
    if (!isoDate) {
      setLocalBookedTimes([]);
      return;
    }
    setAvailabilityFetched(false);
    setBookedTimesLoading(true);
    try {
      const query = `query Consultations($date: CalendarDay!) { consultations(where: { selectDate: { equals: $date } }) { preferredTime } }`;
      const res = await fetch(GRAPHQL_HTTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables: { date: isoDate } }),
      });
      const json = await res.json();
      const consultations = json?.data?.consultations || [];
      const times: string[] = consultations
        .map((c: any) => c.preferredTime)
        .filter(Boolean);
      setLocalBookedTimes(times);
    } catch {
      setLocalBookedTimes([]);
    } finally {
      setBookedTimesLoading(false);
      setAvailabilityFetched(true);
    }
  };

  const fetchFullyBookedDates = async (monthDate?: Date | null) => {
    try {
      const d = monthDate || new Date();
      const start = new Date(d.getFullYear(), d.getMonth(), 1);
      const end = new Date(d.getFullYear(), d.getMonth() + 1, 0);
      const startIso = start.toISOString().slice(0, 10);
      const endIso = end.toISOString().slice(0, 10);

      const query = `query ConsultationsByRange($start: CalendarDay!, $end: CalendarDay!) { consultations(where: { selectDate: { gte: $start, lte: $end } }) { selectDate preferredTime } }`;
      const res = await fetch(GRAPHQL_HTTP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query,
          variables: { start: startIso, end: endIso },
        }),
      });

      const json = await res.json();
      const rows: Array<{ selectDate?: string; preferredTime?: string }> =
        json?.data?.consultations || [];

      const map = new Map<string, Set<string>>();
      rows.forEach((r) => {
        const sd = r.selectDate;
        const t = r.preferredTime;
        if (!sd) return;
        if (!map.has(sd)) map.set(sd, new Set<string>());
        if (t) map.get(sd)!.add(t);
      });

      const full = new Set<string>();
      const slotCount = EFFECTIVE_TIME_OPTIONS.length;
      map.forEach((set, date) => {
        if (set.size >= slotCount) full.add(date);
      });
      setFullyBookedDates(full);
    } catch (err) {
      setFullyBookedDates(new Set());
    }
  };

  useEffect(() => {
    if (dateValue && !Number.isNaN(dateValue.getTime())) {
      const iso = dateValue.toISOString().slice(0, 10);
      fetchBookedTimes(iso);
    } else {
      setLocalBookedTimes([]);
    }
  }, [dateValue]);

  useEffect(() => {
    fetchFullyBookedDates(new Date());
  }, []);

  const usedBookedRaw = localBookedTimes;

  const normalizeTime = (s?: string | null) => {
    if (!s) return "";
    const cleaned = s
      .toString()
      .toUpperCase()
      .trim()
      .replace(/:00/g, "")
      .replace(/[:.\s]+/g, "");
    const match = cleaned.match(/^0*(\d{1,2})(AM|PM)$/);
    return match ? `${match[1]} ${match[2]}` : s.toUpperCase().trim();
  };

  const bookedStrings: string[] = (usedBookedRaw || []).map((entry: any) => {
    if (!entry) return "";
    if (typeof entry === "string") return entry;
    if (typeof entry === "object")
      return String(
        entry.preferredTime ?? entry.preferred_time ?? entry.value ?? ""
      );
    return String(entry);
  });

  const bookedNormSet = new Set(bookedStrings.map((t) => normalizeTime(t)));

  const buttonRefs = React.useRef<Array<HTMLButtonElement | null>>([]);

  const stripTime = (d: Date): Date => {
    const x = new Date(d);
    x.setHours(0, 0, 0, 0);
    return x;
  };

  const endOfDay = (d: Date): Date => {
    const x = new Date(d);
    x.setHours(23, 59, 59, 999);
    return x;
  };

  const isDisabled = disabled || internalLoading;
  const isFormValid =
    !!dateValue &&
    !Number.isNaN(dateValue.getTime()) &&
    preferredTime != null &&
    fullName.trim().length > 0 &&
    email.trim().length > 0;

  return (
    <section
      className={`mx-auto ${className}`}
      aria-labelledby="schedule-consultation-title"
    >
      <div
        className="bg-white rounded-lg pt-6 px-6 w-full mx-auto"
        style={{
          maxWidth: SIZES.CARD_MAX_WIDTH,
          paddingBottom: "24px",
          border: "1px solid #E1E7EF",
        }}
      >
        <header className="text-left">
          <h2
            id="schedule-consultation-title"
            className="m-0 font-inter flex items-center"
            style={{
              fontWeight: 600,
              fontSize: "22px",
              lineHeight: "24px",
              letterSpacing: "0px",
              verticalAlign: "middle",
            }}
          >
            <CalendarIcon className="w-5 h-5 mr-3 flex-shrink-0" />
            <span>{header || "Schedule a Consultation"}</span>
          </h2>
          <p
            className="text-body font-normal text-gray-500 mx-0 mb-0 font-inter tracking-normal"
            style={{ marginTop: SPACING.XS }}
          >
            Free 30-minute Consultation
          </p>
          <p className="text-body font-normal text-gray-500 my-6 mx-0 font-inter tracking-normal">
            Speak with our training experts about your certification needs.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-caption font-medium text-gray-700 m-0">
              Select Date
            </label>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <style>{`
                .consultation-date-field {
                  position: relative;
                  margin: 0 !important;
                  margin-top: 12px !important;
                  padding: 0 !important;
                }
                .consultation-date-field .MuiTextField-root {
                  margin: 0 !important;
                  padding: 0 !important;
                  width: 100% !important;
                }
                .consultation-date-field .MuiInputBase-root {
                  margin: 0 !important;
                  padding: 0 !important;
                  width: 100% !important;
                }
                .consultation-date-field .MuiInputBase-input::placeholder {
                  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' fill='none'%3E%3Cpath d='M13.375 3.64062H12.8281V2.54688H11.7344V3.64062H6.26562V2.54688H5.17188V3.64062H4.625C4.02344 3.64062 3.53125 4.13281 3.53125 4.73438V13.4844C3.53125 14.0859 4.02344 14.5781 4.625 14.5781H13.375C13.9766 14.5781 14.4688 14.0859 14.4688 13.4844V4.73438C14.4688 4.13281 13.9766 3.64062 13.375 3.64062ZM13.375 13.4844H4.625V6.375H13.375V13.4844Z' fill='%23000000'/%3E%3C/svg%3E");
                  background-repeat: no-repeat;
                  background-position: right 4px center;
                  background-size: 18px 18px;
                  padding-right: 26px;
                  width: 102px;
                  display: inline-block;
                  color: #000000;
                }
                .consultation-date-field .MuiInputBase-input {
                  padding-right: 6px !important;
                  width: 100% !important;
                  box-sizing: border-box !important;
                }
                .consultation-date-field .calendar-icon-overlay {
                  position: absolute;
                  left: 0;
                  top: 0;
                  width: 100%;
                  height: 100%;
                  cursor: pointer;
                  z-index: 1;
                  pointer-events: auto;
                }
              `}</style>
              <div
                className="consultation-date-field w-full"
                style={{ marginTop: "12px" }}
              >
                <DatePicker
                  open={pickerOpen}
                  onOpen={() => setPickerOpen(true)}
                  onClose={() => setPickerOpen(false)}
                  value={dateValue}
                  onChange={(newDate: Date | null) => {
                    setDateValue(newDate);
                  }}
                  sx={{ width: "100%" }}
                  slotProps={{
                    textField: {
                      inputProps: {
                        className:
                          "block w-full py-2 px-3 rounded-md shadow-none focus:border-[#A1A1A1] focus:shadow-[0px_2px_2px_0px_#00000040]",
                        placeholder: "mm/dd/yyyy",
                        style: {
                          height: "40px",
                          boxSizing: "border-box",
                          border: "none",
                          width: "100%",
                        },
                      },
                      className: "w-full",
                      sx: {
                        width: "100%",
                        "& .MuiInputBase-root": {
                          padding: "0 !important",
                          width: "100%",
                          border: "1px solid #E1E7EF !important",
                          borderRadius: "6px !important",
                          boxSizing: "border-box !important",
                        },
                      },
                      InputProps: {
                        sx: {
                          padding: "0 !important",
                          width: "100%",
                          "& .MuiInputBase-input": {
                            paddingRight: "6px !important",
                          },
                          "&:before": {
                            border: "none !important",
                          },
                          "&:after": {
                            border: "none !important",
                          },
                          "&.MuiInput-root": {
                            border: "1px solid #E1E7EF !important",
                          },
                          "&.MuiOutlinedInput-root": {
                            border: "1px solid #E1E7EF !important",
                            "& fieldset": {
                              border: "none !important",
                            },
                          },
                        },
                      },
                    },
                    openPickerButton: { sx: { display: "none !important" } },
                  }}
                  shouldDisableDate={(d: Date | null) => {
                    if (!d) return false;
                    const iso = d.toISOString().slice(0, 10);
                    if (fullyBookedDates?.has(iso)) return true;
                    if (blackoutDates?.includes(iso)) return true;
                    if (
                      disableWeekends &&
                      (d.getDay() === 0 || d.getDay() === 6)
                    )
                      return true;
                    if (typeof shouldDisableDate === "function") {
                      try {
                        if (shouldDisableDate(d)) return true;
                      } catch {}
                    }
                    if (minDate && d < stripTime(minDate)) return true;
                    if (maxDate && d > endOfDay(maxDate)) return true;
                    return false;
                  }}
                  minDate={minDate || undefined}
                  maxDate={maxDate || undefined}
                  onMonthChange={(d) => fetchFullyBookedDates(d)}
                />
                <div
                  className="calendar-icon-overlay"
                  onClick={() => setPickerOpen(true)}
                  role="button"
                  aria-label="Open calendar"
                  tabIndex={pickerOpen ? -1 : 0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setPickerOpen(true);
                    }
                  }}
                />
              </div>
            </LocalizationProvider>
          </div>

          <div style={{ marginTop: SPACING.LG }}>
            <span className="block text-caption font-medium text-gray-700">
              Preferred time
            </span>
            <div
              className="grid grid-cols-2 rounded-md"
              style={{ marginTop: SPACING.MD, gap: SPACING.SM }}
              role="radiogroup"
              aria-label="Preferred time"
            >
              {(() => {
                const allOptions = EFFECTIVE_TIME_OPTIONS;

                if (dateValue && !availabilityFetched) {
                  return (
                    <p className="text-sm text-gray-500 col-span-2">
                      Checking availability...
                    </p>
                  );
                }
                if (allOptions.length === 0) {
                  return (
                    <p className="text-sm text-gray-500 col-span-2">
                      No time options configured.
                    </p>
                  );
                }
                return allOptions.map((opt, idx) => {
                  const value = opt.value;
                  const label = opt.label;
                  const selected = preferredTime === value;
                  const normalizedValue = normalizeTime(value as string);
                  const isBooked = bookedNormSet.has(normalizedValue);
                  const interactiveReady = !(
                    disabled ||
                    internalLoading ||
                    bookedTimesLoading
                  );
                  const isDisabled = isBooked || !interactiveReady;

                  return (
                    <TimeSlotButton
                      key={value}
                      value={value}
                      label={label}
                      selected={selected}
                      isBooked={isBooked}
                      disabled={isDisabled}
                      onClick={() => !isDisabled && setPreferredTime(value)}
                      buttonRef={(el) => (buttonRefs.current[idx] = el)}
                      onKeyDown={(e) => {
                        if (isDisabled) return;
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setPreferredTime(value);
                          return;
                        }

                        const cols = 2;
                        let nextIndex = idx;
                        if (e.key === "ArrowLeft" && idx % cols === 1) {
                          nextIndex = idx - 1;
                        } else if (
                          e.key === "ArrowRight" &&
                          idx % cols === 0 &&
                          idx + 1 < allOptions.length
                        ) {
                          nextIndex = idx + 1;
                        } else if (e.key === "ArrowUp" && idx - cols >= 0) {
                          nextIndex = idx - cols;
                        } else if (
                          e.key === "ArrowDown" &&
                          idx + cols < allOptions.length
                        ) {
                          nextIndex = idx + cols;
                        }

                        if (nextIndex !== idx) {
                          e.preventDefault();
                          const nextBtn = buttonRefs.current[nextIndex];
                          if (nextBtn) {
                            nextBtn.focus();
                            const nextVal = allOptions[nextIndex].value;
                            if (
                              !bookedNormSet.has(
                                normalizeTime(nextVal as string)
                              )
                            ) {
                              setPreferredTime(nextVal);
                            }
                          }
                        }
                      }}
                    />
                  );
                });
              })()}
            </div>
          </div>

          <div style={{ marginTop: SPACING.LG }}>
            <label
              className="block text-caption font-medium text-gray-700"
              htmlFor="consultation-name"
            >
              Full name
            </label>
            <input
              id="consultation-name"
              placeholder="Your full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              disabled={disabled || internalLoading}
              required
              style={{ border: "1px solid #E1E7EF" }}
              className="mt-3 block w-full h-10 px-3 rounded-md box-border shadow-none focus:border-[#A1A1A1] focus:shadow-[0px_2px_2px_0px_#00000040]"
            />
          </div>

          <div style={{ marginTop: SPACING.LG }}>
            <label
              className="block text-caption font-medium"
              htmlFor="consultation-email"
            >
              Email
            </label>
            <input
              id="consultation-email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={disabled || internalLoading}
              required
              type="email"
              style={{ border: "1px solid #E1E7EF" }}
              className="mt-3 block w-full h-10 px-3 rounded-md box-border shadow-none focus:border-[#A1A1A1] focus:shadow-[0px_2px_2px_0px_#00000040]"
            />
          </div>
          <div style={{ marginTop: SPACING.LG }}>
            {successMessage && (
              <p className="text-caption text-green-700 mb-2">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-caption text-red-600 mb-2">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={isDisabled || !isFormValid}
              aria-disabled={isDisabled || !isFormValid}
              style={{
                height: SIZES.BUTTON_HEIGHT,
                ...(isDisabled || !isFormValid
                  ? { background: "#A1A1AA" }
                  : {}),
              }}
              className={`inline-flex w-full items-center justify-center px-5 py-2 border border-transparent text-btn-lg font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 transition duration-200 ease-in-out ${
                isDisabled || !isFormValid
                  ? "text-muted-700 cursor-not-allowed focus:ring-gray-400"
                  : "bg-consult-gradient hover:opacity-95 focus:ring-green-500 text-white hover:shadow-consult-hover"
              }`}
            >
              {internalLoading ? "Scheduling..." : "Schedule Consultation"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ScheduleConsultation;
