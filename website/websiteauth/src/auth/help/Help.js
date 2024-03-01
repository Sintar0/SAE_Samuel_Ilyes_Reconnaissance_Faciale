import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/help.css';
import backArrow from '../images/arrow_back.png';

const Help = () => {
    const navigate = useNavigate();
	const handleBackArrow = () => {
		navigate('/login')
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
					<h1>Aide pour se connecter</h1>
					<p>
					Vous pouvez verifier ces quelques points si vous avez des problèmes pour vous connecter: <br />
					- L'API se lance automatiquement dans le terminal que vous avez utilisé pour exécuter le script, si vous l'avez fermé il faut réexécuter le script ou lancer le fichier <span>api.py</span> dans <span>website/backend/</span> avec python. <br />
					- Si l'API ne se lance pas vous pouvez avoir un problème de librairie c.f. point n°2<br />
					- Si l'API se lance mais que vous avez toujours une erreur, vérifiez si le fichier <span>model.keras</span> est bien dans le répertoire <span>website/backend/models</span> si il n'y est pas vous avez peut-être oublié d'exécuter le notebook <span>6_CNN.ipynb</span> pour créer le dataset.<br />
					- Si l'API est bien lancée vous pouvez essayer de créer votre propre dataset en exécutant le notebook <span>dataset_binaire.ipynb</span> dans <span>dataset/</span> et en relançant <span>6_CNN.ipynb</span>. <br />
					<strong>Si aucun des points ci-dessus n'a été utile veuillez nous contacter par mail pour que l'on tente de vous aider.</strong><br />
					</p>
				</main>
			</div>
		</React.Fragment>
	)
}

export default Help;