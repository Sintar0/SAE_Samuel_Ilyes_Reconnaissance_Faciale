import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/help.css';
import backArrow from '../images/arrow_back.png';

const Help = () => {
	const handleBackArrow = () => {
		window.history.back();
	}
	return (
		<React.Fragment>
			<div className="helpcontainer">
				<nav className='helpNav'>
                	<div className="backButtonWrapper">
                        <div className="backButton" onClick={handleBackArrow}>
                            <img src={backArrow} alt="back" />
                    	</div>
					</div>
				</nav>
				<main className='helpMain'>
					<h1>Aide pour ce connecter</h1>
					<p>
						Welcome to the help page for the SAE - Reconaissance Faciale. This page is visible to all users.
					</p>
				</main>
			</div>
		</React.Fragment>
	)
}

export default Help;