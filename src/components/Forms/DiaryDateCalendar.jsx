import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCalendar, setMonth, setYear, setDay } from '../../redux/calendar/calendarSlice';
import { useToday } from '../../hooks/useToday';
import main from '../App.module.css';

export const DiaryDateCalendar = () => {
    const dispatch = useDispatch();
    const { calendar, month, year, day } = useToday();
    const today = new Date(month);
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));

    const handleCalendarChange = e => {
        const date = new Date(e.target.value);
        const formatMonth = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const formatYear = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const formatDay = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

        dispatch(setCalendar({
            month: formatMonth,
            year: formatYear,
            day: formatDay,
        }));
    }

    return (
        <>
            <label className={main.label}>
                <input type="date" name="date" onChange={handleCalendarChange} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} />
            </label>
        </>
    )
}