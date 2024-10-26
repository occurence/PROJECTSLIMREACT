import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';

const LoginPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Login</title>
            </Helmet>
            {!isLoggedIn && <div>Logged In Login</div>}
        </HelmetProvider>
    )
};

export default LoginPage;