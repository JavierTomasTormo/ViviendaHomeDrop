 
$(document).ready(function() {

    updateResultsCount();
    // CountLikes();
    //console.log('DocumentReady');
/*************************************************************************************/
    let FiltrosAplicados = localStorage.getItem('FiltrosApplied');
    if (FiltrosAplicados !== null ) {
        console.log('¡Filtros Aplicados!', FiltrosAplicados);
        //alert('Tienes Filtros Aplicados, Eliminalos para ver todas las opciones');
    }else{
        console.log('No se encontraron Filtros. Se Procederá a cargar toda la página: "Shop"'); 
        //alert('¡No Hay Filtros Proporcionados!');
    }
/*************************************************************************************/
//No Tocar, El orden de los Factores Si altera el Producto 
           
            MostrarFiltrosShop();

        ButtonFilterShop();
        
    LoadHomeDropShop();
    ShopAllHome();
    clicks();
    Pagination();
    
});
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#   EMERGENCY BUTTON   #·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
$(document).on('click', '.activate-filter-remove', function (e) {
        //e.preventDefault(); 
        //console.log('DeleteNO');
        $('.filter_remove').click();
});
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
$(document).on('click', '.filter_remove', function () {
    if (//CONDICIONALES PARA SABER SI HAY FILTROS ACTIVOS
               localStorage.getItem('FiltersShop') || localStorage.getItem('FiltersShop_Category') 
            || localStorage.getItem('FiltersShop_City') || localStorage.getItem('FiltersShop_Type') 
            || localStorage.getItem('FiltersShop_Operation') || localStorage.getItem('FiltrosApplied')
            || localStorage.getItem('FiltersShopCount') || localStorage.getItem('FiltersShop_Price')
            || localStorage.getItem('currentPageId') || localStorage.getItem('FiltersHome')
            || localStorage.getItem('Filters_Search')
        ) {//ACCIONES


            //console.log('Delete');
        localStorage.removeItem('FiltersShop');
        localStorage.removeItem('FiltersHome');
        localStorage.removeItem('Filters_Search');


        localStorage.removeItem('FiltersShop_Category');
        localStorage.removeItem('FiltersShop_City');
        localStorage.removeItem('FiltersShop_Type');
        localStorage.removeItem('FiltersShop_Operation');
        localStorage.removeItem('FiltersShop_Price');

        localStorage.removeItem('FiltrosApplied');
        localStorage.removeItem('FiltersShopCount');


        localStorage.removeItem('CitySeleccted');
        localStorage.removeItem('CategorySeleccted');
        localStorage.removeItem('lastSelectedHouses');

        localStorage.removeItem('currentPageId');

        
        location.reload();
    } else {
        // No hay filtros almacenados
        console.log("No hay filtros almacenados.");
        alert("No hay filtros almacenados.");

    }
});
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ButtonFilterShop() {
    

    /////
    //-------------------------------------------------   
    //Filtro Shop Category
    $(document).on('change', '.FiltersShop_Category', function () {
        //console.log(localStorage.getItem('FiltersShop_Category'));
        localStorage.setItem('FiltersShop_Category', this.value);   
        //console.log(localStorage.getItem('FiltersShop_Category'));
        updateResultsCount();
        
    });
    if (localStorage.getItem('FiltersShop_Category')) {
        $('.FiltersShop_Category').val(localStorage.getItem('FiltersShop'));
        
    }
    //-------------------------------------------------
    $(document).on('change', '.FiltersShop_City', function () {
        localStorage.setItem('FiltersShop_City', this.value);
        updateResultsCount();
    });
    if (localStorage.getItem('FiltersShop_City')) {
        $('.FiltersShop_City').val(localStorage.getItem('FiltersShop_City'));
        //console.log(localStorage.getItem('FiltersShop_City'), 'Add.Value');
    }
    //-------------------------------------------------
    $('.FiltersShop_Type').change(function () {
        //console.log('FiltersShop_Type');
        localStorage.setItem('FiltersShop_Type', this.value);
        //
        //FiltrosAplicados = TodoFiltroShop.length;
    });
    if (localStorage.getItem('FiltersShop_Type')) {
        $('.FiltersShop_Type').val(localStorage.getItem('FiltersShop'));
    }
   //-------------------------------------------------
    $(document).on('slidechange', '#select_Price', function(event, ui) {
        var priceRange = ui.values[0] + "€ - " + ui.values[1] + "€";
        //console.log(priceRange, 'valor de precio');
        localStorage.setItem('FiltersShop_Price', priceRange);  
        
        
        //console.log(localStorage.getItem('FiltersShop_Price'));
        priceRange = updateResultsCount();

        //console.log("Valor mínimo de precio:", priceRange.min);
        //console.log("Valor máximo de precio:", priceRange.max);
    });   
    $(function() {
        if (localStorage.getItem('FiltersShop_Price')) {
            
            var priceRange = localStorage.getItem('FiltersShop_Price');
            var values = priceRange.split("€ - ");
            $("#select_Price").slider("values", [parseInt(values[0]), parseInt(values[1])]);
            $("#priceRange").val(priceRange);
        }
    });
    
    $('.FilterShop_OrderBy').change(function () {
        //console.log('FilterShop_OrderBy');
        localStorage.setItem('FilterShop_OrderBy', this.value);
        //
        //FiltrosAplicados = TodoFiltroShop.length;
    });
    if (localStorage.getItem('FilterShop_OrderBy')) {
        $('.FilterShop_OrderBy').val(localStorage.getItem('FiltersShop'));
    }
    //-------------------------------------------------
    $('.FiltersShop_Operation').change(function () {
        //console.log('FiltersShop_Operation');
        localStorage.setItem('FiltersShop_Operation', this.value);
        //
        //FiltrosAplicados = TodoFiltroShop.length;
    });
    if (localStorage.getItem('FiltersShop_Operation')) {
        $('.FiltersShop_Operation').val(localStorage.getItem('FiltersShop'));
    }
    //console.log(FiltrosAplicados);
    //console.log(TodoFiltroShop);  
    //console.log(TodoFiltroShop.length);    
   
        $('.FiltersShop_Category, .FiltersShop_City, .FiltersShop_Type, .FiltersShop_Operation, .FiltersShop_Price').change(function() {
            //console.log(localStorage.getItem('FiltersShop'));
            //console.log(localStorage.getItem('FiltersShop_City'),'Cargar UpdateCount'); 
            updateResultsCount();
                    
        });
    //-------------------------------------------------
    //-------------------------------------------------
    //FILTER BUTTON
    $(document).on('click', '.filter_button', function () {
        
        var FiltersShop = [];
    //---------------------------------------------------------------//
        if (localStorage.getItem('FiltersShop_Category')) {
            FiltersShop.push(['chd.ID_Category', localStorage.getItem('FiltersShop_Category')])
           
           localStorage.setItem('CategorySeleccted', localStorage.getItem('FiltersShop_Category'));

           localStorage.removeItem('FiltersShop_Category');
        }
    //---------------------------------------------------------------// 
        if (localStorage.getItem('FiltersShop_City')) {
            //console.log('INCITY');
            FiltersShop.push(['ch.ID_City', localStorage.getItem('FiltersShop_City')]);

            localStorage.setItem('CitySeleccted', localStorage.getItem('FiltersShop_City'));

            localStorage.removeItem('FiltersShop_City');
        }
    //---------------------------------------------------------------// 
        if (localStorage.getItem('FiltersShop_Type')) {
            FiltersShop.push(['th.ID_Type', localStorage.getItem('FiltersShop_Type')])
           // localStorage.removeItem('FiltersShop_Type');
        }
    //---------------------------------------------------------------//
        if (localStorage.getItem('FiltersShop_Price')) {
            //console.log('DENTRO GET ITEM');
            var priceRange = localStorage.getItem('FiltersShop_Price') || "0€ - 0€";
            var values = priceRange.split("€ - ");
            var minValue = values.length === 2 ? parseFloat(values[0]) : 0;
            var maxValue = values.length === 2 ? parseFloat(values[1]) : 200000;
            FiltersShop.push(['vh.Precio', minValue + ' AND ' + maxValue ]);
            localStorage.setItem('PriceSeleccted', localStorage.getItem('FiltersShop_Price'));
        }
    //---------------------------------------------------------------//
        if (localStorage.getItem('FiltersShop_Operation')) {
            FiltersShop.push(['oh.ID_Operation', localStorage.getItem('FiltersShop_Operation')])
        }
    //---------------------------------------------------------------//
        if (localStorage.getItem('FilterShop_OrderBy')) {
            FiltersShop.push(['OrderBy', localStorage.getItem('FilterShop_OrderBy')])
            localStorage.setItem('OrderBySeleccted', localStorage.getItem('FilterShop_OrderBy'));
        }
    //---------------------------------------------------------------//
        if (FiltersShop) {

            //console.log(FiltersShop);

            setTimeout(function() {
                ajaxForSearch('Module/Shop/ControllerShop/ControllerShop.php?Option=FiltersShop', 'POST', 'JSON', {'FiltersShop': FiltersShop});
            }, 200); 

            //console.log(FiltersShop);
            
            Pagination(FiltersShop);
        }

        localStorage.setItem('FiltersShop', JSON.stringify(FiltersShop) || undefined);

        //location.reload();
        
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function updateResultsCount() {

    var priceRange = localStorage.getItem('FiltersShop_Price') || "0€ - 0€";

    var values = priceRange.split("€ - ");

    var minValue = values.length === 2 ? parseFloat(values[0]) : 0;
    var maxValue = values.length === 2 ? parseFloat(values[1]) : 200000;

    var FiltersShopCount = {
        Category: localStorage.getItem('FiltersShop_Category') || 0,
        City: localStorage.getItem('FiltersShop_City') || 0,
        Operation: localStorage.getItem('FiltersShop_Operation') || 0,
        Type: localStorage.getItem('FiltersShop_Type') || 0,
        Pricemin: minValue,
        Pricemax: maxValue 
    };


    // var minValue = ...; // Obtener el valor mínimo del rango de precios
    // var maxValue = ...; // Obtener el valor máximo del rango de precios

    // // Establecer los nuevos valores del rango en el slider
    // $("#slider-range").slider("option", "min", minValue);
    // $("#slider-range").slider("option", "max", maxValue);



    //console.log(localStorage.getItem('FiltersShop_City'), 'BeforeRemove');
    //localStorage.removeItem('FiltersShop_City');
    //console.log(localStorage.getItem('FiltersShop_City'), 'AfterRemove');

    //console.log(FiltersShopCount);
    //return;
    

    localStorage.setItem('FiltersShopCount', JSON.stringify(FiltersShopCount));
    
    var savedFilters = JSON.parse(localStorage.getItem('FiltersShopCount') || undefined);

    //console.log(savedFilters);

        $.ajax({
            url: 'Module/Shop/ControllerShop/ControllerShop.php?Option=CountFilteredQueryShop',
            type: 'POST',
            dataType: 'JSON',
            data: { 
                FiltersShopCount: FiltersShopCount
            },
            success: function(response) {
                //console.log(response);
        
                if (!response.error) {
                    $('#resultsCount').text(response.count + " resultados encontrados");

                    //console.log(response.count);

                    if (response.count === '0') {
                        //console.log(response.count);

                        let text = '\n No se han encontrado viviendas relacionadas con tus filtros, en cambio tenemos todas estas: \n';
                        showToast(text);
                    }
                } else {
                    console.error("Error al obtener el count");
                }
            },
            error: function(xhr, status, error) {
                console.error("Error en la petición AJAX", error);
            }
        });
    
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function showToast(text) {
    //console.log(text);
    Toastify({
        close: {
            position: 'top-left' 
        },
        text: text,
        duration: 5000,
        gravity: "top",
        position: 'right',
        background: "linear-gradient(to right, #B8E994, #78e08f)", 
        className: "custom-toastify-serene",
        newWindow: true,
        style: {
            color: "#2c3e50", 
            fontSize: "16px",
            borderRadius: "10px", 
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)", 
            padding: "16px 20px", 
            margin: "100px"
        }
    }).showToast();
    
    

    setTimeout(function() {
        location.reload();
        localStorage.removeItem('FiltersShop');


        localStorage.removeItem('FiltersShop_Category');
        localStorage.removeItem('FiltersShop_City');
        localStorage.removeItem('FiltersShop_Type');
        localStorage.removeItem('FiltersShop_Operation');
        localStorage.removeItem('FiltersShop_Price');

        localStorage.removeItem('FiltrosApplied');
        localStorage.removeItem('FiltersShopCount');


        localStorage.removeItem('CitySeleccted');
        localStorage.removeItem('CategorySeleccted');
    }, 2500);

}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//

//----
// function ordenarResultados(opcion) {
//    var savedFilters = JSON.parse(localStorage.getItem('FiltersShop') || 0 );


//     console.log(opcion);
    

//     switch (opcion) {
//         case 'priceAsc':
//            //console.log(savedFilters);
//             savedFilters.sort((a, b) => a.Pricemin - b.Pricemax);
//             break;
//         case 'priceDesc':
            
//             savedFilters.sort((a, b) => b.Pricemax - a.Pricemin);
//             break;
//         default:
//             break;
//     }

    
//     localStorage.setItem('FiltersShop', JSON.stringify(savedFilters));
//     console.log(localStorage.getItem('FiltersShop'));
    
//     return savedFilters;
// }


  


  
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function MostrarFiltrosShop() {
    //console.log('Buenas Tardes');
    cargarFiltrosShop();


    let FiltrosAplicados = localStorage.getItem('FiltrosApplied');


    if (FiltrosAplicados === null){
        FiltrosAplicados = 0;
    }

    //console.log('MostrarFiltrosShop',FiltrosAplicados);

    $('<div class="div-FiltrosShopFloat"></div>').appendTo('.FiltrosShopFloat')
    .html(
        '<div class="dropdown">' +
        // $('.dropbtn').text('Filtros (' + FiltrosAplicados + ')');
            '<button onclick="myFunction()" class="dropbtn">Filtros (' + FiltrosAplicados + ')</button>' +
            '<div id="myDropdown" class="dropdown-content">' +


            '<span>OrderBy:</span><br/>' +
            '<select id="sortSelect" class="FilterShop_OrderBy">'+
                
                '<option value="ASC">Precio: Menor a Mayor</option>'+
                '<option value="DESC">Precio: Mayor a Menor</option>'+
                // '<option value="areaAsc">Superficie: Menor a Mayor</option>'+
                // '<option value="areaDesc">Superficie: Mayor a Menor</option>'+
            '</select><br/>'+


            '<span>Categoría:</span><br/>' +
            '<select id="select_Category" class="FiltersShop_Category">' +
            '</select><br/> '+

            //     '<option value="2">Garaje</option>' +
            //     '<option value="3">Trastero</option>' +
            //     '<option value="4">Calefacción</option>' +
            //     '<option value="5">Aire Acondicionado</option>' +
            //     '<option value="6">Ascensor</option>' +
            //     '<option value="7">Terraza</option>' +
            //     '<option value="8">Piscina</option>' +
            //     '<option value="9">Amueblado</option>' +
            // '</select><br/>' +

            //FILTROS DINAMICOS DE CIUDADES (RADIOBUTTON)
             '<span>Ciudad</span><br/>' +
             '<div class="radio-column" id="select_City"></div><br/> '+


            // '<div class="radio-column" id="select_City">' +
            //     '<input type="radio" name="city" value="2" id="madrid" class="FiltersShop_City">' +
            //     '<label for="madrid">Madrid</label><br/>' +
            //     '<input type="radio" name="city" value="3" id="valencia" class="FiltersShop_City">' +
            //     '<label for="valencia">Valencia</label><br/>' +
            //     '<input type="radio" name="city" value="6" id="barcelona" class="FiltersShop_City">' +
            //     '<label for="barcelona">Barcelona</label><br/>' +
            //     '<input type="radio" name="city" value="8" id="alicante" class="FiltersShop_City">' +
            //     '<label for="alicante">Alicante</label><br/>' +
            //     '<input type="radio" name="city" value="10" id="san_juan" class="FiltersShop_City">' +
            //     '<label for="san_juan">San Juan de Alicante</label><br/>' +
            // '</div><br/>' +


            '<span>Tipo</span><br/>' +
            '<select class="FiltersShop_Type" id="select_Type"> ' +
                '<option value="0">Seleccione Valor a Filtrar</option>' +

                '<option value="1">Estudio</option>' +
                '<option value="2">Apartamento</option>' +
                '<option value="3">Piso</option>' +
                '<option value="4">Ático</option>' +
                '<option value="5">Bajo</option>' +
                '<option value="6">Buhardilla</option>' +
                '<option value="7">Bajo con Jardín </option>' +
                '<option value="8">Loft</option>' +
                '<option value="9">Chalet</option>' +
                '<option value="10">Casa</option>' +
            '</select><br/>' +


        ///TEST ZONE
        '      <span for="priceRange">Rango de Precios:</span>'+
        '      <input type="text" id="priceRange" readonly style="border:0; color:#ddba6b; font-weight:bold; font-size: 1.5em; width:100%; text-align:center;">'+
        '      <div class="FiltersShop_Type" id="select_Price" style="width:80%; margin-left:10%; margin-right:10%;"></div>'+
        ////

            '<br/>'+
            '<span>Operación</span><br/>' +
            '<select class="FiltersShop_Operation" id="select_Operation"> ' +
                '<option value="0">Seleccione Valor a Filtrar</option>' +
                
                '<option value="2">Compra</option>' +
                '<option value="3">Alquiler</option>' +
                '<option value="4">Opción a Compra</option>' +
                '<option value="5">Compartir</option>' +
                '<option value="6">Obra Nueva</option>' +
            '</select><br/>' +

            '<div class="Botella_Giratoria">' +
                '<button class="filter_button button_spinner" id="Button_filter">Filter</button>' +
                '<button class="filter_remove" id="Remove_filter">Remove</button>' +
                '<b><div id="resultsCount" style="font-size: 19px;">0 resultados encontrados</div></b>'+
            '</div>' +
        '</div>' +
        // () Texto eliminado del class Filter_button
        '</div>' 


      
    );
        //setTimeout(function() {
         //HighlightFilters();  
        //}, 100);
        //cargarFiltrosShop();
    
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function cargarFiltrosShop() {
    CitySeleccted = localStorage.getItem('CitySeleccted') || 0;
    CategorySeleccted = localStorage.getItem('CategorySeleccted') || 0;
    //localStorage.setItem('CategorySeleccted', Category);
    var chequiado = '';
    //console.log(CategorySeleccted);
    //console.log(CitySeleccted);

    // Control de Filtros Nulos
    if (CitySeleccted === 0 || CategorySeleccted === 0) {
        //console.log('No hay datos de filtros disponibles de City.');
    }

    $.ajax({
        url: 'Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=City',
        type: 'GET',
        dataType: 'JSON',
        success: function(response) {
            var $radios = $('#select_City'); 
            //$radios.empty(); 
            response.forEach(function(city) {
                if (CitySeleccted === city.ID_City){
                    chequiado = 'checked';
                    //localStorage.removeItem('CitySeleccted');
                    //location.reload();
                    //console.log(chequiado);
                    //console.log(CitySeleccted);
                }else{
                    chequiado = '';
                    //localStorage.removeItem('CitySeleccted');
                }
                //console.log(CitySeleccted,chequiado, city.ID_City);
                //'<input type="radio" name="city" value="2" id="madrid" class="FiltersShop_City">' +
                //     '<label for="madrid">Madrid</label><br/>' +
                $radios.append(' <input type="radio" name="select_City" value="' + city.ID_City + '" id="' + city.Ciudad + 
                                '" class="FiltersShop_City"'+ chequiado +'>' + 
                                '<label for="'+ city.Ciudad +'"> ' + city.Ciudad + '</label><br/>');
                //location.reload();
            });
            //location.reload();
            //HighlightFilters();
            
        },
        error: function(error) {
            console.log(error);
        }
    });
    //CATEGORY
    $.ajax({
        url: 'Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=Category',
        type: 'GET',
        dataType: 'JSON',
        success: function(categorias) {
            //console.log(responseCategory);
            //return;
            var selectElement = $("#select_Category");
            selectElement.empty();

            // if (CategorySeleccted === categorias.ID_Category){
            //     chequiado = 'selected';
            // }else{
            //     chequiado = '';
            //     //localStorage.removeItem('CitySeleccted');
            // }



            // '<select id="select_Category" class="FiltersShop_Category">' +
            // '</select><br/> '+
            // // '<option value="2">Garaje</option>' +


            // opción predeterminada
            selectElement.append($("<option>", {
                value: "0",
                text: "Seleccione Valor a Filtrar"
            }));

            // $.each(categorias, function(index, categoria) {
            //     selectElement.append($("<option>", {
            //         value: categoria.ID_Category,
            //         text: categoria.Category
            //     }));
            // });
            $.each(categorias, function(index, categoria) {
                var option = $("<option>", {
                    value: categoria.ID_Category,
                    text: categoria.Category
                });
        
                if (categoria.ID_Category === CategorySeleccted) {
                    option.prop('selected', true);
                }
                //location.reload;
                //return;
                //selectElement.append(option, selected);
                selectElement.append(option);
            });
            
        },
        error: function(error) {
            console.log(error);
        }
    });


    //PRECIO
    $(function() {
        $("#select_Price").slider({
            range: true,
            min: 10000,
            max: 200000,
            values: [50000, 150000],
            slide: function(event, ui) {
                $("#priceRange").val( ui.values[0] + "€ - " + ui.values[1] + "€");
            }
        });
        $("#priceRange").val($("#select_Price").slider("values", 0) + "€ - " + $("#select_Price").slider("values", 1) + "€");
    });
} 
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ShopAllHome() {
   
    //-----------------------------------------------------------------//
        var filtros = (localStorage.getItem('FiltersHome') || undefined);
    //-----------------------------------------------------------------//
        var filtroShop = (localStorage.getItem('FiltersShop') || 0);
    //-----------------------------------------------------------------//
        var filtroShopPrice = (localStorage.getItem('FiltersShop_Price') || 0);
    //-----------------------------------------------------------------//.
        var flitroSearch = (localStorage.getItem('Filters_Search') || undefined);
    //-----------------------------------------------------------------//
        if (filtros != undefined ) {
            setTimeout(function() {
                LoadJump();
            }, 200); 

        } if (filtroShop != 0 || filtroShopPrice != 0) {
            var filtroSho2 = JSON.parse(localStorage.getItem('FiltersShop') || 0 );
            setTimeout(function() {
                ajaxForSearch('Module/Shop/ControllerShop/ControllerShop.php?Option=FiltersShop', 'POST', 'JSON', {'FiltersShop': filtroSho2});
            }, 200); 

            HighlightFilters(filtroSho2);

        } if (flitroSearch != undefined) {
            setTimeout(function() {
                LoadSearch();
            }, 200);

        } else {
            // setTimeout(function() {
            //     LoadHomeDropShop();
            // }, 200);
        }
    
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadSearch() {



    var FiltersSearch = JSON.parse(localStorage.getItem('Filters_Search') || '[]');
    

    //console.log(localStorage.getItem('FiltersShop'));
    //console.log(localStorage.getItem('Filters_Search'));
    
    

    
    //localStorage.removeItem('FiltersShop');
    
    //localStorage.removeItem('Filters_Search');



    ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=Search', 'POST', 'JSON', { 'FiltersSearch': FiltersSearch })
        .then(function(Serach) {


            //console.log(FiltersSearch);

           // console.log(Serach);


            $("#ListViviendasHomeDrop").empty();
            for (row in Serach) {
                $('<div></div>').attr({ 'id': Serach[row].ID_HomeDrop, 'class': 'list_content_shop' }).appendTo('#ListViviendasHomeDrop')
                    .html(
                        '<div class="container">' +
                        '<div class="wrapper">' +
                        '<div class="product-img">' +
                        '<img src="' + (Serach[row].Img ? Serach[row].Img : '') + '" style="height: 420px; width: 327px; object-fit: cover;">' +
                        '</div>' +
                        '<div class="product-info">' +
                        '<div class="product-text">' +
                        '<h1><b>' + (Serach[row].Type ? Serach[row].Type : 'Tipo no disponible') + ' <h2><b>' + (Serach[row].Operation ? Serach[row].Operation : 'Operación no disponible') + '</b></h2><a class="list__heart" id="' + (Serach[row].Ciudad ? Serach[row].Ciudad : 'Ciudad no disponible') + '"><i id="' + (Serach[row].Superficie ? Serach[row].Superficie : '') + '" class=""></i></a></b></h1>' +
                        '<h3> Descripción y Detalles: </h3>' +
                        '<p> Próximamente... </p>' +
                        '<p>' + (Serach[row].Calle ? Serach[row].Calle : '') + ',  ' + (Serach[row].Ciudad ? Serach[row].Ciudad : '') +'</p>' +
                        '</div>' +
                        '<br/><div class="product-price-btn">' +
                        '<p><span>' + (Serach[row].Precio ? Serach[row].Precio + '€' : 'Precio no disponible') + '</span></p><br/>' +
                        '<button id="' + (Serach[row].ID_HomeDrop ? Serach[row].ID_HomeDrop : '') + '" type="button" class="button buy">Details</button>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>'
                    );
                    //console.log((shop[row].Ciudad ? shop[row].Ciudad : ''));
            }



        }).catch(function() {
            //window.location.href = "index.php?modules=exception&op=503&error=fail_salto&type=503";
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function HighlightFilters() {

    // var flitroSearch = (localStorage.getItem('Filters_Search') || undefined);

    //     if (flitroSearch != undefined) {
    //             localStorage.setItem('FiltersShop', flitroSearch)  
    //     }

    TodoFiltroShop = JSON.parse(localStorage.getItem('FiltersShop')) || [];

     //console.log(TodoFiltroShop);

    // Control de Filtros Nulos
    if (TodoFiltroShop.length === 0) {
        ///console.log('No hay datos de filtros disponibles.');
        //BREAK
        return;
    }

    //Estos de aqui son para ----ARRAYS----
    var Category = getValueByKey(TodoFiltroShop, 'chd.ID_Category');
    var City = getValueByKey(TodoFiltroShop, 'ch.ID_City');
    var Type = getValueByKey(TodoFiltroShop, 'th.ID_Type');
    var Operation = getValueByKey(TodoFiltroShop, 'oh.ID_Operation');
    var Precio = getValueByKey(TodoFiltroShop, 'vh.Precio');
    var OrderBy = getValueByKey(TodoFiltroShop, 'OrderBy');
    //Estos de abajo son para ----STRINGS----
    // var Category = TodoFiltroShop.find(filtro => filtro.hasOwnProperty('chd.ID_Category'))?.['chd.ID_Category'];
    // var City = TodoFiltroShop.find(filtro => filtro.hasOwnProperty('ch.ID_City'))?.['ch.ID_City'];
    // var Type = TodoFiltroShop.find(filtro => filtro.hasOwnProperty('th.ID_Type'))?.['th.ID_Type'];
    // var Operation = TodoFiltroShop.find(filtro => filtro.hasOwnProperty('oh.ID_Operation'))?.['oh.ID_Operation'];


    // Muestra los filtros aplicados
    
    //console.log('Categoría:', document.getElementById('select_Category'));
    // console.log('Ciudad:', Ciudad);
    // console.log('Categoría:', Category);
    // console.log('Ciudad:', City);
    // console.log('Tipo:', Type);
    // console.log('Operación:', Operation);
    // console.log('Precio:', Precio)
    // console.log('OrderBy:', OrderBy)

    let FiltrosApplied2 = 0;

    // Aplicamos Si existe
    if (Category) {
        var selectElementCategory = document.getElementById('select_Category');
        if (selectElementCategory) {
            selectElementCategory.value = Category;
            FiltrosApplied2++;
            localStorage.setItem('CategorySeleccted', Category);
            $(selectElementCategory).addClass('highlight');
        }
    }
    if (Precio) {
        var selectElementPrice = document.getElementById('select_Price');
        if (selectElementPrice) {
            selectElementPrice.value = Precio;
            FiltrosApplied2++;
            localStorage.setItem('PriceSeleccted', Precio);
            $(selectElementCategory).addClass('highlight');
        }
    }
    //console.log('Categoría:', document.getElementById('select_Category'));
    // if (City) {
    //     //$('input[name="city"][value="' + localStorage.getItem('FiltersShop_City') + '"]').prop('checked', true);
    //     //document.getElementById('select_City').value = City;
    //     $('input[name="city"][value="' + City + '"]').prop('checked', true);
    //     FiltrosApplied2++;
    // }
    // if (City && City.length > 0) {
    //     City.forEach(city => {
    //         var radio = document.getElementById(city);
    //         if (radio) {
    //             radio.checked = true;
    //         }
    //     });
    // }    
    // if (City) {
    //     var selectElementCity = document.getElementById('select_City');
    //     if (selectElementCity) {
    //         selectElementCity.value = City;
    //         FiltrosApplied2++;
    //     }
    // }
    var City = localStorage.getItem('FiltersShop_City');

    if (City) {
        var selectElementCity = document.getElementById('select_City');

        if (selectElementCity) {
            selectElementCity.value = City;
            
            FiltrosApplied2++;
            
            localStorage.setItem('CitySeleccted', City);
            
            $(selectElementCity).addClass('highlight');
        }
    }
   

    if (Type) {
        var selectElementType = document.getElementById('select_Type');
        if (selectElementType) {
            selectElementType.value = Type;
            FiltrosApplied2++;
            $(selectElementType).addClass('highlight');
        }
    }
    if (OrderBy) {

        var selectElementOrderBy = document.getElementById('sortSelect');
        if (selectElementOrderBy) {
            selectElementOrderBy.value = OrderBy;
            FiltrosApplied2++;
            $(selectElementOrderBy).addClass('highlight');
        }
    }

var Operation = localStorage.getItem('FiltersShop_Operation');

if (Operation) {
    var selectElementOperation = document.getElementById('select_Operation');

    if (selectElementOperation) {
        selectElementOperation.value = Operation;
        
        FiltrosApplied2++;
        
        $(selectElementOperation).addClass('highlight');
    }
}


    if (FiltrosApplied2 > localStorage.getItem('FiltrosApplied')) {
        localStorage.setItem('FiltrosApplied', FiltrosApplied2);
        location.reload();
    }
    localStorage.setItem('FiltrosApplied', FiltrosApplied2);

}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function getValueByKey(array, key) {
    var item = array.find(item => item[0] === key);
    return item ? item[1] : undefined;
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadJump() {
    var FiltersHome = JSON.parse(localStorage.getItem('FiltersHome')|| '[]');
    var start = localStorage.getItem('move') ? JSON.parse(localStorage.getItem('move'))[1] : 0; 
    var limit = 3;
    //localStorage.removeItem('FiltersHome');

    ajaxPromise(
        'Module/Shop/ControllerShop/ControllerShop.php?Option=Redirect', 
        'POST', 
        'JSON', 
        { 'FiltersHome': FiltersHome, 'start': start, 'limit': limit }
    )
        .then(function(shop) {
            $("#ListViviendasHomeDrop").empty();

            //console.log(shop);

            for (row in shop) {
                $('<div></div>').attr({ 'id': shop[row].ID_HomeDrop, 'class': 'list_content_shop' }).appendTo('#ListViviendasHomeDrop')
                    .html(
                        '<div class="container">' +
                            '<div class="wrapper">' +
                                '<div class="product-img">' +
                                    '<img src="' + (shop[row].Img ? shop[row].Img : '') + '" style="height: 420px; width: 327px; object-fit: cover;">' +
                                '</div>' +
                                '<div class="product-info">' +
                                    '<div class="product-text">' +
                                    '<h1><b>' + (shop[row].Type ? shop[row].Type : 'Tipo no disponible') + ' <h2><b>' + (shop[row].Operation ? shop[row].Operation : 'Operación no disponible') + '</b></h2><a class="list__heart" id="' + (shop[row].Ciudad ? shop[row].Ciudad : 'Ciudad no disponible') + '"><i id="' + (shop[row].Superficie ? shop[row].Superficie : '') + '" class=""></i></a></b></h1>' +
                                    '<h3> Descripción y Detalles: </h3>' +
                                    '<p> Próximamente... </p>' +
                                    '<p>' + (shop[row].Calle ? shop[row].Calle : '') + ',  ' + (shop[row].Ciudad ? shop[row].Ciudad : '') +'</p>' +
                                '</div>' +
                                '<br/><div class="product-price-btn">' +
                                '<p><span>' + (shop[row].Precio ? shop[row].Precio + '€' : 'Precio no disponible') + '</span></p><br/>' +
                                '<button id="' + (shop[row].ID_HomeDrop ? shop[row].ID_HomeDrop : '') + '" type="button" class="button buy">Details</button>' +
                                '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>'
                    );
            }
        }).catch(function() {
            // Manejar el error en caso de que la llamada AJAX falle
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadHomeDropShop() {
    var OrderBy = localStorage.getItem('FilterShop_OrderBy');
    var start = localStorage.getItem('move') ? JSON.parse(localStorage.getItem('move'))[1] : 0;
    var limit = 3;

    //console.log(OrderBy);

    if (localStorage.getItem('FilterShop_OrderBy') === null) {
        localStorage.setItem('FilterShop_OrderBy', 'DESC')
    }

    ajaxForSearch(
        'Module/Shop/ControllerShop/ControllerShop.php?Option=AllHomes', 
        'POST', 
        'JSON', 
        { 'OrderBy': OrderBy, 'start': start, 'limit': limit }
    );
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ajaxForSearch(durl, type , dataType , sData = undefined, total_prod = 0, items_page = 3) {
    //console.log(durl, type , dataType , sData);
    var url2 = durl;
    var filter = sData;
    var token = localStorage.getItem('token');

    ajaxPromise(url2, type, dataType, filter)
    .then(function(data) {
        $('#ListViviendasHomeDrop').empty();

        if (data == "error") {
            $('<div></div>').appendTo('#ListViviendasHomeDrop')
                .html(
                    '<h3>¡No se encuentran resultados con los filtros aplicados!</h3>'
                );
        } else {
            for (var row in data) {
                $('<div></div>').attr({ 'id': data[row].ID_HomeDrop, 'class': 'list_content_shop' }).appendTo('#ListViviendasHomeDrop');

                buildProductHTML(data[row]);
                
                CountLikes(data[row].ID_HomeDrop);
            }
            if (localStorage.getItem('id')) {
                document.getElementById(move_id).scrollIntoView();
            }
        }
        AllMapBox(data);
    });
        function buildProductHTML(productData) {
            var productHTML = '<div class="container">' +
                '<div class="wrapper">' +
                '<div class="product-img">' +
                '<img src="' + productData.Img + '" style="height: 420px; width: 327px; object-fit: cover;">' +
                '</div>' +
                '<div class="product-info">';
            if (token) {
                $.ajax({
                    url: 'Module/Shop/ControllerShop/ControllerShop.php?Option=UserLikes',
                    type: 'POST',
                    dataType: 'JSON',
                    data: { ID_HomeDropLike: productData.ID_HomeDrop, token: token },
                    success: function(response) {
                        //console.log(response);

                        if (response === 'Like') {
                            productHTML += '<div class="LikeHeart is-active" id="' + productData.ID_HomeDrop + '"></div><br>' +
                                '<b><div class="resultsCountLike" id="resultsCountLike' + productData.ID_HomeDrop + '">0 Likes</div></b>';
                        } if (response === 'NoLike') {
                            productHTML += '<div class="LikeHeart" id="' + productData.ID_HomeDrop + '"></div><br>' +
                                '<b><div class="resultsCountLike" id="resultsCountLike' + productData.ID_HomeDrop + '">0 Likes</div></b>';
                        }

                        productHTML += '<div class="product-text">' +
                            '<h1><b>' + productData.Type + '</b> <h2><b>' + productData.Operation + '</b></h2><a class="list__heart" id="' + productData.Ciudad + '"><i id="' + productData.Superficie + '" class=""></i><i id="' + productData.Category + '" class=""></i></a></b></h1>' +
                            '<h3> Descripción y Detalles: </h3>' +
                            '<p> Próximamente... </p>' +
                            '<p>' + productData.Calle + ',  ' + productData.Ciudad + '</p>' +
                            '</div>' +
                            '<div class="product-price-btn">' +
                            '<p><span>' + productData.Precio + '€</span></p><br/>' +
                            '<button id="' + productData.ID_HomeDrop + '" type="button" class="button buy">Details</button>' +
                            '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>';

                        $('#' + productData.ID_HomeDrop).html(productHTML);
                    }
                });
            } else {
                productHTML += '<div class="LikeHeart" id="' + productData.ID_HomeDrop + '"></div><br>' +
                '<b><div class="resultsCountLike" id="resultsCountLike' + productData.ID_HomeDrop + '">0 Likes</div></b>';

                productHTML += '<div class="product-text">' +
                    '<h1><b>' + productData.Type + '</b> <h2><b>' + productData.Operation + '</b></h2><a class="list__heart" id="' + productData.Ciudad + '"><i id="' + productData.Superficie + '" class=""></i><i id="' + productData.Category + '" class=""></i></a></b></h1>' +
                    '<h3> Descripción y Detalles: </h3>' +
                    '<p> Próximamente... </p>' +
                    '<p>' + productData.Calle + ',  ' + productData.Ciudad + '</p>' +
                    '</div>' +
                    '<div class="product-price-btn">' +
                    '<p><span>' + productData.Precio + '€</span></p><br/>' +
                    '<button id="' + productData.ID_HomeDrop + '" type="button" class="button buy">Details</button>' +
                    '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>';

                $('#' + productData.ID_HomeDrop).html(productHTML);
            }
        }
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
$(document).on('click', '.LikeHeart', function (e) {
    $(this).toggleClass("is-active");
    var token = localStorage.getItem('token');
    var ID_HomeDropLike = $(this).attr('id');
    //CountLikes(ID_HomeDropLike);
    
    //console.log(token);

    if (token){

        if ($(this).hasClass("is-active")) {
            //console.log('Like');
            // console.log(ID_HomeDropLike);
            
            $.ajax({
                url: 'Module/Shop/ControllerShop/ControllerShop.php?Option=Like',
                type: 'POST',
                dataType: 'JSON',
                data: {ID_HomeDropLike: ID_HomeDropLike, token: token},
                success: function() {
                    CountLikes(ID_HomeDropLike);
                }
            });
    
        } else {
            //console.log('Dislike');
            //console.log(ID_HomeDropLike);
    
            $.ajax({
                url: 'Module/Shop/ControllerShop/ControllerShop.php?Option=DisLike',
                type: 'POST',
                dataType: 'JSON',
                data: {ID_HomeDropLike: ID_HomeDropLike, token: token},
                success: function() {
                    CountLikes(ID_HomeDropLike);
                }
            });
        }
    
        setTimeout(function() {
            CountLikes(ID_HomeDropLike);
        }, 110); 

    } else {
        setTimeout('window.location.href = "http://localhost/ViviendaHomeDrop/index.php?page=RegLog";', 1000);

    }
});
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function CountLikes(ID_HomeDropLike) {

        $.ajax({
            url: 'Module/Shop/ControllerShop/ControllerShop.php?Option=CountLikes',
            type: 'POST',
            dataType: 'JSON',
            data: {ID_HomeDropLike: ID_HomeDropLike},
            success: function(response) {
               //console.log(response);
                //console.log(ID_HomeDropLike);
        
                if (!response.error) {
                    $('#resultsCountLike'+ID_HomeDropLike+'').text(response.count + " Likes");

                    //console.log(response.count);

                } else {
                    console.error("Error al obtener el count");
                }
            },
            error: function(xhr, status, error) {
                console.error("Error en la petición AJAX", error);
            }
        });
    
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function clicks() {
    $(document).on("click", ".button.buy", function() {
        var ID_HomeDrop = this.getAttribute('id');
        //console.log(this.getAttribute('id'));
        var url = 'Module/Shop/ControllerShop/ControllerShop.php?Option=Visitas&id=' + ID_HomeDrop;

        $.ajax({
            url: url,
            type: 'POST',
            dataType: 'JSON',
            data: {},
            success: function(response) {
                //console.log(response);
                console.log('+1 Visita a la vivienda');
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('Error en la solicitud AJAX:', textStatus, errorThrown);
            }
        });
        

        var lastSelectedHousesString = localStorage.getItem('lastSelectedHouses');
        var lastSelectedHouses = [];
    
        if (lastSelectedHousesString) {
            lastSelectedHouses = JSON.parse(lastSelectedHousesString);
        }
    
        lastSelectedHouses.push(ID_HomeDrop);
        localStorage.setItem('lastSelectedHouses', JSON.stringify(lastSelectedHouses));

        //console.log(lastSelectedHouses);
        loadDetails(ID_HomeDrop);
    });
    
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function loadDetails(ID_HomeDrop) {
    $("#pagination").empty();
    //REZAMOS A JESUCRISTO NUESTRO SEÑOR
    //console.log(ID_HomeDrop);

    //console.log("La ID llega Intacta");
    //return false;
    ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=DetailsHome&id=' + ID_HomeDrop, 'POST', 'JSON', {})
    .then(function(data) {
                //console.log("Hola, ya llego a pasar las Promises");
                //console.log(data);
        $('#ListViviendasHomeDrop').empty();
        $('.Data_Home').empty();
        $('.Data_Img').empty();
        $('#map').hide();
        //$('#mapDetails').empty();
        for (let row in data[1][0]) {
            let imageDiv = $('<div>').addClass('date_img_dentro')
                                    .attr('id', data[1][0][row].ID_Imagen)
                                    .append($('<div>').addClass('content-img-details')
                                                    .html(`<img src='${data[1][0][row].Img}'>`));
            $('.Data_Img').append(imageDiv);
        }
        
        let productDetailDiv = $('<div>').addClass('list_product_details')
            .append($('<div>').addClass('product-info_details')
                .append($('<div>').addClass('product-content_details')
                    .append($('<h1>').html(`<b>${data[0].Type} ${data[0].Ciudad}</b>`))
                    .append($('<hr>').addClass('hr-shop'))
                    .append($('<table>').attr('id', 'table-shop')
                        .append($('<tr>')
                            .append($('<td>').html(`<i class='fa-solid fa-road fa-2xl'></i>Calle &nbsp;${data[0].Calle}`))
                            .append($('<td>').html(`<svg style="max-width: 10%;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M470.7 9.4c3 3.1 5.3 6.6 6.9 10.3s2.4 7.8 2.4 12.2l0 .1v0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3L310.6 214.6c-11.8 11.8-30.8 12.6-43.5 1.7L176 138.1 84.8 216.3c-13.4 11.5-33.6 9.9-45.1-3.5s-9.9-33.6 3.5-45.1l112-96c12-10.3 29.7-10.3 41.7 0l89.5 76.7L370.7 64H352c-17.7 0-32-14.3-32-32s14.3-32 32-32h96 0c8.8 0 16.8 3.6 22.6 9.3l.1 .1zM0 304c0-26.5 21.5-48 48-48H464c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V304zM48 416v48H96c0-26.5-21.5-48-48-48zM96 304H48v48c26.5 0 48-21.5 48-48zM464 416c-26.5 0-48 21.5-48 48h48V416zM416 304c0 26.5 21.5 48 48 48V304H416zm-96 80a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"/></svg>
                            &nbsp;${data[0].Operation}`))
                        )
                        .append($('<tr>').append($('<td>').html(`<i class="fa-solid fa-dice-d6" ></i>${data[0].Superficie}m²`)))
                        .append($('<tr>').append($('<td>').html(`<i class="fa-solid fa-dice-d6" ></i>&nbsp;${data[0].Category}`)))
                    )
                    .append($('<hr>').addClass('hr-shop'))
                    .append($('<h3>').html('<b>Más Información:</b>'))
                    .append($('<p>').html('Próximamente...'))
                    .append($('<div>').addClass('buttons_details')
                        .append($('<div>').addClass('product-price-btn2')
                            .html(`<span>${data[0].Precio}<i class='fa-solid fa-euro-sign'></i></span>`))
                            .append($('<a>').addClass('button add').attr('href', '#').html('Add to Cart'))
                            .append($('<a>').addClass('button buy2').attr('href', '#').html('Buy'))
                            .append($('<a>').addClass('button buy2').attr('href', 'index.php?page=Shop').html('Volver'))
                            .append($('<a>').addClass('details__heart').attr('id', data[0].ID_HomeDrop)
                            .append($('<i>').attr('id', data[0].ID_HomeDrop).addClass('fa-solid fa-heart fa-lg')))
                    )

                )
            );

        $('.product_detail_car').append(productDetailDiv);
        MasCasasRelacionadas(data[0].Category, data[0].Ciudad, data[0].ID_HomeDrop);
        MapBoxDetails(data[0]);
       

        $('.date_img_dentro').slick({
            slidesToShow: 1.8,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next">Next</button>'
        });


    }).catch(function() {
        // window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Load_Details SHOP";
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function AllMapBox(data) {
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-3.74922, 40.463667], 
        zoom: 5.2
    });

    for (let row in data) {
        const marker = new mapboxgl.Marker();
        const minPopup = new mapboxgl.Popup()
            .setHTML(
                '<div class="container2">' +
                    '<div class="wrapper2">' +
                        '<img class="buy" src="' + data[row].Img + '" style="width: 50%; padding-top: 10px;">' +
                        '<br>'+
                        '<h3 style="text-align:center; color: #333; font-size: 20px; margin-bottom: 5px;">' + data[row].Ciudad + '</h3>' +
                        '<p style="text-align:center;">Categoría: <b>' + data[row].Category + '</b></p>' +
                        '<p style="text-align:center;">Precio: <b>' + data[row].Precio + '€</b></p>' +
                        
                        // '<a class="button button-primary-outline button-ujarak button-size-1 wow fadeInLeftSmall link" data-wow-delay=".4s" id="' + data[row].ID_HomeDrop + '">Read More</a>' +
                        '<div style="padding-bottom: 15px; ">'+
                            '<button id="' + data[row].ID_HomeDrop + '" type="button" class="button buy" >Details</button>'+
                        '</div>'+
                    '</div>' +
                '</div>'
            );
        marker.setPopup(minPopup)
            .setLngLat([data[row].lon, data[row].lat])
            .addTo(map);
    }
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function MapBoxDetails(data) {
    // Muestra el contenedor del mapa
    $('#mapDetails').show();

    mapboxgl.accessToken = 'pk.eyJ1IjoiMjBqdWFuMTUiLCJhIjoiY2t6eWhubW90MDBnYTNlbzdhdTRtb3BkbyJ9.uR4BNyaxVosPVFt8ePxW1g';
    const mapDetails = new mapboxgl.Map({
        container: 'mapDetails',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [data.lon, data.lat],
        zoom: 8
    });

    // Crear un marcador en las coordenadas proporcionadas
    const markerDetails = new mapboxgl.Marker()
        .setLngLat([data.lon, data.lat])
        .addTo(mapDetails);

    // Crear un popup personalizado si es necesario
    const minPopupDetails = new mapboxgl.Popup()
        .setHTML(
            '<h4>' + item.Type + '</h4>' +
            '<p>Categoría: ' + item.Category + '</p>' +
            '<p>Precio: ' + item.Precio + '€</p>' +
            '<img src="' + item.Img + '"/>'
        );

    // Asignar el popup al marcador (si se desea)
    markerDetails.setPopup(minPopupDetails);
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function Pagination(FiltersShop) {
    var filtrosPag = (localStorage.getItem('FiltersHome') || undefined);
    var flitroSearchPag = (localStorage.getItem('Filters_Search') || undefined);
    var FiltersShop = FiltersShop;


    //console.log('FiltersShop',FiltersShop,'filtrosPag',filtrosPag,'flitroSearchPag',flitroSearchPag);

    var url = "";
    if (FiltersShop != undefined) {
        url = "Module/Shop/ControllerShop/ControllerShop.php?Option=CountFiltShop";
    } else if (filtrosPag != undefined) {
        url = "Module/Shop/ControllerShop/ControllerShop.php?Option=CountHomeFilt";
    } else if (flitroSearchPag != undefined) {
        url = "Module/Shop/ControllerShop/ControllerShop.php?Option=CountSearchFilt";
    } else {
        url = "Module/Shop/ControllerShop/ControllerShop.php?Option=CountGeneral";
    }

    //console.log(url,{ 'FiltersShopCount': FiltersShop, 'filtrosPag': filtrosPag, 'flitroSearchPag': flitroSearchPag });


    ajaxPromise(url, 'POST', 'JSON', { 'FiltersShopCount': FiltersShop, 'filtrosPag': filtrosPag, 'flitroSearchPag': flitroSearchPag })
        .then(function(data) {

            //console.log(data);

            if (localStorage.getItem('currentPageId') == null) {
                localStorage.setItem('currentPageId', 'page_1');
            }

            var total_prod = data;

            var total_pages = 1;
            if (total_prod >= 3) {
                total_pages = Math.ceil(total_prod / 3);
            }

            var paginationContainer = $('#pagination');

            paginationContainer.empty();

            
            var prevButton = $('<li>').addClass('page-item').attr('id', 'prevButton');
            var prevLink = $('<a>').addClass('page-link').attr('href', '#').text('Prev');
            prevButton.append(prevLink);
            paginationContainer.append(prevButton);





            //console.log(url,{ 'FiltersShopCount': FiltersShop, 'filtrosPag': filtrosPag, 'flitroSearchPag': flitroSearchPag, 'total_pages' : total_pages });

            console.log(localStorage.getItem('currentPageId'));

            for (var i = 1; i <= total_pages; i++) {

                //console.log('Dentro del for');

                var pageElement = $('<li>').addClass('page-item').attr('id', 'page_' + i);
                var pageLink = $('<a>').addClass('page-link').attr('href', '#').text(i);
                pageElement.append(pageLink);

                pageElement.on('click', function(event) {
                    
                    paginationContainer.find('.page-item').removeClass('active');

                    var pageId = $(this).attr('id');

                    localStorage.setItem('currentPageId', pageId);

                    //console.log('Se hizo clic en la página con ID:', pageId);

                    var num = parseInt(pageId.split('_')[1]);
                    var start = 3 * (num - 1);
                    var limit = 3;



                    // console.log(url,{ 'FiltersShopCount': FiltersShop, 'filtrosPag': filtrosPag, 'flitroSearchPag': flitroSearchPag });
                    // console.log('start',start,'limit',limit);
                    //console.log(localStorage.getItem('currentPageId'));



                    if (FiltersShop != undefined || filtrosPag != undefined || flitroSearchPag != undefined) {
                        if (FiltersShop != undefined) {
                            //console.log('FiltersShop');
                            //console.log({ 'FiltersShop': FiltersShop, 'start': start, 'limit': limit });
                            ajaxForSearch(
                                "Module/Shop/ControllerShop/ControllerShop.php?Option=FiltersShop",
                                'POST',
                                'JSON', { 'FiltersShop': FiltersShop, 'start': start, 'limit': limit }
                            );


                        } if (filtrosPag != undefined) {
                            // console.log('filtrosPag');
                            // console.log({ 'FiltersHome': filtrosPag, 'start': start, 'limit': limit });

                            ajaxForSearch(
                                "Module/Shop/ControllerShop/ControllerShop.php?Option=FiltersHome",
                                'POST',
                                'JSON', { 'FiltersHome': filtrosPag, 'start': start, 'limit': limit }
                            );


                        } if (flitroSearchPag != undefined) {
                            // console.log({ 'flitroSearchPag': flitroSearchPag, 'start': start, 'limit': limit });
                            // console.log('flitroSearchPag');
                            
                            ajaxForSearch(
                                "Module/Shop/ControllerShop/ControllerShop.php?Option=RedirectSearch",
                                'POST',
                                'JSON',
                                { 'FiltersSearch': flitroSearchPag, 'start': start, 'limit': limit }
                            );

                        } 
                    } else {
                        //console.log('else');
                        var OrderBy = localStorage.getItem('FilterShop_OrderBy');
                    
                        //console.log(OrderBy);
                        
                        if (localStorage.getItem('FilterShop_OrderBy') === null) {
                            localStorage.setItem('FilterShop_OrderBy', 'DESC')
                        }

                        ajaxForSearch(
                            "Module/Shop/ControllerShop/ControllerShop.php?Option=AllHomes",
                            'POST',
                            'JSON', { 'OrderBy': OrderBy, 'start': start, 'limit': limit }
                        );
                    }


                    $('html, body').animate({ scrollTop: $(".wrap") });
                    // Aplicar clase 'active' a la página seleccionada
                    $(this).addClass('active');
                });

                paginationContainer.append(pageElement);
            }

            // Agregar botón "Next"
            var nextButton = $('<li>').addClass('page-item').attr('id', 'nextButton');
            var nextLink = $('<a>').addClass('page-link').attr('href', '#').text('Next');
            nextButton.append(nextLink);
            paginationContainer.append(nextButton);

            // console.log(localStorage.getItem('currentPageId'));

            if (localStorage.getItem('currentPageId') == null) {
                localStorage.setItem('currentPageId', 'page_1');
            }

            $('#prevButton').on('click', function(event) {
                var currentPageId = parseInt(localStorage.getItem('currentPageId').split('_')[1]);
                if (currentPageId > 1) {
                    $('#page_' + (currentPageId - 1)).click();
                }
            });

            $('#nextButton').on('click', function(event) {
                var currentPageId = parseInt(localStorage.getItem('currentPageId').split('_')[1]);
                if (currentPageId < total_pages) {
                    $('#page_' + (currentPageId + 1)).click();
                }
            });

            // Resaltar la página actual
            var currentPageId = 'page_' + (localStorage.getItem('move') ? JSON.parse(localStorage.getItem('move'))[1] / 3 + 1 : 1);
            $('#' + currentPageId).addClass('active');
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function MasCasasRelacionadas(Category, Ciudad, ID_HomeDrop) {

    //console.log('MasCasasRelacionadas');
    //console.log(Category);
    var Ciudad = Ciudad
    var Category = Category;
    var items = 0;
    var ID_HomeDrop = ID_HomeDrop;

    ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=CountRelatedHomes', 'POST', 'JSON', { 'Category': Category, 'Ciudad': Ciudad, 'ID_HomeDrop': ID_HomeDrop })
        .then(function(data) {

            //console.log(data);

            var TotalCountItems = data;
            ViviendasRelacionadas(0, Category, Ciudad, TotalCountItems, ID_HomeDrop);
            $(document).on("click", '.load_more_button', function() {
                items = items + 3;
                $('.more_car__button').empty();
                ViviendasRelacionadas(items, Category, Ciudad,  TotalCountItems, ID_HomeDrop);
            });
        }).catch(function() {
            console.error('error TotalCountItems');
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ViviendasRelacionadas(loadeds = 0, Category, Ciudad, TotalCountItems, ID_HomeDrop) {
    let items = 3;
    let loaded = loadeds;
    let CiudadVivRel = Ciudad;
    let CategoryVivRel = Category;
    let TotalCountItemsVivRel = TotalCountItems;

    ajaxPromise(
        'Module/Shop/ControllerShop/ControllerShop.php?Option=ViviendasRelacionadas', 
        'POST', 
        'JSON', 
        { 'CategoryVivRel': CategoryVivRel, 'CiudadVivRel': CiudadVivRel, 'ID_HomeDrop': ID_HomeDrop, 'loaded': loaded, 'items': items }
    )
    .then(function(data) {
        if (loaded == 0) {
            $('<div></div>').attr({ 'id': 'title_content', class: 'title_content' }).appendTo('.results');

            for (row in data) {
                if (data[row].ID_HomeDrop != undefined) {
                    $('<div></div>').attr({ 'id': data[row].ID_HomeDrop, 'class': 'more_info_list' }).appendTo('.title_content')
                        .html(
                            "<li class='portfolio-item'>" +
                            "<div class='item-main'>" +
                            "<div class='portfolio-image'>" +
                            "<img src = " + data[row].Img + " alt='imagen' </img> " +
                            "</div>" +
                            "<h5>" + data[row].Ciudad + "  " + data[row].Category + "</h5>" +
                            "</div>" +
                            "</li>"
                        );
                }
            }


            $('<div></div>').attr({ 'id': 'more_car__button', 'class': 'more_car__button' }).appendTo('.results')
                .html(
                    '<button class="load_more_button" id="load_more_button">Cargar mas Viviendas Relacionadas</button>'
                );
        }
        if (loaded >= 3) {
            for (row in data) {
                if (data[row].ID_HomeDrop != undefined) {
                    $('<div></div>').attr({ 'id': data[row].ID_HomeDrop, 'class': 'more_info_list' }).appendTo('.title_content')
                        .html(
                            "<li class='portfolio-item'>" +
                            "<div class='item-main'>" +
                            "<div class='portfolio-image'>" +
                            "<img src = " + data[row].Img + " alt='imagen car' </img> " +
                            "</div>" +
                            "<h5>" + data[row].Ciudad + "  " + data[row].Category + "</h5>" +
                            "</div>" +
                            "</li>"
                        );
                }
            }

            var TotalItems = TotalCountItemsVivRel - 3;
            if (TotalItems <= loaded) {
                $('.more_car__button').empty();
                $('<div></div>').attr({ 'id': 'more_car__button', 'class': 'more_car__button' }).appendTo('.title_content')
                    .html(
                        "</br>"
                    );
            } else {
                $('.more_car__button').empty();
                $('<div></div>').attr({ 'id': 'more_car__button', 'class': 'more_car__button' }).appendTo('.results')
                    .html(
                        '<button class="load_more_button" id="load_more_button">Cargar mas Viviendas Relacionadas</button>'
                    );
            }
        }

        $('.more_info_list').click(function() {
            let ID_HomeDrop = $(this).attr('id');
            
            $('.list_product_details').empty();
            $('.date_img_dentro').empty();
            $('#mapDetails').empty();
            $('.results').empty();
            $('.title_content').empty();
            
            setTimeout(function() {
                //console.log(data);
                //console.log(ID_HomeDrop);
                loadDetails(ID_HomeDrop);
            }, 200);
        });


    }).catch(function() {
        console.error("error ViviendasRelacionadas");
    });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//




//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
/*·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~*/
/*·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~*/
/*·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~*/
/*·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~*/
/*·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~·~*/
