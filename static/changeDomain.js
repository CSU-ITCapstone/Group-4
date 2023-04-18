/**
 * Changes the selected domain and fetches new articles based on the selected domain.
 *
 * @param {string} newDomain - The name of the new domain to select.
 * @returns {void}
 */
function changeDomain(newDomain) {
    // Get all domain buttons and update their selected state based on the new domain
    const domainButtons = document.getElementsByClassName('domain-button');
    for (let button of domainButtons) {
        if (button.innerText.toLowerCase() === newDomain) {
            button.classList.add('selected-domain');
        } else {
            button.classList.remove('selected-domain');
        }
    }

    // Fetch new articles based on the selected domain
    fetch('/fetch_articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({ domain: newDomain })
    }).then(response => response.json()).then(articles => {
        // Update the list of articles based on the fetched data
        updateArticles(articles);
    });
}