/**
 * Retrieves the news articles and displays them on the page.
 * - If no domain is selected, select TechCrunch by default.
 * - If no articles are stored in local storage, make a new API call to retrieve the articles.
 * - If the last API call was more than a day ago, make a new API call to retrieve the articles.
 * - If the articles are already stored in local storage, retrieve them from local storage.
 * 
 * @param {function} callback - A function that takes an array of article objects as a parameter and displays them on the page.
 * 
 * @returns {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * 
 */
function getArticles(callback) {

    var selectedCategory = localStorage.getItem('selectedCategory');
    
    var searchTerm = selectedCategory === 'customSearch' ? localStorage.getItem('searchParameter') : selectedCategory;

    if (!selectedCategory) {
        localStorage.setItem('selectedCategory', 'technology');
        searchTerm = 'technology';
    }

    var lastApiCall = localStorage.getItem('lastApiCall' + selectedCategory);

    var now = new Date();

    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
    var timeSinceLastApiCall = now - new Date(lastApiCall);
    
    if (!lastApiCall || timeSinceLastApiCall > oneDay || !localStorage.getItem('articles' + selectedCategory) || (selectedCategory === 'customSearch')) {

        localStorage.setItem('lastApiCall' + selectedCategory, now);

        var categoryParams = new URLSearchParams();
        categoryParams.append('search_term', searchTerm);

        fetch('/' + (selectedCategory === 'customSearch' ? 'search_articles' : 'fetch_articles'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: categoryParams
        }).then(response => response.json()).then(articles => {
            localStorage.setItem('articles' + selectedCategory, JSON.stringify(articles));
            callback(articles);
        });
    } else {
        let savedArticles = JSON.parse(localStorage.getItem('articles' + selectedCategory));
        
        callback(savedArticles);
    }
}