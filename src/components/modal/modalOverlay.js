// Блок закрытие попапа по ModalOverlay
import stylesModal from './modal.module.css'
import PropTypes from 'prop-types';

function ModalOverlay({ children, onClose }) {

  return (
    <div className={stylesModal.overlay} onClick={onClose}>
      {children}
    </div>
  )
}

ModalOverlay.propTypes = {
  onClick: PropTypes.func,
};

export default ModalOverlay;
