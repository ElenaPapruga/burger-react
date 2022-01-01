// Для блока BurgerIngredient (попап)
import stylesIngredient from '../orderDetails/orderDetails.module.css';
import meat01 from '../images/meat01.png';

function IngredientDetails() {
  return (
    <div className={`${stylesIngredient.price} p-15`}>
      <h2 className={`${stylesIngredient.title} mb-8 text text_type_digits-large`}>Детали ингредиента</h2>
      <img src={meat01} alt='Начика бургера' className={`${stylesIngredient.mainIcon} mt-15 mb-15`} />
      <p className={`${stylesIngredient.subtitle} mb-2 text text_type_main-default`}>Биокотлета из марсианской Магнолии</p>
      <p className={`${stylesIngredient.orderAnswer2} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div >
  );
}

export default IngredientDetails;
