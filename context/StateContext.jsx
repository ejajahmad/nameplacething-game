import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [loginData, setLoginData] = useState({
        username: '',
        roomId: ''
    });

    return (
        <Context.Provider
            value={{
                isLogin, setIsLogin,
                loginData, setLoginData
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useStateContext = () => useContext(Context);
