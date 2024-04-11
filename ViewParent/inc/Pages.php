<?php
     //ini_set('session.cookie_lifetime', 0);
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    //-*/-*/-*/-*/-*/-/-*/-*/-*/-*/-*/-*/-*/-*///

    if (!isset($_SESSION['Pages'])) {
        $_SESSION['Pages'] = "ListHomeDrop";
    }

    $Pages = $_SESSION['Pages'];

    if (isset($_GET['page']) && $_GET['page'] === "Shop") {
        $_SESSION['TopPage'] = "Shop";
    }



    // Obtener la página TopPage ::si no está definida sE establece como ListHomeDrop por defecto
    $TopPage = isset($_SESSION['TopPage']) ? $_SESSION['TopPage'] : "ListHomeDrop";

    //echo "pages de index.html ::::$Pages";


    //http://localhost/ViviendaHomeDrop/index.php?page=ControllerShop
    //index.php?page=ControllerShop&Option=ListShop

    switch ($Pages) {
        case "ListHomeDrop":
            include_once('Module/HomeDropModule/Vista/ListHomeDrop.html');
        break;

        case "RegLog":
            include_once('Module/RegisterLogIn/ViewRegLog/RegLog.html');
        break;

        case "Controller_HomeDrop":
            include_once("Module/HomeDropModule/Controlador/Controller_HomeDrop.php");
        break;

        case "Shop":
            //TESTING PAGE
            include_once('Module/Shop/ViewShop/inc/Shop.html');
        break;

        case "ControllerShop":
            include_once("Module/Shop/ControllerShop/ControllerShop.php");
        break;

        case "404":
        case "503":
            include_once("ViewParent/inc/$Pages.html");
        break;

        default:
            $_SESSION['Pages'] = "ListHomeDrop";
        break;
    }

session_destroy();

?>