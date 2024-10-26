import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';

const RegisterPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Register</title>
            </Helmet>
            {isLoggedIn ? <div>Logged In Register</div> : <div>Logged Out Register</div>}
        </HelmetProvider>
    )
};

export default RegisterPage;