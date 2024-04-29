<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/Shop/ModelShop/DAOShop.php");
@session_start();
if (isset($_SESSION["tiempo"])) {  
    $_SESSION["tiempo"] = time(); //Devuelve la fecha actual
}

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
    case 'CountRelatedHomes';

        //echo json_encode('CountRelatedHomes'); 
        //
        //echo json_encode($_POST['ID_HomeDrop']);
         //break;

        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> CountRelatedHomes($_POST['Category'], $_POST['Ciudad'], $_POST['ID_HomeDrop']);

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
    case 'ViviendasRelacionadas';

        // echo json_encode('ViviendasRelacionadas'); 
        
        $Category = $_POST['CategoryVivRel'];
        $loaded =  $_POST['loaded'];
        $items =  $_POST['items'];
        $Ciudad = $_POST['CiudadVivRel'];
        $ID_HomeDrop = $_POST['ID_HomeDrop'];
        //  echo json_encode( $ID_HomeDrop);
        //  break;

        $homeQuery = new DAOShop();
        $selSlide = $homeQuery -> ViviendasRelacionadas($Category, $Ciudad,$ID_HomeDrop, $loaded, $items);

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
    case 'CountLikes':
        // echo json_encode($_POST['ID_HomeDropLike']);
        // echo json_encode('Hola');
        // break;

        $DAOFilter = new DAOShop();
        $count = $DAOFilter->CountLikes($_POST['ID_HomeDropLike']);

        //echo json_encode($count);
        //break;

        if ($count !== false) {
            echo json_encode(['count' => $count]);
        } else {
            echo json_encode(['error' => 'No se pudo obtener el conteo']);
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'Like':
        include($path . "Model/MiddleWareAuth.php");

        // echo json_encode($_POST['ID_HomeDropLike']);
        //  echo json_encode($_POST['token']);
        //  break;
        $json = DecodeToken($_POST['token']);
        // echo json_encode($json);
        // break;

        $DAOFilter = new DAOShop();
        $count = $DAOFilter->Likes($_POST['ID_HomeDropLike'], $json['Username']);


    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'DisLike':
        include($path . "Model/MiddleWareAuth.php");

        // echo json_encode($_POST['ID_HomeDropLike']);
        //  echo json_encode($_POST['token']);
        //  break;
        $json = DecodeToken($_POST['token']);
        // echo json_encode($json);
        // break;

        $DAOFilter = new DAOShop();
        $count = $DAOFilter->DisLikes($_POST['ID_HomeDropLike'], $json['Username']);

        echo json_encode($count);
        break;

    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'UserLikes':
        include($path . "Model/MiddleWareAuth.php");

        // echo json_encode($_POST['ID_HomeDropLike']);
        //  echo json_encode($_POST['token']);
        //  break;
        $json = DecodeToken($_POST['token']);
        // echo json_encode($json);
        // break;

        $DAOFilter = new DAOShop();
        $count = $DAOFilter->UserLikes($_POST['ID_HomeDropLike'], $json['Username']);

        if (!empty($count)) {
            echo json_encode("Like");
        }
        else {
            echo json_encode ("NoLike");
        }
    break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    default;
        include("ViewParent/inc/error404.html");
    break;
}
