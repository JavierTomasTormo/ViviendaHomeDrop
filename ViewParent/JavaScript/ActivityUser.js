//============================ProtectURL============================//
function ProtectURL() {
    var token = localStorage.getItem('token');

    //console.log(token);
    // const data = JSON.parse(response);

    ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=ControlUser', 'POST', 'JSON', {'token': token})
        .then(function(data) {

            console.log(data);

            if (data == "Correct_User") {
                console.log("BIEN--> El usuario conectado coincide con el Loggeado");
            } else if (data == "Wrong_User") {
                console.log("ERROR--> Se esta intentando forzar una cuenta");
                LogOutAuto();
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
        }); 
}
//========================================================//
//============================ControlActivity============================//
// function ControlActivity() {
//     var token = localStorage.getItem('token');
//     if (token) {
//         ajaxPromise('module/login/ctrl/ctrl_login.php?op=actividad', 'POST', 'JSON')
//             .then(function(response) {
//                 if (response == "inactivo") {
//                     console.log("usuario INACTIVO");
//                     LogOutAuto();
//                 } else {
//                     console.log("usuario ACTIVO")
//                 }
//             });
//     } else {
//         console.log("No hay usario logeado");
//     }
// }
//========================================================//
//============================RefreshToken============================//
// function RefreshToken() {
//     var token = localStorage.getItem('token');
//     if (token) {
//         ajaxPromise('module/login/ctrl/ctrl_login.php?op=refresh_token', 'POST', 'JSON', { 'token': token })
//             .then(function(data_token) {
//                 console.log("Refresh token correctly");
//                 localStorage.setItem("token", data_token);
//                 load_menu();
//             });
//     }
// }
//========================================================//
//============================RefreshCookie============================//
// function RefreshCookie() {
//     ajaxPromise('module/login/ctrl/ctrl_login.php?op=refresh_cookie', 'POST', 'JSON')
//         .then(function(response) {
//             console.log("Refresh cookie correctly");
//         });
// }
//========================================================//
//============================LogOutAuto============================//
// function LogOutAuto() {
//     localStorage.removeItem('token');
//     localStorage.removeItem("loggedInUser");

//     toastr.warning("Se ha cerrado la cuenta por seguridad!!");

//     setTimeout('window.location.href = "index.php?module=ctrl_login&op=login-register_view";', 2000);
// }
//========================================================//
//============================Document Ready============================//
$(document).ready(function() {
    // setInterval(function() { ControlActivity() }, 1); //10min= 600000
    ProtectURL();
    // setInterval(function() { RefreshToken() }, 600000);
    // setInterval(function() { RefreshCookie() }, 600000);
});
//========================================================//
