const API_URL="https://rickandmortyapi.com/api/character"
const $aplication = document.querySelector('#app')

const status = {
    Alive: 'alive',
    unknown: 'unknown',
    Dead: 'dead'
}

fetch(API_URL)
.then((response)=>response.json())
.then(({results}) => {
    $aplication.innerHTML = results.map(character=> (

    `     
        <a class="personaje" href="details.html?id=${character.id}">
            <img class="detalle__imagen" src=${character.image} alt="">
            <div class="detalle_informacion">
                <h1 class="detalle__name status ${status[character.status]}">${character.name}</h1>
                
            </div>
        </a>            
    `
        
    )).join('')
})


