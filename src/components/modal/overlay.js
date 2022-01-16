// Блок закрытие попапа по overlay
import stylesModal from './modal.module.css'

function Overlay({ children, onClose }) {

  return (
    <div className={stylesModal.overlay} onClick={onclose}>
      {children}
    </div>
  )
}

export default Overlay;
