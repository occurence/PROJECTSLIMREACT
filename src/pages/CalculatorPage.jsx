import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { CalculatorCalorieForm } from '../components/Forms/CalculatorCalorieForm';
import { RightSideBar } from '../components/Layout/RightSideBar';
import main from '../components/App.module.css';

const CalculatorPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Calculator</title>
            </Helmet>
            {isLoggedIn &&
                (<>
                    <div className={main.left}>
                        <CalculatorCalorieForm />
                    </div>
                    <div className={main.right}>
                        <RightSideBar />
                    </div>
                    <img src={require("../images/leaveshalf.png")} alt="background leaves" className={main.backgroundHalf} />
                </>)
            }
        </HelmetProvider>
    )
};

export default CalculatorPage;