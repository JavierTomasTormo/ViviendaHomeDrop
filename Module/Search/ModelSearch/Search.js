//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//

        // ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchCityNotNull', 'POST', 'JSON', {'Operacion' : Operacion})
        //     .then(function (data) {
        //         $('<option>Ciudad</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectCity')
        //         for (row in data) {
        //             $('<option value="' + data[row].ID_City + '">' + data[row].Ciudad + '</option>').appendTo('.search_selectCity')
        //         }
        //     }).catch(function () {
        //         //window.location.href = "index.php?modules=exception&op=503&error=fail_load_brands&type=503";
        //     });

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadCitySearch() {
    //console.log('Entro a LoadCitySearch');

    ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchCity', 'GET', 'JSON')
        .then(function (data) {
            $('<option>Ciudad</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectCity');
            for (row in data) {
                $('<option value="' + data[row].ID_City + '">' + data[row].Ciudad + '</option>').appendTo('.search_selectCity');
            }
        }).catch(function () {
            //window.location.href = "index.php?modules=exception&op=503&error=fail_load_brands&type=503";
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadOperationSearch(Ciudad) {
    //console.log('Entro a LoadOperationSearch')

    $('.search_selectOperation').empty();

    if (Ciudad == undefined) {
        ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchOperationNull', 'GET', 'JSON')
            .then(function (data) {


                $('<option>Operación</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectOperation')
                for (row in data) {
                    $('<option value="' + data[row].ID_Operation + '">' + data[row].Operation + '</option>').appendTo('.search_selectOperation')
                }
            }).catch(function () {
                //window.location.href = "index.php?modules=exception&op=503&error=fail_load_category&type=503";
            });

    } else {
        ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchOperation', 'POST', 'JSON', {'Ciudad' : Ciudad})
            .then(function (data) {

                    //console.log(data);

                    $('<option>Operación</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectOperation')
                for (row in data) {
                    $('<option value="' + data[row].ID_Operation + '">' + data[row].Operation + '</option>').appendTo('.search_selectOperation')
                }
            }).catch(function () {
                //window.location.href = "index.php?modules=exception&op=503&error=fail_loas_category_2&type=503";
            });
    }
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function SearchCharger() {
    LoadCitySearch();
    LoadOperationSearch();

        // $('.search_selectOperation').on('change', function () {
        //     let Operacion = $(this).val();

        //     //console.log(Operacion);

        //     if (Operacion != null) {

        //         console.log(Operacion, 'dentro if operation');
                

        //         ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchCityNotNull', 'POST', 'JSON', {'Operacion' : Operacion})
        //             .then(function (data) {
        //                 $('.search_selectCity').empty(); // Limpiar opciones anteriores
        //                 $('<option>Ciudad</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectCity');
        //                 for (row in data) {
        //                     $('<option value="' + data[row].ID_City + '">' + data[row].Ciudad + '</option>').appendTo('.search_selectCity');
        //                 }
        //             }).catch(function () {
        //                 //window.location.href = "index.php?modules=exception&op=503&error=fail_load_brands&type=503";
        //             });
        //     }
        // });

    $(document).on('change', '.search_selectCity', function () {
        let Ciudad = $(this).val();
        if (Ciudad === 0) {
            LoadOperationSearch();
        } else {
            LoadOperationSearch({ Ciudad });
        }
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function AutocompleteSearch() {
    $("#autocom").on("keyup", function () {
        let sdata = { complete: $(this).val() };

        if (($('.search_selectCity').val() != 0)) {
            sdata.Ciudad = $('.search_selectCity').val();
            if (($('.search_selectCity').val() != 0) && ($('.search_selectOperation').val() != 0)) {
                sdata.Operation = $('.search_selectOperation').val();
            }
        }

        if (($('.search_selectCity').val() == undefined) && ($('.search_selectOperation').val() != 0)) {
            sdata.Operation = $('.search_selectOperation').val();
        }

        ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=AutocompleteSearch', 'POST', 'JSON', {'sdata' : sdata})
            .then(function (data) {
                $('#searchAuto').empty();
                $('#searchAuto').fadeIn(10000000);
                for (row in data) {
                    $('<div></div>').appendTo('#search_auto').html(data[row].Ciudad).attr({ 'class': 'searchElement', 'id': data[row].Ciudad });
                }

                $(document).on('click', '.searchElement', function () {
                    $('#autocom').val(this.getAttribute('id'));
                    $('#search_auto').fadeOut(1000);
                });

                $(document).on('click scroll', function (event) {
                    if (event.target.id !== 'autocom') {
                        $('#search_auto').fadeOut(1000);
                    }
                });

            }).catch(function () {
                $('#search_auto').fadeOut(500);
            });
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ButtonSearch() {
    $('#search-btn').on('click', function () {
        var search = [];

        var selectedCity = $('.search_selectCity').val() || localStorage.getItem('Ciudad');
        var selectedOperation = $('.search_selectOperation').val() || localStorage.getItem('Operacion');


        if (selectedCity != undefined) {
            search.push({ "Ciudad": [selectedCity] });
            localStorage.setItem('Ciudad', selectedCity); 
        } else {
            localStorage.removeItem('Ciudad'); 
        }


        if (selectedOperation != undefined) {
            search.push({ "Operation": [selectedOperation] });
            localStorage.setItem('Operacion', selectedOperation); 
        } else {
            localStorage.removeItem('Operacion'); 
        }


        var autocomValue = $('#autocom').val();
        if (autocomValue != undefined && autocomValue.trim() !== '') {

            if (selectedCity != undefined) {
                search.push({ "Ciudad": [autocomValue] });
            } else {
                search.push({ "Operation": [autocomValue] });
            }
        }

        localStorage.removeItem('Filters_Search');
        if (search.length != 0) {
            localStorage.setItem('Filters_Search', JSON.stringify(search));
            
            
            //console.log(localStorage.getItem('Filters_Search'));
        }


        window.location.href = 'index.php?page=Shop'; 
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//


//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//


$(document).ready(function () {

    SearchCharger();
    AutocompleteSearch();
    ButtonSearch();
});