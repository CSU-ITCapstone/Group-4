/**
 * Checks whether any articles have been saved and updates the corresponding save buttons' state.
 *
 * @returns {void}
 */
function checkSaved() {
    // Retrieve the list of saved articles from local storage or create an empty array if there are none
    const saved = JSON.parse(localStorage.getItem("savedArticles")) || [];

    // Loop through each saved article and update its save button's state
    saved.forEach(savedItem => {
        var savedButton = document.getElementById(savedItem.title);
        // If the article has been saved, update the button's text and style
        if (savedButton !== null) {
            savedButton.value = "Unsave";
            savedButton.classList.remove("btn-success");
            savedButton.classList.add("btn-warning");
        };
    });
}
