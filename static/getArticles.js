/**
 * Retrieves the news articles and displays them on the page.
 * - If no domain is selected, select TechCrunch by default.
 * - If no articles are stored in session storage, make a new API call to retrieve the articles.
 * - If the last API call was more than a day ago, make a new API call to retrieve the articles.
 * - If the articles are already stored in session storage, retrieve them from session storage.
 * @returns {void}
 */
function getArticles(selectedDomain) {
    const domain = selectedDomain;
    // Get the time of the last API call from local storage
    const lastApiCall = localStorage.getItem('lastApiCall');
    // Get the current time
    const now = new Date();
    // Calculate the time difference in milliseconds
    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
    const timeSinceLastApiCall = now - new Date(lastApiCall);

    // Check if the articles are already stored in local storage
    if (!lastApiCall || timeSinceLastApiCall > oneDay) {
        
        // If the articles are not stored in local storage or if the last API call was more than a day ago,
        // make a new API call to retrieve the articles
        fetch('/fetch_articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(response => response.json()).then(articles => {
            //save articles to session storage, then update articles
            sessionStorage.setItem('articles', JSON.stringify(articles));
            updateArticles(articles, domain);
        });
    } else {
        // If the articles are already stored in local storage, retrieve them from local storage
        const savedArticles = JSON.parse(sessionStorage.getItem('articles'));
        updateArticles(savedArticles, domain);
    }
}