import dayjs from 'dayjs';
import { TDate } from '..//types';

export const getDateDiff = (startDate: TDate, endDate: TDate) => {
  const now = dayjs();
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  if (now > end) {
    return `${start.format('YYYY.MM.DD')} ~ ${end.format('YYYY.MM.DD')}`;
  } else {
    return `${end.format('YYYY.MM.DD')} 까지 투표 가능`;
  }
};
