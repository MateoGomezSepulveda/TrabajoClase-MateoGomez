const url = 'https://swapi.dev/api';
const urlPlanets = 'https://swapi.dev/api/planets/';

document.addEventListener('DOMContentLoaded', obtenerDatos)

async function obtenerDatos (){
    try {
        const respuesta = await fetch(urlPlanets)
        const data = await respuesta.json();
        console.log(data);
        showPlanetas(data.results)
    } catch (error) {
        console.log(error);
    }
}

const contenido = document.querySelector('.cards')

function showPlanetas(planetas){
    planetas.forEach(planeta => {
        const {name,population} = planeta;
        const planetaHtml = document.createElement('div');
        planetaHtml.classList.add('card');
        planetaHtml.innerHTML+=`
        <div class="card-content">
            <h2>${name}</h2>
            <p>${population}</p>
        </div>
        `;
        contenido.appendChild(planetaHtml)
    });
}
