// example fetch using pokemonapi.con
document.querySelector("button").addEventListener("click", getFetch)

function getFetch(){
    const choice = document.querySelector("input").value
    console.log(choice)

    const url = "https://api.nasa.gov/planetary/apod?api_key=5v0dtub4I4Aeci75CYMSVMIG9dRCrmnE3yVqkMoz"

    fetch(url)
           .then(res => res.json()) // parse response as json
           .then(data => {
            console.log(data)
            document.querySelector("img").src = data.hdurl
            document.querySelector("h3").innerHTML = data.explanation
           })

           .catch(err => {
            console.log("error  ${err}")

           });
}

// om Nasa Image Video endpiont...
let url  = "https://api.nasa.gov/search?q=space";
const button = document.querySelector("button");
button.addEventListener("click", () => {
    const search = document.querySelector("search");


    fetch(url).then(response => response.json()).then((data) => {
        console.log("data" ,data);
    })
})

