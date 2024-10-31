import { useSelector } from 'react-redux';
import { selectTodays, selectIsLoadingTodays, selectIsErrorTodays, selectFilteredToday } from '../redux/today/todaysSelectors';
import { selectMonth, selectYear, selectDay } from '../redux/calendar/calendarSelectors';

export const useToday = () => {
    const isLoadingTodays = useSelector(selectIsLoadingTodays);
    const isErrorTodays= useSelector(selectIsErrorTodays);
    const todays = useSelector(selectTodays);
    const filteredTodays = useSelector(selectFilteredToday);
    const mmddyyyy = useSelector(selectMonth);
    const yyyymmdd = useSelector(selectYear);
    const ddmmyyyy = useSelector(selectDay);

  return {
    isLoadingTodays,
    isErrorTodays,
    todays,
    filteredTodays,
    mmddyyyy,
    yyyymmdd,
    ddmmyyyy,
  };
};