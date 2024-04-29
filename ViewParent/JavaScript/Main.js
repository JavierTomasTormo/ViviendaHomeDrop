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
function LoadMenu() {
    var token = localStorage.getItem('token');

    if (token) {
        ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=DataUser', 'POST', 'JSON', { 'token': token })
            .then(function(data) {
                $('#loginBtn').hide();

                // console.log(data);

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
                
                    var userMenu = $('<div id="user_menu" style="display: none;">' +
                                        '<button id="logout_button">Logout</button>' +
                                        
                                        '<button id="close_menu_button">Close</button>' +
                                        '<button id="profile_button">¡¡ <b> Liked </b>!!</button>' +
                                    '</div>');
                
                    var table = $('<table style="width: 100%;"></table>');
                    var trAvatar = $('<tr></tr>').appendTo(table);
                    var trButtons = $('<tr></tr>').appendTo(table);
                
                    var tdAvatar = $('<td style="vertical-align: top;"></td>').appendTo(trAvatar);
                    var tdUserInfo = $('<td style="vertical-align: top; text-align: right;"></td>').appendTo(trAvatar);
                    var tdButtons = $('<td colspan="2" style="text-align: right;"></td>').appendTo(trButtons);
                
                    tdAvatar.append(userAvatar);
                    tdUserInfo.append(usernameSpan);
                    tdButtons.append(userMenu);
                
                    $('#userSection').append(table);
                
                    $('#userSection').css({
                        "display": "flex",
                        "background-color": "#d5b568",
                        "border-radius": "5px",
                        "padding": "10px"
                    });
                
                    $('#username').css({
                        "color": "black",
                        "font-weight": "800"
                    });

                    $('#user_menu button').css({
                        "background-color": "#4d4d4d",
                        "border": "none",
                        "color": "white",
                        "padding": "10px 20px",
                        "text-align": "center",
                        "text-decoration": "none",
                        "display": "inline-block",
                        "font-size": "16px",
                        "margin": "4px 2px",
                        "cursor": "pointer",
                        "border-radius": "5px"
                    });
                    
                    $('#user_menu button:hover').css({
                        "background-color": "#fff"
                    });
                    
                    var menuOpen = 0; 
                    
                    $('#userSection').on('click', function() { 
                        //console.log(menuOpen);

                        if (menuOpen === 0) { 
                            $('#user_menu').show();

                        } if (menuOpen === 1) {
                            $('#user_menu').hide(); 
                            menuOpen = 0;

                        }
                    });
                    
                    $('#close_menu_button').on('click', function() {
                        $('#profile_button').html('¡¡ <b> Liked </b>!!'); 
                        $('#profile_button').removeAttr('disabled');
                        $('#profile_button').removeClass('liked'); 
                        
                        
                        menuOpen = 1;
                        viviendasMenu.empty();
                    });

                    
                    $('#profile_button').on('click', function() {
                        //console.log(data);
                        //console.log('profile');

                        $.ajax({
                            url: 'Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=LikedHouses',
                            type: 'POST',
                            dataType: 'JSON',
                            data: { Username: data.Username }
                        })
                        .done(function(response) {
                            
                            var viviendasMenu = $('#profile_button');
                            viviendasMenu.empty(); 
                            
                            
                            $.each(response, function(index, vivienda) {
                                //console.log(vivienda);
                            
                                viviendasMenu.css({
                                    "max-height": "500px",
                                    "overflow-y": "auto"
                                }); 

                                var listItem = $('<li>').css({
                                    "border": "2px solid #ccc",
                                    "padding": "20px",
                                    "margin-bottom": "20px",
                                    "width": "950px",
                                    "list-style-type": "none",
                                    "border-radius": "10px",
                                    "box-shadow": "0 4px 8px 0 rgba(0,0,0,0.2)"
                                });
                            
                                var labelStyle = {
                                    "font-weight": "bold",
                                    "color": "#333",
                                    "display": "inline-block",
                                    "width": "200px",
                                    "font-size": "1.2em"
                                };
                            
                                var valueStyle = {
                                    "color": "#fff",
                                    "font-size": "1.1em"
                                };
                            
                                listItem.append($('<span>').text('Calle:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Calle).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Category:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Category).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Ciudad:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Ciudad).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('ID_HomeDrop:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.ID_HomeDrop).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('ID_Imagen:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.ID_Imagen).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Operation:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Operation).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Precio:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Precio).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Superficie:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Superficie).css(valueStyle)).append('<br>');
                            
                                listItem.append($('<span>').text('Type:').css(labelStyle));
                                listItem.append($('<span>').text(vivienda.Type).css(valueStyle));
                            
                                viviendasMenu.append(listItem);
                            });
                            
                            viviendasMenu.show(); 

                        }).fail(function(jqXHR, textStatus, errorThrown) {
                            console.error('Error al cargar la lista de viviendas:', errorThrown);
                        });
                    });
                    
                    
                } else {
                    $('#userSection').hide();
                }

            }).catch(function() {
                console.log("Error al cargar los datos del usuario");
            });
    }
}
//--------------------------------------------//
//================CLICK-LOGOUT================//
function ClickLogOut() {
    $(document).on('click', '#logout_button', function() {
        

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
    console.log('logout');
    ajaxPromise('Module/RegisterLogIn/ControladorRegLog/ControladorRegLog.php?Option=LogOut', 'POST', 'JSON')
        .then(function(data) {

            //console.log(data);

            localStorage.removeItem('token');
            window.location.href = "index.php";
        }).catch(function() {
            console.error('Something wrong has occured');
        });
}
//--------------------------------------------//
//================Pagination_DataRemove================//
function ClickShop() {
    $(document).on('click', '#shop', function() {
        localStorage.removeItem('currentPageId');
        localStorage.removeItem('move');
    });
}
//--------------------------------------------//
//================DocReady================//
$(document).ready(function() {
    LoadMenu();
    ClickLogOut();
    ClickShop();
});
//--------------------------------------------//


