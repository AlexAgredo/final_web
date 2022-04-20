let input = document.getElementById("username");
let input2 = document.getElementById("password");

document.getElementById("boton").addEventListener("click", ADMIN);
/* document.getElementById("boton").addEventListener("click", encriptar); */

function ADMIN() {

    if(input.value === "javi23" && input2.value === "12345") {
        let password = document.getElementById("password").value;
        let crypto = btoa(password);
        alert("Contraseña encriptada = " + crypto);
        window.open("../admin/admin_panel.html");
        /* console.log("entró"); */
    } else {
        document.getElementById("error").style.opacity="1";
        input.value = "";
        input2.value = "";
    }
}

/* function encriptar() {
    let password = document.getElementById("password").value;
    let crypto = btoa(password);
    alert("Contraseña encriptada = " + crypto);
} */