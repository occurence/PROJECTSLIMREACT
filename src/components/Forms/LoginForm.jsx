import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { logIn } from '../../redux/user/userOperations';
import main from '../App.module.css';

export const LoginForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            logIn({
            email: form.elements.email.value,
            password: form.elements.password.value,
          })
        );
        form.reset();
      };
    return !isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={main.label} style={{color:"var(--orange)",height:"2em"}}>LOG IN</label>
                <label className={main.label}>Email *
                    <input type="email" name="email" />
                </label>
                <label className={main.label}>Password *
                    <input type="password" name="password" />
                </label>
                <div>
                    <button type="submit">Log in</button>
                    <Link to="/register">Register</Link>
                </div>
            </form>
        </>
};