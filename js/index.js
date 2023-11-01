


const boton = document.getElementById('boton_ocultar');
const imagen = document.getElementById('imagenParaocultar');

boton.addEventListener ('click',function() {

    setTimeout(function(){

        imagen.style.display = 'none';


    },1000);



}); 

function mensaje(){

    var andres = document.getElementById('name').value;

    var mensaje = ' Bienvenido' +' '+ ' ' + andres +' ' +' '+  'estamos encantados de tenerte con nosotros';
    console.log(andres);

    document.getElementById('resultado').textContent = mensaje;


}
