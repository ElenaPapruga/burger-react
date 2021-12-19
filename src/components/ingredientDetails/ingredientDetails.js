
import stylesIngredient from '../orderDetails/orderDetails.module.css';
import {
  checkIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function IngredientDetails() {
  return (
    <div className={`${stylesIngredient.price} p-15`}>
      <h1 className={`${stylesIngredient.orderTitle} mb-8 text text_type_digits-large`}>034536</h1>
      <p className={`${stylesIngredient.orderSubtitle} mb-8 text text_type_main-medium`}> идентификатор заказа</p>
      <img src={checkIcon} alt='Ок - подтверждение заказа' className={`${stylesIngredient.orderIcon} mt-15 mb-15`} />
      <p className={`${stylesIngredient.orderAnswer1} mb-2 text text_type_main-default`}> Ваш заказ начали готовить</p>
      <p className={`${stylesIngredient.orderAnswer2} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div >
  );
}

export default IngredientDetails;
