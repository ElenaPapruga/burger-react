// import PropTypes from 'prop-types';
import stylesConstructor from './burgerConstructor.module.css';
// import { BurgerPropTypes } from '../../utils/prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';


const ConstructorItem = ({ card, type = undefined }) => {
    const { isLocked = false, name, price, image } = card;
    return (
        <div className={stylesConstructor.element}>
            <li className={stylesConstructor.card}>
                <ConstructorElement
                    type={type}
                    text={`${name} вверх `}
                    style={price}
                    isLocked={isLocked}
                    price={price}
                    thumbnail={image} />
            </li>
        </div>
    );
}

export default ConstructorItem;