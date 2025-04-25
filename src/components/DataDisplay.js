import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/App.css';

const DataDisplay = ({ user, size, setSize }) => {
  const { t } = useTranslation();

  if (!user) return <div className="data-display">No user selected</div>;

  return (
    <div className={`data-display text-${size}`}>
      <div>
        <strong>{t('heartRate')}:</strong> {user.heartRate} bpm
      </div>
      <div>
        <strong>{t('spo2')}:</strong> {user.spo2} %
      </div>
      <div>
        <strong>{t('hrv')}:</strong> {user.hrv} ms
      </div>
    </div>
  );
};

export default DataDisplay;
