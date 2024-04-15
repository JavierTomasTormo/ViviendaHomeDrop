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
 /*   function InsertUser($username, $email, $password){


        //return $username;

            $hashed_pass = password_hash($password, PASSWORD_DEFAULT, ['cost' => 12]);
            // return $hashed_pass;

            $hashavatar = md5(strtolower(trim($email))); 
            // return $hashavatar;

            $avatar = "https://i.pravatar.cc/500?u=$hashavatar";
            // return $avatar;


            
            $sql ="INSERT INTO `Users`(`Username`, `Password`, `Email`, `UserType`, `Avatar`) 
                    VALUES ('$username','$hashed_pass','$email','client','$avatar')";
            
            //return $sql;

            $conexion = connect::con();

            if (!$conexion) {
                return("Error al conectar a la base de datos: " . mysqli_connect_error());
            } else {
                //return('Si conecta a la base de datos');

                $res = mysqli_query($conexion, $sql);
                return $res;
                connect::close($conexion);

                if (!$res) {
                    return "Error en la consulta: " . mysqli_error($conexion);
                    return false;
                } else {
                    return "Consulta ejecutada correctamente.";
                    return true;
                }
            }
    }*/
//
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
