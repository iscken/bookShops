import React, { useEffect } from 'react';
import "./Basket.css"
import { BookContext } from '../../context/ShopContext';

const Basket = () => {
    const {basketOto, bas, deletebtn} =BookContext()
    useEffect(()=>{
        basketOto()
    },[])
    return (
        <div id='basket'>
            <div className="container">
                <div className="basket">
          
            {
                bas.map((el) => el.map(e => (
                    <>
                    <img src={e.img} alt="" />
                    <h1>{e.name}</h1>

                    <button className='deleteBasket' onClick={() => deletebtn(e.id)}>delete</button>
                    </>
                )))
            }
                </div>
            </div>
        </div>
    );
};

export default Basket;