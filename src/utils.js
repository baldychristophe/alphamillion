import { DateTime } from 'luxon'

export function formattedDate (date) {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
}
