// 3 - 1(3) Блок burgerIngredients
// import React from 'react';
import stylesIngredient from './burgerIngredients.module.css';
// import { BurgerPropTypes } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import ScrollSection from '../scrollSection/scrollSection'
// import Portal from '../portal/portal.js'
import BurgerIngredientItem from './burgerIngredientItem';
import Card from './burgerIngredientMenu'
import { useRef, useState } from 'react'
import {
    Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import stylesModal from '../modal/modal.module.css';
import OrderDetails from "../orderDetails/orderDetails";

function BurgerIngredients(props) {
    const titledSection1 = useRef(null);
    const titledSection2 = useRef(null);
    const titledSection3 = useRef(null);

    const bun = props.data.filter(item => item.type === 'bun');
    const sauce = props.data.filter(item => item.type === 'sauce');
    const main = props.data.filter(item => item.type === 'main');

    const [current, setCurrent] = useState("bun") // bun, sauce, main
    const onTabClick = (value, element) => {
        setCurrent(value)
        element.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className={`${stylesIngredient.ingridients} mr-15`}>
            <h1 className={`${stylesIngredient.titul} text text_type_main-large ml-0 pl-0 pt-10 pb-5`}>Соберите бургер</h1>
            {/*<Modal className={stylesModal.popup}>*/}
            {/*    <OrderDetails />*/}
            {/*</Modal>*/}
            <div className={stylesIngredient.wrapper}>
                <Tab value="bun" active={current === "bun"} onClick={value => {
                    onTabClick(value, titledSection1)
                }}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === "sauce"} onClick={value => {
                    onTabClick(value, titledSection2)
                }}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === "main"} onClick={value => {
                    onTabClick(value, titledSection3)
                }}>
                    Начинки
                </Tab>
            </div >

            <ScrollSection
                onScroll={
                    event => {
                        const container = event.target
                        const scrollPosition = container.scrollTop
                        const positionOfSection2 = titledSection2.current.offsetTop
                        const positionOfSection3 = titledSection3.current.offsetTop
                        if (scrollPosition + 200 <= positionOfSection2) {
                            setCurrent('bun')
                        } else if (scrollPosition + 200 <= positionOfSection3) {
                            setCurrent("sauce")
                        } else {
                            setCurrent("main")
                        }
                    }
                }
            >
                <BurgerIngredientItem name="bun" title='Булки' ref={titledSection1}>
                    <div className={stylesIngredient.container} name="bun">
                        <h2 className={`text text_type_main-medium ${stylesIngredient.name}`}>
                        </h2>
                        <ul className={`${stylesIngredient.list} text text_type_main-medium pl-4 pr-4 pt-6 pb-1 m-0`}>
                            {bun.map(item => {
                                return <Card item={item} key={item._id} />
                            })
                            }
                        </ul>
                    </div>
                </BurgerIngredientItem>

                <BurgerIngredientItem name="sauce" title='Соусы' ref={titledSection2}>
                    <div className={stylesIngredient.container} name="sauce">
                        <h2 className={`text text_type_main-medium ${stylesIngredient.name}`}>
                        </h2>
                        <ul className={`${stylesIngredient.list} text text_type_main-medium pl-4 pr-4 pt-6 pb-1 m-0`}>
                            {sauce.map(item => {
                                return <Card item={item} key={item._id} />
                            })
                            }
                        </ul>
                    </div>
                </BurgerIngredientItem>

                <BurgerIngredientItem name="main" title='Начинки' ref={titledSection3}>
                    <div className={stylesIngredient.container} name="main">
                        <h2 className={`text text_type_main-medium ${stylesIngredient.name}`}>
                        </h2>
                        <ul className={`${stylesIngredient.list} text text_type_main-medium pl-4 pr-4 pt-6 pb-1 m-0`}>
                            {main.map(item => {
                                return <Card item={item} key={item._id} />
                            })
                            }
                        </ul>
                    </div>
                </BurgerIngredientItem>

            </ScrollSection>
        </section >

    )
}

// Проверка типов данных компонентов
BurgerIngredients.propTypes = {
    bun: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
    })).isRequired,

    sauces: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
    })).isRequired,

    main: PropTypes.arrayOf(PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        proteins: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        carbohydrates: PropTypes.number.isRequired,
        calories: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        image_mobile: PropTypes.string.isRequired,
        image_large: PropTypes.string.isRequired,
    })).isRequired,
}

export default BurgerIngredients


