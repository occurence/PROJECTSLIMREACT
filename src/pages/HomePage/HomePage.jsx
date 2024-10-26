import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';
import main from '../../components/App.module.css';

const HomePage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Home</title>
            </Helmet>
            {!isLoggedIn &&
                <>
                    <div className={main.left}>LEFT</div>
                    {/* <div className={main.right}>RIGHT</div> */}
                    <img src={require("../../images/backgroundwhole.png")} className={main.backgroundWhole} />
                </>}
        </HelmetProvider>
    )
};

export default HomePage;