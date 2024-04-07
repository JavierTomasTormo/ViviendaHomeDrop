//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                    //Cargar el Carrusel de Imágenes//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
function CarouselImages() {
    //console.log('LLega al carr IMG');
    ajaxPromise('Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=Muestra', 'GET', 'JSON')

        .then(function (data) {

            for (let row = 0; row < data.length; row++) {
                $('<div></div>')
                    .attr('class', 'carousel__elements')
                    .attr('id', data[row].ID_Type)
                    .appendTo('.CarouselImages')
                    .html(
                        "<div class='overlay'>" +
                            "<img class='carousel__img' src='" + data[row].Img + "' alt=''>" +
                            "<p class='pdp'>" + data[row].Type + "</p>" +
                        "</div>"
                    );
            }

            new Glider(document.querySelector('.CarouselImages'), {
                slidesToShow: 1.05,
                slidesToScroll: 1, 
                draggable: false,
                dots: '.carousel__indicadores',
                arrows: {
                    prev: '.carousel__anterior',
                    next: '.carousel__siguiente'
                },
                rewind: true,

            });
        

              //console.log('Succesfuly'); 
        })
        .catch(function () {
            console.log('ErrorO');
        });
}

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                        // Cargar las Categorías //
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
function CategoryCharger() {
    //console.log('LLega al CategoryCharger');
    ajaxPromise('Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=Category', 'GET', 'JSON')
        .then(function (data) {
            //console.log(data);

            for (let row = 0; row < data.length; row++) {
               // console.log(data);


                $('<div></div>')
                  .attr('class', 'glideritem')
                  .attr('id', data[row].ID_Category)
                  .appendTo('#second-glider')
                  .html(
                    "<div class='overlayCategory'>" +
                        "<img class='carousel__img' src='" + data[row].Img + "' alt=''>" +
                        "<p class='pdpCategory'>" + data[row].Category + "</p>" +
                    "</div>"
                    );
              }

              new Glider(document.getElementById('second-glider'), {
                slidesToShow: 5.2,
                slidesToScroll: 1,
                scrollLock: true,
                draggable: false,
                rewind: true,
                arrows: {
                  prev: document.querySelector(".carousel__anteriorDOS"),
                  next: document.querySelector(".carousel__siguienteDOS")
                },
                responsive: [
                  {
                    // screens greater than > 400px
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 5.2,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  },
                  {
                    // screens greater than > 700px
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 5.2,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  },
                  {
                    // screens greater than > 1300px
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 5.2,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  }
                ]
              });

               

        }).catch(function () {
            //Controller exceptions
            //window.location.href = "index.php?module=ctrl_exceptions&op=503&type=503&lugar=Type_Categories HOME";
        });
}

//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                            //Cargar las Ciudades//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
function CityCharger() {
    //console.log('LLega al Cargar_Ciudades');
    ajaxPromise('Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=City', 'GET', 'JSON')
        .then(function (data) {
            //console.log(data);
            for (let row = 0; row < data.length; row++) {
                //  console.log(data);
                //  console.log(data[row].Ciudad);
                //  console.log(data[row].Img);
                //  console.log(data[row].ID_City);
                 ///
                 $('<div></div>')
                   .attr('class', 'glideritem2')
                   .attr('id', data[row].Ciudad)
                   .appendTo('#third-glider')
                   .html(
                     "<div class='overlayCity'>" +
                         "<img class='carousel__img' src='" + data[row].Img + "' alt='' style='min-height'>" +
                         "<p class='pdpCity'>" + data[row].Ciudad + "</p>" +
                     "</div>"
                     );
            }
            new Glider(document.getElementById('third-glider'), {
                slidesToShow: 6,
                slidesToScroll: 1,
                scrollLock: true,
                draggable: false,
                rewind: true,
                responsive: [
                  {
                    // screens greater than > 400px
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  },
                  {
                    // screens greater than > 700px
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  },
                  {
                    // screens greater than > 1300px
                    breakpoint: 1300,
                    settings: {
                      slidesToShow: 6,
                      slidesToScroll: 1,
                      duration: 1
                    }
                  }
                ]
              });
        }).catch(function () {
            //console.log('Error');
        });
}
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                            //Cargar las Operaciones//
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
function OperationCharger() {
  ajaxPromise('Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=Operation', 'GET', 'JSON')
  .then(function (data) {
    //console.log(data);
    for (let row = 0; row < data.length; row++) {
        // console.log(data);
         $('<div></div>')
           .attr('class', 'glideritem3')
           .attr('id', data[row].ID_Operation)
           .appendTo('#fourthglider')
           .html(
              "<div class='custom-overlay'>" +
                "<img class='custom-carousel-img' src='" + data[row].Img + "' alt=''>" +
                "<p class='custom-carousel-text'>" + data[row].Operation + "</p>" +
              "</div>"
        
             );
    }

  
    new Glider(document.getElementById('fourthglider'), {
          slidesToShow: 5,
          slidesToScroll: 1,
          scrollLock: true,
          draggable: false,
          rewind: true,
          responsive: [
              {
                  breakpoint: 400,
                  settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      duration: 1
                  }
              },
              {
                  breakpoint: 700,
                  settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      duration: 1
                  }
              },
              {
                  breakpoint: 1300,
                  settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                      duration: 1
                  }
              }
          ]
      });
  })
  .catch(error => console.error('Error:', error));
}




//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                        // Clicks Ready //
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
  
function clicks(){
  $(document).on("click",'div.carousel__elements', function (){
    var FiltersHome = [];
    FiltersHome.push({"ID_Type":[this.getAttribute('id')]});
    localStorage.removeItem('FiltersHome')
    localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
    setTimeout(
      function() {
        window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
      },
    100);
  });

  $(document).on("click",'div.glideritem', function (){
    var FiltersHome = [];
    FiltersHome.push({"ID_Category":[this.getAttribute('id')]});
    localStorage.removeItem('FiltersHome')
    localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
    setTimeout(
      function() {
        window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
      },
    100);
  });

  $(document).on("click",'div.glideritem2', function (){
    var FiltersHome = [];
    FiltersHome.push({"Ciudad":[this.getAttribute('id')]});
    localStorage.removeItem('FiltersHome')
    localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
    setTimeout(
      function() {
        window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
      },
    100);
  });


  $(document).on("click",'div.glideritem3', function (){
    var FiltersHome = [];
    FiltersHome.push({"ID_Operation":[this.getAttribute('id')]});
    localStorage.removeItem('FiltersHome')
    localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
    setTimeout(
      function() {
        window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
      },
    100);
  });


  $(document).on("click",'div.lastSelectedHouseInfo', function (){
    var FiltersHome = [];
    FiltersHome.push({"ID_HomeDrop":[this.getAttribute('id')]});
    localStorage.removeItem('FiltersHome')
    localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
    setTimeout(
      function() {
        window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
      },
    100);
    $(document).on("click",'div.MostVisited', function (){
      var FiltersHome = [];
      FiltersHome.push({"ID_HomeDrop":[this.getAttribute('id')]});
      localStorage.removeItem('FiltersHome')
      localStorage.setItem('FiltersHome', JSON.stringify(FiltersHome)); 
      setTimeout(
        function() {
          window.location.href = 'index.php?page=ControllerShop&Option=ListShop';
        },
      100);
    });
  });
} 



function showLastSelectedHouseInfo() {
  var lastSelectedHousesString = localStorage.getItem('lastSelectedHouses');
  //console.log(lastSelectedHousesString);

  if (lastSelectedHousesString) {
    var lastSelectedHouses = JSON.parse(lastSelectedHousesString);
    //console.log(lastSelectedHouses);
    
    var url = 'Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=LastHouse&lastSelectedHouses=' + encodeURIComponent(JSON.stringify(lastSelectedHouses));

    ajaxPromise(url, 'GET', 'JSON')
    .then(function(data) {
      //console.log(data);

      for (let i = 0; i < data.length; i++) {
        $('<div></div>')
          .addClass('lastSelectedHouseInfo')
          .attr('id', data[i].ID_HomeDrop)
          .appendTo('#lastSelectedHouseInfo')
          .html(
            `<div class="card">
            <img src="${data[i].Img}" alt="Imagen de la casa" class="new-carousel-img">
            <div class="card-body">
              <h5 class="card-title">${data[i].Calle}</h5>
              <p class="new-carousel-text">Categoría: ${data[i].Category}</p>
              <p class="new-carousel-text">Ciudad: ${data[i].Ciudad}</p>
              <p class="new-carousel-text">ID HomeDrop: ${data[i].ID_HomeDrop}</p>
              <p class="new-carousel-text">Operación: ${data[i].Operation}</p>
              <p class="new-carousel-text">Precio: ${data[i].Precio}</p>
              <p class="new-carousel-text">Superficie: ${data[i].Superficie}</p>
              <p class="new-carousel-text">Tipo: ${data[i].Type}</p>
            </div>
          </div>`
          );
      }
      new Glider(document.getElementById('lastSelectedHouseInfo'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: false,
        rewind: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
    });

    }).catch(function(error) {
      console.error("Error en la petición AJAX", error);
    });
  }
}



function MostVisited() {

  //console.log(lastSelectedHousesString);
    
    var url = 'Module/HomeDropModule/Controlador/Controller_HomeDrop.php?Option=MostVisited';

    ajaxPromise(url, 'GET', 'JSON')
    .then(function(dataVisited) {
      //console.log(dataVisited);

      for (let j = 0; j < dataVisited.length; j++) {
        $('<div></div>')
          .addClass('MostVisited')
          .attr('id', dataVisited[j].ID_HomeDrop)
          .appendTo('#MostVisited')
          .html(
            `<div class="card">
            <img src="${dataVisited[j].Img}" alt="Imagen de la casa" class="new-carousel-img">
            <div class="card-body">
              <h5 class="card-title">${dataVisited[j].Calle}</h5>
              <p class="new-carousel-text">Categoría: ${dataVisited[j].Category}</p>
              <p class="new-carousel-text">Ciudad: ${dataVisited[j].Ciudad}</p>
              <p class="new-carousel-text">ID HomeDrop: ${dataVisited[j].ID_HomeDrop}</p>
              <p class="new-carousel-text">Operación: ${dataVisited[j].Operation}</p>
              <p class="new-carousel-text">Precio: ${dataVisited[j].Precio}</p>
              <p class="new-carousel-text">Superficie: ${dataVisited[j].Superficie}</p>
              <p class="new-carousel-text">Tipo: ${dataVisited[j].Type}</p>
              <p class="new-carousel-text">Visitas: ${dataVisited[j].vivistas}</p>
            </div>
          </div>`
          );
      }
      new Glider(document.getElementById('MostVisited'), {
        slidesToShow: 5,
        slidesToScroll: 1,
        scrollLock: true,
        draggable: false,
        rewind: true,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    duration: 1
                }
            }
        ]
    });

    }).catch(function(error) {
      console.error("Error en la petición AJAX", error);
    });
}










//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
                        // Document Ready //
//#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#·#//
$(document).ready(function () {
    MostVisited()
    showLastSelectedHouseInfo();
    CarouselImages();
    CategoryCharger();
    CityCharger();
    OperationCharger();
    clicks();
});


