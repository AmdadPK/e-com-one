import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kis_banner from './assets/banner_kids.png';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>} />
          <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>} />
          <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>} />
          <Route path='/kid' element={<ShopCategory banner={kis_banner} category="kid"/>} />
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={<LoginSignup/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/trems' element="" />
          <Route path='/privacy' element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
