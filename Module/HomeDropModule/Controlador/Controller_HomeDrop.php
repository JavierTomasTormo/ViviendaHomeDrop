<?php
    $path = $_SERVER['DOCUMENT_ROOT'] . '/ViviendaHomeDrop/';
    include($path . "Module/HomeDropModule/Modelo/DAOHomeDrop.php");

    // include("/ViviendaHomeDrop/Module/HomeDropModule/Modelo/DAOHomeDrop.php");
    //localhost/ViviendaHomeDrop/index.php?page=Controller_HomeDrop&Option=List
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    switch ($_GET['Option']) {
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
        case 'List';
            include('Module/HomeDropModule/Vista/ListHomeDrop.html');
        break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
        case 'City';
            //$data = 'City checkpoint';
            //die('<script>console.log(' . json_encode($data) . ');</script>');
            try {
                $DAOHomeDrop = new DAOHomeDrop();
                $SelectCity = $DAOHomeDrop->SelectCity();

            } catch (Exception $e) {
                echo json_encode("Error: Exception ");

            }
            if (!empty($SelectCity)) {
                echo json_encode($SelectCity);

                
            } else {
                echo json_encode("Error: JSON Encode");

            }
        break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
        case 'Category';
            //$data = 'Category Checkpoint';
            //die('<script>console.log(' . json_encode($data) . ');</script>');
            try {
                $DAOHomeDrop = new DAOHomeDrop();
                $SelectCategory = $DAOHomeDrop->SelectCategory();

            } catch (Exception $e) {
                echo json_encode("Error: Exception ");

            }
            if (!empty($SelectCategory)) {
                echo json_encode($SelectCategory);

            } else {
                echo json_encode("Error: JSON Encode");

            }
        break;

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
        case 'Muestra';

            try {
                $DAOHomeDrop = new DAOHomeDrop();
                $CarouselMuestras = $DAOHomeDrop->CarouselMuestras();

            } catch (Exception $e) {
                echo json_encode("Error: Exception ");

            }
            if (!empty($CarouselMuestras)) {
                echo json_encode($CarouselMuestras);

            } else {
                echo json_encode("Error: JSON Encode");

            }
        break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
        case 'Operation';
            //$data = 'Checkpoint Operation';
            //die('<script>console.log(' . json_encode($data) . ');</script>');
            try {
                $DAOHomeDrop = new DAOHomeDrop();
                $SelectOperation = $DAOHomeDrop->SelectOperation();

                //echo json_encode($SelectOperation);
                //break;

            } catch (Exception $e) {
                echo json_encode("Error: Exception ");

            }
            if (!empty($SelectOperation)) {
                echo json_encode($SelectOperation);

            } else {
                echo json_encode("Error: JSON Encode");

            }
        break;
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
    case 'LastHouse';
    //$data = 'Checkpoint Operation';
    //die('<script>console.log(' . json_encode($data) . ');</script>');
    //echo json_encode($_GET['Option']);
    //echo json_encode($_GET['lastSelectedHouses']);
    //break;
        // echo json_encode($_POST['lastSelectedHouse']);
        // break;
        // echo json_encode($_POST['lastSelectedHouse']);
        // break;

        if (isset($_GET['lastSelectedHouses'])) {
            $lastSelectedHouses = json_decode($_GET['lastSelectedHouses'], true);
    
            $DAOFilter = new DAOHomeDrop();
            $QueryRes = $DAOFilter->SelectLastHouse($lastSelectedHouses);
    
            echo json_encode($QueryRes);
            break;
        } else {

            echo json_encode(['error' => 'No se proporcionó el parámetro lastSelectedHouses']);
        }
    break;

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//

        case 'MostVisited';
        //$data = 'Checkpoint Operation';
        //die('<script>console.log(' . json_encode($data) . ');</script>');
        //echo json_encode($_GET['Option']);
        //echo json_encode($_GET['lastSelectedHouses']);
        //break;
            // echo json_encode($_POST['lastSelectedHouse']);
            // break;
            // echo json_encode($_POST['lastSelectedHouse']);
            // break;
    
        
                $DAOFilter = new DAOHomeDrop();
                $QueryRes = $DAOFilter->MostVisited();
    
                // echo json_encode($QueryRes);
                // break;

                if (!empty($QueryRes)) {
                    echo json_encode($QueryRes);
    
                } else {
                    echo json_encode("Error: JSON Encode");
    
                }
        break;
    
    
            default;
                include("ViewParent/inc/util/error404.html");
            break;
}//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//


?>



