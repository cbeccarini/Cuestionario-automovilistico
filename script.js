var puntos= localStorage.getItem("puntaje");
document.getElementById("punt").innerHTML = puntos;

function boton6(res, ubi) {
    if (res===1){
        puntos++;
    }
    else{
        puntos--;
    }
    localStorage.setItem("puntaje", puntos)
    window.location.href = ubi
}

function boton(){
    localStorage.setItem("puntaje", 0)
    window.location.href = "index2.html"
}