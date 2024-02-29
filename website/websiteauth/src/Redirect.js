import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";

const Redirect = (props) => {

    const navigate = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
        return navigate('/home');
    }

    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
}

export default Redirect;