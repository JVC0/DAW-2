//Selecciona boton del Dom
const button = document.querySelector("button");

button.addEventListener("click",(e) => {
    //alert("Me han pulsado");
    document.querySelectorAll("#filtro").forEach((e) => {
        //console.log(e)
        e.style.visibility = "visible";
    })
});