import stylesApp from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import { data } from "../../utils/data";
import Modal from '../modal/modal';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import OrderDetails from '../orderDetails/orderDetails';
import { useState } from 'react';

function App() {
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);

  const togglePopupClose = () => {
    setIsOrderPopupOpen(false);
    setIsIngredientPopupOpen(false);
  }

  const togglePopupOrderOpen = () => {
    setIsOrderPopupOpen(true);
    // setIsOrderPopupOpen(!isOrderPopupOpen);
  }

  const togglePopupIngredientOpen = () => {
    setIsIngredientPopupOpen(true);
  }

  return (
    <div>
      {/********** ПОПАПЫ *********/}
      {/* Модальное окно Блока OrderDetails */}
      {isOrderPopupOpen &&
        <Modal closePopup={togglePopupClose}><OrderDetails /></Modal>}

      {/* Модальное окно Блока IngredientDetails */}
      {isIngredientPopupOpen &&
        <Modal closePopup={togglePopupClose}><IngredientDetails /></Modal>}


      {/********** Наполнение: Блок BurgerIngredients, Блок BurgerConstructor *********/}
      <AppHeader />
      <main className={stylesApp.conteiner}>
        <BurgerIngredients togglePopupIngredientOpen={togglePopupIngredientOpen} data={data} />
        <BurgerConstructor togglePopupOrderOpen={togglePopupOrderOpen} data={data} />
      </main>
    </div>
  );
}

export default App;
