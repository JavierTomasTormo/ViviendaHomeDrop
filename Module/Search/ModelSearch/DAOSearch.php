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
    function SearchOperation($CiudadPropo){

        $ciudad = $CiudadPropo['Ciudad'];

        //return $ciudad;
        // return 'AAAA';

        $sqlopera = "SELECT * FROM operationhomedrop oh
                        INNER JOIN viviendasoperation vo ON vo.ID_Operation = oh.ID_Operation 
                        INNER JOIN viviendashomedrop vh ON vh.ID_HomeDrop = vo.ID_HomeDrop
                        INNER JOIN cityhomedrop ch ON ch.ID_City = vh.ID_City 
                    WHERE ch.ID_City = $ciudad
                    GROUP BY oh.ID_Operation";

        //return $sqlopera;

        $conexion = connect::con();
        $res = mysqli_query($conexion, $sqlopera);
        
        if (!$res) {
            echo "Error en la consulta: " . mysqli_error($conexion);
            connect::close($conexion);
            return false; 
        }
        
        $retrArray = array();
        if (mysqli_num_rows($res) > 0) {
            while ($row = mysqli_fetch_assoc($res)) {
                $retrArray[] = $row;
            }
        }

        connect::close($conexion);
        return $retrArray;
    }
//##########################################################################//
function SearchCityNotNull($OperacionProp){

    $Operat = $OperacionProp['Operacion'];

    //return $ciudad;
    // return 'AAAA';

    $sqlopera = "SELECT ch.Ciudad FROM operationhomedrop oh
                    INNER JOIN viviendasoperation vo ON vo.ID_Operation = oh.ID_Operation 
                    INNER JOIN viviendashomedrop vh ON vh.ID_HomeDrop = vo.ID_HomeDrop
                    INNER JOIN cityhomedrop ch ON ch.ID_City = vh.ID_City 
                        WHERE oh.ID_Operation = $Operat
                    GROUP BY ch.ID_City";

    //return $sqlopera;

    $conexion = connect::con();
    $res = mysqli_query($conexion, $sqlopera);
    
    if (!$res) {
        echo "Error en la consulta: " . mysqli_error($conexion);
        connect::close($conexion);
        return false; 
    }
    
    $retrArray = array();
    if (mysqli_num_rows($res) > 0) {
        while ($row = mysqli_fetch_assoc($res)) {
            $retrArray[] = $row;
        }
    }

    connect::close($conexion);
    return $retrArray;
}
//##########################################################################//
function AutocompleteSearch($sdata){
    //return 'DAO de autocompletasión';

    //return $sdata;
    //return $sdata[0];
    //return $sdata[1][0];
    //return $sdata[2][0];
    //return $sdata[0][1];
    //return $sdata[1][1];
    //return $sdata[2][1];


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

    // return $sdata["complete"];
    // return $sdata["Ciudad"];
    // return $sdata["Operation"];

    if (!empty($sdata['Operation'])) {
        $operacion2 = $sdata['Operation'];
        $select .= " AND oh.ID_Operation = '$operacion2'";

    } if (!empty($sdata['Ciudad'])) {
        $ciudad = $sdata['Ciudad'];
        $select .= " AND ch.ID_City = '$ciudad'";

    } if (!empty($sdata['complete'])) {
        $complete = $sdata['complete'];
        $select .= " AND th.Type LIKE '$complete%'";
    }

    
    $select .= " GROUP BY th.Type ";

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
//##########################################################################//

//##########################################################################//
}