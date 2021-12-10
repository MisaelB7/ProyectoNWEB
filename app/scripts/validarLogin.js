const itemsPath = '/mock/login.json';
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

window.onload = getData();



const expresiones = {
	Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	Contraseña: /^.{4,12}$/ // 4 a 12 digitos.
}

const campos = {
	Usuario: false,
	Contraseña: false
}

function getData() {
    fetch(`${serverUrl}${itemsPath}`)
      .then((res) => res.json())
      .then((data) => printData(data));
      
}

function printData(data){
    data.forEach((item) => {
        validarFormulario(item);
    })
}

const validarFormulario = (e, item) => {
	switch (e.target.name) {
		case "Usuario":
            if(e.target == item.usuario){
			    validarCampo(expresiones.Usuario, e.target, 'Usuario');
            }
		break;
		case "Contraseña":
            if(e.target == item.contraseña ){
			    validarCampo(expresiones.Contraseña, e.target, 'Contraseña');
            }
        break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		campos[campo] = true;
	} else {
		campos[campo] = false;
	
    }
}



formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.Usuario && campos.Contraseña ){
		formulario.reset();
        window.location.href = "http://127.0.0.1:5500/app/index.html";

	} 
});