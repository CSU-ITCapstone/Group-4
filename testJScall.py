# test.py loads dummy data for the articles
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def front():
        return render_template('index.html')

@app.route("/home")
def hometest():   
    return render_template('homeJScall.html')

@app.route("/options")
def options():
        return render_template('options.html')

@app.route("/saved")
def saved():
        return render_template('saved.html')

if __name__ == "__main__":
    app.run(debug=True)
