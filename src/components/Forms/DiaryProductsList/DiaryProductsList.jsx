import { DiaryProductsListItem } from './DiaryProductsListItem';
import { useToday } from '../../../hooks/useToday';


export const DiaryProductsList = () => {
    const { filteredTodays } = useToday();
    return (
        <div>DiaryProductsList
            <DiaryProductsListItem />
            <ul>
                {filteredTodays.map(({productId, productName, grams}) => 
                    <li key={productId}>{productName}: {grams}</li>
                )}
            </ul>
        </div>
    )
}