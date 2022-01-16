// 1 - 3(3) Блок Хедер-appHeaderMenuItem
// import React from 'react';
import stylesHader from './appHeader.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

//Отрисовываем элементы children в хедере
function AppHeaderMenuItem({ text, children }) {
  return (
    <div>
      <a href="/" className={stylesHader.unit}>
        <span className={`${stylesHader.icon2} pr-2`}>
          {children}
        </span>
        <p className="text text_type_main-default pr-2 pb-4 pt-4">{text}</p>
      </a>
    </div>
  );
}

AppHeaderMenuItem.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
};

export default AppHeaderMenuItem

