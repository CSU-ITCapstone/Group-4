/**
 * Removes a saved article from local storage and updates its corresponding card's state.
 *
 * @param {string} articleTitle - The title of the article to unsave.
 * @returns {void}
 */
function unsaveArticle(articleTitle) {
    // Retrieve the list of saved articles from local storage
    var savedArticles = JSON.parse(localStorage.getItem('savedArticles'));

    // Loop through the saved articles and remove the one with a matching title
    for (var i = savedArticles.length - 1; i >= 0; i--) {
        if (savedArticles[i].title === articleTitle) {
            savedArticles.splice(i, 1);
        }
    }

    // Save the updated list of saved articles to local storage
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

    // Update the state of the corresponding card's save button and remove button
    var savedCard = document.getElementById(articleTitle);
    savedCard.classList.add("opacity-50");

    var linkButton = savedCard.querySelector(".article-link");
    linkButton.innerText = "Last chance";

    var removeButton = savedCard.querySelector(".article-remove");
    removeButton.disabled = true;
    removeButton.value = "Removed";
}