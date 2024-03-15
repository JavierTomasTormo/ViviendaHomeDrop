<?php
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
$path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
include($path . "Module/Search/ModelSearch/DAOSearch.php");
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//

//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
switch ($_GET['Option']) {
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
    case 'SearchCity';

         //echo json_encode('SearchCityController15/03');
        //break;
    
        $homeQuery = new DAOSearch();
        $selSlide = $homeQuery -> SearchCity();

        //echo json_encode($selSlide, '15/03');
        //break;
    
        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
    case 'SearchOperationNull';

        //echo json_encode('SearchOperationNull');
        //break;
        //////

        $homeQuery = new DAOSearch();
        $selSlide = $homeQuery -> SearchOperationNull();

        //echo json_encode($selSlide);
        //break;
        //////

        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
    case 'SearchOperation';

        echo json_encode('SearchOperation');
    break;
    //////

        echo json_encode($_POST['Ciudad']);
    break;
    //////

        $homeQuery = new DAOSearch();
        $selSlide = $homeQuery -> SearchOperation($_POST['Ciudad']);    


        echo json_encode($selSlide);
    break;
    //////   

        if (!empty($selSlide)) {
            echo json_encode($selSlide);
        }
        else {
            echo "error";
        }
    break;
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
    case 'AutocompleteSearch';

        echo json_encode('AutocompleteSearch');
    break;
    //////
        try {
            $complete = isset($_POST['sdata']['complete']) ? $_POST['sdata']['complete'] : null;
            $ciudad = isset($_POST['sdata']['Ciudad']) ? $_POST['sdata']['Ciudad'] : null;
            $operation = isset($_POST['sdata']['Operation']) ? $_POST['sdata']['Operation'] : null;

            $dao = new DAOSearch();
            $result = $dao->AutocompleteSearch($complete, $ciudad, $operation);

        echo json_encode($result);
    break;
    //////
        } catch (Exception $e) {
            echo json_encode("Error: " . $e->getMessage());
        }
    break; 
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
}