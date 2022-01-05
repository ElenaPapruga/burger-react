// Шаблон попапа для блоков IngredientDetails и OrderDetails
import { useEffect } from 'react';
import { memo } from 'react';
import PropTypes from 'prop-types';
import {
    CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal/modalOverlay';
import stylesModal from './modal.module.css';

const Modal = memo(({ children, closePopup }) => {
    useEffect(() => {
        document.addEventListener('keydown', function (event) {
            if (event.code === "Escape") {
                closePopup();
            }
        })
    }, [closePopup]);

    useEffect(() => {
        document.addEventListener('keydown', closePopup);

        return (() => {
            document.removeEventListener('keydown', closePopup);
        })
    }, [closePopup])

    const onClose = (event) => {
        closePopup();
    }
    return (
        <div>
            <div onClick={onClose}>
                <ModalOverlay />
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