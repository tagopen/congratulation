// Menu anchor scroll
$(document).ready(function(){
    $(".navbar").on("click",".page-scroll", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top -$('.navbar').outerHeight()}, 1500);
    });
});
// Equal Height plugin
$.fn.equialHeight = function() {
  var $tallestcolumn = 0;
  var $currentHeight = 0;
  $.each($(this), function (index, value) {
    $currentHeight = $(this).height();
    if($currentHeight > $tallestcolumn)
    {
      $tallestcolumn = $currentHeight;
    }
  });
  $(this).height($tallestcolumn);
  return $(this);
} 

// Old browser notification
$(function() { 
  $.reject({
    reject: {
      msie: 9
    },
    imagePath: 'img/icons/jReject/',
    display: [ 'chrome','firefox','safari','opera' ],
    closeCookie: true,
    cookieSettings: {
      expires: 60*60*24*365
    },
    header: 'Ваш браузер устарел!',
    paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
    paragraph2: 'Пожалуйста, установите современный браузер:',
    closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
    closeLink: 'Закрыть это уведомление',
  });
});

// Fixed navbar on Scroll
if(!$('.navbar-toggle').is(':visible')) {
  $('.navbar').affix({
    offset: {
      top: 790
    }
  }); 
}

$(function() {
  $('.faq__answer').hide();
  $('.faq__question').on('click', function() {
    $(this).find('.faq__icon').toggleClass('faq__icon--open');
    $(this).siblings('.faq__answer').slideToggle();
  });
});
// Set equal height
$(window).on('resize', function(){
  // For all screen
  //setEqualHeight($(".work-item"));
  // Only 767px-
  if( $( window ).width() >= 992 ) {
    $('.card__box').equialHeight();
  }
}).trigger('resize');

// jQuery.countdown http://hilios.github.io/jQuery.countdown/examples/legacy-style.html
$('.countdown').countdown('2016/12/25', function(event) {

  var $this = $(this).html(event.strftime(''
    + '<div class="clearfix countdown__item"><div class="countdown__time">%d</div><div class="countdown__text">дней</div></div>'
    + '<div class="clearfix countdown__item"><div class="countdown__time">%H</div><div class="countdown__text">часов</div></div>'
    + '<div class="clearfix countdown__item"><div class="countdown__time">%M</div><div class="countdown__text">минут</div></div>'));
});
$('document').ready( function() {
    var totalItems = $('.item').length;
    currentIndex = $('.item.active').index() + 1;
   $('.review__slide-count').html(''+currentIndex+'/'+totalItems+'');
});

// Count slides in Bootstrap slider
$('#review').on('slid.bs.carousel', function () { 
  var carouselData = $(this).data('bs.carousel');
  var currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;

  var text = (currentIndex + 1) + " /" + total;

  $('.review__slide-count').text(text);
});
// bootstrap swipe slider
$(document).ready(function() {  
  $("#review").swiperight(function() {  
    $(this).carousel('prev');  
  });  
  $("#review").swipeleft(function() {  
    $(this).carousel('next');  
  });  
});  