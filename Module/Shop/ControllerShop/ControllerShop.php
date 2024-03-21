<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/Shop/ModelShop/DAOShop.php");


//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
switch ($_GET['Option']) {
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//

    case 'ListShop':

    //-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
        // $url_actual = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
        // echo '<script>';
        //     echo 'console.log('.json_encode($url_actual).')'; 
        // echo '</script>';
    //-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//

        include_once("C:/xampp\htdocs\ViviendaHomeDrop\Module\Shop\ViewShop\inc\Shop.html");
    break;

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'AllHomes':
        //Llego aqui 3
        //echo json_encode($_POST['OrderBy']);
        // break;

        try {
            $DAOshop = new DAOShop();
            $DatosHome = $DAOshop->SelectAllHomes($_POST['OrderBy']);
        } catch (Exception $e) {
            echo json_encode("error");
        }

        if (!empty($DatosHome)) {
            echo json_encode($DatosHome);
        } else {
            echo json_encode("error");
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'Redirect';
        //   echo json_encode("Buenas Tardes");
        //   break;
        //echo json_encode($_POST['FiltersHome']);
        // break;
        $HomeQueryDAO = new DAOShop();
        $selSlide = $HomeQueryDAO -> RedirectDAO($_POST['FiltersHome']);

        //   echo json_encode($selSlide);
        //   break;

        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }

    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'CountFilteredQueryShop':

        // error_log("precioMin: " . $_POST['precioMin']);
        // error_log("precioMax: " . $_POST['precioMax']);
        
        // echo "precioMin: " . $_POST['precioMin'] . "<br>";
        // echo "precioMax: " . $_POST['precioMax'] . "<br>";

        //echo json_encode("Buenas Tardes CountFilteredQueryShop");
         //break;
         //echo json_encode($_POST['FiltersShopCount']);
         //break;
 
         //error_log("FiltersShopCount: " . print_r($_POST['FiltersShopCount'], true));


         $DAOFilter = new DAOShop();
         $count = $DAOFilter->CountFilteredQueryShop($_POST['FiltersShopCount']);
 
         //echo json_encode($count);
        //break;

         if ($count !== false) {
             echo json_encode(['count' => $count]);
         } else {
             echo json_encode(['error' => 'No se pudo obtener el conteo']);
         }
         break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'FiltersHome':
        //Llego aqui 3
        //  echo json_encode("Llego al Controller Shop FILTERSHOME");
        //  break;
    
        // $response = array(
        //     "message" => "Llego al Controller Shop FILTERSHOME",
        //     "id" => $_POST['FiltersHome']
        // );
        // echo json_encode($response);
        // break;


         $DAOFilter = new DAOShop();
         $QueryRes = $DAOFilter -> Filters_Home($_POST['FiltersHome']);
         if (!empty($QueryRes)) {
             echo json_encode($QueryRes);
         }
         else {
             echo "error";
         }
         
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'FiltersShop':
        //Llego aqui 3
        //   echo json_encode('Llego al Controller Shop FILTERSSSSSHOP');
        //   break;

        //SI no hace el salto descomentar el console log de los promises

         //echo json_encode($_POST['FiltersShop']);
        // break;



        $DAOFilter = new DAOShop();
        $QueryRes = $DAOFilter -> Filters_Shop($_POST['FiltersShop']);

        //echo json_encode($QueryRes);
         //break;


        if (!empty($QueryRes)) {
            echo json_encode($QueryRes);
        }
        else {
            echo "error";
        }
        
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'DetailsHome':
        /*
        $response = array(
            "message" => "Llego a DetailsHome con id intacta!",
            "id" => $_GET['id']
        );
        echo json_encode($response);
        break;
        */

        try {
            $DAOShop = new DAOShop();
            $Date_Home = $DAOShop->SelectOneHome($_GET['id']);
            
        } catch (Exception $e) {
            echo json_encode("error");
            exit;
        }


        try {
            $DAOShop_Img = new DAOShop();
            $Date_Img = $DAOShop_Img->SelectImagesHomes($_GET['id']);

        } catch (Exception $e) {
            echo json_encode("error");
            exit; 
        }


        if (!empty($Date_Home) || !empty($Date_Img)) {
            $rdo = array();
            $rdo[0] = $Date_Home;
            $rdo[1][] = $Date_Img;
            echo json_encode($rdo);
        } else {
            
            echo json_encode("error");
        }
        
        
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
case 'Visitas':
    
        //echo json_encode($_GET['ID_HomeDrop']);
        //break;

        $DAOFilter = new DAOShop();
        $QueryRes = $DAOFilter->VisitasViviendas($_GET['id']);

        //echo json_encode($QueryRes);
        //break;


        if (!empty($QueryRes)) {
            echo json_encode($QueryRes);
        } else {
            echo "error";
        }

    
break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
case 'FiltersShopPrice':
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $priceMin = $_POST['precioMin'] ?? 0; 
        $priceMax = $_POST['precioMax'] ?? 0; 

        $DAOFilter = new DAOShop();
        $QueryRes = $DAOFilter->FiltrosSilderPriceResults($priceMin, $priceMax);

                echo json_encode($QueryRes);
                break;
        if (!empty($QueryRes)) {
            echo json_encode($QueryRes);
        } else {
            echo "error";
        }
    } else {
        echo "error: método de solicitud incorrecto";
    }
    
break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
case 'Search';
    //   echo json_encode("Buenas Tardes");
    //   break;
    // echo json_encode($_POST['FiltersSearch']);
    // break;
    $SearchQueryDAO = new DAOShop();
    $selSlide = $SearchQueryDAO -> RedirectSearchDAO($_POST['FiltersSearch']);

    //   echo json_encode($selSlide);
    //   break;

    if (!empty($selSlide)) {
        echo json_encode($selSlide);
    }
    else {
        echo "error";
    }

break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    default;
        include("ViewParent/inc/error404.html");
    break;
}
