 
$(document).ready(function() {

    updateResultsCount();
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
        //setTimeout(function() {
           
            MostrarFiltrosShop();
        //}, 100);

        ButtonFilterShop();
        
    LoadHomeDropShop();
    ShopAllHome();
    clicks();
    
});
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
$(document).on('click', '.filter_remove', function () {
    if (//CONDICIONALES PARA SABER SI HAY FILTROS ACTIVOS
               localStorage.getItem('FiltersShop') || localStorage.getItem('FiltersShop_Category') 
            || localStorage.getItem('FiltersShop_City') || localStorage.getItem('FiltersShop_Type') 
            || localStorage.getItem('FiltersShop_Operation') || localStorage.getItem('FiltrosApplied')
            || localStorage.getItem('FiltersShopCount') || localStorage.getItem('FiltersShop_Price')
        ) {//ACCIONES

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
        localStorage.removeItem('lastSelectedHouses');

        
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
    //Filtro Shop FiltersShop_City
    $(document).on('change', '.FiltersShop_City', function () {
        //console.log(this.value, 'On.ChangeBefore');
        localStorage.setItem('FiltersShop_City', this.value);
        //console.log(localStorage.getItem('FiltersShop_City'), 'On.ChangeAfter');
        //console.log(localStorage.getItem('FiltersShop_City'), 'On.Change');

        //$('.FiltersShop_City').val(this.value);

        //console.log(localStorage.getItem('FiltersShop_City'), 'On.Change');
        //Aqui el valor cambia bien

        updateResultsCount();
    });
        // // En la función ButtonFilterShop()
        // if (localStorage.getItem('FiltersShop_City')) {
        //     $('.FiltersShop_City').val(localStorage.getItem('FiltersShop_City'));
        // }

        // // En el evento de cambio para FiltersShop_City
        // $(document).off('change', '.FiltersShop_City').on('change', '.FiltersShop_City', function () {
        //     var CiudadSeleccionada = this.value;
        //     localStorage.setItem('FiltersShop_City', CiudadSeleccionada);
        //     $('.FiltersShop_City').val(CiudadSeleccionada);
        //     updateResultsCount(); // Actualizar los resultados al cambiar la ciudad
        // });
    if (localStorage.getItem('FiltersShop_City')) {
        $('.FiltersShop_City').val(localStorage.getItem('FiltersShop_City'));
        //console.log(localStorage.getItem('FiltersShop_City'), 'Add.Value');
    }

    //-------------------------------------------------
    //Filtro Shop FiltersShop_Type
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
    //Filtro Shop FiltersShop_Price
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
    //Filtro Shop FiltersShop_Operation
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

    //-------------------------------------------------

    
    //-------------------------------------------------
    //-------------------------------------------------
   
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




        if (localStorage.getItem('FiltersShop_Category')) {
            FiltersShop.push(['chd.ID_Category', localStorage.getItem('FiltersShop_Category')])
           
           localStorage.setItem('CategorySeleccted', localStorage.getItem('FiltersShop_Category'));

           localStorage.removeItem('FiltersShop_Category');
        }
        
        
        if (localStorage.getItem('FiltersShop_City')) {
            //console.log('INCITY');
            FiltersShop.push(['ch.ID_City', localStorage.getItem('FiltersShop_City')]);

            localStorage.setItem('CitySeleccted', localStorage.getItem('FiltersShop_City'));

            localStorage.removeItem('FiltersShop_City');
        }

        if (localStorage.getItem('FiltersShop_Type')) {
            FiltersShop.push(['th.ID_Type', localStorage.getItem('FiltersShop_Type')])
           // localStorage.removeItem('FiltersShop_Type');
        }

        //---------------------------------------------------------------
        //---------------------------------------------------------------
        //---------------------------------------------------------------
        if (localStorage.getItem('FiltersShop_Price')) {
            //console.log('DENTRO GET ITEM');
            var priceRange = localStorage.getItem('FiltersShop_Price') || "0€ - 0€";

            var values = priceRange.split("€ - ");
        
            var minValue = values.length === 2 ? parseFloat(values[0]) : 0;
            var maxValue = values.length === 2 ? parseFloat(values[1]) : 200000;
            
            // FiltersShop.push(['vh.Precio', localStorage.getItem('FiltersShop_Price')])
            FiltersShop.push(['vh.Precio', minValue + ' AND ' + maxValue ]);
           // AND vh.Precio BETWEEN {$Filters['Pricemin']} AND {$Filters['Pricemax']}"

           localStorage.setItem('PriceSeleccted', localStorage.getItem('FiltersShop_Price'));

           //localStorage.removeItem('FiltersShop_Price');
        }
        //---------------------------------------------------------------
        //---------------------------------------------------------------
        //---------------------------------------------------------------

        if (localStorage.getItem('FiltersShop_Operation')) {
            FiltersShop.push(['oh.ID_Operation', localStorage.getItem('FiltersShop_Operation')])
           //localStorage.removeItem('FiltersShop_Operation'); 
        }

        if (localStorage.getItem('FilterShop_OrderBy')) {
            FiltersShop.push(['OrderBy', localStorage.getItem('FilterShop_OrderBy')])
           
           localStorage.setItem('OrderBySeleccted', localStorage.getItem('FilterShop_OrderBy'));

        //    localStorage.removeItem('FiltersShop_Category');
        }
        //
        //console.log(FiltersShop);
        //
        //console.log(FiltrosAplicados);
        //console.log(TodoFiltroShop);  
        //console.log(TodoFiltroShop.length);     
        //return;
        //localStorage.setItem('FiltersShop', FiltersShop);
        localStorage.setItem('FiltersShop', JSON.stringify(FiltersShop) || undefined);

        //ordenarResultados(localStorage.getItem('FilterShop_OrderBy'));
        
        //console.log(localStorage.getItem('FiltersShop'));
        //return false;
        //RemoveButton();
        //localStorage.removeItem('CitySeleccted');
    location.reload();
        //localStorage.removeItem('CitySeleccted');

        
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
     var filtroShopPrice = (localStorage.getItem('FiltersShop_Price') || 0);
//-----------------------------------------------------------------//.
    var flitroSearch = (localStorage.getItem('Filters_Search') || undefined);


//-----------------------------------------------------------------//
    //console.log(filtros);
    //  console.log(filtroShop);
    // console.log(filtroShopPrice);
    
    if (filtros != undefined ) {
        //console.log('Estoy dentro de los filtros de home ');
        //console.log(filtros); 
            setTimeout(function() {
                LoadJump();
            }, 200); //Si añadimos un retraso cargamos los filtros bien; 

    } if (filtroShop != 0 || filtroShopPrice != 0) {
        var filtroSho2 = JSON.parse(localStorage.getItem('FiltersShop') || 0 );
        console.log(filtroSho2);
        // var priceRange = localStorage.getItem('FiltersShop_Price') || "0€ - 0€";
        // var values = priceRange.split("€ - ");
        // var minValue = values.length === 2 ? parseFloat(values[0]) : 0;
        // var maxValue = values.length === 2 ? parseFloat(values[1]) : 0;
        //console.log('Estoy dentro de los FILTROS SHOP'); 
        //console.log(filtroSho2, 'aun no en controller'); 

        setTimeout(function() {
            ajaxForSearch('Module/Shop/ControllerShop/ControllerShop.php?Option=FiltersShop', 'POST', 'JSON', {'FiltersShop': filtroSho2});
        }, 200); //Si añadimos un retraso cargamos los filtros bien; 
        HighlightFilters(filtroSho2);

    } if (flitroSearch != undefined) {
        //console.log('Hola desde FiltrosSearch en el ShopAllHome de Search');
        //var filtroSho2 = JSON.parse(localStorage.getItem('FiltersShop') || 0 );
        //console.log(filtroSho2);
        setTimeout(function() {
            LoadSearch();
        }, 200);

    } else {
        
        //ajaxForSearch("index.php?page=ControllerShop&Option=ListShop");

    }
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadSearch() {
    //console.log('LoadSearch Charged');
    var FiltersSearch = JSON.parse(localStorage.getItem('Filters_Search') || '[]');

    //console.log(FiltersSearch);

            //REMOVE DATA BEFORE USING ON LIST
            localStorage.removeItem('Filters_Search');

    ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=Search', 'POST', 'JSON', { 'FiltersSearch': FiltersSearch })
        .then(function(Serach) {


            console.log(FiltersSearch);

            console.log(Serach);

            
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
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function HighlightFilters() {

    

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
    if (City) {
        var selectElementCity = document.getElementById('select_City');
        if (selectElementCity) {
            selectElementCity.value = City;
            FiltrosApplied2++;
            //localStorage.removeItem('CitySeleccted');
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

    if (Operation) {
        var selectElementOperation = document.getElementById('select_Operation');
        if (selectElementOperation) {
            selectElementOperation.value = Operation;
            FiltrosApplied2++;
            $(selectElementOperation).addClass('highlight');
        }
    }

    //console.log('Número de filtros aplicados:', FiltrosApplied2);

    // Filtro MultyQuery
        // if (Colors && Colors.length > 0) {
        //     Colors.forEach(color => {
        //         var checkbox = document.getElementById(color);
        //         if (checkbox) {
        //             checkbox.checked = true;
        //         }
        //     });
        // }

    if (FiltrosApplied2 > localStorage.getItem('FiltrosApplied')) {
        localStorage.setItem('FiltrosApplied', FiltrosApplied2);
        location.reload();
    }
    localStorage.setItem('FiltrosApplied', FiltrosApplied2);






}
function getValueByKey(array, key) {
    var item = array.find(item => item[0] === key);
    return item ? item[1] : undefined;
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadJump() {
        //console.log('##··##·Load Jump·##··##');
        //console.log('Yo me llamo Ralph');
        var FiltersHome = JSON.parse(localStorage.getItem('FiltersHome') || '[]');
        //console.log(FiltersHome);

                //REMOVE DATA BEFORE USING ON LIST
                localStorage.removeItem('FiltersHome');

        ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=Redirect', 'POST', 'JSON', { 'FiltersHome': FiltersHome })
            .then(function(shop) {
                
                //console.log(shop);
                $("#ListViviendasHomeDrop").empty();
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
                        //console.log((shop[row].Ciudad ? shop[row].Ciudad : ''));
                }



            }).catch(function() {
                //window.location.href = "index.php?modules=exception&op=503&error=fail_salto&type=503";
            });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function LoadHomeDropShop() {
    var OrderBy =localStorage.getItem('FilterShop_OrderBy');
    //console.log(OrderBy);
    ajaxForSearch('Module/Shop/ControllerShop/ControllerShop.php?Option=AllHomes', 'POST', 'JSON', {'OrderBy': OrderBy});
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·//
function ajaxForSearch(url, type, dataType, sData = undefined) {
    //console.log(url)


    //console.log(url, type, dataType, sData);


    ajaxPromise(url, type, dataType, sData)
        .then(function(data) {
            //console.log(data);
            $('#ListViviendasHomeDrop').empty();

            if (data == "error") {
                $('<div></div>').appendTo('#ListViviendasHomeDrop')
                    .html(
                        '<h3>¡No se encuentran resultados con los filtros aplicados!</h3>'
                    );
            } else {
                for (row in data) {
                    $('<div></div>').attr({ 'id': data[row].ID_HomeDrop, 'class': 'list_content_shop' }).appendTo('#ListViviendasHomeDrop')
                        .html(
                            '<div class="container">' +
                                '<div class="wrapper">' +
                                    '<div class="product-img">' +
                                        '<img src="' + data[row].Img + '" style="height: 420px; width: 327px; object-fit: cover;">' +
                                    '</div>' +
                                    '<div class="product-info">' +
                                        '<div class="product-text">' +
                                            '<h1><b>' + data[row].Type + ' <h2><b>' + data[row].Operation + '</b></h2><a class="list__heart" id="' + data[row].Ciudad + '"><i id="' + data[row].Superficie + '" class=""></i><i id="' + data[row].Category + '" class=""></i></a></b></h1>' +
                                            '<h3> Descripción y Detalles: </h3>' +
                                            '<p> Próximamente... </p>' +
                                            '<p>' + data[row].Calle + ',  ' + data[row].Ciudad + '</p>' +
                                        '</div>' +
                                        '<br/><div class="product-price-btn">' +
                                            '<p><span>' + data[row].Precio + '€</span></p><br/>' +
                                            '<button id="' + data[row].ID_HomeDrop + '" type="button" class="button buy">Details</button>' +
                                        '</div>' +
                                    '</div>' +
                                '</div>' +
                            '</div>'
                        );

                }//endfor
            }//endelse
            
        }).catch(function() {
            //window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Function ajxForSearch SHOP";
        });
}
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
    //REZAMOS A JESUCRISTO NUESTRO SEÑOR
    //console.log(ID_HomeDrop);
    //console.log("La ID llega Intacta");
    //return false;
    ajaxPromise('Module/Shop/ControllerShop/ControllerShop.php?Option=DetailsHome&id=' + ID_HomeDrop, 'POST', 'JSON', {})
    .then(function(data) {
                ///////////////////////////////
                //console.log("Hola, ya llego a pasar las Promises");
                //console.log(data);

        // Limpiar contenido existente en los elementos
        $('#ListViviendasHomeDrop').empty();
        $('.Data_Img').empty();
        $('.Data_Home').empty();
        $('.Data_Img').empty();

        // Agregar las imágenes al carrusel
        for (let row in data[1][0]) {
            let imageDiv = $('<div>').addClass('date_img_dentro')
                                    .attr('id', data[1][0][row].ID_Imagen)
                                    .append($('<div>').addClass('content-img-details')
                                                    .html(`<img src='${data[1][0][row].Img}'>`));
            $('.Data_Img').append(imageDiv);
        }

        // Crear el detalle del producto
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

        $('.Data_Img').slick({
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


