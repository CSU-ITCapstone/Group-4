/**
 * Sets the category in local storage and redirects to the articles page
 * 
 * @param {*} category
 * 
 * @return {void}
 */
function setCategory(category) {
    // save the category to local storage
    localStorage.setItem('selectedCategory', category);

    // if the category is search, save the search parameter to local storage
    if (category === 'search') {
        const searchInput = document.getElementById("search-input");
        // get the search parameter from the search input
        const query = searchInput.value;

        // save the parameter to local storage
        localStorage.setItem('newSearchParameter', query);
    }

    // go to the articles page
    window.location.href = '/articles';
}