// // ================AJAX-PROMISE================
// function ajaxPromise(sUrl, sType, sTData, sData = undefined) {
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url: sUrl,
//             type: sType,
//             dataType: sTData,
//             data: sData,
//             beforeSend: function() {
//                 $("#overlay").fadeIn(300);
//             }
//         }).done((data) => {
//             setTimeout(function() {
//                 $("#overlay").fadeOut(300);
//             }, 500);
//             resolve(data)

//         }).fail((jqXHR, textStatus, errorThrow) => {
//             reject(errorThrow);
//         });
//     });
// }

// //================LOAD-HEADER================
// function load_menu() {
//     var token = localStorage.getItem('token');
//     if (token) {
//         ajaxPromise('module/login/ctrl/ctrl_login.php?op=data_user', 'POST', 'JSON', { 'token': token })
//             .then(function(data) {
//                 if (data.type_user == "client") {
//                     console.log("Client loged");
//                     $('.opc_CRUD').empty();
//                     $('.opc_exceptions').empty();
//                 } else {
//                     console.log("Admin loged");
//                     $('.opc_CRUD').show();
//                     $('.opc_exceptions').show();
//                 }
//                 $('.log-icon').empty();
//                 $('#user_info').empty();
//                 $('<img src="' + data.avatar + '"alt="Robot">').appendTo('.log-icon');
//                 $('<p></p>').attr({ 'id': 'user_info' }).appendTo('#des_inf_user')
//                     .html(
//                         '<a id="logout"><i id="icon-logout" class="fa-solid fa-right-from-bracket"></i></a>' +
//                         '<a>' + data.username + '<a/>'

//                     )

//             }).catch(function() {
//                 console.log("Error al cargar los datos del user");
//             });
//     } else {
//         console.log("No hay token disponible");
//         $('.opc_CRUD').empty();
//         $('.opc_exceptions').empty();
//         $('#user_info').hide();
//         $('.log-icon').empty();
//         $('<a href="index.php?module=ctrl_login&op=login-register_view"><i id="col-ico" class="fa-solid fa-user fa-2xl"></i></a>').appendTo('.log-icon');
//     }
// }


// //================CLICK-LOGIUT================
// function click_logout() {
//     $(document).on('click', '#logout', function() {
//         localStorage.removeItem('total_prod');
//         toastr.success("Logout succesfully");
//         setTimeout('logout(); ', 1000);
//     });
// }

// //================LOG-OUT================
// function logout() {
//     ajaxPromise('module/login/ctrl/ctrl_login.php?op=logout', 'POST', 'JSON')
//         .then(function(data) {
//             localStorage.removeItem('token');
//             window.location.href = "index.php?module=ctrl_home&op=list";
//         }).catch(function() {
//             console.log('Something has occured');
//         });
// }

// // Remove localstorage('page') with click in shop
// function click_shop() {
//     $(document).on('click', '#opc_shop', function() {
//         localStorage.removeItem('page');
//         localStorage.removeItem('total_prod');
//     });
// }

// $(document).ready(function() {
//     load_menu();
//     click_logout();
//     click_shop();
// });