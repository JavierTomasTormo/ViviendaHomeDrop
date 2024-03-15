<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

if (isset($_GET['page'])) {
    $_SESSION['Pages'] = $_GET['page'];
}

if (isset($Pages)) {
    $_SESSION['Pages'] = $Pages;
}
//echo"Valor de Pages despues de ;:;$Pages";

if (isset($_SESSION['Pages'])) {
    $Pages = $_SESSION['Pages'];

    if ($Pages === 'ListHomeDrop') {
        include("ViewParent/inc/utils/TopPage_HomeDrop.html");
        include("ViewParent/inc/nav.html");
        
    } elseif ($Pages === 'Shop') {
        include("ViewParent/inc/utils/TopPageShop.html");
        include("ViewParent/inc/nav.html");

    } elseif ($Pages === 'Controller_HomeDrop') {
        include("ViewParent/inc/utils/TopPage_HomeDrop.html");
        include("ViewParent/inc/nav.html");

    } elseif ($Pages === 'ControllerShop') {
        include("ViewParent/inc/utils/TopPageShop.html");
        include("ViewParent/inc/nav.html");
    }
} else {

    //echo "La variable de sesión Pages no está definida.(index.php)";
    include("ViewParent/inc/utils/TopPage_HomeDrop.html");
        include("ViewParent/inc/nav.html");
}

// Incluir el archivo Pages.php
include("ViewParent/inc/Pages.php");
include_once("Model/Connect.php");

// Incluir el footer
include("ViewParent/inc/utils/simpleFooter.html");
?>
