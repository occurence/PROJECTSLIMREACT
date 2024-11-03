import { useDispatch } from 'react-redux';
import { useToday } from '../../../hooks/useToday';
import { deleteProduct } from '../../../redux/today/todaysOperations'
import main from '../../App.module.css';

export const DiaryProductsListItem = ({ productId, productName, grams }) => {
    const dispatch = useDispatch();
    const { defaultDate } = useToday();

    const handleDelete = (productId, productName, grams) => {
        console.log(`${defaultDate}, ${productId}: ${productName}: ${grams}`);
        dispatch(deleteProduct({
            todayDate: defaultDate,
            productId: productId,
            productName,
            grams,
        }));
    }
    return (
        <div className={main.row}>
            <div style={{ position: 'relative', width:"45%" }}>
                <label className={main.label}>
                    <input type="text" name="name" defaultValue={productName} style={{color:"var(--black)"}} disabled="disabled" />
                </label>
            </div>
            <div style={{position:"relative", width:"55%" ,display:"flex",gap:"50px"}}>
                <label className={main.label} style={{width:"30%",textAlign:"end"}}>
                    <input type="text" name="grams" defaultValue={`${grams}g`} style={{color:"var(--black)",width:"85%",textAlign:"end"}} autoComplete="grams" />
                </label>
                <div style={{position:"relative", display:"flex", gap:"20px"}}>
                <label className={main.label} style={{width:"30%",textAlign:"end"}}>
                    <input type="text" name="" defaultValue={`${grams}kcal`} style={{color:"var(--black)",width:"100%",textAlign:"end"}} disabled="disabled" />
                </label>
                <div onClick={() => {handleDelete(productId, productName, grams)}} style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"start",width:"5%",backgroundColor:"var(--blue)"}}>
                    <img src={require("../../../images/remove.png")} alt="add button" />
                </div>
                </div>
            </div>
        </div>
    )
}