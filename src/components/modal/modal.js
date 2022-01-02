// Шаблон попапа для блоков IngredientDetails и OrderDetails
import { useEffect } from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import {
    CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Overlay from '../modal/overlay';
import stylesModal from './modal.module.css';
// import { useState } from 'react'

const Modal = memo(({ children, closePopup }) => {
    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.code === "Escape") {
                closePopup();
            }
        })
    });

    const onClose = (event) => {
        closePopup();
    }
    return (
        <div>
            <div onClick={onClose}>
                <Overlay />
            </div>
            <div className={stylesModal.body} onClick={(event) => { event.stopPropagation() }}>
                <button className={stylesModal.button} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </div>
    );
})

Modal.propTypes = {
    closePopup: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal;