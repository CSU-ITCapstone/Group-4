from flask import Flask, render_template, jsonify, request
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')


@app.route('/')
def home():
    return render_template('main.html')

# calls the fetch_articles function and returns the articles as a json object
@ app.route('/fetch_articles', methods=['POST'])
def fetch_articles_route():
    category = request.form.get('search_term')
    articles = fetch_articles(category)

    return jsonify(articles)

# fetch articles by category
# @param selectedCategory: the category of articles to fetch
# @return: a list of articles
def fetch_articles(selectedCategory):
    if selectedCategory == "general":
        numberOfArticles =12
    else: 
        numberOfArticles = 18
    
    articles = newsapi.get_top_headlines(
        country = 'us',
        category = selectedCategory,
        page_size = numberOfArticles
    )

    return articles['articles']


# search articles by user input search term
@ app.route('/search_articles', methods=['POST'])
def search_articles_route():
    search_term = request.form.get('search_term')
    articles = search_articles(search_term)

    return jsonify(articles)


# search articles by search term
# @param search_term: the search term to search for
# @return: a list of articles
def search_articles(search_term): 
    articles = newsapi.get_everything(
        q = search_term,
        language = 'en',
        sort_by = 'relevancy',
        page_size = 18
    )

    return articles['articles']


@ app.route("/articles")
def articles():
    return render_template('articles.html')


@ app.route("/saved")
def saved():
    return render_template('saved.html')


if __name__ == "__main__":
    app.run(debug=True)
