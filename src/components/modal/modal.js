// Шаблон попапа для блоков IngredientDetails и OrderDetails
import { useEffect } from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import {
    CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal/modalOverlay';
import stylesModal from './modal.module.css';

const Modal = memo(({ children, closePopup}) => {
    useEffect(() => {
        const closeByEscape = (event) => {
            if (event.code === "Escape") {
                closePopup(event);
            }
        };
        window.addEventListener("keydown", closeByEscape);

        return () => {
            window.removeEventListener("keydown", closeByEscape);
        };
    }, [closePopup]);


    const onClose = (event) => {
        closePopup(event);
    }

    return (
        <div>
            <div className={stylesModal.body} onClick={(event) => { event.stopPropagation() }}>
                <button className={stylesModal.button} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
            <ModalOverlay onClose={onClose} />
        </div>
    );
})

Modal.propTypes = {
    closePopup: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal;