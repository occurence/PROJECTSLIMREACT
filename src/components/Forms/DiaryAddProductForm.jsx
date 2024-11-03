import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { setFilter } from '../../redux/filter/filterSlice';
import { useUser } from '../../hooks/useUser';
import { useProduct } from '../../hooks/useProduct';
import { useToday } from '../../hooks/useToday';
import { DiaryDateCalendar } from './DiaryDateCalendar';
import main from '../App.module.css';

import { DiaryProductsList } from './DiaryProductsList/DiaryProductsList';
import { consumeProduct } from '../../redux/today/todaysOperations';

export const DairyAddProductForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const { isLoadingProducts, isErrorProducts, filteredProducts } = useProduct();
    const [productInput, setProductInput] = useState('');
    const [isDropdown, setIsDropdown] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const { defaultDate, year } = useToday();
    // console.log(filteredProducts.length);
    const handleFilterChange = e => {
        setProductInput(e.target.value);
        dispatch(setFilter(e.target.value));
        // const inputValue = e.target.value;
        // const inputFormat = inputValue
        // .replace("(", "\\\\(?")
        // .replace(")", "\\\\)?")
        // if (inputValue.includes("(")) {inputFormat += "\\s*\\(?";}
        // else if (inputValue.includes(")")) {inputFormat += "\\)?";}
        // + (inputValue.includes("(") ? "\\\\(?" : "") 
        // + (inputValue.includes(")") ? "\\)?" : "");
        // + (inputValue.includes("(") ? "\\\\(?" : "") 
        // + (inputValue.includes(")") ? "\\)?" : "");
        // console.log(inputFormat)
        // let formatInput;
        // if(e.target.value.includes("(")){formatInput="\\(?"}
        // else if(e.target.value.includes(")")){formatInput="\\)?"}
        // console.log(formatInput);
        // const formatInput = e.target.value.includes("(") && "\\(?";
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const productName = form.elements.product.value;
        const grams = form.elements.grams.value;
        const formattedDate = new Date(defaultDate).toLocaleDateString('en-CA').split('T')[0];
        // alert(productName, grams);
        // console.log(`${productName}: ${grams}`);
        console.log(`${formattedDate},${productName}: ${grams}, Product ID: ${selectedProductId}`);
        
        dispatch(consumeProduct({
            todayDate: defaultDate,
            // products: [{
            // productId: selectedProductId,
            productId: selectedProductId,
            productName,
            grams
            // }]
        }));
        // dispatch(consumeProduct({
        //     todayDate: formattedDate,
        //     body: {
        //         products: [{
        //             productId: selectedProductId,
        //             productName,
        //             grams
        //         }]
        //     }
        // }));
        setSelectedProductId(null);
        setProductInput('');
        dispatch(setFilter(''));
        setIsDropdown(false);
        form.reset();
    }

    // const handleDropdown = e => {
    //     setProductInput(e);
    //     dispatch(setFilter(e));
    //     setIsDropdown(false);
    //     const inputFormat = e
    //     .replace("(", "\\\\(?")
    //     .replace(")", "\\\\)?")
    //     console.log(inputFormat);
    // }

    const handleDropdown = (title, id) => {
        setSelectedProductId(id);
        setProductInput(title);
        dispatch(setFilter(title));
        setIsDropdown(false);
        const inputFormat = title
        .replace("(", "\\\\(?")
        .replace(")", "\\\\)?")
        console.log(inputFormat);
        console.log(`Product ID: ${id}`);
    }
    
    return isLoggedIn &&
        <>
            <form className={main.form} style={{left:"25px",height:"70%",gap:"5px"}} onSubmit={handleSubmit} autoComplete="off">
                <DiaryDateCalendar />
                <div className={main.row}>
                    <div style={{ position: 'relative', width:"45%" }}>
                        <label className={main.label}>Enter product name
                            <DebounceInput type="text" name="product"
                                value={productInput}
                                onChange={handleFilterChange}
                                onClick={() => {setIsDropdown(!isDropdown)}}
                                autoComplete="off"
                            />
                        </label>
                        {isDropdown && !isLoadingProducts && !isErrorProducts && filteredProducts.length > 0 && (
                            <ul className={main.dropdown}>
                                {filteredProducts.map((filteredProduct) => (
                                    <li className={main.dropdownItem}
                                        key={filteredProduct._id}
                                        // onClick={() => {handleDropdown(filteredProduct.title);setIsDropdown(!isDropdown)}}
                                        onClick={() => { handleDropdown(filteredProduct.title, filteredProduct._id) }}
                                    >
                                        {filteredProduct.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div style={{position:"relative", width:"55%" ,display:"flex",gap:"50px"}}>
                        <label className={main.label} style={{width:"30%",textAlign:"end"}}>Grams
                            <input type="number" step="100" min="0" style={{width:"85%"}} name="grams" autoComplete="grams" />
                        </label>
                        <button type="submit" className={main.add}>
                            <img src={require("../../images/insert.png")} alt="add button" />
                        </button>
                    </div>
                </div>
                <div style={{paddingTop:"30px"}}>
                    <DiaryProductsList />
                </div>
            </form>
        </>
};