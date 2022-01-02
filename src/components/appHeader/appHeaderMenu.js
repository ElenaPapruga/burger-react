// 1-2(3) Блок Хедер-appHeaderMenu
// import React from 'react';
import BurgerIngredientItem from './appHeaderMenuItem';
import stylesHader from './appHeader.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

//Отрисовываем целиком хедер
function AppHeaderMenu() {
  return (
    <>
      <nav className={stylesHader.content}>
        <ul className={stylesHader.list}>
          <li>
            <div className={stylesHader.two}>
              <BurgerIngredientItem text='Конструктор'><BurgerIcon type="primary" className="text text_type_main-small" /></BurgerIngredientItem>
              <BurgerIngredientItem text='Лента заказов'><ListIcon type="primary" className="text text_type_main-small" /></BurgerIngredientItem>
            </div>
          </li>
          <li className={stylesHader.logo}><Logo style={{ justifyContent: 'center' }} /></li>
          <li><BurgerIngredientItem text='Личный кабинет'><ProfileIcon type="primary" className="text text_type_main-small" /></BurgerIngredientItem>
          </li>
        </ul >
      </nav >
    </>
  );
}

export default AppHeaderMenu

