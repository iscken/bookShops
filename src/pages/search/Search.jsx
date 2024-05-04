import React, { useEffect } from 'react';
import { BookContext } from '../../context/ShopContext';
import "./Search.css"

const Search = ({value}) => {
    const {readProduct, data} = BookContext() 
    useEffect(() => {
        readProduct()
    }, [])
    let oto = data.filter((el) => el.name.toLowerCase().includes(value.toLowerCase()))

    return (
        <div id='bol'>
        {oto.map((el) => (
    <div className="bol">

        <img src={el.img} alt="" />
        <h2>{el.name}</h2>
        <h2>{el.cate}</h2>
        <h2>{el.price} $</h2>


    </div>
))}
        </div>
    );
};

export default Search;