import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { DailyCaloriesForm } from '../components/Forms/DailyCaloriesForm';
import main from '../components/App.module.css';

const HomePage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {!isLoggedIn &&
                (<>
                    <div className={main.left}>
                        <DailyCaloriesForm />
                    </div>
                    <img src={require("../images/backgroundwhole.png")} alt="background whole" className={main.backgroundWhole} />
                </>)
            }
        </HelmetProvider>
    )
};

export default HomePage;