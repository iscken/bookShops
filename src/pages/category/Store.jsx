import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';

const Store = () => {
    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    let filterStore = data.filter((el) => el.category == "История")
    return (
        <div className='store'>
            <div className="container">
            {
             filterStore.map((el) => (
               <>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <h1>{el.price}</h1>
               </>
             ))   
            }
            </div>
        </div>
    );
};

export default Store;