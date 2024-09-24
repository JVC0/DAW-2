//Selecciona boton del Dom
const button = document.querySelector("button");

button.addEventListener("click",(e) => {
    //alert("Me han pulsado");
    document.querySelectorAll("#filtro").forEach((e) => {
        //console.log(e)
        e.style.visibility = "visible";
    })
    document.querySelectorAll("#btn_lista_deseo").forEach((e) => {
        //console.log(e)
        e.style.visibility = "visible";
    })
    let Lista_Pokemon =document.querySelector(".Lista_Pokemon");
        //console.log(e)
        Lista_Pokemon.style.visibility = "visible"

        mostrarPokemon();
    
});

function mostrarPokemon(){
  document.querySelector(".cargandoDatos").style.visibility="visible";  
};

