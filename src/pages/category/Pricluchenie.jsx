import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';

const Pricluchenie = () => {
    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    let filterPri = data.filter((el) => el.category == "Приключения")
    return (
       <div id="pri">
        <div className="container">
            <div className="pri">
               {
                filterPri.map((el) => (
                    <div div className='proklucheniy'>
                    <img src={el.img} alt="" />
                    <h1>{el.name}</h1>
                    </div >
                ))
               }
            </div>
        </div>
       </div>
    );
};


export default Pricluchenie;