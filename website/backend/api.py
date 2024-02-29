from flask import Flask, request, jsonify
from flask_cors import CORS  # Import the CORS extension
from auth import auth as auth_func  # Import the function from the script.py file

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/auth/', methods=['POST'])
def auth_route():
    try:
        auth_result = auth_func()
        return auth_result

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(port=3001)