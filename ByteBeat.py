from flask import Flask, render_template, jsonify, request
from newsapi import NewsApiClient

# Init app and newsapi client object
app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')


@app.route('/')
def home():
    return render_template('main.html')


@ app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    # get the category from the form
    category = request.form.get('search_term')
    # fetch the articles
    articles = fetch_articles(category)
    # return the articles
    return jsonify(articles)


def fetch_articles(selectedCategory):
    articles = newsapi.get_top_headlines(
        country='us',
        # technology, business, entertainment, general, health, science, sports
        category=selectedCategory
    )
    # return the articles
    return articles['articles']


# search articles by search term
@ app.route('/search_articles', methods=['POST'])
def search_articles_route():
    # get the search term from the form
    search_term = request.form.get('search_term')
    # fetch the articles
    articles = search_articles(search_term)
    # return the articles
    return jsonify(articles)


def search_articles(search_term):
    articles = newsapi.get_everything(
        q=search_term,
        language='en',
        sort_by='relevancy',
        page_size=20
    )
    # return the articles
    return articles['articles']


@ app.route("/articles")
def articles():
    return render_template('articles.html')


@ app.route("/saved")
def saved():
    return render_template('saved.html')


if __name__ == "__main__":
    app.run(debug=True)
