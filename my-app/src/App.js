import './App.css';
import { Routes, Route } from 'react-router-dom';
import routes from './AppRouter';
import HomePage from './HomePage';
import NotImplement from './NotImplement';
import Header from './header';
import H1 from './h1';
import Red from './Red';
import Footer from './footer';
import Tshirts from './Products';
import Details from './details';
import ShoppingCart from './shoppingCart';
function App() {
  
  
  return (

    <div className='App'>
      <Red />
      <Header />
      <H1 />
      <Routes>
        <Route exact path={routes.home} element={<HomePage />}></Route>
        <Route exact path={routes.NotImplement} element={<NotImplement />}></Route>
        <Route exact path={routes.Tshirts} element={<Tshirts />}></Route>
        <Route exact path={routes.Details} element={<Details/>}></Route>
        <Route exact path={routes.ShoppingCart} element={<ShoppingCart/>}></Route>
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
export const Cart = [];
