import { DiaryProductsListItem } from './DiaryProductsListItem';
import { useToday } from '../../../hooks/useToday';


export const DiaryProductsList = () => {
    const { filteredTodays } = useToday();
    return (
        <>
                {filteredTodays.map(({ productId, productName, grams }) => 
                    <DiaryProductsListItem
                        productId={productId}
                        productName={productName}
                        grams={grams}
                        />
                )}
        </>
    )
}