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

$(function() {
  $('.faq__answer').hide();
  $('.faq__question').on('click', function() {
    $(this).find('.faq__icon').toggleClass('faq__icon--open');
    $(this).siblings('.faq__answer').slideToggle();
  });
});

// Equal height
$('.card__descr, .card__photo').equialHeight();

// Countdown
$('.countdown').countdown('2020/10/10', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class="clearfix countdown__item"><div class="countdown__time">%H</div><div class="countdown__text">часов</div></div>'
    + '<div class="clearfix countdown__item"><div class="countdown__time">%M</div><div class="countdown__text">минут</div></div>'
    + '<div class="clearfix countdown__item"><div class="countdown__time">%S</div><div class="countdown__text">секунд</div></div>'));
});