window.addEventListener('load',function(){
var ImgPortafolio=[{url:"cabin.png"},
                   {url:"cake.png"},
                   {url:"circus.png"},
                   {url:"game.png"},
                   {url:"safe.png"},
                   {url:"submarine.png"}];
function CreaPortafolio(){
  var portafolio = document.getElementById("portafolio");
  ImgPortafolio.forEach(function(Imagen){
    var directorio = "assets/images/portfolio/" + Imagen.url;
    var img = document.createElement('img');
    img.className="picture";
    img.id= "img" + ImgPortafolio.indexOf(Imagen);
    img.setAttribute("src",directorio);
    portafolio.appendChild(img);

  });//cierra forEach
}
CreaPortafolio();
});
