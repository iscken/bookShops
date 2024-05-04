import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';

const Nauchnaya = () => {
    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    console.log(data);
    let filterNauk = data.filter(el => el.category == 'Научная')
    console.log(filterNauk);
    return (
        <div className='nauchnaya'>
            <div className="container">
               <div className="nauca">
               {
               filterNauk.map(el => (
                    <div className=' nauc'>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <h2>{el.price}</h2>
                    </div>
                ))
                }
               </div>
            </div>
        </div>
    );
};

export default Nauchnaya;