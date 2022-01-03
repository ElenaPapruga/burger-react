// Для блока BurgerIngredient (попап)
import stylesIngredient from '../ingredientDetails/ingredientDetails.module.css';
import PropTypes from 'prop-types';

function IngredientDetails({ image, name, description, calories, proteins, fat, carbohydrates }) {
  return (
    <div className={`${stylesIngredient.price} pb-10`}>
      <h2 className={`${stylesIngredient.title} ml-18 text text_type_digits-large`}>Детали ингредиента</h2>
      <img src={image} alt='Начика' className={`${stylesIngredient.mainIcon} mt-0 mb-4`} />
      <p className={`${stylesIngredient.subtitle} mb-8 text text_type_main-default`}>{name}</p>
      <ul className={stylesIngredient.content}>
        <li className={stylesIngredient.contentBlock}>
          <p className={`${stylesIngredient.text} mb-2 text text_type_digits-default`}>Калории, ккал</p>
          <span className={stylesIngredient.textInfo}>{calories}</span>
        </li>
        <li className={stylesIngredient.contentBlock}>
          <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Белки, г</p>
          <span className={stylesIngredient.textInfo}>{proteins}</span>
        </li>
        <li className={stylesIngredient.contentBlock}>
          <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Жиры, г</p>
          <span className={stylesIngredient.textInfo}>{fat}</span>
        </li>
        <li className={stylesIngredient.contentBlock}>
          <p className={`${stylesIngredient.text} mb-2 text text_type_main-default`}>Углеводы, г</p>
          <span className={stylesIngredient.textInfo}>{carbohydrates}</span>
        </li>
      </ul>
    </div>
  );
}

IngredientDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
}
export default IngredientDetails;
