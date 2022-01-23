// Для блока BurgerIngredient (попап)
// import React from 'react';
import stylesIngredient from '../ingredientDetails/ingredientDetails.module.css';
import PropTypes from 'prop-types';

function IngredientDetails({ detailsIngredient }) {
  return (
    <div className={`${stylesIngredient.wrapper} pb-10`}>
      <h1 className={`${stylesIngredient.title} ml-18 text text_type_digits-large`}>Детали ингредиента</h1>
      <div>
        <img src={detailsIngredient.image} alt='Начика' className={`${stylesIngredient.mainIcon} mt-0 mb-4`} />
        <h2 className={`${stylesIngredient.subtitle} mb-8 text text_type_main-default`}>{detailsIngredient.name}</h2>

        <ul className={stylesIngredient.content}>
          <li className={stylesIngredient.contentBlock}>
            <p className={`${stylesIngredient.text} mb-2 text text_type_digits-default`}>Калории, ккал</p>
            <span className={`${stylesIngredient.textInfo} mb-0 text text_type_digits-medium`}>{detailsIngredient.calories}</span>
          </li>
          <li className={stylesIngredient.contentBlock}>
            <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Белки, г</p>
            <span className={`${stylesIngredient.textInfo} mb-0 text text_type_digits-medium`}>{detailsIngredient.proteins}</span>
          </li>
          <li className={stylesIngredient.contentBlock}>
            <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Жиры, г</p>
            <span className={`${stylesIngredient.textInfo} mb-0 text text_type_digits-medium`}>{detailsIngredient.fat}</span>
          </li>
          <li className={stylesIngredient.contentBlock}>
            <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Углеводы, г</p>
            <span className={`${stylesIngredient.textInfo} mb-0 text text_type_digits-medium`}>{detailsIngredient.carbohydrates}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// Проверка типов данных компонентов
// Добавим `isRequired`, чтобы показывать предупреждение, если проп не передан
IngredientDetails.propTypes = {
  detailsIngredient: PropTypes.object
}

export default IngredientDetails;
