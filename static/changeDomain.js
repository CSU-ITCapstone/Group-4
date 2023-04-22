/**
 * Changes the selected domain and fetches new articles based on the selected domain.
 *
 * @param {string} newDomain - The name of the new domain to select.
 * @returns {void}
 */
function changeDomain(newDomain) {
    // Get all domain buttons and update their selected state based on the new domain
    const domainButtons = document.getElementsByClassName('domain-button');
    
    // Update the selected domain in the domain selector
    for (let button of domainButtons) {
        if (button.innerText.toLowerCase() === newDomain) {
            button.classList.add('selected-domain');
        } else {
            button.classList.remove('selected-domain');
        }
    }
}