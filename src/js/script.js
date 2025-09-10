const pagenumber=$('#pagenumber').val();
$( document ).ready(function() {
    var swiper = new Swiper(".main-slider", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
  
    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: 80,
    });

   $('.header-top__list').click(function(){
    $('.citys_show_ul').toggle() ;
    $(this).toggleClass('active');
      })
$('#serachfield').focus(function(){
       $('.header-top__search').find('svg').css('stroke','#E3688E')
})

$('#serachfield').focusout(function(){
  $('.header-top__search').find('svg').css('stroke','#25C5C2')
})
/*$('.product-item').each(function(){
 let bool=$(this).find('div.product-item__hover')
  console.log(bool)
})*/

/*Стрелки главного слайдера*/

if ($(window).width() > 1263)
  {
    let wwidth=$(window).width();
    let percent=(wwidth*10/1263)*1.2+'%';
    $('.swiper-button-prev').css('left',percent);
    $('.swiper-button-next').css('right',percent);
  }
/*$('.reviews__item:last-child').hide()

$('.reviews__btn').click(function(){
  $('.reviews__item ').show('slow')
  return false;

})*/


/*Мобильные дрючки*/
    if ($(window).width() < 769) {
    
      $('.header-mobile__burger').click(function(){
        $('.header').toggleClass('active')
        $('.openmenu').toggleClass('active')
      })
      $('.open_burger').click(function(){
        $('.openmenu').toggleClass('active')
        $('.header').toggleClass('active')
      })

      $('.zone__item-title').click(function (){
        $(this).parent().find('.zone__item-description').slideToggle();
        $(this).parent().toggleClass('active');        

      });
      $('.header-mobile__search').click(function(){
        $(this).toggleClass('active');
        $('.header-top__search').toggleClass('active')
        })

        $('.menu>li>a').click(function(){
            let submenu=$(this).parent().find('nav');
            submenu.slideToggle();
        })
        $('.filter_btn>a').click(function(){
            $('.filter').toggleClass('active')
            return false
        });


    }
    else
    {
/*****************Удлиняет карточку товара *************/

        if(pagenumber!=3)
        {
          $('.product-item').mouseover(function(){
            if(!$(this).hasClass('indiv_bouq'))
            {
              $(this).find('div.product_inner').addClass('absolute_height')  
              $(this).addClass('long-container')
            }  
          });
          $('.product-item').mouseout(function(){
            
            $(this).find('div.product_inner').removeClass('absolute_height')   
            $(this).removeClass('long-container')
          }); 
        }
     

    }

    $('.sort>a').click(function(){
      $(this).parent().toggleClass('active');
    });
    $('.filter-arrow').click(function(){
      $(this).parents('.filter-section').toggleClass('active')
      return false;
    });
if($('#pagenumber').val()==2)
{
  // Инициализация превью слайдера
  if ($(window).width() > 769) {
    const sliderThumbs = new Swiper('.slider__thumbs .swiper', { // ищем слайдер превью по селектору
      // задаем параметры
      slidesPerView: 5, // показывать по 5 превью
      navigation: { // задаем кнопки навигации
        nextEl: '.slider__next', // кнопка Next
        prevEl: '.slider__prev' // кнопка Prev
      },
      direction: 'vertical', // вертикальная прокрутка
      spaceBetween: 10,
      height:410,
      width:53,
      //loop:true,
     // loopedSlides:5,
      grabCursor: true, // менять иконку курсора
    });
    // Инициализация слайдера изображений
    
    const sliderImages = new Swiper('.slider__images .swiper', { // ищем слайдер превью по селектору
      // задаем параметры
      direction: 'horizontal', // вертикальная прокрутка
      slidesPerView: 1, // показывать по 1 изображению
      spaceBetween: 32, // расстояние между слайдами
      mousewheel: true, // можно прокручивать изображения колёсиком мыши
      thumbs: { // указываем на превью слайдер
        swiper: sliderThumbs // указываем имя превью слайдера
      },   
      /*effect:'fade',
      fadeEffect: {
        crossFade: true
      },*/
      grabCursor: true, // менять иконку курсора
    
      breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
          direction: 'horizontal', // горизонтальная прокрутка
        },
        768: {
            
          // при 768px и выше
          //direction: 'vertical', // вертикальная прокрутка
        }
      }
    });
     }
     else
     {
      const sliderImages = new Swiper('.slider__images .swiper', { // ищем слайдер превью по селектору
        // задаем параметры
        direction: 'horizontal', // вертикальная прокрутка
        slidesPerView: 1, // показывать по 1 изображению
        spaceBetween: 10, // расстояние между слайдами
        slidesPerGroup:1,
        mousewheel: true, // можно прокручивать изображения колёсиком мыши
        slidesPerGroup:1,
        pagination: {
          el: ".swiper-pagination",      
        },  
        /*effect:'fade',
        fadeEffect: {
          crossFade: true
        },*/
        grabCursor: true, // менять иконку курсора
      
        breakpoints: { // условия для разных размеров окна браузера
          0: { // при 0px и выше
            direction: 'horizontal', // горизонтальная прокрутка
          },
          768: {
              
            // при 768px и выше
            //direction: 'vertical', // вертикальная прокрутка
          }
        }
      });
    
     }
}

//Слайдер на About
if($('#pagenumber').val()==5)
{
  // Инициализация превью слайдера
    const sliderThumbs = new Swiper('.slider__thumbs .swiper', { // ищем слайдер превью по селектору
      // задаем параметры
      slidesPerView: 4, // показывать по 4 превью
      direction: 'horizontal', // вертикальная прокрутка
      spaceBetween: 15,
      height:93,
      width:93,
      //loop:true,
     // loopedSlides:5,
      grabCursor: true, // менять иконку курсора
    });
    // Инициализация слайдера изображений
    
    const sliderImages = new Swiper('.slider__images .swiper', { // ищем слайдер превью по селектору
      // задаем параметры
      direction: 'horizontal', 
      slidesPerView: 1, // показывать по 1 изображению
      spaceBetween: 10, // расстояние между слайдами
      mousewheel: true, // можно прокручивать изображения колёсиком мыши
      thumbs: { // указываем на превью слайдер
        swiper: sliderThumbs // указываем имя превью слайдера
      },   
      /*effect:'fade',
      fadeEffect: {
        crossFade: true
      },*/
      grabCursor: true, // менять иконку курсора
    
      breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
          direction: 'horizontal', // горизонтальная прокрутка
        },
        768: {
            
          // при 768px и выше
          //direction: 'vertical', // вертикальная прокрутка
        }
      }
    });
   
}

$('.tabcontent ul>li').click(function(){  
  $(this).toggleClass('current');
  $(this).siblings('li').removeClass('current');
});


Fancybox.bind("[data-fancybox]", {
  // Your options go here
});


//Кнопки + 
$('.minus').click(function () {
  var $input = $(this).parent().find('input');
  var count = parseInt($input.val()) - 1;
  count = count < 1 ? 1 : count;
  $input.val(count);
  $input.change();
  return false;
});
$('.plus').click(function () {
  var $input = $(this).parent().find('input');
  $input.val(parseInt($input.val()) + 1);
  $input.change();
  return false;
});

/*StepCart*/
/* 1 шаг*/
$('.step2_btn').click(function(){
  $('.step1').addClass('hidden');
  $('.step2').removeClass('hidden');
  $(this).text('Перейти к оплате >');
  $('.stepmenu li:nth-child(1)').addClass('checked')
  $('.stepmenu li:nth-child(3)').addClass('active')
  $('.stepmenu li:nth-child(3)').removeClass('not-active')
  $('#back_to_cart').show()
  $(this).removeClass('step2_btn').addClass('step3_btn')
  $('.step3_btn').click(function(){
    $('.step2').addClass('hidden');
    $('.step3').removeClass('hidden');
    show_tihkoff_pay();
    $(this).text('Оплатить >');
    $('.stepmenu li:nth-child(3)').addClass('checked')
    $('.stepmenu li:nth-child(5)').addClass('active')
    $('.stepmenu li:nth-child(5)').removeClass('not-active')
    $('.step3_btn').off('click');
    $(this).removeClass('step3_btn').addClass('step4_btn')    
  }); 


});

/*назад в корзину*/
$('#back_to_cart').click(function(){
  $('.step1').removeClass('hidden');
  $('.step2').addClass('hidden');
  $('.step3').addClass('hidden');
  $('.stepmenu li:nth-child(1)').removeClass('checked')
  $('.stepmenu li:nth-child(3)').removeClass('active')
  $('.step3_btn').removeClass('step4_btn').addClass('step2_btn')
  $('.step4_btn').removeClass('step4_btn').addClass('step2_btn')
  $('.step2_btn').text(' Перейти к выбору доставки >');
  $('.stepmenu li:nth-child(3)').addClass('not-active')
  $('.stepmenu li:nth-child(5)').addClass('not-active')
  $('.stepmenu li:nth-child(5)').removeClass('active').removeClass('checked')
  $('.stepmenu li:nth-child(3)').removeClass('active').removeClass('checked')
  $('.step2_btn').show()
  $('.tinkoff').hide() 
  $('#back_to_cart').hide()

  return false;
})
/*$('.delivery_tabs a').click(function(){
 $(this).toggleClass('active');
 $(this).siblings('a').toggleClass('active');
 return false;

})*/
if(pagenumber==3)
{
  $('#delivery').css('display','block');
  /* Локализация datepicker */
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
    dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
    dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
    weekHeader: 'Не',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
  $.timepicker.regional['ru'] = {
    timeOnlyTitle: 'Выберите время',
    timeText: 'Время',
    hourText: 'Часы',
    minuteText: 'Минуты',
    secondText: 'Секунды',
    millisecText: 'Миллисекунды',
    timezoneText: 'Часовой пояс',
    currentText: 'Сейчас',
    closeText: 'Закрыть',
    timeFormat: 'HH:mm',
    amNames: ['AM', 'A'],
    pmNames: ['PM', 'P'],
    isRTL: false
  };
  $.timepicker.setDefaults($.timepicker.regional['ru']);
  
  
  $( "#datepicker" ).datetimepicker({
    showOn: "button",
    buttonImage:'../img/arrow_up.png'
  });
}
$('.vacancy_item h5 span').click(function(){
  console.log('click')
  $(this).parents('.vacancy_item').toggleClass('active');
})


});//End 


document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal').style.marginLeft = '0px';
  });
});

function openTab(evt, tabName,type, class_cont, class_lnk) {
  // Объявить все переменные
  var i, tabcontent, tablinks;
  console.log(!isset(class_cont))
  // Получить все элементы с помощью class="tabcontent" и спрятать их
  tabcontent=isset(class_cont)?class_cont:'tabcontent'
  tabcontent = document.getElementsByClassName(class_cont);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  class_lnk=isset(class_cont)?class_lnk:'tablinks'
  // Получить все элементы с помощью class="tablinks" и удалить class "active"
  tablinks = document.getElementsByClassName(class_lnk);

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  if(type)
  {
    document.getElementById(tabName).style.display = type;
    evt.currentTarget.className += " active";   
    $(evt.currentTarget).siblings('button').removeClass('active')
     console.log(evt.currentTarget.previousSibling)
    //evt.currentTarget.prevSibling.classList.remove('active');
  }
  else
  {
    document.getElementById(tabName).style.display = 'flex';
    evt.currentTarget.className += " active";
  }
  // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку

}

function isset(r) {
  return typeof r !== 'undefined';
}

function show_tihkoff_pay()
{
  $('.step2_btn').hide()
  $('.step3_btn').hide()
  $('.step4_btn').hide()
  $('.tinkoff').show() 
}
function hide_tihkoff_pay()
{
  $('.step4_btn').show()
  $('.tinkoff').hide() 
}


function step4_handler()
{
  $('.step4_btn').click(function(){
    $('.stepmenu li:nth-child(5)').addClass('checked')
    $('.stepmenu li:nth-child(7)').addClass('active')
    $('.stepmenu li:nth-child(7)').removeClass('not-active')
    $('.step3').addClass('hidden');
    $('.step4').removeClass('hidden');     
    $(this).hide();
  })




}





if(pagenumber==3)
{
  ymaps = window.ymaps;
  ymaps.ready(init);
  ymaps.ready(init2);
  function init() {
      var myMap = new ymaps.Map('map', {
        center: [83.776856,53.346785],
              zoom: 9,
              controls: ['geolocationControl', 'searchControl']
          }),
          deliveryPoint = new ymaps.GeoObject({
              geometry: {type: 'Point'},
              properties: {iconCaption: 'Адрес'}
          }, {
              preset: 'islands#blackDotIconWithCaption',
              draggable: true,
              iconCaptionMaxWidth: '215'
          }),
          searchControl = myMap.controls.get('searchControl');
      searchControl.options.set({noPlacemark: true, placeholderContent: 'Введите адрес доставки'});
      myMap.geoObjects.add(deliveryPoint);
      //var suggestView1 = new ymaps.SuggestView('address');
      searchControl.events.add('submit', function () {
        const addressObj=searchControl.getRequestString().split(',')   
        $('#number_house').val(addressObj[addressObj.length-1]) 
        $('#address').val(addressObj[addressObj.length-2]) 
        $('#city').val(addressObj[addressObj.length-3])     
    }, this);
  
      function onZonesLoad(json) {
          // Добавляем зоны на карту.
          var deliveryZones = ymaps.geoQuery(json).addToMap(myMap);
          // Задаём цвет и контент балунов полигонов.
          deliveryZones.each(function (obj) {
              obj.options.set({
                  fillColor: obj.properties.get('fill'),
                  fillOpacity: obj.properties.get('fill-opacity'),
                  strokeColor: obj.properties.get('stroke'),
                  strokeWidth: obj.properties.get('stroke-width'),
                  strokeOpacity: obj.properties.get('stroke-opacity')
              });
              obj.properties.set('balloonContent', obj.properties.get('description'));
          });
  
          // Проверим попадание результата поиска в одну из зон доставки.
          searchControl.events.add('resultshow', function (e) {
              highlightResult(searchControl.getResultsArray()[e.get('index')]);
          });
  
          // Проверим попадание метки геолокации в одну из зон доставки.
          myMap.controls.get('geolocationControl').events.add('locationchange', function (e) {
              highlightResult(e.get('geoObjects').get(0));
          });
  
          // При перемещении метки сбрасываем подпись, содержимое балуна и перекрашиваем метку.
          deliveryPoint.events.add('dragstart', function () {
              deliveryPoint.properties.set({iconCaption: '', balloonContent: ''});
              deliveryPoint.options.set('iconColor', 'black');
          });
  
          // По окончании перемещения метки вызываем функцию выделения зоны доставки.
          deliveryPoint.events.add('dragend', function () {
              highlightResult(deliveryPoint);
          });
  
          function highlightResult(obj) {
              // Сохраняем координаты переданного объекта.
              var coords = obj.geometry.getCoordinates(),
              // Находим полигон, в который входят переданные координаты.
                  polygon = deliveryZones.searchContaining(coords).get(0);
  
              if (polygon) {
                  // Уменьшаем прозрачность всех полигонов, кроме того, в который входят переданные координаты.
                  deliveryZones.setOptions('fillOpacity', 0.4);
                  polygon.options.set('fillOpacity', 0.8);
                  // Перемещаем метку с подписью в переданные координаты и перекрашиваем её в цвет полигона.
                  deliveryPoint.geometry.setCoordinates(coords);
                  deliveryPoint.options.set('iconColor', polygon.properties.get('fill'));
                  // Задаем подпись для метки.
                  if (typeof(obj.getThoroughfare) === 'function') {
                      setData(obj);
                  } else {
                      // Если вы не хотите, чтобы при каждом перемещении метки отправлялся запрос к геокодеру,
                      // закомментируйте код ниже.
                      ymaps.geocode(coords, {results: 1}).then(function (res) {
                          var obj = res.geoObjects.get(0);
                          setData(obj);
                      });
                  }
              } else {
                  // Если переданные координаты не попадают в полигон, то задаём стандартную прозрачность полигонов.
                  deliveryZones.setOptions('fillOpacity', 0.4);
                  // Перемещаем метку по переданным координатам.
                  deliveryPoint.geometry.setCoordinates(coords);
                  // Задаём контент балуна и метки.
                  deliveryPoint.properties.set({
                      iconCaption: 'Доставка транспортной компанией',
                      balloonContent: 'Cвяжитесь с оператором',
                      balloonContentHeader: ''
                  });
                  // Перекрашиваем метку в чёрный цвет.
                  deliveryPoint.options.set('iconColor', 'black');
              }
  
              function setData(obj){
                  var address = [obj.getThoroughfare(), obj.getPremiseNumber(), obj.getPremise()].join(' ');
                  if (address.trim() === '') {
                      address = obj.getAddressLine();
                  }
                  var price = polygon.properties.get('description');
                  price = price.match(/<strong>(.+)<\/strong>/)[1];
                  deliveryPoint.properties.set({
                      iconCaption: address,
                      balloonContent: address,
                      balloonContentHeader: price
                  });
              }
          }
      }
  
      $.ajax({
          url: 'js/data.geojson',
          dataType: 'json',
          success: onZonesLoad
      });
    }
  function init2(){
    var myMap = new ymaps.Map('map2', {
      center: [83.776856,53.346785],
            zoom: 14,  controls: ['geolocationControl', 'searchControl']
        })
        $('.panel_list .pay_tablinks').click(function(e){
          $('.panel_list .pay_tablinks').removeClass('active')
            $(this).toggleClass('active');
            let address= $(this).text();
            address='Барнаул, '+address
            console.log(address)  
            ymaps.geocode(address, {
              results: 1
          }).then(function (res) {
                  // Выбираем первый результат геокодирования.
                  var firstGeoObject = res.geoObjects.get(0),
                      // Координаты геообъекта.
                      coords = firstGeoObject.geometry.getCoordinates(),
                      // Область видимости геообъекта.
                      bounds = firstGeoObject.properties.get('boundedBy');
      
                  firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
                  // Получаем строку с адресом и выводим в иконке геообъекта.
                  firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());
      
                  // Добавляем первый найденный геообъект на карту.
                  myMap.geoObjects.add(firstGeoObject);
                  // Масштабируем карту на область видимости геообъекта.
                  myMap.setBounds(bounds, {
                      // Проверяем наличие тайлов на данном масштабе.
                      checkZoomRange: true
                  });
      
                  /**
                   * Все данные в виде javascript-объекта.
                   */
                  console.log('Все данные геообъекта: ', firstGeoObject.properties.getAll());
                  /**
                   * Метаданные запроса и ответа геокодера.
                   * @see https://api.yandex.ru/maps/doc/geocoder/desc/reference/GeocoderResponseMetaData.xml
                   */
                  console.log('Метаданные ответа геокодера: ', res.metaData);
                  /**
                   * Метаданные геокодера, возвращаемые для найденного объекта.
                   * @see https://api.yandex.ru/maps/doc/geocoder/desc/reference/GeocoderMetaData.xml
                   */
                  console.log('Метаданные геокодера: ', firstGeoObject.properties.get('metaDataProperty.GeocoderMetaData'));
                  /**
                   * Точность ответа (precision) возвращается только для домов.
                   * @see https://api.yandex.ru/maps/doc/geocoder/desc/reference/precision.xml
                   */
                  console.log('precision', firstGeoObject.properties.get('metaDataProperty.GeocoderMetaData.precision'));
                  /**
                   * Тип найденного объекта (kind).
                   * @see https://api.yandex.ru/maps/doc/geocoder/desc/reference/kind.xml
                   */
                  console.log('Тип геообъекта: %s', firstGeoObject.properties.get('metaDataProperty.GeocoderMetaData.kind'));
                  console.log('Название объекта: %s', firstGeoObject.properties.get('name'));
                  console.log('Описание объекта: %s', firstGeoObject.properties.get('description'));
                  console.log('Полное описание объекта: %s', firstGeoObject.properties.get('text'));
                  /**
                  * Прямые методы для работы с результатами геокодирования.
                  * @see https://tech.yandex.ru/maps/doc/jsapi/2.1/ref/reference/GeocodeResult-docpage/#getAddressLine
                  */
                  console.log('\nГосударство: %s', firstGeoObject.getCountry());
                  console.log('Населенный пункт: %s', firstGeoObject.getLocalities().join(', '));
                  console.log('Адрес объекта: %s', firstGeoObject.getAddressLine());
                  console.log('Наименование здания: %s', firstGeoObject.getPremise() || '-');
                  console.log('Номер здания: %s', firstGeoObject.getPremiseNumber() || '-');
      
                  /**
                   * Если нужно добавить по найденным геокодером координатам метку со своими стилями и контентом балуна, создаем новую метку по координатам найденной и добавляем ее на карту вместо найденной.
                   */
                  /**
                   var myPlacemark = new ymaps.Placemark(coords, {
                   iconContent: 'моя метка',
                   balloonContent: 'Содержимое балуна <strong>моей метки</strong>'
                   }, {
                   preset: 'islands#violetStretchyIcon'
                   });
      
                   myMap.geoObjects.add(myPlacemark);
                   */
              });
            
            
          e.preventDefault();
      })
      myPlacemark = new ymaps.Placemark([83.776856,53.3467853]);
      myMap.geoObjects.add(myPlacemark);
  }


}

