<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Model/Connect.php");

class DAOSearch {
//##########################################################################//
	function SearchCity() {
        // return "El DAO esta activo";

		$sql = "SELECT ch.ID_City, ch.Ciudad, vh.Calle, ch.Img FROM cityhomedrop ch 
					INNER JOIN viviendashomedrop vh ON vh.ID_City = ch.ID_City 
				GROUP BY Ciudad";

        // return $sql;

		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);

        //return $res;

		$retrArray = array();
		if (mysqli_num_rows($res) > 0) {
			while ($row = mysqli_fetch_assoc($res)) {
				$retrArray[] = $row;
			}
		}
		return $retrArray;
	}
//##########################################################################//
    function SearchOperationNull(){
		$sql = "SELECT * FROM `operationhomedrop`";

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
//##########################################################################//
    function search_category($brand){
        $select="SELECT ca.*
        FROM car c, categoria ca
        WHERE ca.id_categoria = c.categoria AND c.marca = '$brand'";

        $conexion = connect::con();
        $res = mysqli_query($conexion, $select);
        connect::close($conexion);

        $retrArray = array();
        if ($res -> num_rows > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }
        return $retrArray;
    }
//##########################################################################//
    function select_only_brand($complete, $brand){
        $select="SELECT *
        FROM car c
        WHERE marca = '$brand' AND city LIKE '$complete%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $select);
        connect::close($conexion);
        
        $retrArray = array();
        if ($res -> num_rows > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }
        return $retrArray;
    }
//##########################################################################//
    function select_only_category($category, $complete){
        $select="SELECT *
        FROM car c
        WHERE categoria = '$category' AND city LIKE '$complete%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $select);
        connect::close($conexion);
        
        $retrArray = array();
        if ($res -> num_rows > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }
        return $retrArray;
    }
//##########################################################################//

    function select_brand_category($complete, $brand, $category){
        $select="SELECT *
        FROM car c
        WHERE c.marca = '$brand' AND c.categoria = '$category' AND c.city LIKE '$complete%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $select);
        connect::close($conexion);
        
        $retrArray = array();
        if ($res -> num_rows > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }
        return $retrArray;
    }
//##########################################################################//
    function select_city($complete){
        $select="SELECT *
        FROM car c
        WHERE c.city LIKE '$complete%'";
        
        $conexion = connect::con();
        $res = mysqli_query($conexion, $select);
        connect::close($conexion);
        
        $retrArray = array();
        if ($res -> num_rows > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }
        return $retrArray;
    }
//##########################################################################//
}