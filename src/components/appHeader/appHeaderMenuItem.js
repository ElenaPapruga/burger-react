// 1 - 3(3) Блок Хедер-appHeaderMenuItem
// import React from 'react';
import stylesHader from './appHeader.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';

//Отрисовываем элементы children в хедере
function AppHeaderMenuItem({ text, children }) {
  return (
    <>
      <a href="/" className={stylesHader.unit}>
        <span className="text text_type_main-small">
          {children}
        </span>
        <p className="text text_type_main-default pl-2 pr-5 pb-4 pt-4">{text}</p>
      </a>
    </>
  );
}

export default AppHeaderMenuItem

