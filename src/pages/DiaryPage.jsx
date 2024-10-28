import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { DairyAddProductForm } from '../components/Forms/DiaryAddProductForm';
import { RightSideBar } from '../components/Layout/RightSideBar';
import main from '../components/App.module.css';

const DiaryPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Diary</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    <div className={main.left}>
                        <DairyAddProductForm />
                    </div>
                    <div className={main.right}>
                        <RightSideBar />
                    </div>
                    <img src={require("../images/leaveshalf.png")} className={main.backgroundHalf} />
                </> : 
                <>
                    Logged Out Calculator
                </>}
        </HelmetProvider>
    )
};

export default DiaryPage;