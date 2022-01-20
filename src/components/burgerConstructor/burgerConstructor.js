// 3 - 1(3) Блок BurgerConstructor
import stylesConstructor from './burgerConstructor.module.css';
import ConstructorItem from './constructorItem';
import ConstructorSheet from './constructorSheet';
import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsContext } from '../services/ingredientsContext';


function BurgerConstructor({ openPopup }) {


  return <IngredientsContext.Consumer>
    {ingredients => {
      const sum = 4142;
      const bun = ingredients.find(item => item.type === 'bun');
      return (
        <section className={stylesConstructor.constructor}>
          <ConstructorItem className={`${stylesConstructor.itemPosition} pb-4`} position="top" data={bun}></ConstructorItem>
          <div className={stylesConstructor.list}>
            <ConstructorSheet data={ingredients.filter((item) => item.type !== 'bun')} />
          </div>
          <ConstructorItem position="bottom" data={bun} />
          <div className={stylesConstructor.check}>
            <p className="text text_type_main-large pr-2 pb-4 pt-4">{sum}</p>
            <CurrencyIcon type="primary" />
            <div className="pr-10" />
            <Button className={stylesConstructor.itemPosition} onClick={openPopup} type="primary" size="medium">Оформить заказ</Button>
          </div>
        </section>
      )
    }}
  </IngredientsContext.Consumer>
}

// Проверка типов данных компонентов
// Добавим `isRequired`, чтобы показывать предупреждение, если проп не передан
BurgerConstructor.propTypes = {
  openPopup: PropTypes.func.isRequired,
};

export default BurgerConstructor;
