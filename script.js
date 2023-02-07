// example fetch using pokemonapi.con
document.querySelector("#search-button").addEventListener("click", getFetch)

function getFetch(){
    const API_key = "5v0dtub4I4Aeci75CYMSVMIG9dRCrmnE3yVqkMoz";
    const APOD_endpiont = `https://api.nasa.gov/planetary/apod?api_key=${API_key}`;
    //const choice = document.querySelector("input").value
    //console.log(choice)

    fetch(APOD_endpiont)
           .then(response => response.json()) // parse response as json
           .then(data => {
            console.log(data)
            document.querySelector("#content-1").innerHTML += `<h2>Astronomy Picture of the Day</h2><h4 style="text-align: center">Date of the Picture: "${data.date}"</h4><br>`
            document.querySelector("#content-1").innerHTML += `<p style="text-align: left">"${data.explanation}"</p><br>`
            document.querySelector("#content-1").innerHTML += `<img src="${data.hdurl}" width="1242px">`
           })

           .catch(err => {
            console.log(`error  ${err}`)

           });
           const search_endpoint = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_key}`;
           fetch(search_endpoint)
           .then(response => response.json()) // parse response as json
           .then(data => {
            console.log(data)
            document.querySelector("#content-2").innerHTML += `<h2>Mars Rover Photos</h2><br>`
            //document.querySelector("#content-2").innerHTML += `<p style="text-align: left">"${data.explanation}"</p><br>`
            document.querySelector("#content-2").innerHTML += data.photos[0]
           })

           .catch(err => {
            console.log(`error  ${err}`)

           });
}

// om Nasa Image Video endpiont...
let url  = "https://images-api.nasa.gov/search?q=space";
const button = document.querySelector("#search-button");
button.addEventListener("click", () => {
    const search = document.querySelector("#search");

    url  = `https://images-api.nasa.gov/search?q=${search.value}`
    fetch(url).then(response => response.json()).then((data) => {
        console.log("data", data);

    })
});

