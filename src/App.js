import React from 'react';

import Body from './components/Body';
import Header from './components/Header';

import ProductProvider from './store/Product-Provider';
import CartProvider from './store/Cart-Provider';

function App() {
  return (
    <>
      <ProductProvider>
      <CartProvider>
      <Header/>
      <Body/>
      </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
