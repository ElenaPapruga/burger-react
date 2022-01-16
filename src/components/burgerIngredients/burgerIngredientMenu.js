// 3 - 3(3) Блок burgerIngredientMenu для burgerIngredients
import stylesIngredient from './burgerIngredients.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import {
    Counter,
    CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const Card = ({ item, openPopup }) => {
    return (
        <div className={`${stylesIngredient.item} ml-4 mb-10`} onClick={() => openPopup(item)}>
            <Counter count={7} />
            <picture className={`${stylesIngredient.picture} ml-4 mr-4`}>
                <img className={stylesIngredient.image} src={item.image} alt={item.name} />
            </picture>
            <span className={`${stylesIngredient.price} mt-1 mb-1 text text_type_digits-medium`}>{item.price}<CurrencyIcon style={{ paddingLeft: '9px' }} type="primary" /></span>
            <p className={`${stylesIngredient.txt} text text_type_main-default`}>{item.name}</p>
        </div >
    )
}

// Проверка типов данных компонентов
Card.propTypes = {
    item: PropTypes.shape({
        price: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }),
    openPopup: PropTypes.func.isRequired,
}


export default Card