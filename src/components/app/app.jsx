import stylesApp from './app.module.css';
import AppHeader from '../appHeader/appHeader';
import BurgerConstructor from '../burgerConstructor/burgerConstructor';
import BurgerIngredients from '../burgerIngredients/burgerIngredients';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredientDetails/ingredientDetails';
import OrderDetails from '../orderDetails/orderDetails';
import { useState, useEffect } from 'react';
import { IngredientsContext } from '../services/ingredientsContext';
import { API_URL} from '../../utils/api';

function App() {
  const [isOrderPopupOpen, setIsOrderPopupOpen] = useState(false);
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);

  const [ingredients, setIngredients] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [detailsIngredient, setDetailsIngredient] = useState({});

  useEffect(() => {
    getIngredients()
  }, [])

  const getIngredients = async () => {
    try {
      const res = await fetch(`${API_URL}/ingredients`);
      if (res.status === 200) {
        const data = await res.json();
        setIngredients(data.data);
        setIsLoading(true)
      } else {
        throw new Error('Ошибка ответа ');
      }
    }
    catch(err) {
      console.log(err)
    }
  }
  const togglePopupClose = () => {
    setIsOrderPopupOpen(false);
    setIsIngredientPopupOpen(false);
  }

  const togglePopupOrderOpen = () => {
    setIsOrderPopupOpen(true);
  }

  // const [detailsIngredient, setDetailsIngredient] = useState();
  const togglePopupIngredientOpen = (detailsIngredient) => {    
    setDetailsIngredient(detailsIngredient)
    setIsIngredientPopupOpen(true);
  }

  return (
    <div>
      <IngredientsContext.Provider value={ingredients}>
        {/********** ПОПАПЫ *********/}
        {/* Модальное окно Блока OrderDetails */}
        {isOrderPopupOpen &&
          <Modal closePopup={togglePopupClose}><OrderDetails /></Modal>}

        {/* Модальное окно Блока IngredientDetails */}
        {isIngredientPopupOpen &&
          <Modal closePopup={togglePopupClose} ><IngredientDetails detailsIngredient={detailsIngredient} /></Modal>}

        {/********** Наполнение: Блок BurgerIngredients, Блок BurgerConstructor *********/}
        <AppHeader />
        <main className={stylesApp.conteiner}>
          {isLoading ?
            <>
              <BurgerIngredients openPopup={togglePopupIngredientOpen} />
              <BurgerConstructor openPopup={togglePopupOrderOpen} />
            </>
            : <div>Loading...</div>
          }
        </main>
      </IngredientsContext.Provider>
    </div>
  );
}

export default App;
