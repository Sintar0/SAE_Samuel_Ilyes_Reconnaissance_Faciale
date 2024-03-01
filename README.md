
### MESSAL Ilyes, CHARTON Samuel, "_Gaspart Dorian_"

## Introduction 

Ce document vise à rendre compte du travail effectué lors de cette semaine de SAE. Il permettra de faire le faire le point sur les nouvelle fonctionnalité que nous avons rajouté par rapport au sujet de base ; nous aborderons la procédure d'installation du site web (soit, une application concrète de ce qui a été implémenté pendant la semaine), notamment les dépendances nécessaire à son fonctionnement.

## Ce qui change par rapport au sujet de base 

 - Différents algorithmes d'apprentissage ont été adapté pour permettre la reconnaissance faciale parmi lesquelles on peut citer la régression logistique , le support vecteur machine, l'arbre binaire de décision en plus du KNN présent à la base. Chaque algorithme d'apprentissage a fait l'objet d'une petite présentation et de commentaires détaillés pour ne pas seulement implémenter « bêtement» les différentes fonctions de la librairie `sklearn`. 
 
 - Un réseau de neurones a lui aussi était implémenté en prenant soin de présenter de manière précise son fonctionnement. L'ensemble des algorithmes d'apprentissage et le réseau de neurones permettent de reconnaître un visage et son nom.
 
	- Par la suite , le dataset a été adapté pour permettre la classification binaire (il sera d'ailleurs utilisé jusqu'à la fin du projet) c'est aussi que j'ai pu implémenter par la suite j'ai pu implémenter une variante du réseau de neurones qui réalise la classification binaire . Il ne restait plus l'implémentation d'un réseau de neurone convolutive. Il n'a pas été une mince à implémenter mais cela m'a permis d'apprendre énormément de choses, j'ai essayé de détailler chacune des étapes dans le notebook avec des exemples pratiques. En parallèle de mon travail, Samuel s'occupait du site web
    
## Le site web

Comme dis en introduction, le site web représente une application pratique de la reconnaissance faciale.

Concrètement , après avoir exécuté le notebook CNN le modèle entraîné est sauvegardé dans un dossier « modèle».

Lors d'une tentative de connexion, le site web envoie une requête HTTP à une API flask (également fournie). Cette dernière la reçois et exécute la fonction `authentification` se trouvant dans le fichier `auth.py`. Cette fonction va alors rappeler le CNN et tester l'admission de la personne. Elle exécute plusieurs prédictions à la suite et si 80 % des prédictions admettent l'utilisateur, alors celui-ci est autorisé à rentrer.

### Comment faire fonctionner le site ?

### Les librairies suivante sont nécessaires pour faire fonctionner le site.

- `cv2` (Librairie d'images)
-  `numpy` (Utilisé dans les opérations entre matrices)
- `tensorflow` (Librairie de machine Learning, utilisé dans le cadre du CNN)

 ℹ️ Afin de vous faciliter l'installation du site, vous pourrez trouver le script `install-and-lunch.sh` à la racine du projet qui Installe automatiquement les librairies à la bonne version, lance l'api en fond et ouvre le site. ℹ️

🪧 Avant de lancer le script, veuillez d'abord lancer le notebook `6_CNN.ipynb` afin de créer un model avec le dataset, cela assurera que le model crée correspond au spécification technique de votre machine 🪧


# 🛠️ **Dans le cas ou le script n'a pas marché suivez les points ci-dessous :**
1. Le script ne se lance pas :
	- Il se peut que le script ne se lance pas car il n'a pas les droit d'exécution sur votre pc vous pouvez faire `chmod -x install-and-lunch.sh`
	- Si le premier point n'a pas résolu votre problème vous pouvez essayer de l'exécuter en administrateur.
	- Si votre problème n'est toujours pas résolu suivez touts les points suivants.
2. Le script bloque aux installations des librairies:
	- Le projet à été testé avec la version 3.9.13 de python et 23.1 de pip, si la version utilisée pour tester est supérieure à la votre vous devriez peut-être les mettre à jour.
	- Si vous bloquez toujours à l'installation des librairies vous pouvez essayer de les installer une par une à la main (il n'y en a pas beaucoup) et suivre tout les points suivants.
3. L'API s'est correctement lancée mais le site ne s'est pas ouvert automatiquement :
	- Vous pouvez manuellement aller ouvrir le site web en allant dans `website/websiteauth/` et en ouvrant `index.html`
	- Se référer au point n°5 si le point précédent n'a pas résolu votre problème
4. L'API ne s'est pas lancée/j'ai une erreur lors de la tentative de connexion :
	- L'API se lance automatiquement dans le terminal que vous avez utilisé pour exécuter le script, si vous l'avez fermé il faut réexécuter le script ou lancer le fichier `api.py` dans `website/backend/` avec python.
	- Si l'API ne se lance pas vous pouvez avoir un problème de librairie c.f. point n°2
	- Si l'API se lance mais que vous avez toujours une erreur, vérifiez si le fichier `model.keras` est bien dans le répertoire `website/backend/models` si il n'y est pas vous avez peut-être oublié d'exécuter le notebook `6_CNN.ipynb` pour créer le dataset.
	- Si aucun des points ci-dessus n'a résolu votre problème voir point n°5.
5. Aucun des points précédents ont résolu mon problème :
	- Vous pouvez essayer de créer votre propre dataset en exécutant le notebook `dataset_binaire.ipynb` dans `dataset/` et en relançant `6_CNN.ipynb`. 
	- Si aucun des points ci-dessus n'a été utile veuillez nous contacter par mail pour que l'on tente de vous aider.
		- Le site possède aussi une section "aide" si vous venez à patienter devant l'écran d'accueil

### Fonctionnalité expérimentale

il y a quelques fonctionnalités qui ne sont pas encore pleinement implémentées,

(il est très fortement conseillé de faire une sauvegarde des features et target avant de commencer à essayer)

La première fonctionnalité expérimentale consiste à remplir le dataset au préalable de visage, l'idée était que tous ces visages soient considérés comme non admis et que, le nombre de photos du visage admis cet équivalent au nombre de visages non admis. Cela aurait permis un dataset plus « réel » néanmoins, cette fonctionnalité est quasiment disponible, en effet si vous lancez `dataset_population.`

La seconde fonctionnalité en phase d'expérimentation offrirait un aperçu des performances de tous nos modèles. Chaque modèle est sauvegardé sous forme de fichier .pkl dans le répertoire `learning_algorithm/models/`. Toutefois, cette fonctionnalité nécessite encore des ajustements. Bien que nous parvenions à traiter les données issues des différentes sauvegardes de modèles, les résultats obtenus, lorsqu'on tente de les visualiser, s'avèrent être non exploitables pour le moment. En conclusion, ce document a présenté un compte rendu détaillé des avancées réalisées durant cette semaine de SAE, soulignant les applications et améliorations apportées au projet de base. Nous avons réussi à intégrer divers algorithmes d'apprentissage sans rencontrer de difficultés majeures pour la reconnaissance faciale, et nous avons également adapté nos données à un nouveau dataset pour une méthode de classification binaire efficace, en veillant à décrire précisément chaque étape de notre démarche. Le développement du site web a permis de mettre en pratique ces progrès technologiques, illustrant comment nos recherches pourraient potentiellement être utilisées dans un contexte professionnel, par exemple. Malgré nos efforts pour enrichir le sujet de départ, certaines fonctionnalités expérimentales restent à peaufiner et ne sont pas encore opérationnelles. Cette semaine de projet nous a permis d'acquérir de nombreuses connaissances. Certaines de nos réalisations ont été plus ingénieuses que d'autres, mais dans l'ensemble, les résultats ont été concluants et en constante amélioration.

## Conclusion 

Nos efforts pour enrichir le sujet de départ se sont avéré positif, on a compléter le sujet initial mais certaines fonctionnalités expérimentales que nous voulions ajouté restent à peaufiner et ne sont pas encore opérationnelles. Cette semaine de projet nous a permis d'acquérir de nombreuses connaissances. Certaines de nos réalisations ont été plus ingénieuses que d'autres, mais dans l'ensemble, les résultats ont été concluants et en constante amélioration.