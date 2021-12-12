// import React from 'react';
import './App.css';
import AppHeader from './components/appHeader/appHeader';
import BurgerConstructor from './components/burgerConstructor/burgerConstructor';
import BurgerIngredients from './components/burgerIngredients/burgerIngredients';
import { data } from "./utils/data";

function App() {
  return (
    <div>
      <AppHeader />
      <div className="conteiner">
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </div>
    </div>
  );
}

export default App;
