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
case 'SearchCityNotNull';

    $homeQuery = new DAOSearch();
    $selSlide = $homeQuery -> SearchCityNotNull($_POST['Operacion']);

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
    case 'SearchOperationNull';

        // echo json_encode('Lo que no funciona es el post?');
        // break;
        // echo json_encode($_POST['Ciudad']);
        // break;
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

        //echo json_encode('SearchOperation');
        // break;


        // echo json_encode($_POST['Ciudad']);
        // break;
 

        $homeQuery = new DAOSearch();
        $selSlide = $homeQuery -> SearchOperation($_POST['Ciudad']);    


        // echo json_encode($selSlide);
        // break;   

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

        // echo json_encode($_POST['sdata']);
        // break;

        $dao = new DAOSearch();
        $result = $dao->AutocompleteSearch($_POST['sdata']);

        // echo json_encode($result);
        // break;

        if (!empty($result)) {
            echo json_encode($result);
        }
        else {
            echo "error";
        }

    break; 
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
//-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-·-//
}