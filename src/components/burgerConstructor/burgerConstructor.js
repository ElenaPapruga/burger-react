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
import Portal from '../portal/portal.js'

const BurgerConstructor = memo(({ data }) => {
    const noFirst = data.length !== 0
    const firstString = noFirst ? data[0] : null
    const lastString = noFirst ? (data.length !== 1 ? data[data.length - 1] : null) : null
    const sum = 610

    return (
        <section className={stylesConstructor.constructor}>
            <ul className={stylesConstructor.list}>
                <ConstructorItem type="top" style={{ paddingRight: '15px' }} card={firstString} />
                <div className={stylesConstructor.content}>
                    {data.map(function (card, index) {
                        if (index === 0 || index === (data.length - 1));
                        return <ConstructorItem card={card} key={index} />
                    })}
                </div>
                <ConstructorItem type="bottom" style={{ paddingRight: '15px' }} card={lastString} />

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
    data: PropTypes.arrayOf(BurgerPropTypes)
}

export default BurgerConstructor

