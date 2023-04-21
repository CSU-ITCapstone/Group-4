from flask import Flask, render_template, jsonify, request, session
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')


@app.route('/')
def home():
    articles = [fetch_articles()]
    return render_template('singleCall.html', articles=articles)


def fetch_articles():
    articles = newsapi.get_everything(
        domains = 'techcrunch.com, engadget.com, wired.com, ign.com, indiewire.com, kotaku.com, reuters.com, bloomberg.com, marketwatch.com',
        language ='en'
    )

    return articles['articles']


@ app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    articles = fetch_articles()
    return jsonify(articles)


@ app.route("/options")
def options():
    return render_template('options.html')


@ app.route("/saved")
def saved():
    return render_template('saved.html')


if __name__ == "__main__":
    app.run(debug=True)
