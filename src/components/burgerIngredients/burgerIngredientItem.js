// 3 - 2(3) Блок BurgerIngredientItem
import React from 'react';
import stylesIngredient from './burgerIngredients.module.css';
import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';

const BurgerIngredientItem = React.forwardRef(({ title, children }, ref) => {
  return (
    <article ref={ref} className={stylesIngredient.titledBlock}>
      <h2>{title}</h2>
      <div>
        {children}
      </div>
    </article>
  )
})

// Проверка типов данных компонентов
// Добавим `isRequired`, чтобы показывать предупреждение, если проп не передан
BurgerIngredientItem.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}

export default BurgerIngredientItem

