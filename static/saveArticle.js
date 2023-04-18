/**
 * Saves an article to the browser's local storage and updates the save button's state.
 *
 * @param {string} articleTitle - The title of the article.
 * @param {string} articleUrl - The URL of the article.
 *
 * @returns {void}
 */
function saveArticle(articleTitle, articleUrl) {
    // Create an object to represent the article
    const articleToSave = {
        title: articleTitle,
        url: articleUrl
    };

    // Retrieve the list of saved articles from local storage or create an empty array if there are none
    const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];

    // Add the new article to the list of saved articles
    savedArticles.push(articleToSave);

    // Save the updated list of saved articles to local storage
    localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

    // Find the save button for the article and update its state
    var savedButton = document.getElementById(articleTitle);
    savedButton.disabled = true;
    savedButton.value = "Saved";
    savedButton.classList.remove("btn-info");
    savedButton.classList.add("btn-success");
}
