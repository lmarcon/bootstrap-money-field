(function($){
  $.fn.money_field = function(options) {
    var defaults = {
      width: null
    };
    var options = $.extend(defaults, options);
    
    return this.each(function() {
      obj = $(this);
      if(options.width)
        obj.css('width', options.width + 'px');
      obj.wrap("<div class='input-append'>");
      obj.before("<span class='add-on'>€</span>");
    });
  };
})(jQuery);
