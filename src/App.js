import Header from './components/Header/Header';
import React from 'react';
import PageSummary from './components/PageSummary/PageSummary';
import Items from './components/Items/Items';
import CartModal
  from './components/CartModal/CartModal';
import { CartModalContextProvider } from './store/cart-modal-context';

export default function App() {
  const meals = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  return (
    <CartModalContextProvider>
      <Header />
      <PageSummary />
      <Items meals={meals} />
      <CartModal />
    </CartModalContextProvider>
  );
}

