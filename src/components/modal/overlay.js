// Блок закрытие попапа по overlay
import PropTypes from 'prop-types';
// import Modal from './modal';
import stylesModal from './modal.module.css'


function Overlay({ children, close }) {
  return (
    <div className={stylesModal.overlay} onClick={close}>
      {children}
    </div>
  )
}


Overlay.propTypes = {
  children: PropTypes.element
}

export default Overlay;

// <img src={CloseIcon} alt='Закрытие попапа' className={`${stylesOrder.orderClose} mt-15 mr-10`} type="primary" />