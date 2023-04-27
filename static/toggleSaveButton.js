/**
 * Toggles the functionality of a button between saving and unsaving an article.
 * Changes the value, text, and style of the button.
 * Adds or removes the article from the list of saved articles in local storage.
 *
 * @param {string} articleTitle - The title of the article to be saved or unsaved.
 * @param {string} articleUrl - The URL of the article to be saved.
 * @param {string} saveState - The value of the save button, either "Save" or "Unsave".
 * 
 * @return {void}
 */
function toggleSaveButton(articleTitle, articleUrl, articleUrlToImage, saveState) {
    if (saveState === "Unsave") {

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
        var removeButton = document.getElementById(articleTitle);
        removeButton.value = "Save";
        //removeButton.classList.remove("btn-warning");
        //removeButton.classList.add("btn-success");

    } else if (saveState === "Save") {
        // Create an object to represent the article
        const articleToSave = {
            title: articleTitle,
            url: articleUrl,
            urlToImage: articleUrlToImage
        };

        // Retrieve the list of saved articles from local storage or create an empty array if there are none
        const savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];

        // Add the new article to the list of saved articles
        savedArticles.push(articleToSave);

        // Save the updated list of saved articles to local storage
        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

        // Find the save button for the article and update its state
        var savedButton = document.getElementById(articleTitle);
        savedButton.value = "Unsave";
        //savedButton.classList.remove("btn-success");
        //savedButton.classList.add("btn-warning");
    }
}