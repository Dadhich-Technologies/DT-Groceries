import React, { useContext, useState } from 'react';
import Login from './Login';
import Register from './Register';
import { LoginContext } from '../../Contexts/Login';

const Authentication = () => {
  const [atlogin, setAtLogin] = useState(true);
  const { open, handleClose } = useContext(LoginContext);

  const handleTabClick = (isLogin, event) => {
    event.stopPropagation();
    setAtLogin(isLogin);
  };

  const handleOverlayClick = () => {
    handleClose();
  };

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-green-800 bg-opacity-10 z-130"
          onClick={handleOverlayClick}
        >
          <div className="bg-white rounded shadow-lg p-6 max-w-full min-w-[24rem] z-130" onClick={(e) => e.stopPropagation()}>
            <div className="flex gap-4 mb-4">
              <h6
                onClick={(e) => handleTabClick(true, e)}
                className={`cursor-pointer ${atlogin ? 'text-primary-green underline' : ''}`}
              >
                Login
              </h6>
              <h6
                onClick={(e) => handleTabClick(false, e)}
                className={`cursor-pointer ${!atlogin ? 'text-primary-green underline' : ''}`}
              >
                Sign Up
              </h6>
            </div>
            <div className="mb-4">
              {atlogin ? <Login /> : <Register />}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Authentication;
