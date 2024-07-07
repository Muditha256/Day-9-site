let tblCountries = document.getElementById("tblCountries");

let cardBody = "";

let row = document.getElementById("card-row");

fetch("https://restcountries.com/v3.1/all")
.then((res) => res.json())
.then(data => {

    data.forEach(element => {

      cardBody += `<div class="col-3 p-5">
                   <div class="card" style="width: 18rem;">
                        <img src="${element.flags.png}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <td><h1>${element.name.common}</h1>
                        <p>Official Name :${element.name.official}</br>
                        Region : ${element.region}</br>
                        Capital :${element.capital}</br>
                        Population :${element.population}</br>
                        </p>
                        <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map</a>
                      </div>
                   </div>
              </div>`

        });

        row.innerHTML = cardBody;

    })

    function searchCountry(){
        let userInput = document.getElementById("txtInput").value;
    
        let flagImg = document.getElementById("flagImg");
        let name = document.getElementById("name");
        let officialName = document.getElementById("officialName");
        let region = document.getElementById("region");
        let population = document.getElementById("population");
    
        fetch(`https://restcountries.com/v3.1/name/${userInput}`)
        .then(res=>res.json())
        .then(data=>{
            data.forEach(obj=>{
                console.log(obj);
                flagImg.src=obj.flags.png
                name.innerText=obj.name.common
                officialName.innerText=obj.name.official
    
                region.innerText=obj.region;
                capital.innerHTML=obj.capital;
                population.innerText=obj.population
            })
        })
    }
