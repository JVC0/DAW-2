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
    document.querySelectorAll(".Lista_Pokemon").forEach((e) => {
        //console.log(e)
        e.style.visibility = "visible";
    })
});