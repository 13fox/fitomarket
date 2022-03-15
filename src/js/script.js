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

    $('.sort>a').click(function(){
      $(this).parent().toggleClass('active');
    });
    $('.filter-arrow').click(function(){
      $(this).parents('.filter-section').toggleClass('active')
      return false;
    });

// Инициализация превью слайдера

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
  loop:true,
  loopedSlides:5,
  grabCursor: true, // менять иконку курсора
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.slider__images .swiper', { // ищем слайдер превью по селектору
	// задаем параметры
	direction: 'horizontal', // вертикальная прокрутка
	slidesPerView: 1, // показывать по 1 изображению
	spaceBetween: 32, // расстояние между слайдами
	mousewheel: true, // можно прокручивать изображения колёсиком мыши
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
      thumbs: { // указываем на превью слайдер
        swiper: sliderThumbs // указываем имя превью слайдера
      },      
      // при 768px и выше
			//direction: 'vertical', // вертикальная прокрутка
		}
	}
});


$('.tabcontent ul>li').click(function(){
  $(this).toggleClass('current');
});
});//EndJuqery

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

function openTab(evt, tabName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" и спрятать их
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить "active" класс для кнопки, которая открыла вкладку
  document.getElementById(tabName).style.display = "flex";
  evt.currentTarget.className += " active";
}