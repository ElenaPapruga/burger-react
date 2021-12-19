// 3 - 1(3) Блок BurgerConstructor
import stylesConstructor from './burgerConstructor.module.css';
import ConstructorItem from './constructorItem';
import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../../utils/prop-types';
import OrderDetails from '../orderDetails/orderDetails';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
// import Modal from '../modal/modal';

// const BurgerConstructor = memo(({ data }) => {
// const text2 = lastString ? '(низ)' : '(верх)'
// console.log(text2)
function BurgerConstructor({ data, setModal, handleOrder, handlerClickOrderDetails }) {
    const noFirst = data.length !== 0
    const lastString = noFirst ? (data.length !== 1 ? data[data.length - 2] : null) : null
    const sum = 8284

    // const handleClick = () => {
    //     setModal({
    //         visible: true,
    //         content: <OrderDetails />
    //     })
    // }

    return (
        <section className={stylesConstructor.constructor}>
            <ul className={stylesConstructor.list}>
                <ConstructorItem type="top" card={lastString}>{`${data.name} низ`}</ConstructorItem>
                <ConstructorItem type="bottom" card={lastString}>{`${data.name} верх`}</ConstructorItem>
            </ul>
            <div className={stylesConstructor.check}>
                <p className="text text_type_main-large pr-2 pb-4 pt-4">{sum}</p>
                <CurrencyIcon type="primary" />
                <div className="pr-10" />
                <Button type="primary" size="medium" onClick={handlerClickOrderDetails}>Оформить заказ</Button>
            </div>
        </section>
    );
};

// Проверка типов данных компонентов
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(BurgerPropTypes).isRequired,
}
export default BurgerConstructor;
