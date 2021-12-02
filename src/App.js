
import './App.css';
import Cart from './components/Carte/Cart';
import Header from './components/header/Header';
import List from './components/Lists/List';
import { useState } from 'react';

function App() {

  const [isOpenPopUp, setIsOpenPopUp] = useState(false)

  const popUphandler = () => {
    setIsOpenPopUp(true)
  }

  return (
    <div className="App">
      <Header openCart={popUphandler} />
      {isOpenPopUp && <Cart />}
     <List />
    </div>
  );
}

export default App;
