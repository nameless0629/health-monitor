import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

function LoginModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="modal-backdrop">
      <div className="login-modal">
        <h2>{t("login")}</h2>
        <input type="text" placeholder={t("username")} />
        <input type="password" placeholder={t("password")} />
        <button>{t("submit")}</button>
        <button onClick={onClose}>{t("close")}</button>
      </div>
    </div>
  );
}

export default LoginModal;
