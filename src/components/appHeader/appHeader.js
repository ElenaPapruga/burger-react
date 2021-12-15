// 1 - 1(3) Блок Хедер-appHeader
// import React from 'react';
import AppHeaderMenu from './appHeaderMenu';
import stylesHader from './appHeader.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';

//Отступы и стили блока header
const AppHeader = () => {
  return (
    <header className={stylesHader.header}>
      <AppHeaderMenu />
    </header>
  );
}

export default AppHeader

