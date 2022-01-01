// 1-2(3) Блок Хедер-appHeaderMenu
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
    <nav className={stylesHader.content}>
      <ul className={stylesHader.list}>
        <li>
          <div className={stylesHader.two}>
            <BurgerIngredientItem text='Конструктор'><BurgerIcon type="primary" /></BurgerIngredientItem>
            <BurgerIngredientItem text='Лента заказов'><ListIcon type="primary" /></BurgerIngredientItem>
          </div>
        </li>
        <li className={stylesHader.logo}><Logo /></li>
        <li><BurgerIngredientItem text='Личный кабинет'><ProfileIcon type="primary" /></BurgerIngredientItem>
        </li>
      </ul >
    </nav >
  );
}

export default AppHeaderMenu

