import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, describe, test, expect } from 'vitest';

// Mock MUI DatePicker and LocalizationProvider to keep tests focused
vi.mock('@mui/x-date-pickers/DatePicker', () => ({
  __esModule: true,
  DatePicker: (props: any) => <input data-testid="mock-datepicker" {...props} />,
}));
vi.mock('@mui/x-date-pickers/LocalizationProvider', () => ({
  __esModule: true,
  LocalizationProvider: ({ children }: any) => <div>{children}</div>,
}));

import ScheduleConsultation from '../ScheduleConsultation';

describe('ScheduleConsultation keyboard navigation', () => {
  test('arrow keys move focus and selection within the time grid', async () => {
    const user = userEvent.setup();

    // Provide bookedTimes as an empty array so availabilityFetched becomes true
    render(<ScheduleConsultation bookedTimes={[]} />);

    const buttons = await screen.findAllByRole('radio');
    expect(buttons.length).toBeGreaterThanOrEqual(4);

    // Focus the first button
    const first = buttons[0] as HTMLButtonElement;
    first.focus();
    expect(document.activeElement).toBe(first);

    // Press ArrowRight -> should move to index 1
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(buttons[1]);
    // the component also selects the focused option
    expect(buttons[1].getAttribute('aria-checked')).toBe('true');

    // Press ArrowDown -> should move two rows down (index + 2)
    await user.keyboard('{ArrowDown}');
    const expectedIndex = 1 + 2; // starting from index 1
    if (expectedIndex < buttons.length) {
      expect(document.activeElement).toBe(buttons[expectedIndex]);
      expect(buttons[expectedIndex].getAttribute('aria-checked')).toBe('true');
    }
  });
});
