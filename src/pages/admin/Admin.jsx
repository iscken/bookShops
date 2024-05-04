import { SlBasket } from "react-icons/sl";

import React, { useEffect } from 'react';
import "./Admin.css";
import  imBlock  from "../../img/block1.avif";
import img2 from "../../img/img2.avif"
import { BookContext } from '../../context/ShopContext';
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";



const Admin = () => {
    const nav = useNavigate()
    function add(){

           nav("/basket")
    }

    const {readProduct, data, selectoption, toBasket} = BookContext()
    useEffect(() => {
        readProduct()
    }, [])
    



    return (
        <div id='admin'>
            <div className="container">
                <div className="Admin">
                <div className="blocks">
                   <div className="pop-1">
                        <NavLink to ="/Pricluchenie"><h2>Психология</h2></NavLink>    
                    </div>
                    <div className="pop-2">
                    <NavLink to="/Fantastic"><h2>Фантастика</h2></NavLink>    
                    </div>
                    <div className="pop-3">
                        <NavLink to="/pricluchenie"><h2>Приключения</h2></NavLink>
                    </div>
                    <div className="pop-4">
                    <NavLink to ="/nauchnaya"><h2>Научная</h2></NavLink>

                    </div>
                    <div className="pop-5">
                    <NavLink to="/store"><h2>История</h2></NavLink>
                        
                    </div>
                    <div className="pop-6">
                    <NavLink to ="/drama"><h2>Драма</h2></NavLink>

                    </div>
                   </div>
                   <div className="options">
                   <select onChange={(e) => selectoption(e.target.value)}>
                   <option value="Main">Главная </option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="1-9">1-9</option>
                        <option value="9-1">9-1</option>

                        <option value="orange">Популярный</option>
                       
                        </select>
                   </div>
                    <div className="block-img">
                       <div className="block1">
                       <img className='block1-img' src={imBlock} alt="" />
                       <div className="block1-slider-img">
                            <h1 className='specialOffer'>SPECIAL OFFER</h1>
                            <h2 className='SUPER'>SUPER</h2>
                            <h1 className='sale'>SALE</h1>
                       </div>
                       </div>
                       <div className="block1">
                       <img className='block1-img' src={img2} alt="" />
                       <div className="block1-slider-img">
                       <h1 className='specialOffer'>SPECIAL OFFER</h1>
                            <h2 className='SUPER'>SUPER</h2>
                            <h1 className='sale'>SALE</h1>
                       </div>
                       </div>
                       <div className="block1">
                       <img className='block1-img' src={imBlock} alt="" />
                       <div className="block1-slider-img">
                            <h1 className='specialOffer'>SPECIAL OFFER</h1>
                            <h2 className='SUPER'>SUPER</h2>
                            <h1 className='sale'>SALE</h1>
                       </div>
                       </div>

                    </div>
                    <div className="blockeSearch">
                <div className="admin-2">
                    {
                        data.map((el) => (
                            <div className="block-admin">
                                <img src={el.img} alt="" />
                                <h3>{el.name}</h3>
                                <h3>{el.cate}</h3>
                                <h4>{el.price} $</h4>
                               <div className="btns">
                               <button className='elBtn'>Купит</button>
                                <button className='elBtn' onClick={() => toBasket(el.id)}><SlBasket /></button>
                               </div>
                            </div>
                        ))
                    }
                    </div>
                    <button className="seemoor"><h3>Показать ешё...</h3></button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;