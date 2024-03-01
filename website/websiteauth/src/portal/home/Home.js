import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/home.css';

const Home = () => {
	return (
		<React.Fragment>
			<div className="homecontainer">
				<h1>SAE - Reconaissance Faciale</h1>
				<p>
					Bienvenue sur la page d'accueil de SAE - Reconaissance Faciale. Cette page n'est visible que par tous les utilisateurs connectés. <br />
					Vous pouvez naviguer vers les différents Modèles en cliquant sur les liens dans le menu burger en haut à gauche. <br />
					(les liens menant vers les notebooks sur google collab ne servent qu'à des fins de démonstration, les opérations sont a exécuter sur les notebooks locaux.)
				</p>
			</div>
		</React.Fragment>
	)
}

export default Home;