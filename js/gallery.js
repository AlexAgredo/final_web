const btnCierra =document.querySelector("#cierra")
const counterVal = 0;
const Imagenes = document.getElementsByClassName("imagen")[0]
const lightbox = document.getElementsByClassName("Transp")[0]
const ImagenActiva = document.getElementsByClassName("Imgaver")
let indiceImg = 0

const abreLightbox = (event) =>{
    ImagenActiva.src= event.target.src;
    lightbox.style.display = 'flex'
    indiceImg = Array.from(Imagenes).indexOf(event.target);
    console.log("Sapo")
}

Imagenes.addEventListener('click', abreLightbox)

btnCierra.addEventListener('click', () => {
    lightbox.style.display='none'
})
