import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { setCalendar, setMonth, setYear, setDay } from '../../redux/calendar/calendarSlice';
import { setCalendar } from '../../redux/calendar/calendarSlice';
import { useToday } from '../../hooks/useToday';
import main from '../App.module.css';

export const DiaryDateCalendar = () => {
    const dispatch = useDispatch();
    // const { calendar, month, year, day } = useToday();
    const { month, defaultDate } = useToday();
    const today = new Date(month);
    
    // const today = new Date('10/28/2024');
    // const date = useState(today.toLocaleDateString('en-CA'));
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));
    // alert(`month: ${month}, today: ${today}, date: ${date}`);
    // console.log(`month: ${month},\ntoday: ${today},\ndate: ${date},\ndate: ${date.toString()},\nCA: ${today.toLocaleDateString('en-CA')}`);
    const handleCalendarChange = e => {
        const date = new Date(e.target.value);
        const formatDefault = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const formatMonth = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        const formatYear = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        const formatDay = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;

        dispatch(setCalendar({
            default: formatDefault,
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