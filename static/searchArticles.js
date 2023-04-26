/**
 * Retrieves the news articles based on a search and displays them on the page.
 * - If no articles are stored in session storage, make a new API call to retrieve the articles.
 * - If the last API call was more than a day ago, make a new API call to retrieve the articles.
 * - If the articles are already stored in session storage, retrieve them from session storage.
 * @returns { void }
 */
function searchArticles() { 
    // Get the search term from the search box on the previous page
    const searchTerm = localStorage.getItem('searchParameter');

    //var searchTerm = document.getElementById('search').value;
    // If no search term is entered, display an alert and return
    // go back to the previous page
    if (!searchTerm) {
        alert('Please enter a search term.');
        window.history.back();
        return;
    }
    
    // Get the time of the last API call from local storage
    const lastApiCall = localStorage.getItem('lastApiCall' + searchTerm);
    
    // Get the current time
    const now = new Date();
    
    // Calculate the time difference in milliseconds
    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
    const timeSinceLastApiCall = now - new Date(lastApiCall);
    
    // Check if the articles are already stored in local storage
    // If they are not stored in local storage or if the last API call was more than a day ago,
    // make a new API call to retrieve the articles
    if (!lastApiCall || timeSinceLastApiCall > oneDay || !localStorage.getItem('articles' + searchTerm)) {
        // set the time of the last API call to now in local storage
        localStorage.setItem('lastApiCall' + searchTerm , now);
        // add search term to params to be sent to server
        const searchParams = new URLSearchParams();
        searchParams.append('search_term', searchTerm);
        // Make a new API call to retrieve the articles
        fetch('/search_articles', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: searchParams
        }).then(response => response.json()).then(articles => {
            //save articles to session storage, then update articles
            localStorage.setItem('articles' + searchTerm, JSON.stringify(articles));
            updateArticles(articles);
        });
    } else {
        // If the articles are already stored in local storage, retrieve them from local storage
        const savedArticles = JSON.parse(localStorage.getItem('articles' + searchTerm));
        updateArticles(savedArticles);
    }
}