// 3 - 1(3) Блок burgerIngredients
import stylesIngredient from './burgerIngredients.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import ScrollSection from '../scrollSection/scrollSection'
import BurgerIngredientItem from './burgerIngredientItem';
import Card from './burgerIngredientMenu'
import { useRef, useState } from 'react'
import {
    Tab,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { BurgerPropTypes } from '../../utils/prop-types';


function BurgerIngredients({ ingredients, openPopup }) {
    const titledSection1 = useRef(null);
    const titledSection2 = useRef(null)
    const titledSection3 = useRef(null);

    const bun = ingredients.filter(item => item.type === 'bun');
    const sauce = ingredients.filter(item => item.type === 'sauce');
    const main = ingredients.filter(item => item.type === 'main');

    const [current, setCurrent] = useState("bun") // bun, sauce, main
    const onTabClick = (value, element) => {
        setCurrent(value)
        element.current.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section className={`${stylesIngredient.ingridients} mr-15`}>
            <h1 className={`${stylesIngredient.titul} text text_type_main-large ml-0 pl-0 pt-10 pb-5`}>Соберите бургер</h1>
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
                                return <Card item={item} key={item._id} openPopup={openPopup} />
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
                                return <Card item={item} key={item._id} openPopup={openPopup} />
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
                                return <Card item={item} key={item._id} openPopup={openPopup} />
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
  ingredients: PropTypes.arrayOf(BurgerPropTypes.isRequired)
  .isRequired,
  openPopup: PropTypes.func,
};

export default React.memo(BurgerIngredients);


