const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const idCharacter = urlParams.get('id');
const API_URL=`https://rickandmortyapi.com/api/character/${idCharacter}`

const $aplication = document.querySelector('#app')

const intl=new Intl.DateTimeFormat('es')
const status = {
    Alive: 'alive',
    unknown: 'unknown',
    Dead: 'dead'
}

fetch(API_URL)
.then((response)=>response.json())
.then(data => {
    $aplication.innerHTML = `
        <div class="container">

            <img class="image" src=${data.image}> 

            <div class="info">
                
                <h1 class="status ${status[data.status]}">${data.name}</h1>
              
                <div class="data__format">
                    <h3>Status:</h3>
                    <h2>${data.status}</h2>
                </div>
                <div class="data__format">
                    <h3>Specie:</h3>
                    <h2>${data.species}</h2>
                </div>
                ${
                    data.type !=='' 
                    ? `<div class="data__format">
                            <h3>Class:</h3>
                            <h2> ${data.type}</h2>
                        </div>`
                    : ''
                }
                <div class="data__format">
                    <h3>Origin:</h3>
                    <h2>${data.origin.name}</h2>
                </div>
                
                <div class="data__format">
                    <h3>Created:</h3>
                    <h2 class="date">${intl.format(new Date(data.created))}</h2>
                </div>
            </div>
        </div>
    `
})



