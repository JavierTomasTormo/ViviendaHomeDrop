//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadCitySearch() {
    //console.log('Entro a LoadCitySearch');

//PUEDO RECOGER LOS DATOS DE CONTROLLER_HOMEDROP!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    ajaxPromise('Module/Search/ControladorSearch/ControllerSearch.php?Option=SearchCity', 'GET', 'JSON')
        .then(function (data) {

            //console.log(data, '/////datos recogidos de la base de datos');
            

            $('<option>Ciudad</option>').attr('selected', true).attr('disabled', true).appendTo('.search_selectCity')
            for (row in data) {
                $('<option value="' + data[row].ID_City + '">' + data[row].Ciudad + '</option>').appendTo('.search_selectCity')
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

                console.log(data, '/////datos recogidos de la base de datos/// CITY NOT DEFINED');


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

                    console.log(data, '/////datos recogidos de la base de datos')


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
        
        if ($('.search_selectCity').val() != undefined) {
            search.push({ "Ciudad": [$('.search_selectCity').val()] })
            if ($('.search_selectOperation').val() != undefined) {
                search.push({ "Operation": [$('.search_selectOperation').val()] })
            }
            if ($('#autocom').val() != undefined) {
                search.push({ "Ciudad": [$('#autocom').val()] })
            }
        } else if ($('.search_selectCity').val() == undefined) {
            if ($('.search_selectOperation').val() != undefined) {
                search.push({ "Operation": [$('.search_selectOperation').val()] })
            }
            if ($('#autocom').val() != undefined) {
                search.push({ "Ciudad": [$('#autocom').val()] })
            }
        }
        localStorage.removeItem('Filters_Search');
        if (search.length != 0) {
            localStorage.setItem('Filters_Search', JSON.stringify(search));
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