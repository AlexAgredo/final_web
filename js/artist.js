cambioArt();

function cambioArt() {
    var nombreArt = document.getElementById("nombreArt");
    perfilArt=document.getElementById("perfil");
    playlistArt=document.getElementById("playlist")
    var imgArt = document.getElementById("imgArt");
    if (localStorage.getItem("artista")) {
      const artista = JSON.parse(localStorage.getItem("artista"));
      console.log(artista);
      nombreArt.innerHTML = artista.nombre;
      perfilArt.innerHTML=artista.perfil;
      playlistArt.src=artista.playlist;
      imgArt.style.backgroundImage = `${artista.img}`;
    }
  }