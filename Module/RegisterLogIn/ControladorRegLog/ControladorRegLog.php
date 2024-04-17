<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/RegisterLogIn/ModelRegLog/DAORegLog.php");
//include($path . "Model/MiddleWareAuth.php");

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

        return 'Hola ControlUser de el permaURL o algo asi';

        $token_dec = DecodeToken($_POST['token']);

        return $token_dec;

        if ($token_dec['exp'] < time()) {
            echo json_encode("Wrong_User");
            exit();
        }

        if (isset($_SESSION['username']) && ($_SESSION['username']) == $token_dec['username']) {
            echo json_encode("Correct_User");
            exit();
        } else {
            echo json_encode("Wrong_User");
            exit();
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//  
    case 'logout':
        unset($_SESSION['username']);
        unset($_SESSION['tiempo']);
        session_destroy();

        echo json_encode('Done');
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'data_user':
        //include($path . "Model/MiddleWareAuth.php");
        $json = DecodeToken($_POST['token']);
        $daoLog = new DAORegLog();
        $rdo = $daoLog->select_data_user($json['username']);
        echo json_encode($rdo);
        exit;
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'actividad':
        if (!isset($_SESSION["tiempo"])) {
            echo json_encode("inactivo");
            exit();
        } else {
            if ((time() - $_SESSION["tiempo"]) >= 1800) { //1800s=30min
                echo json_encode("inactivo");
                exit();
            } else {
                echo json_encode("activo");
                exit();
            }
        }
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//      
    case 'refresh_token':
        $old_token = DecodeToken($_POST['token']);
        $new_token = CreateToken($old_token['username']);
        echo json_encode($new_token);
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'refresh_cookie':
        session_regenerate_id();
        echo json_encode("Done");
        exit;
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    default;
        include("ViewParent/inc/error404.html");
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
}
