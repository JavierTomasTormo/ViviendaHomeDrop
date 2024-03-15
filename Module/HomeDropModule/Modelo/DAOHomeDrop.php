<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';

include($path . "Model/Connect.php");

//include("/ViviendaHomeDrop/Model/Connect.php");

class DAOHomeDrop{
//##########################################################################//
	function CarouselMuestras() {

		$sql= "SELECT * FROM `typehomedrop` ORDER BY ID_Type ASC LIMIT 25;";

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
	function SelectType() {
		$sql = "SELECT * FROM `typehomedrop` ORDER BY ID_Type ASC LIMIT 25;";

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
	function SelectCity() {
		$sql = "SELECT ch.ID_City, ch.Ciudad, vh.Calle, ch.Img FROM cityhomedrop ch 
					INNER JOIN viviendashomedrop vh ON vh.ID_City = ch.ID_City 
				GROUP BY Ciudad ORDER BY ID_City ASC;";

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
	function SelectCategory() {
		$sql = "SELECT * FROM `categoryhomedrop` ORDER BY ID_Category ASC ;";

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
	function SelectOperation() {
		$sql = "SELECT * FROM `operationhomedrop` ORDER BY ID_Operation DESC";

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



	function SelectLastHouse($id) {
		$results = array();
	
		$conexion = connect::con();
	
		foreach ($id as $houseId) {
			$sql = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.Ciudad, vh.Calle, th.Type, oh.Operation, ih.ID_Imagen, ih.Img, chd.Category
					FROM viviendashomedrop vh 
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City 
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop 
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type 
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop 
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation 
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop = $houseId";
	
			$res = mysqli_query($conexion, $sql);
	
			$results[] = mysqli_fetch_object($res);
		}
	
		// Cerrar la conexión a la base de datos
		connect::close($conexion);
	
		// Devolver los resultados
		return $results;
	}
	

	function MostVisited() {
		$sql = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.Ciudad, vh.Calle, th.Type, oh.Operation, ih.ID_Imagen, ih.Img, vh.vivistas,chd.Category
		FROM viviendashomedrop vh 
		LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City 
		LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop 
		LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type 
		LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop 
		LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation 
		LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
		LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
		LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category
		GROUP BY vh.ID_HomeDrop
		ORDER BY vivistas DESC LIMIT 5 ;";

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
//##########################################################################//
//##########################################################################//
}


/*
	function Seleccionar_Categoria() {
		$sql = "SELECT * FROM categoria";

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
*/