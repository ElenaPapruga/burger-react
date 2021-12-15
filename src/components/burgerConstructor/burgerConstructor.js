// 3 - 1(3) Блок BurgerConstructor
import { memo } from 'react';
import stylesConstructor from './burgerConstructor.module.css';
import ConstructorItem from './constructorItem';
import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../../utils/prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    CurrencyIcon,
    Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

const BurgerConstructor = memo(({ data }) => {
    const noFirst = data.length !== 0
    const lastString = noFirst ? (data.length !== 1 ? data[data.length - 2] : null) : null
    const sum = 8284
    // const text2 = lastString ? '(низ)' : '(верх)'
    // console.log(text2)
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
                <Button type="primary" size="medium">Оформить заказ</Button>
            </div>
        </section>
    );
});

// Проверка типов данных компонентов
BurgerConstructor.propTypes = {
    data: PropTypes.arrayOf(BurgerPropTypes).isRequired,
}

export default BurgerConstructor

