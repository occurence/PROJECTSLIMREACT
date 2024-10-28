import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import main from '../App.module.css';

export const DairyAddProductForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    // const today = new Date().toDateString();
    // const [date, setDate] = useState(today);
    const today = new Date();
    // const [date, setDate] = useState(today.toISOString());
    const [date, setDate] = useState(today.toLocaleDateString('en-CA'));

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
      };
    return isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                {/* <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>ADD PRODUCT</label> */}
                <label className={main.label}>
                    <input type="date" name="date" defaultValue={date.toString()} autoComplete="date" className={main.calendarLabel} />
                </label>
                <div className={main.row}>
                    <label className={main.label}>Enter product name
                        <input type="text" name="product" autoComplete="product" />
                    </label>
                    <div style={{position:"relative",display:"flex",gap:"80px"}}>
                        <label className={main.label} style={{width:"30%",textAlign:"end"}}>Grams
                            <input type="number" style={{width:"85%"}} name="grams" autoComplete="grams" />
                        </label>
                        <button type="submit" className={main.add}>
                            <img src={require("../../images/insert.png")} />
                        </button>
                    </div>
                </div>
            </form>
        </>
};