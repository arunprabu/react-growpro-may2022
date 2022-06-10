/*
  1. import statements 
  2. comp defn 
      * should return JSX 
      * JSX will look like HTML -- but not HTML 
  3. export 
*/

// imports 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Shared/Header';
import Footer from './Components/Shared/Footer';
import Home from './Components/Home/Home';
import HocDemo from './Components/HocDemo/HocDemo';
import UnitTestingDemo from './Components/UnitTestingDemo/UnitTestingDemo';
import HooksDemo from './Components/HooksDemo/HooksDemo';
import ContextDemo from './Components/ContextDemo/ContextDemo';
import StyledCompDemo from './Components/StyledCompDemo/StyledCompDemo';
import { PageContext } from './Contexts/PageContext';

import { CartContext } from './Contexts/CartContext';
import { useReducer } from 'react';
import cartReducer from './Reducers/cartReducer';

// also known as root comp / default comp / main comp 
// comp defn 
// ideal place for layouts
function App() {

  const [cartState, cartDispatch ] = useReducer(cartReducer, []); 

  // preparing an obj to be passed inside as value to context provider
  const cartData = {
    cartState: cartState,
    cartDispatch: cartDispatch
  }

  //commonly sharable data
  const authInfo = {
    isLoggedIn: true,
    lastLogin: '5/June/2022'
  }

  // comp should return JSX 
  return(
    <CartContext.Provider value={ cartData }>
      <BrowserRouter>
        <Header />

        <div className='container mt-5 pt-2'>
          {/* Let's configure the routes */}
          <PageContext.Provider value={authInfo}>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hoc-demo' element={<HocDemo />} />
              <Route path='/unit-testing' element={<UnitTestingDemo />} />
              <Route path='/hooks' element={<HooksDemo />} />
              <Route path='/context' element={<ContextDemo />} />
              <Route path='/styled-comp' element={<StyledCompDemo />} />
            </Routes>
          </PageContext.Provider>
        </div>

        <Footer></Footer>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

// export 
export default App;
