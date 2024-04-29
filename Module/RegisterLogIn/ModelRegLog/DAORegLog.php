<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
    include($path . "Model/Connect.php");

class DAORegLog{
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
    function LikedHouses($username){
        // return("LikedHouses");
        //return($username);


        $sql = "SELECT 
                    vh.ID_HomeDrop, 
                    vh.Precio, 
                    vh.Superficie, 
                    ch.Ciudad, 
                    vh.Calle, 
                    th.Type, 
                    oh.Operation, 
                    ih.ID_Imagen, 
                    chd.Category, 
                    vh.lat, 
                    vh.lon
                FROM 
                    viviendashomedrop vh 
                    LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City 
                    LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop 
                    LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type 
                    LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop 
                    LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation 
                    LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
                    LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
                    LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
                WHERE 
                    vh.ID_HomeDrop IN (SELECT ID_HomeDrop FROM likeshomedrop WHERE ID_User = (SELECT ID_User FROM users WHERE Username = '$username'))
                GROUP BY 
                    vh.ID_HomeDrop
                ";

        //return $sql;

        $conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);
		$retrArray = array();
		if (mysqli_num_rows($res) > 0) {
			while ($row = mysqli_fetch_assoc($res)) {
				$retrArray[] = $row;
			}
		}
		return $retrArray;


    }
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
    function SeleccionarDatosUsuario($username){
			$sql = "SELECT * FROM users WHERE username = '$username'";
			$conexion = connect::con();
            $res = mysqli_query($conexion, $sql)->fetch_object();
            connect::close($conexion);
            return $res;
    }
/*/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/*/
}
