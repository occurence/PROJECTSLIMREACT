// import { useState } from 'react';
import { DiaryProductsListItem } from './DiaryProductsListItem';
import { useToday } from '../../../hooks/useToday';


export const DiaryProductsList = () => {
    // const { todays } = useToday();
    const { month, year, todays, filteredTodays } = useToday();
    // const { calendar, month, year, day, todays } = useToday();
    // const [products, setProducts] = useState([]);
    // const selectedDate = todays.filter(({ date }) => {
    //     return date;
    // })
    // const x = todays.filter(today => today.date === year);
    // console.log(x.products);
    // console.log(todays);
    // {todays.map((today) => {console.log(today.products)})}
    
    // todays.map((today) => { 
    // console.log(today.products); 
    // });
    // console.log(todays.filter(today => {
    //     const dateString = today.date;
    //     const dateParts = dateString.split('-');
    //     const formattedDate = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
    //     return formattedDate;
    // }));
    // todays.filter(today => today.date === year);
    // console.log(todays.filter(today => today.date === year));
    // console.log(filteredTodays.map(({date}) => {
    //     return {date}
    // }));
    // console.log(todays.length); // Check how many items are in the array
    // console.log(filteredTodays);
    console.log(filteredTodays.map(({productId, productName, grams}) => {
        return `${productName}: ${grams}`}));
    return (
        <div>DiaryProductsList<br />
            year{year}month{month}
            <DiaryProductsListItem />
            <ul>
                {filteredTodays.map(({productId, productName, grams}) => 
                    <li key={productId}>{productName}: {grams}</li>
                )}
            </ul>
            {/* <ul>
                {filteredTodays.map(({productId}) => {
                    <li>{productId}</li>
                })}
            </ul> */}

            {/* {todays.map(({ _id, date, products }) => {
                    // Treat products as an empty object if it's null
                    const productsToDisplay = products || {};

                    return (
                    <li key={_id}>
                        {date}
                        <ul>
                        {Object.keys(productsToDisplay).length > 0 ? (
                            Object.entries(productsToDisplay).map(([key, value]) => (
                            <li key={key}>{key}: {value}</li>
                            ))
                        ) : (
                            <li>No products available</li> // Handle case for empty object
                        )}
                        </ul>
                    </li>
                    );
                })} */}

            {/* {todays.map(({ _id, date, products }) => {
                console.log(`Date: ${date}, Products:`, products);
                return (
                    <li key={_id}>
                    {date}
                    <ul>
                        {products && Array.isArray(products) && products.length > 0 ? (
                        products.map((product) =>
                            Object.entries(product).map(([key, value]) => (
                            <li key={key}>{value}</li>
                            ))
                        )
                        ) : (
                        <li>No products available</li>
                        )}
                    </ul>
                    </li>
                );
            })} */}
                {/* {todays.filter(today => today.date === month)} */}
                {/* {todays.map(({_id, date, products}) => 
                    <li key={_id}>
                        {date}
                        <ul>
                            {
                                Array.isArray(products) && products.length > 0 &&
                            products.map((product) => (
                                Object.entries(product).map(([key, value]) => (
                                    <li key={key}>{value}</li> // Here value is the product name
                                ))
                            ))
                            }
                        </ul>
                    </li>)} */}
                
                {/* products{x.products} */}
                {/* <ul>
                    {x.products.map(({productId, grams}) => {
                        <li>{productId}</li>
                    })}
                </ul> */}
            
            {/* {todays.map(({ date, products }) => {
                    // Extract month from the date to compare
                    const dateObj = new Date(date);
                    const dateMonth = dateObj.getMonth() + 1; // getMonth() is 0-indexed

                    // Only display products if the month matches
                    if (dateMonth === month) {
                        return (
                            <li key={date}>
                                <span>{date}</span>
                                <ul>
                                    {products.map(({ productId, grams }) => (
                                        <li key={productId}>
                                            Product ID: {productId}, Grams: {grams}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        );
                    }
                    return null; // Skip this date if it doesn't match
                })} */}
            {/* {todays.map(({ date, products }) => {
                    // Extract month from the date to compare
                    const dateObj = new Date(date);
                    const dateMonth = dateObj.getMonth() + 1; // getMonth() is 0-indexed

                    // Check if the month matches
                    if (dateMonth === month) {
                        return (
                            <li key={date}>
                                <span>{date}</span>
                                <ul>
                                    {products.map((product, index) => (
                                        <li key={index}>{product}</li>
                                    ))}
                                </ul>
                            </li>
                        );
                    }
                    return null;
                })} */}
                {/* {selectedDate} */}
                {/* {todays.map(({date, products}) => 
                    {
                        return (<li key={date}>{date}
                                <ul>
                                    {products.map(({ productId, grams }) => (
                                        <li key={productId}>
                                            Product ID: {productId}, Grams: {grams}
                                        </li>
                                    ))}
                                </ul>
                            
                        </li>)
                    }
                )} */}

                {/* {todays.filter(({ date }) => {
                    return date;
                })} */}
        </div>
    )
}