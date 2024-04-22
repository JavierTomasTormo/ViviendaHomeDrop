// ================AJAX-PROMISE================ //
function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: sUrl,
            type: sType,
            dataType: sTData,
            data: sData,
            beforeSend: function() {
                $("#overlay").fadeIn(300);
            }
        }).done((data) => {
            setTimeout(function() {
                $("#overlay").fadeOut(300);
            }, 500);
            resolve(data)

        }).fail((jqXHR, textStatus, errorThrow) => {
            reject(errorThrow);
        });
    });
}
//--------------------------------------------//
//================LOAD-HEADER================//
/*function LoadMenu() {
    var token = localStorage.getItem('token');

    //console.info('LoadMenu');

    if (token) {
        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=DataUser', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                $('#loginBtn').hide();

                console.log(data);

                if (data.UserType == "client") {
                    console.log("Client loged");
                    $('.opc_CRUD').empty();
                    $('.opc_exceptions').empty();

                } if (data.UserType == "admin") {
                    console.log("Admin loged");
                    $('.opc_CRUD').show();
                    $('.opc_exceptions').show();

                }



                var userData = JSON.parse(localStorage.getItem("loggedInUser"));


                if (userData) {
                    $('#loginBtn').hide();

                    var userAvatar = $("<img>")
                        .attr({
                            id: "userAvatar",
                            src: userData.avatar,
                            alt: "Avatar",
                            width: 60
                        });
                    
                    var usernameSpan = $("<span></span>")
                        .attr("id", "username")
                        .text(userData.username);
                    
                    $("#userSection").append(userAvatar).append(usernameSpan);
                    
                    $('#userSection').css({
                        "display": "flex",
                        "background-color": "#d5b568",
                        "border-radius": "5px",
                        "min-width": "8%"
                    });

                    $('#username').css({
                        "color": "black",
                        "font-weight": "800"
                    });
                } else {
                    $('#userSection').hide();
                }

                // console.log(localStorage.getItem('token'));  
                // console.log("Token:", userData.token);
                // console.log("Avatar:", userData.avatar);
                // console.log("Username:", userData.username);      

                $('#userSection').on('click', function() {

                    $('<p></p>').attr({ 'id': 'user_info' }).appendTo('#des_inf_user')
                    .html(
                        '<button id="logout"><i id="icon-logout" class="fa-solid fa-right-from-bracket"></i></button>' +
                        '<a>' + data.Username + '<a/>'

                    )

                    //location.reload();
                });


            }).catch(function() {
                console.log("Error al cargar los datos del user");
            });
    } 
}*/
function LoadMenu() {
    var token = localStorage.getItem('token');

    if (token) {
        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=DataUser', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                $('#loginBtn').hide();

                console.log(data);

                var menval = 0;

                if (data.UserType == "client") {
                    console.log("Client loged");
                    $('.opc_CRUD').empty();
                    $('.opc_exceptions').empty();

                } else if (data.UserType == "admin") {
                    console.log("Admin loged");
                    $('.opc_CRUD').show();
                    $('.opc_exceptions').show();
                }

                var userData = JSON.parse(localStorage.getItem("loggedInUser"));

                if (userData) {
                    $('#loginBtn').hide();

                    var userAvatar = $("<img>")
                        .attr({
                            id: "userAvatar",
                            src: userData.avatar,
                            alt: "Avatar",
                            width: 60
                        });
                    
                    var usernameSpan = $("<span></span>")
                        .attr("id", "username")
                        .text(userData.username);
                    
                    $("#userSection").append(userAvatar).append(usernameSpan);
                    
                    $('#userSection').css({
                        "display": "flex",
                        "background-color": "#d5b568",
                        "border-radius": "5px",
                        "min-width": "8%",
                    });

                    $('#username').css({
                        "color": "black",
                        "font-weight": "800"
                    });

                    var userMenu = $('<div id="user_menu" style="display: none;">' +
                                        '<button id="logout_button">Logout</button>' +
                                        '<button id="close_menu_button">Close</button>' +
                                    '</div>');

                    $('#userSection').append(userMenu);

                    var menuOpen = false; 

                    $('#userSection').on('click', function() { 
                        if (!menuOpen) { 
                            $('#user_menu').show();
                            menuOpen = true;
                        }
                    });

                    $('#close_menu_button').on('click', function() {
                        $('#user_menu').hide(); 
                        menuOpen = false;
                    });

                    // var userMenu = $('<div id="user_menu" style="display: none;">' +
                    //                     '<button id="logout_button">Logout</button>' +
                    //                 '</div>');

                    // $('#userSection').append(userMenu);


                    // $('#userSection').on('click', function() { 
                    //     $('#user_menu').toggle();

                    // });

                    // $('#logout_button').on('click', function() {
                    //     // Aquí puedes agregar la lógica para el logout
                    //     // Por ejemplo, eliminar el token del localStorage y redirigir a la página de inicio de sesión
                    //     // localStorage.removeItem('token');
                    //     // window.location.href = 'index.php?module=ctrl_login&op=login-register_view';
                    // });


                } else {
                    $('#userSection').hide();
                }

            }).catch(function() {
                console.log("Error al cargar los datos del usuario");
            });
    }
}

/*                        // menval
if (menval = 0) {
    $('#userSection').css({
        "display": "flex",
        "background-color": "#d5b568",
        "border-radius": "5px",
        "min-width": "100%",
    });
    menval = 1;
} else {
    $('#userSection').css({
        "display": "flex",
        "background-color": "#d5b568",
        "border-radius": "5px",
        "min-width": "8%",
    });
    menval = 0;
}
*/

//--------------------------------------------//
//================CLICK-LOGOUT================//
function ClickLogOut() {
    $(document).on('click', '#logout', function() {

        localStorage.removeItem("loggedInUser");
        localStorage.removeItem('token');

        toastr.success("Logout succesfully");

        setTimeout( 
            LogOut()
        , 1000);
    });
}
//--------------------------------------------//
//================LOG-OUT================//
function LogOut() {
    ajaxPromise('module/login/ctrl/ctrl_login.php?op=logout', 'POST', 'JSON')
        .then(function(data) {
            localStorage.removeItem('token');
            window.location.href = "index.php?module=ctrl_home&op=list";
        }).catch(function() {
            console.log('Something has occured');
        });
}

// Remove localstorage('page') with click in shop
function ClickShop() {
    $(document).on('click', '#shop', function() {
        localStorage.removeItem('currentPageId');
        localStorage.removeItem('move');
    });
}

$(document).ready(function() {
    LoadMenu();
    ClickLogOut();
    // click_shop();
});


