import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useUser } from '../../hooks/useUser';
import { useProduct } from '../../hooks/useProduct';
import main from '../App.module.css';
import { DiaryDateCalendar } from './DiaryDateCalendar';
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'
import { fetchProducts } from '../../redux/product/productsOperations';
import { useSelector } from 'react-redux';
import {selectProduct } from '../../redux/product/productsSelectors';
import { selectFilter } from '../../redux/filter/filterSelector';
import { setFilter } from '../../redux/filter/filterSlice';

export const DairyAddProductForm = () => {
    const dispatch = useDispatch();
    const { isLoggedIn } = useUser();
    const { products, isLoadingProducts, isErrorProducts, filteredProducts } = useProduct();
    const [inputValue, setInputValue] = useState('');
    // const products = useSelector(selectProduct);

    const filter = useSelector(selectFilter);//getFilter
    const handleFilterChange = e => {
        dispatch(setFilter(e.target.value));
    }
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
    // dispatch(fetchProducts());
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        // alert(products);

        form.reset();
      };

    //   const data = [ 'America', 'India', 'Australia', 'Argentina', 'Ireland', 'Indonesia', 'Iceland', 'Japan' ]
    //   const data = products.title;
    // {products.map((product) => {product.title})}
        // const data = products.map((product) => product.title);
        // const data = filteredProducts.map((filteredProducts) => filteredProducts.title);
        // let data = products.map((product) => product.title);
        // data = filteredProducts.map((filteredProducts) => filteredProducts.title);
        // let data;
        // {!isLoadingProducts && !isErrorProducts && filteredProducts.length > 0 && (
        //     data = filteredProducts.map((filteredProduct) => filteredProduct.title)
        // )}
    return isLoggedIn &&
        <>
            {/* <ul>
                {products.map((product) => <li>{product.title}</li>)}
                {products.map((product) => alert(product.title))}
            </ul> */}
            <form className={main.form} onSubmit={handleSubmit} autoComplete="off">
                {/* <label className={main.label} style={{color:"var(--orange)",height:"4em"}}>ADD PRODUCT</label> */}
                <DiaryDateCalendar />
                <div className={main.row}>
                    {/* <label className={main.label}>Enter product name
                        <input type="text" name="product" autoComplete="product" />
                        <ComboBox selectedOptionColor='#FFEBDC' className={main.combobox} options={data} name="product" enableAutocomplete
                            hightlighColor='#FFEBDC'
                            value={filter}
                            onChange={handleFilterChange}
                            // defaultValue=""
                        />
                    </label> */}
                    <div style={{ position: 'relative' }}>
                        <label className={main.label}>Enter product name
                            <input type="text" name="product" autoComplete="product"
                                value={filter}
                                onChange={handleFilterChange}
                            />
                        </label>
                        { !isLoadingProducts && !isErrorProducts && filteredProducts.length > 0 && (
                            <ul style={{
                                position: 'absolute',
                                backgroundColor: 'white',
                                border: '1px solid #ccc',
                                maxHeight: '150px',
                                overflowY: 'auto',
                                zIndex: 1000,
                            }}>
                                {filteredProducts.map((filteredProduct) => (
                                    <li
                                        // key={index}
                                        // onClick={() => handleOptionClick(filteredProduct.title)}
                                        style={{
                                            padding: '8px',
                                            // cursor: 'pointer',
                                            // backgroundColor: selectedOptionColor, // Highlight selected option color
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFEBDC'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
                                    >
                                        {filteredProduct.title}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div style={{position:"relative",display:"flex",gap:"80px"}}>
                        <label className={main.label} style={{width:"30%",textAlign:"end"}}>Grams
                            <input type="number" step="100" min="0" style={{width:"85%"}} name="grams" autoComplete="grams" />
                        </label>
                        <button type="submit" className={main.add}>
                            <img src={require("../../images/insert.png")} />
                        </button>
                    </div>
                    
                </div>
            </form>
        </>
};