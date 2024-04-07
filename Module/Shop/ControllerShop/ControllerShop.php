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
    /*case 'AllHomes':

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
    */
    case 'AllHomes':
        // echo json_encode('Hola AllHomes');
        // break;

            $DAOshop = new DAOShop();
            $start = $_POST['start'] ?? 0;
            $limit = $_POST['limit'] ?? 3;

            // echo json_encode($start);
            // break;
            // echo json_encode($limit);
            // break;
            // echo json_encode($_POST['OrderBy']);
            // break;

            $DatosHome = $DAOshop->SelectAllHomes($_POST['OrderBy'], $start, $limit);

    
        if (!empty($DatosHome)) {
            echo json_encode($DatosHome);
        } else {
            echo json_encode("error");
        }
        break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    /*case 'Redirect';
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
    */
    case 'Redirect':
        $HomeQueryDAO = new DAOShop();
        $start = $_POST['start'] ?? 0;
        $limit = $_POST['limit'] ?? 3;
        $selSlide = $HomeQueryDAO->RedirectDAO($_POST['FiltersHome'], $start, $limit);
        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        } else {
            echo "error";
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'CountFilteredQueryShop':

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
    /*case 'FiltersHome':
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
    */
    case 'FiltersHome':
        $DAOFilter = new DAOShop();
        $start = $_POST['start'] ?? 0;
        $limit = $_POST['limit'] ?? 3;
        $QueryRes = $DAOFilter->Filters_Home($_POST['FiltersHome'], $start, $limit);

        //echo json_encode($QueryRes);

        if (!empty($QueryRes)) {
            echo json_encode($QueryRes);
        } else {
            echo "error";
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    /*case 'FiltersShop':
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
    */
    case 'FiltersShop':
        $DAOFilter = new DAOShop();
        $start = $_POST['start'] ?? 0;
        $limit = $_POST['limit'] ?? 3;
        $QueryRes = $DAOFilter->Filters_Shop($_POST['FiltersShop'], $start, $limit);
        if (!empty($QueryRes)) {
            echo json_encode($QueryRes);
        } else {
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
    case 'RedirectSearch';
        //   echo json_encode("Buenas Tardes");
        //   break;
        // echo json_encode($_POST['FiltersSearch']);
        // break;
        $SearchQueryDAO = new DAOShop();
        $start = $_POST['start'] ?? 0;
        $limit = $_POST['limit'] ?? 3;
        $selSlide = $SearchQueryDAO -> RedirectSearch($_POST['FiltersSearch'], $start, $limit);

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
    case 'Search';
        //    echo json_encode("Buenas Tardes");
        //    break;
        //echo json_encode($_POST['FiltersSearch']);
        //break;
        $SearchQueryDAO = new DAOShop();
        $selSlide = $SearchQueryDAO -> RedirectSearchDAO($_POST['FiltersSearch'], $start, $limit);

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
    case 'CountGeneral';    
        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> CountGeneral();
        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'CountHomeFilt';    

        // echo json_encode($_POST['filtrosPag']);
        // break;

        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> CountHomeFilt($_POST['filtrosPag']);

        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'CountSearchFilt';
    
        //echo json_encode($_POST['flitroSearchPag']);
        //echo json_encode('CountSearchFilt');
        //break;

        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> CountSearchFilt($_POST['flitroSearchPag']);

        // echo json_encode($selSlide);
        // break;

        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'CountFiltShop';
    
        //echo json_encode($_POST['FiltersShopCount']);
        //echo json_encode('FiltersShopCount');
        //break;

        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> CountFiltShop($_POST['FiltersShopCount']);

        // echo json_encode($selSlide);
        // break;

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
