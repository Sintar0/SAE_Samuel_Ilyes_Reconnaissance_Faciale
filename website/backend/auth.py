# import time
# def auth():
#     # sleep 10 seconds
#     time.sleep(1)
#     return {"token": True}  # {"authenticated": False} if not authenticated

##############################################
# Script pour l'authentification sur le site #
##############################################

"""
Ce script réalise l'authentification sur le site à l'aide du réseau de neurones convolutif entrainé précédémment.
"""

# Importation des librairies
import numpy as np
import cv2 
from tensorflow import keras

def authentification():
    # Chargement du modèle
    model = keras.models.load_model('./models/model.keras')
    # Fonction pour l'authentification
    cascade_visage = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    camera = cv2.VideoCapture(0)
    authentifications = []
    while True:
        
        ret, frame = camera.read()
        
        if ret:
            
            gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
            face_coordinates = cascade_visage.detectMultiScale(gray, 1.3, 5)

            for (x, y, w, h) in face_coordinates:
                
                face = frame[y:y + h, x:x + w, :]
                face_resized = cv2.resize(face, (50, 50)).reshape(1, 50, 50, 3) / 255.0
                prediction = model.predict(face_resized)
                print("niveau de la pred : ", prediction[0][0])
                if prediction[0][0] <= 0.5:
                    authentifications.append(0)
                    text = 'Non Admis'
                    cv2.putText(frame, text, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
                    cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 0, 255), 2)
                else:
                    text = 'Admis'
                    authentifications.append(1)
                    cv2.putText(frame, text, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 255, 0), 2)
                    cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

            cv2.imshow('La vrais reconnaissance facial', frame)
            
            if cv2.waitKey(1) == 27 or len(authentifications) >= 20:
                cv2.destroyAllWindows()
                camera.release()
                break

    if sum(authentifications) / len(authentifications) > 0.8: # Si plus de 80% des résultats sont positifs, on renvoie un token d'authentification OK
        return {"token": True}
    elif sum(authentifications) / len(authentifications) < 0.8:
        return {"token": False} # Sinon, on renvoie un token d'authentification NOK
    
# authentification() # Pour tester le script en local