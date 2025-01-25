import { useState } from 'react';
import './App.css';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import CartContextProvider from './context/CartContextProvider';
import Body from './assets/components/Body';

function App() {
  const [stranica, setStranica] = useState("HOME");

  return (
    <CartContextProvider>
      <div className='wrapper'>
        <Header setStranica={setStranica}/>
        <Body stranica={stranica}/>
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
