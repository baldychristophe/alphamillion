import { DateTime } from 'luxon'

export function formattedDate (date) {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
}

export function drawAgoText (num) {
  return `${num} ${num === 1 ? 'draw' : 'draws'} ago`
}
