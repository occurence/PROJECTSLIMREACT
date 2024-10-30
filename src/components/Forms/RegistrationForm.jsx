import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signUp } from '../../redux/user/userOperations';
import main from '../App.module.css';

export const RegistrationForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoggedIn } = useUser();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            signUp({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
            })
        ).unwrap();
        navigate('/login');
        form.reset();
      };
    return !isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>REGISTER</label>
                <label className={main.label}>Name *
                    <input type="text" name="name" autoComplete="name" required
                    pattern="/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/" />
                </label>
                <label className={main.label}>Email *
                    <input type="email" name="email" autoComplete="email" required
                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" />
                </label>
                <label className={main.label}>Password *
                    <input type="password" name="password" autoComplete="new-password" required />
                </label>
                <div className={main.auth}>
                    <button type="submit">Register</button>
                    <Link to="/login" className={main.redirect}>Log in</Link>
                </div>
            </form>
        </>
};