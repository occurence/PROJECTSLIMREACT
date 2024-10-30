import { useState } from 'react';
import main from '../App.module.css';

export const DiaryDateCalendar = () => {
    const today = new Date();
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));
    return (
        <label className={main.label}>
            <input type="date" name="date" defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} />
        </label>
        )
}