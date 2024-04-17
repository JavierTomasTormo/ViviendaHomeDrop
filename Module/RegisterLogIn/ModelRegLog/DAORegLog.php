<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
    include($path . "Model/Connect.php");

class DAORegLog{
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/ 
    function SelectEmail($email, $username){
			$sql = "SELECT Email FROM users WHERE Email = '$email'";
            // $sql = "SELECT Email FROM users WHERE Email = '$email' AND Username = '$username'";
            //return $sql;

			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function InsertUser($username, $email, $password){

        $hashed_pass = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);
        $hashavatar = md5(strtolower(trim($email))); 
        $avatar = "https://i.pravatar.cc/500?u=$hashavatar";
    
        try {
            $conexion = new PDO("mysql:host=localhost;dbname=homedropviviendas", "root", "");

            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
            $sql = "INSERT INTO `Users`(`Username`, `Password`, `Email`, `UserType`, `Avatar`) VALUES (:username, :password, :email, 'client', :avatar)";
            $statement = $conexion->prepare($sql);
    
            $statement->bindParam(':username', $username);
            $statement->bindParam(':password', $hashed_pass);
            $statement->bindParam(':email', $email);
            $statement->bindParam(':avatar', $avatar);
    
            $statement->execute();
    
            $conexion = null;

            return true;
        } catch(PDOException $e) {
            // Manejar errores
            return "Error al insertar usuario: " . $e->getMessage();
        }
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function SelectUser($username){

        //return $username;

			$sql = "SELECT `ID_User`, `Username`, `Password`, `Email`, `UserType`, `Avatar` FROM `users` WHERE username='$username'";


            //return $sql;

			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);

            return $res;

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
