import React from "react";
import { useNavigate, Link } from "react-router-dom";
import '../../css/navbar.css';
import LogoutIcon from '../images/logout.png';
import HomeIcon from '../images/home.png';

const PortalNavbar = () => {

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }

    const handleMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".verticalNavbar");
        const lines = document.querySelectorAll(".lines");

        navLinks.classList.toggle("open");
        for (var i = 0; i<lines.length; i++) {
            lines[i].classList.toggle("open");
        }
    }

    return (
        <React.Fragment>
            <nav className="verticalNavbar">
                <Link to="/home" className="vNavLink">Home</Link>
                <hr className="line" />
                <Link to="/knn" className="vNavLink">KNN</Link>
                <Link to="/lr" className="vNavLink">LR</Link>
                <Link to="/svc" className="vNavLink">SVC</Link>
                <Link to="/bt" className="vNavLink">BinaryTree</Link>
                <hr className="line" />
                <Link to="/nn" className="vNavLink">NeuralNetwork</Link>
                <Link to="/nnb" className="vNavLink">NeuralNetwork (version binaire)</Link>
                <Link to="/cnn" className="vNavLink">CNN</Link>
            </nav>
            <nav className="horizontalNavbar">
                <div class="hamburger" onClick={handleMenu}>
                    <div class="lines first"></div>
                    <div class="lines mid"></div>
                    <div class="lines last"></div>
                </div>
                    <Link to="/home" className="home">
                        <img src={HomeIcon} alt="home" />
                    </Link>
                    <div className="logoutButtonWrapper">
                        <div className="logoutButton" onClick={logout}>
                            <img src={LogoutIcon} alt="logout" />
                        </div>
                    </div>
            </nav>
        </React.Fragment>
    );
}

export default PortalNavbar;