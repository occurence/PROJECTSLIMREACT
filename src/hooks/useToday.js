import { useSelector } from 'react-redux';
import { selectTodays, selectIsLoadingTodays, selectIsErrorTodays, selectFilteredTodays } from '../redux/today/todaysSelectors';
import { selectCalendar, selectDefault, selectMonth, selectYear, selectDay } from '../redux/calendar/calendarSelectors';

export const useToday = () => {
    const isLoadingTodays = useSelector(selectIsLoadingTodays);
    const isErrorTodays= useSelector(selectIsErrorTodays);
    const todays = useSelector(selectTodays);
    const filteredTodays = useSelector(selectFilteredTodays);
    const calendar = useSelector(selectCalendar);
    const defaultDate = useSelector(selectDefault);
    const month = useSelector(selectMonth);
    const year = useSelector(selectYear);
    const day = useSelector(selectDay);

  return {
    isLoadingTodays,
    isErrorTodays,
    todays,
    filteredTodays,
    calendar,
    defaultDate,
    month,
    year,
    day,
  };
};