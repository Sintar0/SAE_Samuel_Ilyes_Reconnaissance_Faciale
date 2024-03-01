import React from 'react';
import '../../css/home.css';

const NeuralNetwork = () => {
	return (
		<React.Fragment>
			<div className="homecontainer">
				<h1>NeuralNetwork</h1>
				<p>
				Première implémentation du réseau de neurones, l'ensemble de son fonctionnement, ses paramètres (poids et biais) ainsi que ces 2 fonctions principales : Aggrégation et Activation ont été expliquées dans le notebook. <br />
				Vous pourrez trouver le en cliquant <a target="_blank" rel="noopener noreferrer" href='https://drive.google.com/file/d/1mU5gAZiKquxPxYLxxLIGE1kUEg_AVyfI/view?usp=sharing'>ici</a>
				</p>
			</div>
		</React.Fragment>
	)
}

export default NeuralNetwork;