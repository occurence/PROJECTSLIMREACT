import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';

const HomePage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {!isLoggedIn && <div>Logged In HomePage</div>}
        </HelmetProvider>
    )
};

export default HomePage;