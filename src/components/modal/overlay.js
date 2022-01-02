// Блок закрытие попапа по overlay
import PropTypes from 'prop-types';
import stylesModal from './modal.module.css'

function Overlay({ children, onClose }) {

  return (
    <div className={stylesModal.overlay} onClick={onclose}>
      {children}
    </div>
  )
}

Overlay.propTypes = {
  children: PropTypes.element
}

export default Overlay;
