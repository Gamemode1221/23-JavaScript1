const quotesURL = "https://dummyjson.com/quotes";

fetch(quotesURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.log(error));