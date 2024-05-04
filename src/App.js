import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from '../src/component/Header/index';
import Basket from '../src/pages/Basket/index';
import Admin from './pages/admin/Admin';
import Modal from './component/modal/Modal';
import Addproduct from './component/addProduct/Addproduct';
import Footer from './component/footer/footer';
import Fantastic from './pages/category/Fantastic';
import Drama from './pages/category/Drama';
import Nauchnaya from './pages/category/Nauchnaya';
import Pricluchenie from './pages/category/Pricluchenie';
import Psiholog from './pages/category/Psiholog';
import Store from './pages/category/Store';
import { useState } from 'react';
import Search from './pages/search/Search';

function App() {
  const [value, setValue] = useState("")

  return (
    <div className="App">
     <Header setValue={setValue}/>
            <Routes>
                <Route path='/Basket' element={<Basket/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/Modal' element={<Modal/>}/>
                <Route path='/addproduct' element={<Addproduct/>}/>
                <Route path='/Fantastic' element={<Fantastic/>}/>
                <Route path='/Drama' element={<Drama/>}/>
                <Route path='/Nauchnaya' element={<Nauchnaya/>}/>
                <Route path='/Pricluchenie' element={<Pricluchenie/>}/>
                <Route path='/Psiholog' element={<Psiholog/>}/>
                <Route path='/Store' element={<Store/>}/>
                <Route path='/Search' element={<Search value={value}/>}/>
                
            </Routes>
            <Footer/>
    </div>
  );
}

export default App;
