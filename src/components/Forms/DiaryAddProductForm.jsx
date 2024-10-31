import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import { setFilter } from '../../redux/filter/filterSlice';
import { useUser } from '../../hooks/useUser';
import { useProduct } from '../../hooks/useProduct';
import { DiaryDateCalendar } from './DiaryDateCalendar';
import main from '../App.module.css';

import { DiaryProductsList } from './DiaryProductsList/DiaryProductsList';

export const DairyAddProductForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const { isLoadingProducts, isErrorProducts, filteredProducts } = useProduct();
    const [productInput, setProductInput] = useState('');
    const [isDropdown, setIsDropdown] = useState(false);

    const handleFilterChange = e => {
        setProductInput(e.target.value);
        dispatch(setFilter(e.target.value));
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        setProductInput('');
        dispatch(setFilter(''));
        setIsDropdown(false);
        form.reset();
    }

    const handleDropdown = e => {
        setProductInput(e);
        dispatch(setFilter(e));
        setIsDropdown(false);
    }

    return isLoggedIn &&
        <>
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                <DiaryDateCalendar />
                <div className={main.row}>
                    <div style={{ position: 'relative', width:"70%" }}>
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
                                        onClick={() => {handleDropdown(filteredProduct.title);setIsDropdown(!isDropdown)}}
                                    >
                                        {filteredProduct.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div style={{position:"relative",display:"flex",gap:"50px"}}>
                        <label className={main.label} style={{width:"30%",textAlign:"end"}}>Grams
                            <input type="number" step="100" min="0" style={{width:"85%"}} name="grams" autoComplete="grams" />
                        </label>
                        <button type="submit" className={main.add}>
                            <img src={require("../../images/insert.png")} alt="add button" />
                        </button>
                    </div>
                </div>
                <DiaryProductsList />
            </form>
        </>
};