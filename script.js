    // Selectors
    const button = document.querySelector("#search-btn");

    //Event Listeners
    button.addEventListener("click", getFetchApod);
    button.addEventListener("click", getSearch);

    //Functions
    function getFetchApod(){
        const API_key = "5v0dtub4I4Aeci75CYMSVMIG9dRCrmnE3yVqkMoz";  // MY NASA API KEY
        const APOD_endpiont = `https://api.nasa.gov/planetary/apod?api_key=${API_key}&count=10`; // NASA API APOD ENDPOINT

        fetch(APOD_endpiont)
            .then(response => response.json()) // parse response as json
            .then(data => {
                const randomResult = data;
                for (let i=0; i < randomResult.length; i++)
                {
                    console.log(data)
                    document.querySelector(".content-1").innerHTML += `<h2>Astronomy Picture of the Day</h2><h4 style="text-align: center">Date of the Picture: "${randomResult[i].date}"</h4><br>`
                    document.querySelector(".content-1").innerHTML += `<p style="text-align: left">"${randomResult[i].explanation}"</p><br>`
                    document.querySelector(".content-1").innerHTML += `<img src="${randomResult[i].hdurl}" width="780px">`
                }
                
            })

            .catch(err => {
                console.log(`error  ${err}`)

            });
    }

// om Nasa Image Video endpiont...
    async function getSearch(){
            const search = document.querySelector("input");
            let url  = `https://images-api.nasa.gov/search?q=${search.value}`; // NASA API for IMAGE AND VIDEO ENDPOINT

            let response = await fetch(url);
            let data = await response.json()
            console.log("Search data", data);
            searchApiData(data);
            
    }
    function searchApiData(data){
            let filteredArray = data.collection.items.filter(item => item.data[0].media_type==='image'); // Filtering the fetched result
            for(let i=0; i<filteredArray.length; i++)
            {
                console.log("Filtered Array", filteredArray[i].data);
                document.querySelector("#search-content").innerHTML += `<h1>Title: "${filteredArray[i].data[0].title}"</h1>`
                document.querySelector("#search-content").innerHTML += `<h3>Date Created: "${filteredArray[i].data[0].date_created}"</h3>`
                document.querySelector("#search-content").innerHTML += `<h4>Center: "${filteredArray[i].data[0].center}"</h4>`
                document.querySelector("#search-content").innerHTML += `<p>Description: "${filteredArray[i].data[0].description}"</p>`
                document.querySelector("#search-content").innerHTML += `<img src="${filteredArray[i].href[0]}" width="1242px">`
            }
    }
    

