// import React from 'react';
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
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = useState(false);

  const [selectedIngredient, setSelectedIngredient] = useState(null);
  const [isIngredientPopupOpen, setIsIngredientPopupOpen] = useState(false);

  // const [ingredients, setIngredients] = useState([]);
  const [isHeaderPopupShown, setIsHeaderPopupShown] = useState(false);

  const [modalActiveOrderDetails, setModalActiveOrderDetails] = useState(false);
  const [modalActiveIngredientDetails, setModalActiveIngredientDetails] = useState(false);


  const toggleHeaderPopup = () => {
    setIsHeaderPopupShown(!isHeaderPopupShown);
  }

  const toggleIngredientPopup = () => {
    setIsIngredientPopupOpen(!isIngredientPopupOpen);
  }

  const toggleOrderDetails = () => {
    setIsOrderDetailsOpened(!isOrderDetailsOpened);
  }

  const handleInspectIngredient = (ingredient) => {
    setSelectedIngredient(ingredient);
    setIsIngredientPopupOpen(true);
  }

  const handlerClickOrderDetails = () => {
    setModalActiveOrderDetails(true);
  }
  const closeModalOrderDetails = () => {
    setModalActiveOrderDetails(false);
  }

  const handlerClickIngredientDetails = () => {
    setModalActiveIngredientDetails(true);
  }
  const closeModalIngredientDetails = () => {
    setModalActiveIngredientDetails(false);
  }

  // useEffect(() => {
  //   api.getIngredients()
  //     .then(({ data }) => {
  //       setIngredients(data);
  //     })
  //     .catch(() => {
  //       console.log("Произошла ошибка при получении ингредиентов.")
  //     })
  // }, [])

  return (
    <div>
      {/********** ПОПАПЫ *********/}
      {/* Модальное окно Блока OrderDetails */}
      {modalActiveOrderDetails &&
        <Modal closePopup={closeModalOrderDetails}>
          <OrderDetails />
        </Modal>
      }
      {/* Модальное окно Блока IngredientDetails */}
      {modalActiveIngredientDetails &&
        <Modal closePopup={closeModalIngredientDetails}>
          <IngredientDetails ingredient={selectedIngredient} />
        </Modal>}


      {/********** Наполнение: Блок AppHeade, Блок BurgerIngredients, Блок BurgerConstructor *********/}
      <AppHeader togglePopup={toggleHeaderPopup} />
      <main className={stylesApp.conteiner}>
        <BurgerIngredients handlerClickIngredientDetails={handlerClickIngredientDetails} selectIngredient={handleInspectIngredient} data={data} />
        <BurgerConstructor handlerClickOrderDetails={handlerClickOrderDetails} handleOrder={toggleOrderDetails} data={data} />
      </main>
    </div>
  );
}


export default App;



    // <div>
    //   <div className={stylesApp.root} >
    //     {
    //       isLoading ? (<h1 className="text text_type_main-large">Загружаем заказы...</h1>) :
    //         <div>
    //           <AppHeader />
    //           <main className={stylesApp.conteiner}>
    //             <BurgerIngredients data={data} />
    //             <BurgerConstructor data={data} />
    //           </main>

    //           {isOrderDetailsPopupOpen && (
    //             <Modal title='034536' closeEsc={setIsOrderDetailsPopupOpen}>
    //               <OrderDetails closeEsc={setIsOrderDetailsPopupOpen} />
    //             </Modal>
    //           )
    //           }
    //           {isIngredientsPopupOpen && (
    //             <Modal title='Детали ингредиентов' closeEsc={setIsIngredientsPopupOpen}>
    //               <IngredientDetails closeEsc={setIsIngredientsPopupOpen} ingredientsData={selectedIngredient} />
    //             </Modal>
    //           )
    //           }
