from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"

@app.route("/home")
def home():
    return "Welcome Home!"

if __name__=="__main__":
    app.run()