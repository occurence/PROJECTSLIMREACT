import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { LoginForm } from '../components/Forms/LoginForm';
import main from '../components/App.module.css';

const LoginPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    Logged In Login
                </> : 
                <>
                    <div className={main.left}>LEFT
                        <LoginForm />
                    </div>
                    <img src={require("../images/backgroundwhole.png")} className={main.backgroundWhole} />
                </>}
            
        </HelmetProvider>
    )
};

export default LoginPage;