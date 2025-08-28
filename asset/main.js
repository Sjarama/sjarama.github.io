const formulario = document.getElementById('formulario');
const edad_persona = document.getElementById('edad');
const resultado = document.getElementById('resultado');
msg= "<p> Tu edad fue verificada tu eres: </p>"
console.log (edad_persona);

formulario.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const edad = parseInt(edad_persona.value);

    if (isNaN(edad)) {
        resultado.innerHTML=msg + 'Por favor, ingresa una edad válida.';
    } else if (edad < 18 && edad >0) {
        
         resultado.innerHTML=msg + 'Eres menor de edad.';
    } else if(edad>=18) {
       resultado.innerHTML=msg +'Eres mayor de edad.';
    }
    else{
        resultado.innerHTML=msg + 'Por favor, ingresa una edad válida.';
    }
});


console.log("mundo")
let message="soy pro en fullstack"
document.writeln("<h3>"+message+ "</h3");

const timestamp = Date.now();
let mensaje=" hoy en timesmap es:"+ timestamp;
document.writeln("<p>"+mensaje +"</p>")