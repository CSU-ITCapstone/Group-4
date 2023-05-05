/**
 * Update the list of articles displayed in the DOM
 * It is followed by a call to function checkSaved()
 * @param {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * @returns {void}
 */
function updateArticles(articles) {

    let category = localStorage.getItem('selectedCategory');

    if (document.getElementById('category-title')) {
        if (category === 'customSearch') {
            let searchTerm = localStorage.getItem('searchParameter');
            let searchTermTitleCase = searchTerm.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
            document.getElementById('category-title').innerText = "Search results for: " + searchTermTitleCase;
        } else if (category === 'entertainment') {
            document.getElementById('category-title').innerText = "Media";
        }

        else {
            document.getElementById('category-title').innerText = category.charAt(0).toUpperCase() + category.slice(1);
        }
    }
    

    const articleBody = document.querySelector("#card-container");

    articleBody.innerHTML = "";

    articles.forEach((article) => {

        const cardCol = document.createElement("div");
        const card = document.createElement("div");
        const cardBody = document.createElement("div");
        const img = document.createElement("img");
        const title = document.createElement("h5");
        const description = document.createElement("p");
        const cardBottom = document.createElement("div");
        const link = document.createElement("a");
        const input = document.createElement("input");

        cardCol.classList.add("card-group", "d-flex", "justify-content-center", "col-md-6", "col-lg-4", "mb-4");
        card.classList.add("card");
        cardBody.classList.add("card-body", "d-flex", "flex-column");
        cardBottom.classList.add("mt-auto");

        img.classList.add("card-img-top");
        if (article.urlToImage == null || article.urlToImage == "null") {
            img.src = "https://byte-beat-the-news-aggregator.onrender.com/static/placeholder.png";
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

        cardBody.appendChild(title);
        if (article.description != null) {
            cardBottom.appendChild(description);
        };
        cardBottom.appendChild(link);
        cardBottom.appendChild(input);
        cardBody.appendChild(cardBottom);

        card.appendChild(img);
        card.appendChild(cardBody);
        cardCol.appendChild(card);

        articleBody.appendChild(cardCol);
    });

    if (articles.length == 0) {
        document.getElementById('category-title').innerText = "No results found";
    }
}