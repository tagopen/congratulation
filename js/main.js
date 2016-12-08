/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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