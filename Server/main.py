from flask import Flask, request, jsonify
import random, pickle
app = Flask(__name__)

@app.route('/')
def process_request():
    # twitter_text = request.args['text']
    result = {}
    randNum = random.random()
    if randNum < 0.5:
        result['leak'] = True
    else:
        result['leak'] = False
    return result

if __name__ == "__main__":
    app.run(debug = True, host = "0.0.0.0")