// Header.js
import React from 'react';
import '../styles/App.css';
import { useTranslation } from 'react-i18next';

const Header = ({ toggleSidebar, changeLanguage, openLoginModal, size, setSize }) => {
  const { t } = useTranslation();

  return (
    <div className="header">
      <div className="menu-icon" onClick={toggleSidebar}>☰</div>
      <div className="title">{t('title')}</div>
      <div className="controls">
        <label>{t('textSize')}:</label>
        <select value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="small">{t('small')}</option>
          <option value="medium">{t('medium')}</option>
          <option value="large">{t('large')}</option>
        </select>
        <button onClick={changeLanguage}>{t('switchLanguage')}</button>
        <button onClick={openLoginModal}>{t('login')}</button>
      </div>
    </div>
  );
};

export default Header;
