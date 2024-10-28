import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { RegistrationForm } from '../components/Forms/RegistrationForm';
import main from '../components/App.module.css';

const RegisterPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Register</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    Logged In Register
                </> : 
                <>
                    <div className={main.left}>
                        <RegistrationForm />
                    </div>
                    <img src={require("../images/backgroundwhole.png")} className={main.backgroundWhole} />
                </>}
        </HelmetProvider>
    )
};

export default RegisterPage;