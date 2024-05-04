import React, { useState } from 'react';
import  "./modal.css"
import { useNavigate } from 'react-router-dom';

const Modal = () => {

const [mail, setMail] = useState("")
const [modal, setModal] = useState("")
const nav = useNavigate()

function addAdmin() {
    if (modal === "1234" && mail === "isken"){
  nav("/Addproduct")
    }else{
        alert("Непрвилный порол")
    }
}

    return (
        <div id='modal'>
            <div className="container">
                <div className="modal">
                <input className='passwordinp' onChange={(e) => setMail(e.target.value)} type="text"  placeholder='Email'/>
                    <input className='passwordinp' onChange={(e) => setModal(e.target.value)} type="password"  placeholder='password'/>
                    <button className='passwordBtn' onClick={addAdmin}>Войти</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;