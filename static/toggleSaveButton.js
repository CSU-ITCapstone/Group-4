/**
 * Toggles the functionality of a button between saving and unsaving an article.
 * Changes the value of the button.
 * Adds or removes the article from the list of saved articles in local storage.
 *
 * @param {string} articleTitle - The title of the article to be saved or unsaved.
 * @param {string} articleUrl - The URL of the article to be saved.
 * @param {string} articleUrlToImage - The URL of the image associated with the article to be saved.
 * @param {string} saveState - The value of the save button, either "Save" or "Unsave".
 * 
 * @return {void}
 */
function toggleSaveButton(articleTitle, articleUrl, articleUrlToImage, saveState) {
    if (saveState === "Unsave") {

        let savedArticles = JSON.parse(localStorage.getItem('savedArticles'));

        for (let i = savedArticles.length - 1; i >= 0; i--) {
            if (savedArticles[i].title === articleTitle) {
                savedArticles.splice(i, 1);
                break;
            }
        }

        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

        let removeButton = document.getElementById(articleTitle);
        removeButton.value = "Save";

    } else if (saveState === "Save") {
        let articleToSave = {
            title: articleTitle,
            url: articleUrl,
            urlToImage: articleUrlToImage
        };

        let savedArticles = JSON.parse(localStorage.getItem("savedArticles")) || [];

        savedArticles.push(articleToSave);

        localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

        let savedButton = document.getElementById(articleTitle);
        savedButton.value = "Unsave";
    }
}