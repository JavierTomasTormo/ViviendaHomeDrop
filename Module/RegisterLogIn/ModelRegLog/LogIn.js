/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/
function LogIn() {
    //console.log('LogIn');

    if (ValidateLogIn() != 0) {
        var formDataArray = $('#login__form').serializeArray();

        var formData = {};
        $.each(formDataArray, function(index, field){
            formData[field.name] = field.value;
        });

        // console.log(formData);
        // console.log(formData['passwd_log']);
        // console.log(formData['username_log']);


        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=LogIn', 'POST', 'JSON', {'passwd_log': formData['passwd_log'], 'username_log': formData['username_log'] })
        .then(function(result) {
            console.log(result);

            if (result === "error_user") {
                document.getElementById('error_username_log').innerHTML = "Creemos que tu Usuario esta mal escrito o no existe";
            } else if (result === "error_passwd") {
                document.getElementById('error_passwd_log').innerHTML = "Escribe más despacio, la contraseña es errónea";
            } else {
                localStorage.setItem("token", result.token);
                toastr.success("Logged in successfully");
            
                // console.log(localStorage.getItem('token'));     
                // console.log("Token:", result.token);
                // console.log("Avatar:", result.user['Avatar']);
                // console.log("Username:", result.user['Username']);        
   

                localStorage.setItem("loggedInUser", JSON.stringify({
                    token: result.token,
                    avatar: result.user['Avatar'],
                    username: result.user['Username']
                }));


                setTimeout(function() {
                    window.location.href = "index.php?page=Controller_HomeDrop&Option=List";
                }, 1000);
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        });

    }
}
/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/
function ValidateLogIn() {
    //console.log('ValidateLogIn');

    var error = false;

    if (document.getElementById('username_log').value.length === 0) {
        document.getElementById('error_username_log').innerHTML = "Hey, escribe tu nombre de usuario o ni ChatGPT sabrá quien eres!";
        error = true;
    } else {
        if (document.getElementById('username_log').value.length < 5) {
            document.getElementById('error_username_log').innerHTML = "Usuario no encontrado, debe contener 5 caracteres como mínimo";
            error = true;
        } else {
            document.getElementById('error_username_log').innerHTML = "";
        }
    }

    if (document.getElementById('passwd_log').value.length === 0) {
        document.getElementById('error_passwd_log').innerHTML = "Opss, al parecer no has escrito tu contraseña";
        error = true;
    } else {
        document.getElementById('error_passwd_log').innerHTML = "";
    }

    if (error == true) {
        return 0;
    }
}
/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/
function KeyLogIn() {
    
    $("#login").keypress(function(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        //console.log('KeyLogIn Ready');

        if (code == 13) {
            e.preventDefault();
            LogIn();
        }
    });
}
/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/
function ButtonLogIn() {
    
    $('#login').on('click', function(e) {
        //console.log('ButtonLogIn Ready');

        e.preventDefault();
        LogIn();
    });
}
/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/
$(document).ready(function() {
    //console.log('LogIn.js Document Ready');
    KeyLogIn();
    ButtonLogIn();
});
/*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*#*/