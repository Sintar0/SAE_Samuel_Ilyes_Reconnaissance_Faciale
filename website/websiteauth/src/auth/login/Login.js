import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ConfettiExplosion from 'react-confetti-explosion';
import '../../css/Login.css';
import Chest1 from './images/closed.png';
import Chest2 from './images/opened.png';
import Indicator from './images/bg.png'

const Login = () => {
    const [isExploding, setIsExploding] = React.useState(false);
    const [indicatorState, setIndicatorState] = React.useState(true);
    const [isIdle, setIsIdle] = React.useState(false);
    const loginAPI = 'http://localhost:3001/auth/';
    const navigate = useNavigate();

    const tryLogin = (event) => {
        event.preventDefault();
        const titlePointer = document.querySelector('.title');
        const imgChestPointer = document.querySelector('.img-chest');
        const shadowPointer = document.querySelector('.chestShadow');
        titlePointer.innerHTML = 'Authentification en cours...';
        imgChestPointer.classList.add('waiting');
        shadowPointer.classList.add('waiting');
        imgChestPointer.removeAttribute('onClick');
        titlePointer.classList.remove('error');
        axios.post(loginAPI).then((response) => {
            const data = response.data;
            const token = data.token;
            if (!token) {
                imgChestPointer.classList.remove('waiting');
                shadowPointer.classList.remove('waiting');
                
                imgChestPointer.setAttribute('onClick', tryLogin);
                titlePointer.innerHTML = 'Vous n\'êtes pas autorisé à accéder au site vous devez être admin, cliquez sur le coffre pour vous authentifier à nouveau';
                titlePointer.classList.add('error');
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            titlePointer.innerHTML = 'Authentification réussie';
            imgChestPointer.src = Chest2;
            setIsExploding(true);
            imgChestPointer.classList.remove('waiting');
            imgChestPointer.classList.add('open');
            shadowPointer.classList.remove('waiting');
            shadowPointer.classList.add('open');
            setTimeout(() => {
                navigate('/home');
            }, 2000);

        }).catch((error) => {
            titlePointer.innerHTML = 'Une erreur est survenue, cliquez sur le coffre pour réessayer message d\'erreur: ' + error;
        });
    }

    const hideHelp = () => {
        setIndicatorState(false);
    }

    let timeoutId;

    // Function to handle cursor movement
    const handleCursorMovement = () => {
        clearTimeout(timeoutId); // Clear the previous timeout
        timeoutId = setTimeout(() => {
            // Perform the action when the cursor is idle for 5 seconds
            // Add your code here
            setIsIdle(true);
            console.log("Cursor is idle for 5 seconds");
        }, 5000);
    };

    // Attach event listener to track cursor movement
    document.addEventListener("mousemove", handleCursorMovement);

    return (
        <React.Fragment>
            <p className="title">Cliquez sur le coffre pour vous authentifier</p>
            {indicatorState &&
                <div id="indicator">
                     <img src={Indicator} alt="indicator" />
                     <div className="indicatorShadow"></div>
                </div>
            }
            <div id="chestContainer">
                <img src={Chest1} className="img-chest idle" alt="closed chest" onClick={tryLogin} onMouseOver={hideHelp}/>
                <div className="chestShadow idle"></div>
                {isExploding && 
                <ConfettiExplosion
                    particleCount={100}
                    explosionSpeed={100}
                    fadeOut={true}
                    rootId={'chestContainer'}
                    force={1}
                    colors={['#FF0000', '#00FF00', '#0000FF']}
                    xForce={1}
                    yForce={0.1}
                    zIndex={999}
                    opacity={0.7}
                    particleSize={10}
                    floorHeight={10}
                    floorWidth={0}
                    explosionHeight={1000}
                    explosionWidth={100}
                    autoStart={false}
                    duration={5000}
                    interval={100}
                    maxAngle={90}
                    minAngle={0}
                    rotation={0}
                    maxRotation={90}
                    minRotation={0}
                    type={'triangle'}
                    particleStyle={{
                        position: 'absolute',
                        borderRadius: '50%',
                        backgroundColor: 'red',
                        width: '10px',
                        height: '10px'
                    }}
                    style={{
                        position: 'absolute',
                        top: "50%",
                        left: "50%",
                        transform: 'translate(-50%, -50%)',
                        overflow: 'hidden',
                        zIndex: 999
                    }}
                />}
                <div className="help">
                    {isIdle &&
                    <Link to="/help">besoin d'aide pour se connecter ?</Link>
                    }
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;