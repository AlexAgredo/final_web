var imgSubida = {}; // Globally scoped object
var imgEditada = {}; // Globally scoped object
var divCreate = {};
var divPreview = {};
var containerAddImg = {};
const arrayArt = [];
// loadImg();
divCreate = false;
var contAdd = {};
contAdd = 0; //este es el contador global que se sumara +1 cada vez que le doy add, para guardar la fila donde iran las imgs, Esta variable me dira el total de filas
var index = {}; //este es el index que me dirá a cual fila estoy editando o eliminando

//variables para añadir artista
var editWindow0 = document.getElementsByClassName("editWindow")[0];
var lightbox0 = document.getElementsByClassName("lightbox")[0];
var divContainer0 = document.getElementsByClassName("containerEdit")[0];
var divPreview0 = document.getElementsByClassName("divPreview")[0];
var containerAddImg0 = document.getElementsByClassName("containerAddImg")[0];
var iptNombre0 = document.getElementsByClassName("newIptNombre")[0];
var labelImg0 = document.getElementsByClassName("customFileBtn")[0];
var iptPerfil0 = document.getElementsByClassName("newIptAlt")[0];
var save0 = document.getElementsByClassName("btnSave")[0];
var ttlNombreA = document.getElementsByClassName("titleAdd")[0]; //title del nombre
var ttlPerfilA = document.getElementsByClassName("titleAdd")[1];
var ttlImagenA = document.getElementsByClassName("titleAdd")[2];

//Variables para editar artista
var editWindow = document.getElementsByClassName("editWindow")[1];
var lightbox = document.getElementsByClassName("lightbox")[1];
var divContainer = document.getElementsByClassName("containerEdit")[1];
var svg = document.getElementsByClassName("closeEdit")[1];
var h2 = document.getElementsByClassName("title")[1];
var p = document.getElementsByClassName("subtitle")[1];
var divPreview = document.getElementsByClassName("divPreview")[1];
var containerAddImg = document.getElementsByClassName("containerAddImg")[1];
var iptNombre = document.getElementsByClassName("newIptNombre")[1];
var labelImg = document.getElementsByClassName("customFileBtn")[1];
// var iptImg = document.getElementsByClassName("btnImg")[index];
var iptPerfil = document.getElementsByClassName("newIptAlt")[1];
var save = document.getElementsByClassName("btnSave")[1];
var ttlNombre = document.getElementsByClassName("titleEdit")[0]; //title del nombre
var ttlPerfil = document.getElementsByClassName("titleEdit")[1];
var ttlImagen = document.getElementsByClassName("titleEdit")[2];

editWindow.appendChild(lightbox);
editWindow.appendChild(divContainer);
divContainer.appendChild(svg);
divContainer.appendChild(h2);
divContainer.appendChild(p);
divContainer.appendChild(ttlNombre);
divContainer.appendChild(iptNombre); //le añado todos los inputs que oculte por fila
divContainer.appendChild(ttlPerfil);
divContainer.appendChild(iptPerfil);
divContainer.appendChild(ttlImagen);
divContainer.appendChild(containerAddImg);
containerAddImg.appendChild(divPreview);
containerAddImg.appendChild(labelImg);
divContainer.appendChild(save);

window.onload = function () {
  actualizarTabla();
};

function actualizarTabla() {
  addRowOld();
}

function showAdd() {
  editWindow0.style.display = "block";
  lightbox0.style.display = "block";
  divContainer0.style.display = "block";
  divPreview0.style.display = "block";
  containerAddImg0.style.display = "flex";
  iptNombre0.style.display = "block"; //hago visible el input
  labelImg0.style.display = "block";
  iptPerfil0.style.display = "block";
  save0.style.display = "block";
  ttlNombreA.innerHTML = "Titulo:";
  ttlPerfilA.innerHTML = "Texto alternativo:";
  ttlImagenA.innerHTML = "Imagen:";
}

function addRow() {
  //metodo para que guarde en local storage y la tabla lo que se pone en los inputs
  var table = document.getElementById("tablaArt");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  contAdd++;

  guardar_localstorage(); //se crea el obj artista

  row.insertCell(0).innerHTML = '<div class="divNombre">'; //creo la clase para editarla despues en el css
  addNombre(); //método para poner el value del input del nombre

  row.insertCell(1).innerHTML = '<div class="divImgArt">';
  addImg(); //añado la imagen que cargó el usuario, por eso se le pasa el obj

  row.insertCell(2).innerHTML = '<div class="divPerfil">';
  addPerfil();

  row.insertCell(3).innerHTML = '<div class="divEdicion">';
  addEdicion();
}
function addRowOld() {
  //este metodo es para que no guarde de nuevo el artista sino que solo traiga los datos anteriores
  var table = document.getElementById("tablaArt");
  var rowCount = table.rows.length;
  var row = table.insertRow(rowCount);
  contAdd++;

  obtener_localstorage();

  row.insertCell(0).innerHTML = '<div class="divNombre">'; //creo la clase para editarla despues en el css
  addNombre(); //método para poner el value del input del nombre

  row.insertCell(1).innerHTML = '<div class="divImgArt">';
  addImg(); //añado la imagen que cargó el usuario, por eso se le pasa el obj

  row.insertCell(2).innerHTML = '<div class="divPerfil">';
  addPerfil();

  row.insertCell(3).innerHTML = '<div class="divEdicion">';
  addEdicion();
}

function addNombre() {
  var imagen = JSON.parse(localStorage.getItem("imagen"));
  document.getElementsByClassName("divNombre")[contAdd - 1].innerHTML = //menos uno porque como hay un espacio arriba eso hace que el indez del row le lleve +1 de ventaja al index del arreglo de clases
    imagen.nombre;
}
function addPerfil() {
  var imagen = JSON.parse(localStorage.getItem("imagen"));
  document.getElementsByClassName("divPerfil")[contAdd - 1].innerHTML =
    imagen.perfil;
}
function addEdicion() {
  document.getElementsByClassName("divEdicion")[contAdd - 1].innerHTML =
    '<input type="button" value = "Editar" class="btnEdit" onClick="Javacsript:editRow(this)"><input type="button" value = "Eliminar" class="btnDelete" onClick="Javacsript:deleteRow(this)">';
}

function deleteRow(obj) {
  index = obj.parentNode.parentNode.parentNode.rowIndex; //1 es la celda, 2 el div, 3 el row
  var table = document.getElementById("tablaArt");
  table.deleteRow(index);
  contAdd = contAdd - 1; //le resto al contador global para que sepa que se elimino una fila
  console.log("index es " + index);
  console.log("contAdd es " + contAdd);
}

function editRow(obj) {
  document.getElementById("header").style.zIndex = "-2"; //para que se vea bien el lightbox
  document.getElementById("containerArt").style.zIndex = "-1";

  index = obj.parentNode.parentNode.parentNode.rowIndex; //1 es la celda, 2 el div, 3 el row
  console.log("index es " + index);
  console.log("contAdd es " + (contAdd - 1));
  if (divCreate === false) {
    editWindow.style.display = "block"; //hago visible la ventana de edit
    lightbox.style.display = "block";
    divContainer.style.display = "block";
    iptNombre.style.display = "block"; //hago visible el input
    labelImg.style.display = "block";
    iptPerfil.style.display = "block";
    save.style.display = "block";

    ttlNombre.innerHTML = "Titulo:";
    ttlPerfil.innerHTML = "Texto alternativo:";
    ttlImagen.innerHTML = "Imagen:";
    divCreate = true;
    console.log("entro al if");
  } else {
    editWindow.style.display = "block";
    lightbox.style.display = "block";
    divContainer.style.display = "block";
    iptNombre.style.display = "block"; //hago visible el input
    labelImg.style.display = "block";
    iptPerfil.style.display = "block";
    save.style.display = "block";
    console.log("entro al else");
  }
}
function saveRow() {
  console.log("Se guardó en la fila " + index);
  editar_localstorage();
  // obtener_localstorage();

  nombreNuevo = document.getElementsByClassName("newIptNombre")[1];
  perfilNuevo = document.getElementsByClassName("newIptAlt")[1];

  var imagen = JSON.parse(localStorage.getItem("imagen"));

  if (nombreNuevo.value === null || nombreNuevo.value === "") {
    alert("Añade un nombre!");
    // console.log("Añade un nombre!");
  } else {
    document.getElementsByClassName("divNombre")[index].innerHTML =
      imagen.nombre;
  }

  if (perfilNuevo.value === null || perfilNuevo.value === "") {
    console.log("Añade un perfil!");
  } else {
    document.getElementsByClassName("divPerfil")[index].innerHTML =
      imagen.perfil;
  }
}

function loadImg() {
  const imgInput = document.getElementById("iptImg");
  imgSubida = "";

  imgInput.addEventListener("change", function () {
    const lectura = new FileReader();
    lectura.fileName;
    lectura.addEventListener("load", () => {
      imgSubida = lectura.result;
      document.getElementsByClassName(
        "divPreview"
      )[0].style.backgroundImage = `url(${imgSubida})`; //añado la imagen al preview
    });
    lectura.readAsDataURL(this.files[0]);
  });
}

function addImg() {
  if (localStorage.getItem("imagen")) {
    const imagen = JSON.parse(localStorage.getItem("imagen"));
    // console.log(imagen);
    // console.log(imagen.img);
    document.getElementsByClassName("divImgArt")[
      contAdd - 1
    ].style.backgroundImage = `${imagen.img}`;
  }
}

function editImg() {
  const imgInput = document.getElementsByClassName("btnImg")[1];
  var imgEditada = "";

  imgInput.addEventListener("change", function () {
    const lectura = new FileReader();
    lectura.fileName;
    lectura.addEventListener("load", () => {
      imgEditada = lectura.result;
      document.getElementsByClassName("divImgArt")[
        index
      ].style.backgroundImage = `url(${imgEditada})`; //añado la imagen a la tabla

      document.getElementsByClassName(
        "divPreview"
      )[1].style.backgroundImage = `url(${imgEditada})`; //añado la imagen al preview
    });
    lectura.readAsDataURL(this.files[0]);
  });
}

function closeAdd() {
  //hago invisible todo
  editWindow0.style.display = "none"; //hago invisible la ventana de edit
  lightbox0.style.display = "none";
  divContainer0.style.display = "none";
  iptNombre0.style.display = "none";
  labelImg0.style.display = "none";
  iptPerfil0.style.display = "none";
  save0.style.display = "none";
}
function closeEdit() {
  //hago invisible todo
  editWindow.style.display = "none"; //hago invisible la ventana de edit
  lightbox.style.display = "none";
  divContainer.style.display = "none";
  iptNombre.style.display = "none";
  labelImg.style.display = "none";
  iptPerfil.style.display = "none";
  save.style.display = "none";

  document.getElementById("header").style.zIndex = "-1"; //Esto es para que se vea la ventana de añadir por encima de todo
  document.getElementById("containerArt").style.zIndex = "-2";
}

function guardar_localstorage() {
  var nombre = document.getElementById("iptNombre");
  var perfil = document.getElementById("iptAlt");

  const imagen = {
    nombre: nombre.value,
    perfil: perfil.value,
    img: document.getElementsByClassName("divPreview")[0].style.backgroundImage, //añado la imagen al preview
  };
  localStorage.setItem("imagen", JSON.stringify(imagen));
}
function editar_localstorage() {
  nombreNuevo = document.getElementsByClassName("newIptNombre")[1];
  perfilNuevo = document.getElementsByClassName("newIptAlt")[1];

  const imagen = {
    nombre: nombreNuevo.value,
    perfil: perfilNuevo.value,
    img: document.getElementsByClassName("divPreview")[1].style.backgroundImage,
  };
  localStorage.setItem("imagen", JSON.stringify(imagen));
}
function obtener_localstorage() {
  if (localStorage.getItem("imagen")) {
    const imagen = JSON.parse(localStorage.getItem("imagen"));
    console.log(imagen);
  }
}
function goBack(){
  window.location.href="../admin/admin_panel.html";
}