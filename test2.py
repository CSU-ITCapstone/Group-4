from flask import Flask, render_template, jsonify, request
from newsapi import NewsApiClient

app = Flask(__name__)
newsapi = NewsApiClient(api_key='a7ce5af704c4493584f1068248f3b540')

@app.route('/')
def home():
    return render_template('hometest3.html')

@app.route('/fetch_articles')
def fetch_articles():
    domain = request.args.get('domain')
    if domain not in ['techcrunch', 'engadget', 'gizmodo']:
        return jsonify({'error': 'Invalid domain'})

    articles = newsapi.get_everything(
        domains=domain + '.com',
        language='en',
        sort_by='relevancy',
        page_size=12
    )

    return jsonify(articles)

if __name__ == '__main__':
    app.run(debug=True)
