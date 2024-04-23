//============================ProtectURL============================//
function ProtectURL() {
    var token = localStorage.getItem('token');

    //console.log(token);
    // const data = JSON.parse(response);

        if (token) {
            ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=ControlUser', 'POST', 'JSON', { 'token': token })
            .then(function(response) {
                // console.log(response); 
    
                if (!response) {
                    console.error('Error: Respuesta vacía del servidor');
                } 
                if (response === "Correct_User") {
                    console.log("CORRECTO--> El usuario conectado coincide con el Loggeado");
    
                } else if (response === "Wrong_User") {
                    console.log("ERROR--> Se está intentando forzar una cuenta");
                    LogOutAuto();
    
                } else {
                    console.error('Error: Respuesta del servidor inesperada');
    
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
            }); 
        } else {
            var hoy = new Date();   
            console.log("No hay token disponible: \n" + hoy.toDateString() + "\n" + hoy.toLocaleTimeString());

        }
}
        //========================================================//
//============================ControlActivity============================//
function ControlActivity() {
    var token = localStorage.getItem('token');

    // console.log(token);

    if (token) {
        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=Actividad', 'POST', 'JSON')
            .then(function(response) {

                //console.log(response);

                if (response == "Inactivo") {
                    console.log("User INACTIVO");
                    LogOutAuto();
                } if (response == "Activo") {
                    console.log("User ACTIVO")
                }
            });
    } else {
        console.log("No hay usario logeado");
    }
}
    //========================================================//
//============================RefreshToken============================//
function RefreshToken() {   
    var token = localStorage.getItem('token');
    if (token) {
        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=RefreshToken', 'POST', 'JSON', { 'token': token })
            .then(function(DataToken) {

                // console.log(DataToken);

                console.log("Refresh token correctly");
                localStorage.setItem("token", DataToken);
                location.reload();
                LoadMenu();
            });
    }
}
        //========================================================//
//============================RefreshCookie============================//
function RefreshCookie() {
    ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=RefreshCookie', 'POST', 'JSON')
        .then(function(response) {
            location.reload();
            console.log("Refresh cookie correctly", response);
        });
}
    //========================================================//
//============================LogOutAuto============================//
function LogOutAuto() {
    localStorage.removeItem('token');
    localStorage.removeItem("loggedInUser");

    toastr.warning("Error, tiempo de sesión expirado");

    setTimeout('window.location.href = "http://localhost/ViviendaHomeDrop/index.php?page=RegLog";', 1000);
}
        //========================================================//
//============================Document Ready============================//
$(document).ready(function() {
    setInterval(function() {
         ControlActivity() //✅✅✅
    }, 600000);  //10min= 600000

    ProtectURL(); //✅✅✅  

    setInterval(function() { 
        RefreshToken() //✅✅✅
    }, 300000);                 
    setInterval(function() { 
        RefreshCookie() //✅✅✅
    }, 350000);                 
}); 
//========================================================//
