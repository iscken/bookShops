import React, { useState } from 'react';
import "./Addproduct.css"
import { BookContext } from '../../context/ShopContext';

const Addproduct = () => {
    
        const [img,setImg] = useState("")
        const [name,setName] = useState("")
        const [price,setPrice] = useState("")
        const [product,setProduct] = useState("")
        const [category, setCategory] = useState("")
        
        const { addProduct } = BookContext()


function hendleSubmit () {
    if(img !== "" && name !== "" && price !== "" && product !== "" && category !==""){
        let obj = {
            img,
            name,
            price,
            product,
            category
            
            
        }
        addProduct(obj)
        setCategory("")
        setImg("")
        setName("")
        setPrice("")
        setProduct("")
    } 
    else {
        alert("arr")
    }
        
   

}


    return (
        <div id='addproduct'>
            <div className="container">
                <div className="addproduct">
                  <input value={img} type="text" onChange={(e) => setImg(e.target.value)} placeholder='Image' className="imgdiv"/>
                    <div className="addinput">
                        <input value={name} className='nameinput' type="text" onChange={(e) => setName(e.target.value)} placeholder='Product Name'/>
                        <div className="addprice">
                            <select onChange={(e) => setCategory(e.target.value)} className='price-1'>
                            <option value="Психология">Психология</option>
                                <option value="Фантастика">Фантастика</option>
                                <option value="Приключения">Приключения</option>
                                <option value="Научная">Научная</option>
                                <option value="История">История</option>
                                <option value="Драма">Драма</option>
                            </select>
                            
                               <input value={price} className='price' onChange={(e) => setPrice(e.target.value)} type="text" placeholder='price'/>

                        </div>
                        <input  value={product} className='ProductDescription' type="text" onChange={(e) => setProduct(e.target.value)}  placeholder='Product description...'/>
                        <button className='savebtn'onClick={hendleSubmit} >SAVE</button>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Addproduct;