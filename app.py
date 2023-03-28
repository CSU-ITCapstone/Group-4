from flask import Flask, render_template
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')


@app.route("/home")
def home():
    top_headlines = newsapi.get_top_headlines(category='technology',
                                              language='en',
                                              country='us')
    articles = top_headlines['articles']
    return render_template('home.html', articles=articles)


if __name__ == "__main__":
    app.run(debug=True)
