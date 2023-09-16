import Header from './components/Header/Header';
import React from 'react';
import PageSummary from './components/PageSummary/PageSummary';
import Items from './components/Items/Items';
import CartModal
  from './components/CartModal/CartModal';
import { CartModalContextProvider } from './store/cart-modal-context';
import { CartItemsContextProvider } from './store/cart-items-context';

export default function App() {
  return (
    <CartModalContextProvider>
      <CartItemsContextProvider>
        <Header />
        <PageSummary />
        <Items />
        <CartModal />
      </CartItemsContextProvider>
    </CartModalContextProvider>
  );
}

