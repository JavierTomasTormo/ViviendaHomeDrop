<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/RegisterLogIn/ModelRegLog/DAORegLog.php");

// include($path . "/model/middleware_auth.php");
@session_start();
//if (isset($_SESSION["tiempo"])) {  
    //$_SESSION["tiempo"] = time(); //Devuelve la fecha actual
//}

switch ($_GET['Option']) {
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'RegLogView';
        include("Module/RegisterLogIn/ViewRegLog/RegLog.html");
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'Register':
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
        //echo json_encode($email_reg);
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
        // echo json_encode("LogIn" );
        // echo json_encode($_POST['data']);

        $parts = explode('&', $_POST['data']);
        $firstParam = explode('=', $parts[0]);
        $secondParam = explode('=', $parts[1]);
        $paramName = $firstParam[0];
        $paramValue = $firstParam[1];
        $data = array($paramName => $paramValue);

        //  echo json_encode($secondParam[1]);
        // break;

        try {
            $daoLog = new DAORegLog();
            $rdo = $daoLog->SelectUser($data);

            // echo json_encode($rdo);
            // break;

            if ($rdo == "error_user") {
                echo json_encode("error_user");
                exit;
            } else {

                //
                //
                //
                //
                if (password_verify($secondParam[1], $rdo['Password'])) {
                    // $token= create_token($rdo["username"]);
                    $_SESSION['username'] = $rdo['username']; //Guardamos el usario 
                    $_SESSION['tiempo'] = time(); //Guardamos el tiempo que se logea

                    echo json_encode($token);
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
    case 'logout':
        unset($_SESSION['username']);
        unset($_SESSION['tiempo']);
        session_destroy();

        echo json_encode('Done');
    break;
//~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~//    
    case 'data_user':
        $json = decode_token($_POST['token']);
        $daoLog = new DAOLogin();
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
    case 'controluser':
        $token_dec = decode_token($_POST['token']);

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
    case 'refresh_token':
        $old_token = decode_token($_POST['token']);
        $new_token = create_token($old_token['username']);
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
