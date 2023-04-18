/**
 * Update the list of articles displayed in the DOM
 * It is followed by a call to function checkSaved()
 * @param {Array} articles - An array of article objects, each with title, description, url, and urlToImage properties
 * @returns {void}
 */
function updateArticles(articles) {
    const articleBody = document.querySelector("#card-container");
    articleBody.innerHTML = "";//clear out container

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
        img.src = article.urlToImage;
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
        input.classList.add("card-link", "btn", "btn-info", "float-end");
        input.type = "button";
        input.id = article.title;
        input.onclick = function () { saveArticle(article.title, article.url) };
        input.value = "Save for later";
        input.style.background = '#dc8cdb';
        input.style.color = '#fff';

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