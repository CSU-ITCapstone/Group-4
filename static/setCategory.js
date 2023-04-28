/**
 * Sets the category in local storage and redirects to the articles page
 * 
 * @param {*} category
 * 
 * @return {void}
 */
function setCategory(category, callGoToArticles) {
    // save the category to local storage
    localStorage.setItem('selectedCategory', category);

    // if the category is search, save the search parameter to local storage
    if (category === 'customSearch') {
        const searchInput = document.getElementById("search-input");
        // get the search parameter from the search input
        const query = searchInput.value;

        // save the parameter to local storage
        localStorage.setItem('searchParameter', query);
    }

    // call the callback function
    callGoToArticles();
}

function goToArticles() {
    window.location.href = '/articles';
}   
