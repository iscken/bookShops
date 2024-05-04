import React, { useEffect } from 'react';
import "./category.css"
import { BookContext } from '../../context/ShopContext';

const Psiholog = () => {
    const {readProduct, data} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    let filterPri = data.filter((el) => el.category == "Психлолгия")
    return (
        <div id='psiholog'>
            <div className="container">
              <div className="psiholog">
              {
                    filterPri.map((el) => (
                        <>
                        <img src={el.img} alt="" />
                        <h1>{el.name}</h1>
                        </>
                    ))
                }
              </div>
            </div>

        </div>
    );
};

export default Psiholog;