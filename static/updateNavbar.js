/**
 * This function updates the navbar with the domain names for the selected category.
 * - If no category is selected, select technology by default.
 * - If no domain is selected, select TechCrunch by default.    
 * - If no articles are stored in session storage, make a new API call to retrieve the articles.
 * - If the last API call was more than a day ago, make a new API call to retrieve the articles.
 * - If the articles are already stored in session storage, retrieve them from session storage.
 * @returns {void}
 */
function updateNavbar(){
    
    // Get the selected category from local storage
    var selectedCategory = localStorage.getItem('selectedCategory');
    var domainNameOne = "";
    var domainNameTwo = "";
    var domainNameThree = "";
    // If no category is selected, select technology by default
    if ( selectedCategory == null ) {
        localStorage.setItem('selectedCategory', 'Technology');
        selectedCategory = 'Technology';
    }
    // Get the domain names for the selected category
    if ( selectedCategory == 'Technology' ){
        domainNameOne = "TechCrunch";
        domainNameTwo = "Engadget";
        domainNameThree = "Wired";
    }
    // Get the domain names for the selected category
    else if ( selectedCategory == 'Business' ){
        domainNameOne = "Reuters";
        domainNameTwo = "Bloomberg";
        domainNameThree = "MarketWatch";
    }
    // Get the domain names for the selected category
    else if ( selectedCategory == 'Entertainment' ){
        domainNameOne = "IGN";
        domainNameTwo = "Kotaku";
        domainNameThree = "IndieWire";
    }

    // Create the domain buttons
    var domain_one = document.createElement("a");
    var domain_two = document.createElement("a");
    var domain_three = document.createElement("a");
    
    // Set the domain button attributes
    domain_one.classList.add("domain-button", "nav-link");
    domain_one.innerText = domainNameOne;
    domain_one.onclick = function () { getArticles(domainNameOne) };

    // Set the domain button attributes
    domain_two.classList.add("domain-button", "nav-link");
    domain_two.innerText = domainNameTwo;
    domain_two.onclick = function () { getArticles(domainNameTwo) };

    // Set the domain button attributes
    domain_three.classList.add("domain-button", "nav-link");
    domain_three.innerText = domainNameThree;
    domain_three.onclick = function () { getArticles(domainNameThree) };

    // Add the domain buttons to the navbar 
    const domainButtons = document.querySelector("#domain-box");
    
    domainButtons.appendChild(domain_one);
    domainButtons.appendChild(domain_two);
    domainButtons.appendChild(domain_three);   

    getArticles(domainNameOne);
}