import { useSelector } from 'react-redux';
import {selectProducts, selectIsLoadingProducts, selectIsErrorProducts, selectFilteredProducts } from '../redux/product/productsSelectors';

export const useProduct = () => {
    const isLoadingProducts = useSelector(selectIsLoadingProducts);
    const isErrorProducts = useSelector(selectIsErrorProducts);
    const products = useSelector(selectProducts);
    const filteredProducts = useSelector(selectFilteredProducts);

  return {
    isLoadingProducts,
    isErrorProducts,
    products,
    filteredProducts,
  };
};