/**
 * Update the list of articles displayed in the DOM
 * It is followed by a call to function checkSaved()
 * @param {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * @returns {void}
 */
function updateArticles(articles) {

    const category = localStorage.getItem('selectedCategory');

    // Set the Article page title 
    if (category === 'search') {
        // Get the search term from the search box on the previous page
        const searchTerm = localStorage.getItem('searchParameter');
        // make the search term title case, each word capitalized
        const searchTermTitleCase = searchTerm.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
        document.getElementById('category-title').innerText = "Search results for: " + searchTermTitleCase;
    } else {    
        document.getElementById('category-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);
    }

    // Get the container for the articles
    const articleBody = document.querySelector("#card-container");

    // Clear out the container
    articleBody.innerHTML = "";

    // Loop through data and create cards
    articles.forEach((article) => {

        // Create card elements
        const cardCol = document.createElement("div");
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h5");
        const description = document.createElement("p");
        const link = document.createElement("a");
        const input = document.createElement("input");

        // Set card classes
        cardCol.classList.add("col-md-6");
        card.classList.add("card", "mb-4");
        cardBody.classList.add("card-body");

        // Set card content
        img.classList.add("card-img-top");
        // add a placeholder image if the article does not have an image
        if (article.urlToImage == null || article.urlToImage == "null") {
            img.src = "http://127.0.0.1:5000/static/placeholder.png";
        } else {
            img.src = article.urlToImage;
        };
        img.alt = "Image not found.";
        title.classList.add("card-title")
        title.innerText = article.title;
        description.classList.add("card-text")
        description.innerText = article.description;
        link.classList.add("card-link", "btn", "btn-primary");
        link.href = article.url;
        link.target = "_blank";
        link.innerText = "Go to Link";
        link.style.background = '#dc8cda';
        input.classList.add("card-link", "btn", "btn-success", "float-end");
        input.type = "button";
        input.id = article.title;
        input.value = "Save";
        input.style.background = '#dc8cda';
        input.onclick = function () { toggleButton(article.title, article.url, article.urlToImage, input.value) };

        // Append card elements to parent
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        cardBody.appendChild(input);

        // Append cardBody elements to card
        card.appendChild(img);
        card.appendChild(cardBody);
        cardCol.appendChild(card);

        // Append card elements to the main card-container divS
        articleBody.appendChild(cardCol);
    });

    checkSaved();
}