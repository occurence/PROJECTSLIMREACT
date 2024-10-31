import { useState } from 'react';
import { setCalendar } from '../../redux/calendar/calendarSlice';
import main from '../App.module.css';

export const DiaryDateCalendar = () => {
    const today = new Date();
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));
    return (
        <label className={main.label}>
            {/* <input type="date" name="date" onChange={(e) => {setDate(e);setCalendar();}} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} /> */}
            <input type="date" name="date" onChange={(e) => {setDate(e);setCalendar();}} defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} />
        </label>
        )
}