<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/RegisterLogIn/ModelRegLog/DAORegLog.php");
// include($path . "Model/MiddleWareAuth.php");

@session_start();
// if (isset($_SESSION["tiempo"])) {  
//     $_SESSION["tiempo"] = time(); //Devuelve la fecha actual
// }

switch ($_GET['Option']) {
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'RegLogView';
        include("Module/RegisterLogIn/ViewRegLog/RegLog.html");
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'Register':

        // echo json_encode('Hola?');
        // break;

        $post_data = urldecode($_POST['data']);
        $pairs = explode('&', $post_data);
        $data = array();

        foreach ($pairs as $pair) {
            list($key, $value) = explode('=', $pair);
        
            $value = urldecode($value);
        
            $data[$key] = $value;
        }

        $username_reg = $data['username_reg'];
        $passwd1_reg = $data['passwd1_reg'];
        $passwd2_reg = $data['passwd2_reg'];
        $email_reg = $data['email_reg'];
        //echo json_encode($username_reg);
        //echo json_encode($passwd1_reg);
        // echo json_encode($passwd2_reg);
        // echo json_encode($email_reg);
        // exit;

        try {
            $daoLog = new DAORegLog();
            $check = $daoLog->SelectEmail($email_reg, $username_reg);
            // echo json_encode($check);
            // break;
        } catch (Exception $e) {
            echo json_encode("error");
            exit;
        }
        // echo json_encode($check);
        // break;

        if ($check) {
            $check_email = false;
        } else {
            $check_email = true;
        }

        // echo json_encode($check_email);
        // break;

        if ($check_email == true) {
                // echo json_encode('bnc');
                // break;
                //Aqui llega

                $daoLog = new DAORegLog();
                $rdo = $daoLog->InsertUser($username_reg, $email_reg, $passwd2_reg);

                // echo json_encode($rdo);
                // break;

            if ($rdo == false) {
                echo json_encode("error_user");
                exit;
            } else {
                echo json_encode("Procreed");
                exit;
            }
        } else {
            echo json_encode("error_email");
            exit;
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'LogIn':
        include($path . "Model/MiddleWareAuth.php");
        // echo json_encode("LogIn" );


        $useranme_log = $_POST['username_log'];
        $passwd_log = $_POST['passwd_log'];

        // echo json_encode($useranme_log);
        // echo json_encode($passwd_log);
        // break;

        try {
            $daoLog = new DAORegLog();
            $rdo = $daoLog->SelectUser($useranme_log);
            // echo json_encode($rdo);
            // echo json_encode($rdo);
            // break;
            if ($rdo == "error_user") {
                echo json_encode("error_user");
                break;
            } else {
                // echo json_encode($rdo->Password);
                // // echo json_encode('No hay un error de usuario');
                // break;
                if (password_verify($passwd_log, $rdo -> Password)) {

                    $token = CreateToken($rdo -> Username);
                    $_SESSION['Username'] = $rdo -> Username;
                    $_SESSION['tiempo'] = time(); 

                    $response = array(
                        'token' => $token,
                        'user' => $rdo
                    );
                    

                    // echo json_encode($_SESSION);
                    echo json_encode($response);
                    exit;
                } else {
                    echo json_encode("error_passwd");
                    exit;
                }
            }
        } catch (Exception $e) {
            echo json_encode("error");
            exit;
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'ControlUser':
        include($path . "Model/MiddleWareAuth.php");

        // echo json_encode($_POST['token']);
        // break;
        // echo json_encode($_SESSION);
        // break;

        $token_dec = DecodeToken($_POST['token']);

        // echo json_encode($token_dec['exp']);
        // break;

        if ($token_dec['exp'] < time()) {
            echo json_encode("Wrong_User");
            exit();
        }

        if (isset($_SESSION['Username']) && ($_SESSION['Username']) == $token_dec['Username']) {
            echo json_encode("Correct_User");
            exit();
        } else {
            echo json_encode("Wrong_User");
            exit();
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//  
    case 'Actividad':
        if (!isset($_SESSION["tiempo"])) {
            echo json_encode("Inactivo");
            exit();
        } else {
            if ((time() - $_SESSION["tiempo"]) >= 1800) { //1800s=30min
                echo json_encode("Inactivo");
                exit();
            } else {
                echo json_encode("Activo");
                exit();
            }
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//  
    case 'RefreshToken':
        include($path . "Model/MiddleWareAuth.php");

        // echo json_encode($_POST['token']);
        // break;

        $OldToken = DecodeToken($_POST['token']);

        // echo json_encode('Old?');
        // echo json_encode($OldToken['Username']);
        // break;

        $NewToken = CreateToken($OldToken['Username']);
        echo json_encode($NewToken);
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//       
    case 'RefreshCookie':
        session_regenerate_id();
        echo json_encode("Done");
        exit;
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~// 
    case 'DataUser':
        include($path . "Model/MiddleWareAuth.php");
        
        // echo json_encode($_POST['token']);
        // break;

        $json = DecodeToken($_POST['token']);

        // echo json_encode($json);
        // break;

        $daoLog = new DAORegLog();
        $rdo = $daoLog->SeleccionarDatosUsuario($json['Username']);
        
        echo json_encode($rdo);
        exit;
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~// 
    case 'logout':
        unset($_SESSION['username']);
        unset($_SESSION['tiempo']);
        session_destroy();

        echo json_encode('Done');
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//       
    default;
        include("ViewParent/inc/error404.html");
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
}
