from flask import Flask, render_template, jsonify, request
from newsapi import NewsApiClient

# Init app and newsapi client object
app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')

@app.route('/')
def home():
    return render_template('main.html')


def fetch_articles( selectedCategory ):
    articles = newsapi.get_top_headlines(
        country ='us',
        # technology, business, entertainment, general, health, science, sports
        category = selectedCategory
    )
    # return the articles
    return articles['articles']


@ app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    # get the category from the form
    category = request.form.get( 'category' )
    # fetch the articles
    articles = fetch_articles( category )
    # return the articles
    return jsonify( articles )


@ app.route("/articles")
def articles():
    return render_template('articles.html')


@ app.route("/saved")
def saved():
    return render_template('saved.html')


if __name__ == "__main__":
    app.run(debug=True)
