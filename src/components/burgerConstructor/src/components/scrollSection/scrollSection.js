//Для блока IngredientDetails
import stylesScroll from './scrollSection.module.css'
import '@ya.praktikum/react-developer-burger-ui-components';

const ScrollSection = ({ children, onScroll }) => {
  return <section
    className={stylesScroll.scrollSection}
    onScroll={onScroll}
  >
    {children}
  </section>
}

export default ScrollSection