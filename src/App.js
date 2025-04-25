// App.js
import React, { useState } from 'react';
import './styles/App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DataDisplay from './components/DataDisplay';
import LoginModal from './components/LoginModal';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const [selectedUser, setSelectedUser] = useState('User A');
  const [textSize, setTextSize] = useState('medium');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // 控制 sidebar 顯示

  const users = {
    'User A': { heartRate: 75, spo2: 98, hrv: 50 },
    'User B': { heartRate: 65, spo2: 96, hrv: 48 },
    'User C': { heartRate: 85, spo2: 97, hrv: 52 },
  };
  const userList = Object.keys(users);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const changeLanguage = () =>
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');

  return (
    <div className="app-container">
      <Header
        toggleSidebar={toggleSidebar}
        changeLanguage={changeLanguage}
        openLoginModal={() => setIsLoginOpen(true)}
        size={textSize}
        setSize={setTextSize}
      />
      <div className="main-content">
        {isSidebarOpen && (
          <Sidebar
            setSelectedUser={setSelectedUser}
            selectedUser={selectedUser}
            users={userList}
            isOpen ={isSidebarOpen}
          />
        )}
        <DataDisplay
          user={users[selectedUser]}
          size={textSize}
          setSize={setTextSize}
        />
      </div>
      {isLoginOpen && <LoginModal onClose={() => setIsLoginOpen(false)} />}
    </div>
  );
}

export default App;
