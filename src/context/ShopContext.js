import axios from 'axios';
import { createContext, useContext, useState } from 'react';

const shopProduct = createContext()
export const BookContext = () => useContext(shopProduct)

const ShopContext = ({children}) => {
    const [data,setData] = useState([])
    const [bas,setBas] = useState([])

    const API = "http://localhost:3000/data"
    

   function addProduct(newProduct){
         axios.post(API, newProduct)
    } 
function readProduct(){
    axios(API).then((res) => (
        setData(res.data)
    ))
}


function selectoption(value) {
    if (value == "main"){
        readProduct()
    } else if (value == "1-9") {
        let validateWithNumer = [...data].sort((a, b) => a.price - +b.price)
        setData(validateWithNumer)
    }
    else if (value == "9-1"){
        let valuedownnumber = [...data].sort((b, a) => b.price - +a.price)
        setData(valuedownnumber)
    }

}
function toBasket(id){
    const local = JSON.parse(localStorage.getItem("product")) || []
    let setBasket = [... data].filter((el) => id == el.id)
    local.push(setBasket)
    localStorage.setItem("product", JSON.stringify(local))
    
}

function basketOto(){
    const local = JSON.parse(localStorage.getItem("product")) || []
    setBas(local)
}
function deletebtn(id){
    const local = JSON.parse(localStorage.getItem("product")) || []
    let res = local.map((el) => el.filter((e) => e.id !== id))
    localStorage.setItem("product", JSON.stringify(res))
    basketOto()

}
const values = {
addProduct,
readProduct,
selectoption,
toBasket,
basketOto,
deletebtn,
bas,
data,
}

    return (
        <shopProduct.Provider value={values}>
            {children}
        </shopProduct.Provider>
    );
};

export default ShopContext;