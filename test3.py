from flask import Flask, render_template, jsonify, request
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')

@app.route('/')
def home():
    articles = fetch_articles('engadget')
    return render_template('home4.html', articles=articles)

@app.route("/options")
def options():
        return render_template('options.html')

@app.route("/saved")
def saved():
        return render_template('saved.html')

def fetch_articles(domain):
    if domain not in ['techcrunch', 'engadget', 'gizmodo']:
        return []

    articles = newsapi.get_everything(
        domains=domain + '.com',
        language='en',
        sort_by='relevancy',
        page_size=12
    )

    return articles['articles']

@app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    domain = request.form.get('domain')
    articles = fetch_articles(domain)
    return jsonify(articles)


if __name__ == '__main__':
    app.run(debug=True)
