import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import main from '../App.module.css';

export const DairyAddProductForm = () => {
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
                    <button type="submit">Add</button>
                </div>
            </form>
        </>
};