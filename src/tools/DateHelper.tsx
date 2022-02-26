import { differenceInDays, formatDistanceStrict } from 'date-fns';

export const getDistance = (d1: Date, d2: Date): string => {
  if (differenceInDays(d1, d2) < -1 || differenceInDays(d1, d2) > 1) {
    return formatDistanceStrict(d1, d2, { unit: 'day' });
  }

  return formatDistanceStrict(d1, d2);
};

export const getMilliSecondsToNextUTCDay = () => {
  const dateLocal = new Date();
  const nowUTC =  Date.UTC(dateLocal.getUTCFullYear(), dateLocal.getUTCMonth(), dateLocal.getUTCDate() + 1, 0, 0, 0);

  return nowUTC - Date.now();
}
