
import { FaSquareInstagram } from "react-icons/fa6";

import { FaTelegram } from "react-icons/fa";

import { FaSquareWhatsapp } from "react-icons/fa6";

import { FaFacebook } from "react-icons/fa";







import React from 'react';
import "./footer.css"
import footerlgo from "../../img/National_Book_Store_2016_logo.svg.png"

const Footer = () => {
    return (
        <footer>
            <div className="contariner">
                <div className="footer">
                    <div className="block-1">
                        <img width={300} src={footerlgo} alt="" /></div>
                    <div className="block-2">
                        <a href="+996228744003">Способ оплаты</a>
                        <a href="+996228744003">Условия доставки</a>
                        <a href="+996228744003">Правила покупки</a>
                    </div>
                    <div className="block-3">
                        <h5>FAQ</h5>
                        <h5>О нас</h5>
                    </div>
                    <div className="block-4">
                        <h3>Связаться с нами:</h3>
                        <a href="+996228744003">+996228744003</a>
                        <a href="+996228744003">+996228744003</a>
                        <a href="+996228744003">+996228744003</a>
                     <span>
                     <FaSquareInstagram />

                     <FaTelegram />

                       <FaSquareWhatsapp />
                       <FaFacebook />
                     </span>


                    </div>
                    <div className="block-5">
                        <h3>Адрес</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur <br />
                         adipiscing elit. Varius in dolor viverra feugiat <br />
                          neque, sed in. Mattis volutpat malesuada <br />
                           velit parturient aliquam, est. Mauris vitae velit <br />
                            laoreet faucibus nec amet velit.</p>
                    </div>

                </div>
            </div>
       
        </footer>
    );
};

export default  Footer;