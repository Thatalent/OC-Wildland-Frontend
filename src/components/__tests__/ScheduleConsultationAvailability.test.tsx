import { render, waitFor } from '@testing-library/react';
import { vi, describe, beforeEach, afterEach, test, expect } from 'vitest';

// minimal mocks for MUI DatePicker/LocalizationProvider used by the component
vi.mock('@mui/x-date-pickers/DatePicker', () => ({
  __esModule: true,
  DatePicker: (props: any) => <input data-testid="mock-datepicker" {...props} />,
}));
vi.mock('@mui/x-date-pickers/LocalizationProvider', () => ({
  __esModule: true,
  LocalizationProvider: ({ children }: any) => <div>{children}</div>,
}));

import ScheduleConsultation from '../ScheduleConsultation';

describe('ScheduleConsultation availability wiring', () => {
  beforeEach(() => {
    // @ts-ignore
    global.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: {} }) }));
  });

  afterEach(() => {
    vi.restoreAllMocks();
    // @ts-ignore
    delete global.fetch;
  });

  test('calls consultationsAvailability on mount', async () => {
    render(<ScheduleConsultation />);
    await waitFor(() => {
      // @ts-ignore
      expect(global.fetch).toHaveBeenCalled();
      // ensure the consultationsAvailability operation is requested
      // @ts-ignore
      const body = JSON.parse(global.fetch.mock.calls[0][1].body);
      expect(body.query).toContain('consultationsAvailability');
    });
  });
});
