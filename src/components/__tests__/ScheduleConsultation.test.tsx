import { vi, describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

// Mock MUI DatePicker and LocalizationProvider to keep the test focused on
// the preferred-time buttons behavior and avoid heavy MUI internals.
vi.mock('@mui/x-date-pickers/DatePicker', () => ({
  __esModule: true,
  DatePicker: (props: any) => <input data-testid="mock-datepicker" {...props} />,
}));
vi.mock('@mui/x-date-pickers/LocalizationProvider', () => ({
  __esModule: true,
  LocalizationProvider: ({ children }: any) => <div>{children}</div>,
}));

import ScheduleConsultation from '../ScheduleConsultation';

describe('ScheduleConsultation', () => {
  test('greys out booked time when backend returns "9:00 AM"', () => {
    render(<ScheduleConsultation bookedTimes={["9:00 AM"]} />);
    const btn = screen.queryByRole('radio', { name: /9:00 AM/i });
    // booked times are hidden from the UI
    expect(btn).toBeNull();
  });

  test('greys out booked time when backend returns "9 AM" (normalized)', () => {
    render(<ScheduleConsultation bookedTimes={["9 AM"]} />);
    const btn = screen.queryByRole('radio', { name: /9:00 AM/i });
    // booked times are hidden from the UI
    expect(btn).toBeNull();
  });
});
