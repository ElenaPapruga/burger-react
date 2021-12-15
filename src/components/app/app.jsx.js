// import React from 'react';
import stylesApp from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import { data } from "../../utils/data";

function App() {
  return (
    <div className={stylesApp.root} >
      <AppHeader />
      <main className={stylesApp.conteiner}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data} />
      </main>
    </ div>
  );
}

export default App;
