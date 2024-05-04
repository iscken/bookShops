import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';

const Drama = () => {
    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    let filterNauk = data.filter(el => el.category == 'Драма')
    return (
        <div id='drama'>
            <div className="container">
            <div className="drama">
            {
            filterNauk.map((el) => (
                <div div className='dorama'>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <h1>{el.price}</h1>
                </div>
            ))
          }
            </div>
         
            </div>
        </div>
    );
};

export default Drama;