function piedraPapelTijera(){
    
    let elegirOpcion = prompt(`¡Hola vamos a iniciar el juego!
        Primero tenes que seleccionar una opcion:
        1. Piedra
        2. Papel
        3.Tijera
        
        (Tenes que escribir el numero de la opcion que deseas elegir)`);
   

    let eleccionAleatoria = Math.floor(Math.random() *3) + 1;
    let eleccionComputadora;

    if ( eleccionAleatoria === 1 ){
        eleccionComputadora = "piedra";
    } else if ( eleccionAleatoria === 2 ){
        eleccionComputadora = "papel";
    } else {
        eleccionComputadora = "tijera";
    }

    let eleccionJugadorTexto;
    if (elegirOpcion === "1"){
        eleccionJugadorTexto = "piedra"
    } else if (elegirOpcion === "2"){
        eleccionJugadorTexto = "papel"
    } else if (elegirOpcion === "3"){
        eleccionJugadorTexto = "tijera"
    } else {
        alert("Opcion invalida. Por favor selecciona 1, 2 o 3.");
        piedraPapelTijera();
        return;
    }

    if (eleccionJugadorTexto === eleccionComputadora){
        alert("Es un empate. Ambos eligieron" + " " + eleccionJugadorTexto);
    } else if (
        (eleccionJugadorTexto === "piedra" && eleccionComputadora === "tijera") ||
        (eleccionJugadorTexto === "papel" && eleccionComputadora === "piedra") ||
        (eleccionJugadorTexto === "tijera" && eleccionComputadora === "papel")
    ){
        alert("Felicidades, ganaste! Elegiste" + " " + eleccionJugadorTexto + " y la computadora eligio "+ eleccionComputadora);
    } else {
        alert("Perdiste! Elegiste " + eleccionJugadorTexto + " y la computadora eligio " + eleccionComputadora )
    }

    if (confirm("Queres jugar de nuevo?")){
        piedraPapelTijera();
    } else {
        alert("Gracias por jugar!")
    }



}

piedraPapelTijera();