import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';

const CalculatorPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Calculator</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    Logged In Calculator
                </> : 
                <>
                    Logged Out Calculator
                </>}
        </HelmetProvider>
    )
};

export default CalculatorPage;