import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import { useToday } from '../../hooks/useToday';
import { addToday } from '../../redux/today/todaysOperations';
import main from '../App.module.css';

export const CalculatorCalorieForm = () => {
    const dispatch = useDispatch();
    const { user, isLoggedIn } = useUser();
    const { year } = useToday();
    const _id = user._id;
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const height = Number(form.elements.height.value);
        const age = Number(form.elements.age.value);
        const weight = Number(form.elements.weight.value);
        const desired = Number(form.elements.desired.value);
        const blood = Number(form.elements.blood.value);
        const intake = 10 * weight + 6.25 * height - 5 * age - 161 - 10 * (desired);
        console.log({
            user: _id,
            date: year,
            height,
            age,
            weight,
            weightDesired: desired,
            blood,
            dailyRate: intake,
        });
        dispatch(
            addToday({
                user: `${_id}`,
                date: `${year}`,
                height: `${height}`,
                age: `${age}`,
                weight: `${weight}`,
                weightDesired: `${desired}`,
                blood: `${blood}`,
                dailyRate: `${intake}`,
            })
        );
        form.reset();
      };
    return isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                {/* <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>PRIVATE CALCULATOR CALORIE FORM</label> */}
                <label className={main.tag}>Calculate your daily calorie<br />intake right now</label>
                <div className={main.row}>
                    <label className={main.label}>Height *
                        <input type="number" name="height" autoComplete="height" required />
                    </label>
                    <label className={main.label}>Desired weight *
                        <input type="number" name="desired" autoComplete="desired" required />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Age *
                        <input type="number" name="age" autoComplete="age" required />
                    </label>
                    <label className={main.label}>Blood type *
                    <input type="text" name="blood" autoComplete="blood" disabled="disabled" />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Current weight *
                        <input type="number" name="weight" autoComplete="weight" required />
                    </label>
                    <div className={main.radio}>
                        <div className={main.radioItem}><input type="radio" name="blood" value="1" defaultChecked={true} /><label className={main.radioLabel}>O</label></div>
                        <div className={main.radioItem}><input type="radio" name="blood" value="2" /><label className={main.radioLabel}>A</label></div>
                        <div className={main.radioItem}><input type="radio" name="blood" value="3" /><label className={main.radioLabel}>B</label></div>
                        <div className={main.radioItem}><input type="radio" name="blood" value="4" /><label className={main.radioLabel}>AB</label></div>
                    </div>
                </div>
                <div className={main.weightWrapper}>
                    <button type="submit" id={main.weight}>Start losing weight</button>
                </div>
            </form>
        </>
};