
import stylesOrder from '../orderDetails/orderDetails.module.css';
import orderIcon from '../images/orderIcon.png';

function OrderDetails() {
  return (
    <div>
      <h1 className={`${stylesOrder.id} text text_type_digits-large `}>034536</h1>
      <p className={`${stylesOrder.identification} mb-8 text text_type_main-medium`}> идентификатор заказа</p>
      <img src={orderIcon} alt='Ок - подтверждение заказа' className={`${stylesOrder.image} mt-15 mb-15`} />
      <p className={`${stylesOrder.text} mb-2 text text_type_main-default`}> Ваш заказ начали готовить</p>
      <p className={`${stylesOrder.orderAnswer2} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div >
  );
}

export default OrderDetails;
