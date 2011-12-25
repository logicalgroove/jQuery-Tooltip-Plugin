/*
* jQuery Tooltip Plugin 0.1
* https://github.com/logicalgroove/jQuery-Tooltip-Plugin
* A simple jquery tooltip plugin
* Author: Alexander Lopez
*/


(function($){
$.fn.tooltip = function(){
  return this.each(function () {
    $(this).mouseover(function(e) {
      var tip = $(this).attr('title');
      $(this).attr('title','');
      $('body').append('<div id="tooltip"><div class="tooltip-caption">'+ tip +'</div><div class="tooltip-bg"></div></div>')
      var tipWidth = $('#tooltip').outerWidth()
      $('#tooltip').css('top', e.pageY - 30 );
      $('#tooltip').css('left', e.pageX - (tipWidth/2) );
      $('#tooltip').fadeIn('500');
    }).mousemove(function(e) {
      var tipWidth = $('#tooltip').outerWidth()
      $('#tooltip').css('top', e.pageY - 30 );
      $('#tooltip').css('left', e.pageX - (tipWidth/2) );
    }).mouseout(function() {
      $(this).attr('title',$('.tooltip-caption').html());
      $('body').children('div#tooltip').remove();
    });
  })
}
})(jQuery);
