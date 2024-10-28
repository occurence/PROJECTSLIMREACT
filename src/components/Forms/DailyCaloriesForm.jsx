import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import { update } from '../../redux/user/userOperations';
import main from '../App.module.css';

export const DailyCaloriesForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            update({
              height: form.elements.height.value,
              age: form.elements.age.value,
              weight: form.elements.weight.value,
              blood: form.elements.blood.value,
              desired: form.elements.desired.value,
            })
          );
        form.reset();
      };
    return !isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                {/* <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>PUBLIC DAILY CALORIES FORM</label> */}
                <label className={main.label} style={{color:"var(--black)",height:"2em",fontSize:"34px",paddingTop:"80px",paddingBottom:"40px"}}>Calculate your daily calorie<br />intake right now</label>
                <div className={main.row}>
                    <label className={main.label}>Height *
                        <input type="number" name="height" autoComplete="height" />
                    </label>
                    <label className={main.label}>Desired weight *
                        <input type="number" name="desired" autoComplete="desired" />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Age *
                        <input type="number" name="age" autoComplete="age" />
                    </label>
                    <label className={main.label}>Blood type *
                        <input type="text" name="blood" autoComplete="blood" />
                    </label>
                </div>
                <div className={main.row}>
                    <label className={main.label}>Current weight *
                        <input type="number" name="weight" autoComplete="weight" />
                    </label>
                    <div className={main.radio}>
                        <div className={main.radioItem}><input type="radio" name="option" value="o" defaultChecked={true} /><label className={main.radioLabel}>O</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="a" /><label className={main.radioLabel}>A</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="b" /><label className={main.radioLabel}>B</label></div>
                        <div className={main.radioItem}><input type="radio" name="option" value="ab" /><label className={main.radioLabel}>AB</label></div>
                    </div>
                </div>
                <div className={main.weightWrapper}>
                    <button type="submit" id={main.weight}>Start losing weight</button>
                </div>
            </form>
        </>
};