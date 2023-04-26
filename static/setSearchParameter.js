/**
 * This function is called when the user clicks on the search button.
 * It saves the search parameter to local storage and redirects the user to the articles page.
 * 
 * @returns {void}
 *
 */
function setSearchParameter() {
    const searchInput = document.getElementById("search-input");
    // get the search parameter from the search input
    const query = searchInput.value;
    
    // save the parameter to local storage
    localStorage.setItem('searchParameter', query);

    // set selectedCategory to 'search'
    localStorage.setItem('selectedCategory', 'search');

    // go to the articles page
    window.location.href = '/articles';
  }