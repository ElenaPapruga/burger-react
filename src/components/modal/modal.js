import { useEffect } from 'react';
import { memo } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {
    CloseIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import Overlay from '../modal/overlay';
import stylesModal from './modal.module.css';

const Modal = memo(({ children, closePopup }) => {
    useEffect(() => {
        document.addEventListener('keydown', function(event) {
            if (event.code === "Escape") {
                closePopup();
            }
        })
    }, [children]);

    const onClose = (e) => {
        closePopup();
    }

    return (
        <Overlay onClose={onClose}>
            <div className={stylesModal.body} onClick={(e) => { e.stopPropagation() }}>
                <button className={stylesModal.button} onClick={onClose}>
                    <CloseIcon type="primary" />
                </button>
                {children}
            </div>
        </Overlay>
    );
})

Modal.propTypes = {
    togglePopup: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
}

export default Modal;