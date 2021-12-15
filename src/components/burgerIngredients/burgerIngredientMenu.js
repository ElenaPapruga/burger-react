// 3 - 3(3) Блок burgerIngredientMenu
// import React from 'react';
import stylesIngredient from './burgerIngredients.module.css';
// import { BurgerPropTypes } from '../../utils/prop-types';
// import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';

import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Card = ({ item }) => {

    return (
        <article className={`${stylesIngredient.item} ml-4 mb-10`}>
            <Counter count={7} />
            <picture className={`${stylesIngredient.picture} ml-4 mr-4`}>
                <img className={stylesIngredient.image} src={item.image} alt={item.name} />
            </picture>
            <span className={`${stylesIngredient.price} mt-1 mb-1 text text_type_digits-medium`}>{item.price}<CurrencyIcon style={{ paddingLeft: '9px' }} type="primary" /></span>
            <p className={`${stylesIngredient.txt} text text_type_main-default`}>{item.name}</p>
        </article>
    )
}


export default Card