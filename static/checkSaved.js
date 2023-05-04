/**
 * Checks whether any articles have been saved and updates the corresponding save buttons' state.
 *
 * @returns {void}
 */
function checkSaved() {

    let saved = JSON.parse(localStorage.getItem("savedArticles")) || [];

    saved.forEach(savedItem => {
        let savedButton = document.getElementById(savedItem.title);

        if (savedButton !== null) {
            savedButton.value = "Unsave";
            savedButton.classList.remove("btn-success");
            savedButton.classList.add("btn-warning");
        };
    });
}
