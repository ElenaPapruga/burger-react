import stylesConstructor from './burgerConstructor.module.css';
import PropTypes from 'prop-types';
import {
    DragIcon,
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';

const ConstructorSheet = ({ data, type }) => {
    return (
        <ul className={stylesConstructor.wrapper}>
            {data.map((item) => (
                <li className={stylesConstructor.sheet} key={item._id}>
                    <div className={stylesConstructor.cards} >
                        <DragIcon type="primary" />
                        <div className={`${stylesConstructor.elements} pb-4`}>
                            <ConstructorElement
                                type={type}
                                text={item.name}
                                price={item.price}
                                thumbnail={item.image}
                                alt={item.name}
                            />
                        </div>
                    </div>
                </li>
            ))
            }
        </ul>
    );
}

ConstructorSheet.propTypes = {
    item: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
    }),
    type: PropTypes.string,
}

export default ConstructorSheet;