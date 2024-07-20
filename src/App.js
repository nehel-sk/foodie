import { Routes,Route } from 'react-router';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Menu from './Components/Menu/Menu';
import AboutUs from './Components/AboutUs/AboutUs';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';

function App() {
  return (
    <div className="App">
    
        <Navigation />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/aboutUs' element={<AboutUs/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        <Footer />

    </div>
  );
}

export default App;
