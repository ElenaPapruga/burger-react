// Компонент для блока burgerConstructor
import stylesConstructor from './burgerConstructor.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import {
    ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ConstructorItem = (...props) => {

    return (
        <div className={stylesConstructor.element}>
            <ConstructorElement
                type="top"
                text="Краторная булка N-200i (верх)"
                price={props.price}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
            <ConstructorElement
                text="Говяжий метеорит (отбивная)"
                price={3000}
                thumbnail={"https://code.s3.yandex.net/react/code/meat-04.png"}
            />
            <ConstructorElement
                text="Биокотлета из марсианской Магнолии"
                isLocked={true}
                price={424}
                thumbnail={"https://code.s3.yandex.net/react/code/meat-01.png"}
            />
            <ConstructorElement
                text="Соус Spicy-X"
                price={50}
                thumbnail={"https://code.s3.yandex.net/react/code/sauce-02.png"}
            />
            <ConstructorElement
                text="Мясо бессмертных моллюсков Protostomia"
                price={1337}
                thumbnail={"https://code.s3.yandex.net/react/code/meat-02.png"}
            />
            <ConstructorElement
                text="Соус традиционный галактический"
                price={15}
                thumbnail={"https://code.s3.yandex.net/react/code/sauce-03.png"}
            />
            <ConstructorElement
                text="Соус фирменный Space Sauce"
                price={80}
                thumbnail={"https://code.s3.yandex.net/react/code/sauce-04.png"}
            />
            <ConstructorElement
                text="Плоды Фалленианского дерева"
                price={874}
                thumbnail={"https://code.s3.yandex.net/react/code/sp_1.png"}
            />
            <ConstructorElement
                text="Хрустящие минеральные кольца"
                price={300}
                thumbnail={"https://code.s3.yandex.net/react/code/mineral_rings.png"}
            />
            <ConstructorElement
                text="Соус с шипами Антарианского плоскоходца"
                price={88}
                thumbnail={"https://code.s3.yandex.net/react/code/sauce-01.png"}
            />
            <ConstructorElement
                text="Кристаллы марсианских альфа-сахаридов"
                price={762}
                thumbnail={"https://code.s3.yandex.net/react/code/core.png"}
            />
            <ConstructorElement
                isLocked={true}
                text="Краторная булка N-200i"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
            <ConstructorElement
                isLocked={true}
                text="Мини-салат Экзо-Плантаго"
                price={4400}
                thumbnail={"https://code.s3.yandex.net/react/code/salad.png"}
            />
            <ConstructorElement
                isLocked={true}
                text="Филе Люминесцентного тетраодонтимформа"
                price={988}
                thumbnail={"https://code.s3.yandex.net/react/code/meat-03.png"}
            />
            <ConstructorElement
                isLocked={true}
                text="Сыр с астероидной плесенью"
                price={4142}
                thumbnail={"https://code.s3.yandex.net/react/code/cheese.png"}
            />
            <ConstructorElement
                isLocked={true}
                text="Флюоресцентная булка R2-D3"
                price={988}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-01.png"}
            />
            <ConstructorElement
                type="bottom"
                isLocked={true}
                text="Краторная булка N-200i (низ)"
                price={200}
                thumbnail={"https://code.s3.yandex.net/react/code/bun-02.png"}
            />
        </div>
    );
}

export default ConstructorItem;