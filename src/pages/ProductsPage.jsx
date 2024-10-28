import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';
import { DailyCaloriesForm } from '../components/Forms/DailyCaloriesForm';
import main from '../components/App.module.css';

const ProductsPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Products</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    <div className={main.left}>
                        <DailyCaloriesForm />
                    </div>
                    <div className={main.right}>
                    </div>
                </> : 
                <>
                    Logged Out Products
                </>}
        </HelmetProvider>
    )
};

export default ProductsPage;