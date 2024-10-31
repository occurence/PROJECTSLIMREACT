import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCalendar, setMonth, setYear, setDay } from '../../redux/calendar/calendarSlice';
import { useToday } from '../../hooks/useToday';
import main from '../App.module.css';

export const DiaryDateCalendar = () => {
    const dispatch = useDispatch();
    const { calendar, month, year, day } = useToday();
    const today = new Date(month);
    const dateMonth = new Date(month);
    const dateYear = new Date(year);
    const dateDay = new Date(day);
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));
    const [inDateMonth, setInDateMonth] = useState(dateMonth.toLocaleDateString('en-CA'));
    const [inDateYear, setInDateYear] = useState(dateYear.toLocaleDateString('en-CA'));
    const [inDateDay, setInDateDay] = useState(dateDay.toLocaleDateString('en-CA'));


    const handleCalendarChange = e => {
        // dispatch(setCalendar(e.target.value));
        // dispatch(setMonth(e.target.value));
        // dispatch(setYear(e.target.value));
        // dispatch(setDay(e.target.value));
        // alert(dateMonth);
        // alert(dateYear);
        // alert(dateYear);
        // alert(calendar.month);

        dispatch(setCalendar({
            month: e.target.value,
            year: e.target.value,
            day: e.target.value,
        }));
    // alert(month);
    // alert(year);
    // alert(day);
    }

    return (
        <>
            <label className={main.label}>
                {/* <input type="date" name="date" onChange={(e) => {setDate(e);setCalendar();}} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} /> */}
                {/* <input type="date" name="date" onChange={(e) => {setDate(e);setCalendar();}} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} /> */}
                {/* <input type="date" name="date" defaultValue={dateMonth.toString()} autoComplete="date" className={main.calendarLabel} /> */}
                {/* <input type="date" name="date" onChange={handleCalendarChange} defaultValue={inDateMonth.toString()} autoComplete="date" className={main.calendarLabel} /> */}
                {/* <input type="date" name="date" onChange={handleCalendarChange} defaultValue={inDateMonth.toString()} autoComplete="date" className={main.calendarLabel} /> */}
                <input type="date" name="date" onChange={handleCalendarChange} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} />
            </label>
        </>
        )
}