const checkbox = document.querySelector("#select-mode");
const quoteText = document.querySelector("#quote");
const randomQuote = document.querySelector("#random-quote-btn");
const authorName = document.querySelector(".author-name");
const title = document.querySelector(".title")

randomQuote.addEventListener("click", () => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
        .then((response) => response.json())
        .then((data) => {

            // data retorna un arreglo con un objeto dentro 
            // [0: {
            // "quote": "quote-data", 
            // "author: "author-name"
            // }
            // ]
            console.log(data)

            // Se puede dejar con data[0].key o con .map o .forEach

            // quoteText.textContent = data[0].quote;
            // authorName.textContent = data[0].author;

            data.forEach(element => {
                quoteText.textContent = element.quote;
                authorName.textContent = element.author;
                // console.log(element)
            });

        })
        .catch((err) => console.log(err))
    // .finally(() => {
    //     alert("Promesa o peticion finalizada")
    // })
})

// Cambiar de tema (light to dark)
checkbox.addEventListener("click", () => {
    // toggle es como un add/remove de una sola vez.
    // Es decir, al dar click puedo agregar y remover. Sin necesidad de realizar un if-else
    document.body.classList.toggle("dark")
    randomQuote.classList.toggle("dark")
    title.classList.toggle("dark")
    checkbox.parentElement.parentElement.classList.toggle("dark")
    document.querySelector(".quote-container").classList.toggle("dark")
    document.querySelector(".author-container").classList.toggle("dark")
    document.querySelector(".author-title").classList.toggle("dark")
})


