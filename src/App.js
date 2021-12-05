
import './App.css';
import Cart from './components/Carte/Cart';
import Header from './components/header/Header';
import List from './components/Lists/List';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';
import Footer from './components/Footer/Footer';

function App() {

  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const popUphandler = () => {
    setIsOpenPopUp(true)
  }
  const closePopUp = () => {
    setIsOpenPopUp(false)
  }

  return (
    <CartProvider>
      <Header openCart={popUphandler} />
      {isOpenPopUp && <Cart onClose={closePopUp} />}
      <section>
        <List />
      </section>
      <Footer />
      </CartProvider>  );
}

export default App;
