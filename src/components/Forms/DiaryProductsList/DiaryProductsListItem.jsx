import main from '../../App.module.css';

export const DiaryProductsListItem = ({ productId, productName, grams }) => {
    return (
        <div className={main.row}>
            <div style={{ position: 'relative', width:"45%" }}>
                <label className={main.label}>
                    <input type="text" name="" defaultValue={productName} style={{color:"var(--black)"}} disabled="disabled" />
                </label>
            </div>
            <div style={{position:"relative", width:"55%" ,display:"flex",gap:"50px"}}>
                <label className={main.label} style={{width:"30%",textAlign:"end"}}>
                    <input type="text" name="" defaultValue={`${grams}g`} style={{color:"var(--black)",width:"85%",textAlign:"end"}} autoComplete="grams" />
                </label>
                <div style={{position:"relative", display:"flex", gap:"20px"}}>
                <label className={main.label} style={{width:"30%",textAlign:"end"}}>
                    <input type="text" name="" defaultValue={`${grams}kcal`} style={{color:"var(--black)",width:"100%",textAlign:"end"}} disabled="disabled" />
                </label>
                <div style={{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",width:"5%"}}>
                    <img src={require("../../../images/remove.png")} alt="add button" />
                </div>
                </div>
            </div>

            
        </div>
    )
}