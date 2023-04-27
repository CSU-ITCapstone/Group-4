/**
 * Retrieves the news articles and displays them on the page.
 * - If no domain is selected, select TechCrunch by default.
 * - If no articles are stored in session storage, make a new API call to retrieve the articles.
 * - If the last API call was more than a day ago, make a new API call to retrieve the articles.
 * - If the articles are already stored in session storage, retrieve them from session storage.
 * 
 * @returns {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * 
 */
function getArticles() {

    // get the selected category from local storage and set to a variable
    var selectedCategory = localStorage.getItem('selectedCategory');
    
    // set a new var to a searchterm. if the selected category is search, set the search term to the search parameter from local storage. else set it to the selected category
    var searchTerm = selectedCategory === 'search' ? localStorage.getItem('newSearchParameter') : selectedCategory;

    // If no domain is selected, selected category will be Technology by default
    if (!selectedCategory || !searchTerm) {  // if there is no selected category or search term
        localStorage.setItem('selectedCategory', 'technology');  // set the selected category to technology
        searchTerm = 'technology';  // set the search term to technology
    }

    // Get the time of the last API call from local storage
    const lastApiCall = localStorage.getItem('lastApiCall' + selectedCategory);

    // Get the current time
    const now = new Date();

    // Calculate the time difference in milliseconds
    const oneDay = 24 * 60 * 60 * 1000; // one day in milliseconds
    const timeSinceLastApiCall = now - new Date(lastApiCall);
    
    // Check if the articles are already stored in local storage
    // If they are not stored in local storage or if the last API call was more than a day ago,
    // Or if category is search and the search term has changed
    // make a new API call to retrieve the articles
    if (!lastApiCall || timeSinceLastApiCall > oneDay || !localStorage.getItem('articles' + selectedCategory) || (selectedCategory === 'search' && localStorage.getItem('searchParameter') !== searchTerm)) {
        // set the time of the last API call to now in local storage
        localStorage.setItem('lastApiCall' + selectedCategory, now);

        // add category to params to be sent to server
        const categoryParams = new URLSearchParams();
        categoryParams.append('search_term', searchTerm);

        // Make a new API call to retrieve the articles. if the selected category is search, make a search call. else make a category call
        fetch('/' + (selectedCategory === 'search' ? 'search_articles' : 'fetch_articles'), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: categoryParams
        }).then(response => response.json()).then(articles => {
            //save articles to session storage, then update articles
            localStorage.setItem('articles' + selectedCategory, JSON.stringify(articles));
            // if new search, save the search term to local storage
            if (selectedCategory === 'search') {
                localStorage.setItem('searchParameter', searchTerm);
            }
            
            return(articles);
        });
    } else {
        // If the articles are already stored in local storage, retrieve them from local storage
        const savedArticles = JSON.parse(localStorage.getItem('articles' + selectedCategory));
        
        return(savedArticles);
    }
}