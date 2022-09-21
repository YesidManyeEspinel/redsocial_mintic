function validar_formulario() {
    //Obteniendo los valores de los campos a validar 
    var email = document.formRegistro.correo;
    var password = document.formRegistro.password;
    //Validar el campo usuario 

    var formato_email = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(formato_email)) {
        alert("Debes ingresar un correo electronico valido!");
        correo.focus();
    }
    var passid_len = password.value.length;
    if (passid_len < 8) {
        alert("Debes ingresar un password con más de 8 caracteres.");
        password.focus();
    }

}