//Для блока IngredientDetails
import stylesScroll from './scrollSection.module.css'
import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const ScrollSection = ({ children, onScroll }) => {
  return <section
    className={stylesScroll.scrollSection}
    onScroll={onScroll}
  >
    {children}
  </section>
}

ScrollSection.propTypes = {
  onScroll: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default ScrollSection