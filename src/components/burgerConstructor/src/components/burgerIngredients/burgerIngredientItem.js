// 3 - 2(3) Блок BurgerIngredientItem для burgerIngredients
import React from 'react';
import stylesIngredient from './burgerIngredients.module.css';
import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredientItem = React.forwardRef(({ title, children }, ref) => {
  return (
    <div ref={ref} className={stylesIngredient.titledBlock}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
})

// Проверка типов данных компонентов
// Добавим `isRequired`, чтобы показывать предупреждение, если проп не передан

BurgerIngredientItem.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

export default BurgerIngredientItem

