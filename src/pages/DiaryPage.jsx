import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../../hooks/useUser';

const DiaryPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Diary</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    Logged In Diary
                </> : 
                <>
                    Logged Out Diary
                </>}
        </HelmetProvider>
    )
};

export default DiaryPage;