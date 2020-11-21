import { DateTime } from 'luxon'

export function formattedDate (date) {
  return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
}

export function drawAgoText (num) {
  return `${num} ${num === 1 ? 'draw' : 'draws'} ago`
}

export function backgroundColorGradientOccurrence (ballOccurrence, expectedOccurrence) {
  const diff = ballOccurrence / expectedOccurrence
  if (diff === 1) {
    return ''
  } else if (diff > 1 && diff <= 1.05) {
    return 'bg-green-3'
  } else if (diff > 1.05 && diff <= 1.10) {
    return 'bg-green-2'
  } else if (diff > 1.10 && diff <= 1.20) {
    return 'bg-green-1'
  } else if (diff > 1.20) {
    return 'bg-green-0'
  } else if (diff < 1 && diff >= 0.95) {
    return 'bg-red-3'
  } else if (diff < 0.95 && diff >= 0.90) {
    return 'bg-red-0'
  } else if (diff < 0.90 && diff >= 0.80) {
    return 'bg-red-0'
  } else if (diff < 0.80) {
    return 'bg-red-0'
  }
  return ''
}

export function backgroundColorGradientDrawGap (ballLastDraw, expectedDrawGap) {
  const diff = ballLastDraw - expectedDrawGap
  if (diff === 0) {
    return ''
  } else if (diff > 0 && diff <= 5) {
    return 'bg-green-3'
  } else if (diff > 5 && diff <= 10) {
    return 'bg-green-2'
  } else if (diff > 10 && diff <= 20) {
    return 'bg-green-1'
  } else if (diff > 20) {
    return 'bg-green-0'
  } else if (diff < 0 && diff >= -2) {
    return 'bg-red-3'
  } else if (diff < -2 && diff >= -5) {
    return 'bg-red-2'
  } else if (diff < -5 && diff >= -8) {
    return 'bg-red-1'
  } else if (diff < -8) {
    return 'bg-red-0'
  }
  return ''
}
