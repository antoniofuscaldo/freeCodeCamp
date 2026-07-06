import { describe, expect, it } from 'vitest';

import { medicationReminder } from '../2026-05-08.js';

describe('medicationReminder', () => {
  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "10:00"]], "11:00") should return "Debuggamanizole in 2h 0m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '07:00'],
          ['Mergeflictamine', '10:00'],
        ],
        '11:00',
      ),
    ).toEqual('Debuggamanizole in 2h 0m');
  });

  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "14:55") should return "Deployxitrin in 1h 5m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '13:00'],
          ['Mergeflictamine', '14:00'],
        ],
        '14:55',
      ),
    ).toEqual('Deployxitrin in 1h 5m');
  });

  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "13:00"], ["Mergeflictamine", "14:00"]], "17:15") should return "Mergeflictamine in 0h 45m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '13:00'],
          ['Mergeflictamine', '14:00'],
        ],
        '17:15',
      ),
    ).toEqual('Mergeflictamine in 0h 45m');
  });

  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "09:00"]], "12:59") should return "Debuggamanizole in 0h 1m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '07:00'],
          ['Mergeflictamine', '09:00'],
        ],
        '12:59',
      ),
    ).toEqual('Debuggamanizole in 0h 1m');
  });

  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "21:00"], ["Mergeflictamine", "03:00"]], "06:55") should return "Debuggamanizole in 0h 5m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '21:00'],
          ['Mergeflictamine', '03:00'],
        ],
        '06:55',
      ),
    ).toEqual('Debuggamanizole in 0h 5m');
  });

  it('medicationReminder([["Deployxitrin", "08:00"], ["Debuggamanizole", "07:00"], ["Mergeflictamine", "07:30"]], "08:00") should return "Mergeflictamine in 3h 30m"', () => {
    expect(
      medicationReminder(
        [
          ['Deployxitrin', '08:00'],
          ['Debuggamanizole', '07:00'],
          ['Mergeflictamine', '07:30'],
        ],
        '08:00',
      ),
    ).toEqual('Mergeflictamine in 3h 30m');
  });
});
