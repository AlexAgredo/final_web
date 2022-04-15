function verificarRespuestas() {
    let total = 3;
    let puntos = 0;

    let myForm = document.forms["Quiz"];
    let respuestas = ["a", "b", "c"];

    for (let i = 1; i <= total; i++){
        if(myForm["p" + i].value === null || myForm["p" + i].value === ""){
            alert("Respode la pregunta" + i);
            return false;
        }else {
            if(myForm["p" + i].value === respuestas[i - 1]){
                ++puntos;
            }
        }
    }
    let resultado = document.getElementById("resultado");

    if(puntos === 3){
        resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>'+ total +' puntos,</span> tú código de descuento es CAF50</h3>'
    }else{
        resultado.innerHTML = '<h3>Obtuviste <span>' + puntos + '</span> de <span>'+ total +' puntos,</span> sigue intentando</h3>'
    }

    return false;
}

let descuento = document.getElementById("descuento");
document.getElementById("boton").addEventListener("click", comprobarDescuento);

function comprobarDescuento() {

    if(descuento.value === "CAF50") {
        alert("Código aprobado, conseguiste un descuento del 50%");
    } else {
        alert("Código no existente");
    }
}