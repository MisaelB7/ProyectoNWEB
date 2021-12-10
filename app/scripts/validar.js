const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	Nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    Apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	Contraseña: /^.{4,12}$/, // 4 a 12 digitos.
	Correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	Telefono: /^\d{8,11}$/, // 7 a 14 numeros.
    Edad: /^\d{2}$/ // 7 a 14 numeros.
}

const campos = {
	Usuario: false,
	Nombre: false,
    Apellido:false,
	Contraseña: false,
	Correo: false,
	Telefono: false,
    Edad: false
}
const validarFormulario = (e) => {
	switch (e.target.name) {
        case "Nombre":
			validarCampo(expresiones.Nombre, e.target, 'Nombre');
		break;
        case "Apellido":
            validarCampo(expresiones.Apellido, e.target, 'Apellido')
        break;
        case "Correo":
			validarCampo(expresiones.Correo, e.target, 'Correo');
		break;
        case "Telefono":
			validarCampo(expresiones.Telefono, e.target, 'Telefono');
		break;
		case "Usuario":
			validarCampo(expresiones.Usuario, e.target, 'Usuario');
		break;
		case "Contraseña":
			validarCampo(expresiones.Contraseña, e.target, 'Contraseña');
		break;	
        case "Edad":
			validarCampo(expresiones.Edad, e.target, 'Edad');
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
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.Usuario && campos.Apellido && campos.Nombre && campos.Contraseña && campos.Correo && campos.Telefono && campos.Edad ){
		formulario.reset();
        window.location.href = "http://127.0.0.1:5500/app/index.html";

	} 
});