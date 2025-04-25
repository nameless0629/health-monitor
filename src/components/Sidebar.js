import React from "react";
import "../styles/App.css";

const Sidebar = ({ setSelectedUser, selectedUser, users, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      {users.map((user, index) => (
        <React.Fragment key={user}>
          <div
            className={`user-option ${selectedUser === user ? 'selected' : ''}`}
            onClick={() => setSelectedUser(user)}
          >
            {user}
          </div>
          {index < users.length - 1 && <hr className="user-divider" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Sidebar;
