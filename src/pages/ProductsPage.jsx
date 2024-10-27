import { Helmet, HelmetProvider } from "react-helmet-async";
import { useUser } from '../hooks/useUser';

const ProductsPage = () => {
    const { isLoggedIn } = useUser();
    return(
        <HelmetProvider>
            <Helmet>
                <title>Products</title>
            </Helmet>
            {isLoggedIn ? 
                <>
                    Logged In Products
                </> : 
                <>
                    Logged Out Products
                </>}
        </HelmetProvider>
    )
};

export default ProductsPage;