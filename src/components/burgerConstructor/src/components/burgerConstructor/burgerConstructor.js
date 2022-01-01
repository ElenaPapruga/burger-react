// 3 - 1(3) Блок BurgerConstructor
import stylesConstructor from './burgerConstructor.module.css';
import ConstructorItem from './constructorItem';
import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';


function BurgerConstructor({ togglePopupOrderOpen }) {
    const sum = 8284

    return (
        <section className={stylesConstructor.constructor}>
            <ul className={stylesConstructor.list}>
                <li><ConstructorItem /></li>
            </ul>
            <div className={stylesConstructor.check}>
                <p className="text text_type_main-large pr-2 pb-4 pt-4">{sum}</p>
                <CurrencyIcon type="primary" />
                <div className="pr-10" />
                <Button type="primary" size="medium" onClick={togglePopupOrderOpen}>Оформить заказ</Button>
            </div>
        </section>
    );
};

// Проверка типов данных компонентов
BurgerConstructor.propTypes = {
    togglePopupOrderOpen: PropTypes.func.isRequired,
}

export default BurgerConstructor;
