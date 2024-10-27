import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import main from '../App.module.css';

export const DailyCaloriesForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        form.reset();
      };
    return !isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                <div>
                    <button type="submit">Start losing weight</button>
                </div>
            </form>
        </>
};