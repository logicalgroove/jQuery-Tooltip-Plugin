/*
* jQuery Tooltip Plugin 0.3
* https://github.com/logicalgroove/jQuery-Tooltip-Plugin
* A simple jquery tooltip plugin
* Authors: Alexander Lopez, Eugene Dorian
* http://logicalgroove.com
*/


(function($){
$.fn.tooltip = function(){
  return this.each(function () {
    var tip = '';
    $(this).mouseover(function(e) {
      element = $(this)
      if (element.prop('title') != '') {
        tip = element.prop('title')
      }
      $('body').append('<div id="tooltip"><div class="tooltip-caption">'+ tip +'</div><div class="tooltip-bg"></div></div>')
      var tipWidth = $('#tooltip').outerWidth();
      var tipHeight = $('#tooltip').outerHeight();
      $('#tooltip .tooltip-bg').css('height', tipHeight + 'px');
      $('#tooltip .tooltip-bg').css('width', tipWidth + 'px');
      var targetPosition = $(e.target).offset();
      var shiftRight = ((targetPosition.left + tipWidth) - $(document).width()) / 2;
      if (shiftRight < 0) {
        shiftRight = 0;
      }
      $('#tooltip').css('top', targetPosition.top - (tipHeight + 4) + 'px');
      $('#tooltip').css('left', targetPosition.left - (tipWidth/2) + ($(e.target).outerWidth()/2) - shiftRight + 'px');
      element.prop('title','');
      $('#tooltip').fadeIn('500');
    }).mouseleave(function() {
      $(this).prop('title', tip);
      $('body').children('div#tooltip').remove();
    });
  })
}
})(jQuery);
