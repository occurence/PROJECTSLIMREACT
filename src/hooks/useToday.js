import { useSelector } from 'react-redux';
import { selectTodays, selectIsLoadingTodays, selectIsErrorTodays } from '../redux/today/todaysSelectors';
import { selectCalendar, selectMonth, selectYear, selectDay } from '../redux/calendar/calendarSelectors';

export const useToday = () => {
    const isLoadingTodays = useSelector(selectIsLoadingTodays);
    const isErrorTodays= useSelector(selectIsErrorTodays);
    const todays = useSelector(selectTodays);
    const calendar = useSelector(selectCalendar);
    const month = useSelector(selectMonth);
    const year = useSelector(selectYear);
    const day = useSelector(selectDay);

  return {
    isLoadingTodays,
    isErrorTodays,
    todays,
    calendar,
    month,
    year,
    day,
  };
};