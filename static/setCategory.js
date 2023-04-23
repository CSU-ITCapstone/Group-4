/**
 * Sets the category in local storage and redirects to the articles page
 * 
 * @param {*} category
 * 
 * @return {void}
 */
function setCategory(category) {
    localStorage.setItem('selectedCategory', category);
    // go to the articles page
    window.location.href = '/articles';
}