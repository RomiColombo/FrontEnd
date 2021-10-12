let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre=prompt("Ingresa tu nombre");
  datosPersona.edad=(2021-(parseInt(prompt("Ingresa el año en que naciste"))));
  datosPersona.ciudad=prompt("Ingresa tu ciudad");
  datosPersona.interesPorJs= confirm("¿Te interesa JavaScript?");
  
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre = document.querySelector("#nombre");
  let edad = document.querySelector("#edad");
  let ciudad = document.querySelector("#ciudad");
  let js= document.querySelector("#javascript");

  nombre.innerHTML=datosPersona.nombre;
  edad.innerHTML=datosPersona.edad;
  ciudad.innerHTML=datosPersona.ciudad;
  js.innerHTML=datosPersona.interesPorJs?"Si":"No";
}


/* ------------------------- NO MODIFICAR ESTE ARRAY ------------------------ */
const listado = [
  {
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */

  let fila=document.querySelector("#fila")

  if(!fila.innerHTML.length){
    for(let lista of listado){
      fila.innerHTML += `
      <div class="caja">
          <img src=${lista.imgUrl} alt="imagen de la materia">
          <p class="lenguajes">${lista.lenguajes}</p>
          <p class="bimestre">${lista.bimestre}</p>
      </div>
      `
    }
  }
}


function mostrarYOcultarDescripcionCompleta() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

    let sobreMi = document.querySelector(".sobre-mi");
    let vermas= document.querySelector("#ver-mas");
    
    // sobreMi.classList.toggle("sobre-mi-completo")

    vermas.addEventListener("mouseover", function(){

        sobreMi.classList.toggle("sobre-mi-completo")
    })

    // vermas.onclick=function(){
    //   sobreMi.classList.toggle("sobre-mi-completo")
    // }
}



