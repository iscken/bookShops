import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';



function Fantastic() {

    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    let filterNauk = data.filter(el => el.category == 'Фантастика')
    
    return (
        <div className='fantastic'>
           {
            filterNauk.map((el) => (
                <div className="fan">
                    <img src={el.img} alt="" />
                    <h1>{el.name}</h1>
                </div>
            ))
           }
        </div>
    );
}

export default Fantastic;