/**
 * Update the list of articles displayed in the DOM
 * It is followed by a call to function checkSaved()
 * @param {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * @returns {void}
 */
function updateArticles(articles) {

    const category = localStorage.getItem('selectedCategory');

    // Set the category title on the Articles page 
    // if its the /saved page, do nothing because there is no category title
    if (document.getElementById('category-title')) {
        // Set the Article page title 
        if (category === 'customSearch') {
            // Get the search term from the search box on the previous page
            const searchTerm = localStorage.getItem('searchParameter');
            // make the search term title case, each word capitalized
            const searchTermTitleCase = searchTerm.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            document.getElementById('category-title').innerText = "Search results for: " + searchTermTitleCase;
        } else {
            document.getElementById('category-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);
        }
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
        const cardBottom = document.createElement("div");
        const link = document.createElement("a");
        const input = document.createElement("input");

        cardCol.classList.add("card-group", "d-flex", "justify-content-center", "col-md-6", "mb-4");
        card.classList.add("card");
        cardBody.classList.add("card-body", "d-flex", "flex-column"); // 
        cardBottom.classList.add("mt-auto"); // mt-auto is margin top auto, which pushes the link and button to the bottom of the card

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
        link.classList.add("card-url", "btn");
        link.href = article.url;
        link.target = "_blank";
        link.innerText = "Visit";
        input.classList.add("save-article-button", "btn", "float-end");
        input.type = "button";
        input.id = article.title;
        input.value = "Save";
        input.onclick = function () { toggleSaveButton(article.title, article.url, article.urlToImage, input.value) };

        // Append card elements to parent
        cardBody.appendChild(title);
        if (article.description != null) {
            cardBody.appendChild(description);
        };
        cardBottom.appendChild(link);
        cardBottom.appendChild(input);
        cardBody.appendChild(cardBottom);

        // Append cardBody elements to card
        card.appendChild(img);
        card.appendChild(cardBody);
        cardCol.appendChild(card);

        // Append card elements to the main card-container divS
        articleBody.appendChild(cardCol);
    });

}