// @flow

// returns a date object for a given number of days in the past
export function daysAgo(numDays: number): Date {
  return new Date(new Date() - 1000 * 60 * 60 * 24 * numDays);
}
// returns a new date object set to the beginning of a given date
export function startOf(date: Date): Date {
  const newDate = new Date(date);
  newDate.setHours(0, 0, 0, 0);
  return newDate;
}

// returns a new date object set to the end of a given date
export function endOf(date: Date): Date {
  const newDate = new Date(date);
  newDate.setHours(23, 59, 59, 999);
  return newDate;
}

export function isBetween(time: number, minTime: number, maxTime: number): boolean {
  return time >= minTime && time <= maxTime;
}
