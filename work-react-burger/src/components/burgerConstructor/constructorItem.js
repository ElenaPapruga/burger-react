import PropTypes from 'prop-types';
import stylesConstructor from './burgerConstructor.module.css';
import { BurgerPropTypes } from '../../utils/prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    DragIcon, /// тчки слева
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorItem = ({ card, type = undefined, style }) => {
    const { isLocked = false, name, price, image } = card;
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li className={stylesConstructor.card} style={style}>
                {!isLocked &&
                    <div>
                        <DragIcon type="primary" />
                        <div className="m-1"></div>
                    </div>}
                <ConstructorElement type={type} text={name} price={price} isLocked={isLocked} thumbnail={image} />
            </li>
        </div>
    );
}

// Проверка типов данных компонентов
ConstructorItem.propTypes = {
    card: BurgerPropTypes.isRequired,
    type: PropTypes.string,
    price: PropTypes.number,
};

export default ConstructorItem;