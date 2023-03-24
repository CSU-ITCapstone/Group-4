# Group-4
Flask Web App News Aggregator:

Overview: The Flask web app news aggregator is a personalized tech and breaking news feed. Users can create an account and receive a curated list of news articles relevant to their 2 preferred domains which will be selected from a list of 6 domains. The app will display 6 articles on the user's dashboard, 3 from a tech domain and 3 from another news domain, pulled in order of popularity each day from each site. The app will also include a feature for saving articles, allowing users to easily access and view articles they have saved for later.

Features:
User authentication: Users can create an account by providing their email, username, and password. Once they have an account, they can log in and access their personalized news feed and saved articles.

User profile: The user profile will store the user's preferred domains and any saved articles. This information will be used to generate the personalized news feed for each user.

News article feed: The news article feed will be generated by retrieving articles from the News API based on the user's preferred domains. The articles will be displayed on the user's dashboard in a clean and organized manner, with the option to read the full article or save it for later. The dashboard will show 6 articles

Saved articles: The saved articles section will allow users to easily access and view articles they have saved for later. This section will be accessible from the user's dashboard.

API integration: The API integration with the News API will allow the app to retrieve real-time news articles based on the user's preferred domains.

Technologies:
Python 3
Flask web framework
HTML, CSS, and JavaScript + Frameworks for front-end design and interactivity
Bootstrap front-end framework for responsive design
News API for retrieving news articles based on user domain selection