<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Model/Connect.php");

class DAOShop{
/*-------*/	
	function SelectAllHomes($OrderBy, $start, $limit) {

        //return "Llego al DAOShop";
		//return $OrderBy;
		// return $start;
		// return $limit;
         

		$sql = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.Ciudad, vh.Calle, th.Type, oh.Operation, ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, chd.Category, vh.lat, vh.lon
					FROM viviendashomedrop vh 
						LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City 
						LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop 
						LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type 
						LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop 
						LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation 
						LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
						LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
						LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					GROUP BY vh.ID_HomeDrop";

			if ($OrderBy != null) {
				$sql .= " ORDER BY vh.Precio $OrderBy";
			}

			$sql .= " LIMIT $start, $limit";

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
/*-------*/
	function SelectOneHome($id){
		$sql = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.Ciudad, vh.Calle, th.Type, oh.Operation, ih.ID_Imagen, chd.Category, vh.lat, vh.lon
				FROM viviendashomedrop vh 
				LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City 
				LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop 
				LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type 
				LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop 
				LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation 
				LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
				LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
				LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
				WHERE vh.ID_HomeDrop = $id
				GROUP BY vh.ID_HomeDrop";


		//return $sql;

		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql)->fetch_object();
		//connect::close($conexion);

		return $res;
	}
/*-------*/
	function SelectImagesHomes($id){
		$sql = "SELECT vh.ID_HomeDrop, ih.ID_Imagen, ih.Img 
				FROM viviendashomedrop vh 
				LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop 
				WHERE vh.ID_HomeDrop = $id";

		$conexion = connect::con();
		$res = mysqli_query($conexion, $sql);
		connect::close($conexion);

		$imgArray = array();
		if (mysqli_num_rows($res) > 0) {
			foreach ($res as $row) {
				array_push($imgArray, $row);
			}
		}
		return $imgArray;
	}
/*-------*/
	function RedirectDAO($FiltersHome, $start, $limit){

		//return $FiltersHome;

		$select = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.ID_City ,ch.Ciudad, vh.Calle, th.ID_Type ,th.Type, oh.ID_Operation ,oh.Operation, 
						ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, chd.Category, chd.ID_Category
		FROM viviendashomedrop vh
			LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
			LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
			LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
			LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
			LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
			LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
			LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
			LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
			WHERE vh.ID_HomeDrop IS NOT NULL";

		//return $select;

		if (!empty($FiltersHome[0]['ID_Type'])){
			$prueba = $FiltersHome[0]['ID_Type'][0];
			$select.= " AND th.ID_Type = '$prueba'";

		}
		if(!empty($FiltersHome[0]['Ciudad'])) {
			$prueba = $FiltersHome[0]['Ciudad'][0];
			$select.= " AND ch.Ciudad = '$prueba'";

		}
		if(!empty($FiltersHome[0]['ID_Operation'])) {
			$prueba = $FiltersHome[0]['ID_Operation'][0];
			$select.= " AND oh.ID_Operation = '$prueba'";
		}
		if(!empty($FiltersHome[0]['ID_Category'])) {
			$prueba = $FiltersHome[0]['ID_Category'][0];
			$select.= " AND chd.ID_Category = '$prueba'";
		}


		$select.= " GROUP BY vh.ID_HomeDrop";
		
		$select.= " LIMIT $start, $limit";
		
			//return $select;

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
/*-------*/
	function Filters_Home($filtrosPag, $start, $limit){

		 //return $Filters;
		 //return $start;
		 //return $limit;
		// break;
			$sql = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.Ciudad, vh.Calle, th.Type, oh.Operation, ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, vh.lat, vh.lon
					FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL";

				$filtroArrayhme = json_decode($filtrosPag, true);
				//$filtroArrayhme = $filtrosPag;

				if (!empty($filtroArrayhme[0]['ID_Type'])) {
					$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Type'][0]);
					$sql .= " AND th.ID_Type = '$prueba'";
				}
				if (!empty($filtroArrayhme[0]['Ciudad'])) {
					$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['Ciudad'][0]);
					$sql .= " AND ch.Ciudad = '$prueba'";
				}
				if (!empty($filtroArrayhme[0]['ID_Operation'])) {
					$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Operation'][0]);
					$sql .= " AND oh.ID_Operation = '$prueba'";
				}
				if (!empty($filtroArrayhme[0]['ID_Category'])) {
					$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Category'][0]);
					$sql .= " AND chd.ID_Category = '$prueba'";
				}
	
				$sql .= " LIMIT $start, $limit";


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
/*-------*/
	function Filters_Shop($Filters, $start, $limit){

		//return("Llego al DAOShop FiltersShop");
		 //return($Filters);

					$consulta = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.ID_City ,ch.Ciudad, vh.Calle, th.ID_Type ,vh.lat, vh.lon,
					th.Type, oh.ID_Operation ,oh.Operation, ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, chd.Category, chd.ID_Category
					FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL";

			for ($i = 0; $i < count($Filters); $i++) {
				if ($Filters[$i][0] === 'vh.Precio') {
					$consulta .= " AND vh.Precio BETWEEN {$Filters[$i][1]}";

				} elseif ($Filters[$i][0] === 'OrderBy') {
					$consulta .= " GROUP BY vh.ID_HomeDrop";
					$consulta .= " ORDER BY vh.Precio {$Filters[$i][1]}";
				} else {
					$consulta .= " AND {$Filters[$i][0]} = {$Filters[$i][1]}";
				}
			}

			$consulta .= " LIMIT $start, $limit";

		//return($consulta);

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		$retrArray = array();
		if ($res -> num_rows > 0) {
			while ($row = mysqli_fetch_assoc($res)) {
				$retrArray[] = $row;
			}
		}

		//return('Devolucion $retrArray');
		return $retrArray;
	}
/*-------*/
	function CountFilteredQueryShop($Filters){


		//return("Llego al DAOShop CountFilteredQueryShop");
		//return($Filters);

		$consulta = "SELECT COUNT(DISTINCT vh.ID_HomeDrop) AS total
				FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL"; 

		//return($Filters['City']);

		if ($Filters['Category'] != 0){
			$consulta .= " AND vc.ID_Category = " . $Filters['Category'];
		}
		if ($Filters['City'] != 0){
			$consulta .= " AND ch.ID_City = " . $Filters['City'];
		}
		if ($Filters['Operation'] != 0){
			$consulta .= " AND oh.ID_Operation = " . $Filters['Operation'];
		}
		if ($Filters['Type'] != 0){
			$consulta .= " AND th.ID_Type = " . $Filters['Type'];
		}
		if ($Filters['Pricemax'] != 0 && $Filters['Pricemin'] != 0){
			$consulta .= " AND vh.Precio BETWEEN {$Filters['Pricemin']} AND {$Filters['Pricemax']}";
		}
		

		//return($consulta);

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);
	
		if ($res && $row = mysqli_fetch_assoc($res)) {
			return $row['total'];
		} else {
			return false;
		}
	}
/*-------*/
	function FiltrosSilderPriceResults($priceMin, $priceMax){


		//return("Llego al DAOShop FiltrosSilderPrice");
		//return($Filters);

		$consulta = "SELECT *
				FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL"; 

		//return($Filters['City']);

		$consulta .= " AND vh.Precio BETWEEN $priceMin AND $priceMax";

		//return($consulta);

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		if ($res && $row = mysqli_fetch_assoc($res)) {
			return $row['total'];
		} else {
			return false;
		}
	}
/*-------*/
	function VisitasViviendas($id) {
		//return 'Hola';
		$conexion = connect::con();
	
		$consulta = "UPDATE viviendashomedrop SET vivistas = vivistas + 1 WHERE ID_HomeDrop = $id";
	
		//return $consulta;

		$res = mysqli_query($conexion, $consulta);
	

		connect::close($conexion);
	
		if ($res) {
			return true;
		} else {
			return false;
		}
	}
/*-------*/
	function RedirectSearchDAO($FiltersSearch){
		//return 'DAO';
		//return $FiltersSearch;
		////////////////

		$select = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.ID_City ,ch.Ciudad, vh.Calle, th.ID_Type ,th.Type, oh.ID_Operation ,oh.Operation, 
						ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, chd.Category, chd.ID_Category, vh.lat, vh.lon
		FROM viviendashomedrop vh
			LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
			LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
			LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
			LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
			LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
			LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
			LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
			LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
		WHERE vh.ID_HomeDrop IS NOT NULL";


		for ($i = 0; $i < count($FiltersSearch); $i++) {
			$filter = $FiltersSearch[$i];
		
			if (!empty($filter)) {
				foreach ($filter as $key => $value) {
					switch ($key) {
						case 'Ciudad':
							$ciudad = $value[0];
							$select .= " AND ch.ID_City = '$ciudad'";
							break;
						case 'Operacion':
							$operacion = $value[0];
							$select .= " AND oh.ID_Operation = '$operacion'";
							break;
						case 'complete':
							$complete = $value[0];
							$select .= " AND th.Type LIKE '$complete%'";
							break;

					}
				}
			}
		}
		


		$select.= " GROUP BY vh.ID_HomeDrop";
		
		//return $select;

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
/*-------*/
	function RedirectSearch($FiltersSearch, $start, $limit){
		//return 'DAO';
		//return $FiltersSearch;
		////////////////

		$select = "SELECT vh.ID_HomeDrop, vh.Precio, vh.Superficie, ch.ID_City ,ch.Ciudad, vh.Calle, th.ID_Type ,th.Type, oh.ID_Operation ,oh.Operation, 
						ih.ID_Imagen, ih.ID_HomeDrop, ih.Img, chd.Category, chd.ID_Category, vh.lat, vh.lon
		FROM viviendashomedrop vh
			LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
			LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
			LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
			LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
			LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
			LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
			LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
			LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
		WHERE vh.ID_HomeDrop IS NOT NULL";

		//return $select;

		$filtroArray = json_decode($FiltersSearch, true); 

			//return $filtroArray[0]['complete'][0];

			foreach ($filtroArray as $filtro) {

				if (isset($filtro['Ciudad']) && $filtro['Ciudad'][0] != 0) {
					$select .= " AND ch.ID_City = '" . $filtro['Ciudad'][0] . "'";
				}

				if (isset($filtro['Operacion']) && $filtro['Operacion'][0] != 0) {
					$select .= " AND oh.ID_Operation = '" . $filtro['Operacion'][0] . "'";
				}

				if (isset($filtro['complete']) && $filtro['complete'][0] != 0) {
					$complete = $filtro['complete'][0]; 
					$select .= " AND th.Type LIKE '$complete%'";
				}
			}
		

		//return $select;


		$select.= " GROUP BY vh.ID_HomeDrop";

		$select .= " LIMIT $start, $limit";
		

		//return $select;


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
/*-------*/
	function CountGeneral(){

		//return("Llego al DAOShop CountGeneral");

		$consulta = "SELECT COUNT(DISTINCT vh.ID_HomeDrop) AS total
				FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category"; 

		//return($consulta);

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		if ($res && $row = mysqli_fetch_assoc($res)) {
			return $row['total'];
		} else {
			return false;
		}
	}
/*-------*/
	function CountSearchFilt($flitroSearchPag){
		//return 'Hola DAO';
		//return $flitroSearchPag;

		$consulta = "SELECT COUNT(DISTINCT vh.ID_HomeDrop) AS contador
			FROM viviendashomedrop vh
			LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
			LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
			LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
			LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
			LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
			LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
			LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
			LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
			WHERE vh.ID_HomeDrop IS NOT NULL";

			$filtroArray = json_decode($flitroSearchPag, true); 

			//return $filtroArray[0]['complete'][0];

			foreach ($filtroArray as $filtro) {

				if (isset($filtro['Ciudad']) && $filtro['Ciudad'][0] != 0) {
					$consulta .= " AND ch.ID_City = '" . $filtro['Ciudad'][0] . "'";
				}

				if (isset($filtro['Operacion']) && $filtro['Operacion'][0] != 0) {
					$consulta .= " AND oh.ID_Operation = '" . $filtro['Operacion'][0] . "'";
				}

				if (isset($filtro['complete']) && $filtro['complete'][0] != 0) {
					$complete = $filtro['complete'][0]; 
					$consulta .= " AND th.Type LIKE '$complete%'";
				}
			}


			//return $consulta;

			
	
		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		$retrArray = array();
		if ($res -> num_rows > 0) {
			while ($row = mysqli_fetch_assoc($res)) {
				$retrArray[] = $row;
			}
		}
		return $retrArray[0]["contador"][0];
	}
/*-------*/
	function CountHomeFilt($filtrosPag) {

		$consulta = "SELECT COUNT(DISTINCT vh.ID_HomeDrop) AS contador
					FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL";

		$filtroArrayhme = json_decode($filtrosPag, true);
		//$filtroArrayhme = $filtrosPag;

		if (!empty($filtroArrayhme[0]['ID_Type'])) {
			$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Type'][0]);
			$consulta .= " AND th.ID_Type = '$prueba'";
		}
		if (!empty($filtroArrayhme[0]['Ciudad'])) {
			$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['Ciudad'][0]);
			$consulta .= " AND ch.Ciudad = '$prueba'";
		}
		if (!empty($filtroArrayhme[0]['ID_Operation'])) {
			$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Operation'][0]);
			$consulta .= " AND oh.ID_Operation = '$prueba'";
		}
		if (!empty($filtroArrayhme[0]['ID_Category'])) {
			$prueba = mysqli_real_escape_string(connect::con(), $filtroArrayhme[0]['ID_Category'][0]);
			$consulta .= " AND chd.ID_Category = '$prueba'";
		}

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		$retrArray = array();
		if ($res) {
			$row = mysqli_fetch_assoc($res);
			$retrArray[] = $row;
			mysqli_free_result($res);
		}
		return $retrArray[0]["contador"][0];
	}
/*-------*/
	function CountFiltShop($FiltersShopCount) {

		//return $FiltersShopCount;

		$consulta = "SELECT COUNT(DISTINCT vh.ID_HomeDrop) AS contador
					FROM viviendashomedrop vh
					LEFT JOIN cityhomedrop ch ON vh.ID_City = ch.ID_City
					LEFT JOIN viviendastype vht ON vh.ID_HomeDrop = vht.ID_HomeDrop
					LEFT JOIN typehomedrop th ON vht.ID_Type = th.ID_Type
					LEFT JOIN viviendasoperation vho ON vh.ID_HomeDrop = vho.ID_HomeDrop
					LEFT JOIN operationhomedrop oh ON vho.ID_Operation = oh.ID_Operation
					LEFT JOIN imageneshomedrop ih ON ih.ID_HomeDrop = vh.ID_HomeDrop
					LEFT JOIN viviendascategory vc ON vc.ID_HomeDrop = vh.ID_HomeDrop 
					LEFT JOIN categoryhomedrop chd ON chd.ID_Category = vc.ID_Category 
					WHERE vh.ID_HomeDrop IS NOT NULL";

		
		for ($i = 0; $i < count($FiltersShopCount); $i++) {
			if ($FiltersShopCount[$i][0] === 'vh.Precio') {
				$consulta .= " AND vh.Precio BETWEEN {$FiltersShopCount[$i][1]}";

			} elseif ($FiltersShopCount[$i][0] === 'OrderBy') {

				$consulta .= " ORDER BY vh.Precio {$FiltersShopCount[$i][1]}";

			} else {
				$consulta .= " AND {$FiltersShopCount[$i][0]} = {$FiltersShopCount[$i][1]}";
			}
		}


		//return $consulta;

		$conexion = connect::con();
		$res = mysqli_query($conexion, $consulta);
		connect::close($conexion);

		$retrArray = array();
		if ($res) {
			$row = mysqli_fetch_assoc($res);
			$retrArray[] = $row;
			mysqli_free_result($res);
		}
		return $retrArray[0]["contador"][0];
	}
/*-------*/
}


