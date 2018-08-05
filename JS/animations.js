$( document ).ready(function() {
    $('.toggle').click(function(){
      $('#bottomNav').toggleClass("visible")
        $('.navigationToggle').toggleClass('color-swap');
  });
});


var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);

  setTimeout(function ()
{ showText(target, message, index, interval);
}, interval);
  }
}

$( document ).ready(function() {
  showText("#msgOne", "console.log('Hello, World!');", 0, 100);
});

$("#globe").fadeIn(10000);

(function($) {
  $.fn.bcSwipe = function(settings) {
    var config = { threshold: 50 };
    if (settings) {
      $.extend(config, settings);
    }

    this.each(function() {
      var stillMoving = false;
      var start;

      if ('ontouchstart' in document.documentElement) {
        this.addEventListener('touchstart', onTouchStart, false);
      }

      function onTouchStart(e) {
        if (e.touches.length == 1) {
          start = e.touches[0].pageX;
          stillMoving = true;
          this.addEventListener('touchmove', onTouchMove, false);
        }
      }

      function onTouchMove(e) {
        if (stillMoving) {
          var x = e.touches[0].pageX;
          var difference = start - x;
          if (Math.abs(difference) >= config.threshold) {
            cancelTouch();
            if (difference > 0) {
              $(this).carousel('next');
            }
            else {
              $(this).carousel('prev');
            }
          }
        }
      }

      function cancelTouch() {
        this.removeEventListener('touchmove', onTouchMove);
        start = null;
        stillMoving = false;
      }
    });

    return this;
  };
})(jQuery);
