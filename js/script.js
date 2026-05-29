let indice=0;
let imagenes = ["img/gatito.png", "img/perrito.png", "img/pajarito.png", "img/zorro.png","img/conejo.png" ]

document.getElementById("siguiente").addEventListener("click", () =>{
    if(indice<5) {
        indice++;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
});



document.getElementById("anterior").addEventListener("click", () =>{
    if(indice>0) {
        indice--;
    }
    document.getElementById("img").setAttribute("src",imagenes[indice]);
});