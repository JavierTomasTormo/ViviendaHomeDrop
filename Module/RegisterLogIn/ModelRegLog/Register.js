function register() {
    if (validate_register() != 0) {
        var data = $('#register__form').serialize();

        ajaxPromise('module/login/ctrl/ctrl_login.php?op=register', 'POST', 'JSON', data)
            .then(function(result) {
                if (result == "error_email") {
                    document.getElementById('error_email_reg').innerHTML = "El email ya esta en uso, asegurate de no tener ya una cuenta"
                } else if (result == "error_user") {
                    document.getElementById('error_username_reg').innerHTML = "El usuario ya esta en uso, intentalo con otro"
                } else {
                    toastr.success("Registery succesfully");
                    setTimeout(' window.location.href = "index.php?module=ctrl_login&op=login-register_view"; ', 1000);
                }
            }).catch(function(textStatus) {
                if (console && console.log) {
                    console.log("La solicitud ha fallado: " + textStatus);
                }
            });
    }
}

function key_register() {
    $("#register").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) {
            e.preventDefault();
            register();
        }
    });
}

function button_register() {
    $('#register').on('click', function(e) {
        e.preventDefault();
        register();
    });
}

function validate_register() {
    var username_exp = /^(?=.{5,}$)(?=.*[a-zA-Z0-9]).*$/;
    var mail_exp = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var pssswd_exp = /^(?=.{8,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/;
    var error = false;

    if (document.getElementById('username_reg').value.length === 0) {
        document.getElementById('error_username_reg').innerHTML = "Tienes que escribir el usuario";
        error = true;
    } else {
        if (document.getElementById('username_reg').value.length < 5) {
            document.getElementById('error_username_reg').innerHTML = "El username tiene que tener 5 caracteres como minimo";
            error = true;
        } else {
            if (!username_exp.test(document.getElementById('username_reg').value)) {
                document.getElementById('error_username_reg').innerHTML = "No se pueden poner caracteres especiales";
                error = true;
            } else {
                document.getElementById('error_username_reg').innerHTML = "";
            }
        }
    }

    if (document.getElementById('email_reg').value.length === 0) {
        document.getElementById('error_email_reg').innerHTML = "Tienes que escribir un correo";
        error = true;
    } else {
        if (!mail_exp.test(document.getElementById('email_reg').value)) {
            document.getElementById('error_email_reg').innerHTML = "El formato del mail es invalido";
            error = true;
        } else {
            document.getElementById('error_email_reg').innerHTML = "";
        }
    }

    if (document.getElementById('passwd1_reg').value.length === 0) {
        document.getElementById('error_passwd1_reg').innerHTML = "Tienes que escribir la contraseña";
        error = true;
    } else {
        if (document.getElementById('passwd1_reg').value.length < 8) {
            document.getElementById('error_passwd1_reg').innerHTML = "La password tiene que tener 8 caracteres como minimo";
            error = true;
        } else {
            if (!pssswd_exp.test(document.getElementById('passwd1_reg').value)) {
                document.getElementById('error_passwd1_reg').innerHTML = "Debe de contener minimo 8 caracteres, mayusculas, minusculas y simbolos especiales";
                error = true;
            } else {
                document.getElementById('error_passwd1_reg').innerHTML = "";
            }
        }
    }

    if (document.getElementById('passwd2_reg').value.length === 0) {
        document.getElementById('error_passwd2_reg').innerHTML = "Tienes que repetir la contraseña";
        error = true;
    } else {
        if (document.getElementById('passwd2_reg').value.length < 8) {
            document.getElementById('error_passwd2_reg').innerHTML = "La password tiene que tener 8 caracteres como minimo";
            error = true;
        } else {
            if (document.getElementById('passwd2_reg').value === document.getElementById('passwd1_reg').value) {
                document.getElementById('error_passwd2_reg').innerHTML = "";
            } else {
                document.getElementById('error_passwd2_reg').innerHTML = "La password's no coinciden";
                error = true;
            }
        }
    }

    if (error == true) {
        return 0;
    }
}

$(document).ready(function() {
    key_register();
    button_register();
});