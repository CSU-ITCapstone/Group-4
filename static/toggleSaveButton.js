/**
 * Toggles the functionality of a button between saving and unsaving an article.
 *
 * @param {string} articleTitle - The title of the article to be saved or unsaved.
 * @param {string} articleUrl - The URL of the article to be saved.
 * @param {string} saveState - The state of the add/remove button ("Remove from List" or "Add to list")
 * 
 * @return {void}
 */
function toggleSaveButton(articleTitle, articleUrl, articleUrlToImage, saveState) {
    if (saveState === "Unsave") {
        // If the button is in the "save" state, unsave the article
        unsaveArticle(articleTitle);
    } else if (saveState === "Save") {
        // If the button is in the "remove" state, save the article
        saveArticle(articleTitle, articleUrl, articleUrlToImage);       
    }
}