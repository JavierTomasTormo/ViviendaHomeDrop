<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
    include($path . "Model/Connect.php");

class DAORegLog{
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/ 
    function select_email($email){
			$sql = "SELECT email FROM users WHERE email='$email'";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function insert_user($username, $email, $password){
            $hashed_pass = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);
            $hashavatar = md5(strtolower(trim($email))); 
            $avatar = "https://i.pravatar.cc/500?u=$hashavatar";
            $sql ="   INSERT INTO `users`(`username`, `password`, `email`, `type_user`, `avatar`) 
            VALUES ('$username','$hashed_pass','$email','client','$avatar')";

            $conexion = connect::con();
            $res = mysqli_query($conexion, $sql);
            connect::close($conexion);
            return $res;
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function SelectUser($username){

        //return 'wenas';
        
        $userAlias = $username['username_log'];

        //return $userAlias;

			$sql = "SELECT `ID_User`, `Username`, `Password`, `Email`, `UserType`, `Avatar` FROM `users` WHERE username='$userAlias'";


            //return $sql;

			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);

            if ($res) {
                $value = get_object_vars($res);
                return $value;
            }else {
                return "error_user";
            }
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function select_data_user($username){
			$sql = "SELECT * FROM users WHERE username='$username'";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
}
