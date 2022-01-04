// Компонент для блока burgerConstructor
import stylesConstructor from './burgerConstructor.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


const ConstructorItem = ({ data, position }) => {
    const textDetail = position === 'bottom' ? '(низ)' : '(верх)';
    return (
        <div className={stylesConstructor.element}>
            {data &&
                <ConstructorElement
                    type={position}
                    isLocked={true}
                    text={`${data.name} ${textDetail}`}
                    price={data.price}
                    thumbnail={data.image}
                    alt={data.name}
                />
            }
        </div>
    );
}

// Проверка типов данных компонентов
ConstructorItem.propTypes = {
    data: PropTypes.shape({
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
    position: PropTypes.string.isRequired,
}

export default ConstructorItem;