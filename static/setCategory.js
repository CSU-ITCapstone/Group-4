/**
 * Sets the category in local storage and redirects to the articles page
 * 
 * @param {*} category
 * @return {void}
 */
function setCategory(category, callGoToArticles) {

    localStorage.setItem('selectedCategory', category);

    if (category === 'customSearch') {
        let searchInput = document.getElementById("search-input");
        let query = searchInput.value;

        localStorage.setItem('searchParameter', query);
    }

    callGoToArticles();
}

function goToArticles() {
    window.location.href = '/articles';
}   
