window.addEventListener("load", function(){

/* --------------------------- Variables --------------------------- */

let container = document.querySelector(".hamburguesa")
// console.log(container)
let API = "https://rickandmortyapi.com/api/character";

/* --------------------------- Promesas --------------------------- */
    function llamadaAPI(endpoint){
        fetch(endpoint)
        .then(respuesta=>{
            console.log(respuesta)
            return respuesta.json();
        })
        .then(data=>{
            let listado= data.results;
            console.log(listado);
            renderizarPersonajes(listado)
        })
        .catch()
    }

    llamadaAPI(API)

/* --------------------------- Renderizado --------------------------- */

function renderizarPersonajes(personaje) {

    for (let i = 0; i < personaje.length; i++) {
        container.innerHTML += `
        <div class="containerTarjeta">
            <div class="tarjeta">
                <div class="tarjetaFront">
                    <h3>${personaje[i].name}</h3>
                    <img src="${personaje[i].image}" alt="Foto de ${personaje.name}">
                </div>
                <div class="tarjetaBack">
                    <h3>${personaje[i].name}</h3>
                    <p>Género: ${personaje[i].gender}</p>
                    <p>Especie: ${personaje[i].species}</p>
                    <p>Estado: ${personaje[i].status}</p>
                    <p>Tipo: ${personaje[i].type}</p>
                </div>  
            </div>
        </div> 
    `
      
    }

    // datos.forEach(function(personaje){
    //     container.innerHTML = `
    //     <div class="containerTarjeta">
    //         <div class="tarjeta">
    //             <div class="tarjetaFront">
    //                 <h3>${personaje.name}</h3>
    //                 <img src="${personaje.image}" alt="Foto de ${personaje.name}">
    //             </div>
    //             <div class="tarjetaBack">
    //                 <h3>${personaje.name}</h3>
    //                 <p>Género: ${personaje.gender}</p>
    //                 <p>Especie: ${personaje.species}</p>
    //                 <p>Estado: ${personaje.status}</p>
    //                 <p>Tipo: ${personaje.type}</p>
    //             </div>  
    //         </div>
    //     </div> 
    // `
    // })

}

})
