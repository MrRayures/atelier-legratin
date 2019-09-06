"use strict";

/*
* Author hightlight
* 
*/
// Open
var author_open = document.querySelectorAll('.js-author-open');

for (var i = 0; i < author_open.length; i++) {
  author_open[i].addEventListener("click", function () {
    if (window.innerWidth > small) {
      this.parentNode.parentNode.classList.add('block-author--hightlight');
    }
  });
} // Close


var author_open = document.querySelectorAll('.js-author-close');

for (var i = 0; i < author_open.length; i++) {
  author_open[i].addEventListener("click", function () {
    this.parentNode.classList.remove('block-author--hightlight');
  });
} // Open with URL hash


var author_hash = window.location.hash.substr(1);

if (author_hash.length > 1) {
  if (window.innerWidth > small) {
    document.getElementById(author_hash).classList.add('block-author--hightlight');
  }
} // Shuffle list items


var ul = document.querySelector('.m-list--author');

for (var i = ul.children.length; i >= 0; i--) {
  ul.appendChild(ul.children[Math.random() * i | 0]);
}
"use strict";

/*
* Javascript base variables & functions
* Auteur : MrRayures - www.mr-rayures.com		
* Copyright (C) 2018
*/

/*  
* Breackpoint 
* Based on CSS breackpoint (scss/helpers/variables)
* Use : if (window.innerWidth <= xsmall ) {}
*/
var xsmall = "450";
var small = "768";
var medium = "960";
var large = "1200";
var xlarge = "1600";
/*
* Resize event
* Function :
  window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
  });
*/

(function () {
  var throttle = function throttle(type, name, obj) {
    obj = obj || window;
    var running = false;

    var func = function func() {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };
  /* init - you can init any event */


  throttle("resize", "optimizedResize");
})();
/*
* jQuery version if needed
* debouncing function from John Hann
* http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
* USE : $(window).smartresize(function() {});
*/

/*
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
})(jQuery,'smartresize');
*/
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvci5qcyIsImJhc2UuanMiXSwibmFtZXMiOlsiYXV0aG9yX29wZW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJzbWFsbCIsInBhcmVudE5vZGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJhdXRob3JfaGFzaCIsImxvY2F0aW9uIiwiaGFzaCIsInN1YnN0ciIsImdldEVsZW1lbnRCeUlkIiwidWwiLCJxdWVyeVNlbGVjdG9yIiwiY2hpbGRyZW4iLCJhcHBlbmRDaGlsZCIsIk1hdGgiLCJyYW5kb20iLCJ4c21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInhsYXJnZSIsInRocm90dGxlIiwidHlwZSIsIm5hbWUiLCJvYmoiLCJydW5uaW5nIiwiZnVuYyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQU1BO0FBQ0EsSUFBSUEsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGlCQUExQixDQUFsQjs7QUFDQSxLQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0gsV0FBVyxDQUFDSSxNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN6Q0gsRUFBQUEsV0FBVyxDQUFDRyxDQUFELENBQVgsQ0FBZUUsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBVztBQUNuRCxRQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0JDLEtBQXhCLEVBQWdDO0FBQzlCLFdBQUtDLFVBQUwsQ0FBZ0JBLFVBQWhCLENBQTJCQyxTQUEzQixDQUFxQ0MsR0FBckMsQ0FBeUMsMEJBQXpDO0FBQ0E7QUFDRixHQUpEO0FBS0QsQyxDQUdEOzs7QUFDQSxJQUFJWCxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLENBQWxCOztBQUNBLEtBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHSCxXQUFXLENBQUNJLE1BQS9CLEVBQXVDRCxDQUFDLEVBQXhDLEVBQTJDO0FBQ3pDSCxFQUFBQSxXQUFXLENBQUNHLENBQUQsQ0FBWCxDQUFlRSxnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFXO0FBQ2xELFNBQUtJLFVBQUwsQ0FBZ0JDLFNBQWhCLENBQTBCRSxNQUExQixDQUFpQywwQkFBakM7QUFDRCxHQUZEO0FBR0QsQyxDQUdEOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUdQLE1BQU0sQ0FBQ1EsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE1BQXJCLENBQTRCLENBQTVCLENBQWxCOztBQUNBLElBQUdILFdBQVcsQ0FBQ1QsTUFBWixHQUFxQixDQUF4QixFQUEyQjtBQUMxQixNQUFJRSxNQUFNLENBQUNDLFVBQVAsR0FBb0JDLEtBQXhCLEVBQWdDO0FBQzlCUCxJQUFBQSxRQUFRLENBQUNnQixjQUFULENBQXdCSixXQUF4QixFQUFxQ0gsU0FBckMsQ0FBK0NDLEdBQS9DLENBQW1ELDBCQUFuRDtBQUNEO0FBQ0QsQyxDQUlEOzs7QUFDQSxJQUFJTyxFQUFFLEdBQUdqQixRQUFRLENBQUNrQixhQUFULENBQXVCLGlCQUF2QixDQUFUOztBQUNBLEtBQUssSUFBSWhCLENBQUMsR0FBR2UsRUFBRSxDQUFDRSxRQUFILENBQVloQixNQUF6QixFQUFpQ0QsQ0FBQyxJQUFJLENBQXRDLEVBQXlDQSxDQUFDLEVBQTFDLEVBQThDO0FBQzFDZSxFQUFBQSxFQUFFLENBQUNHLFdBQUgsQ0FBZUgsRUFBRSxDQUFDRSxRQUFILENBQVlFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQnBCLENBQWhCLEdBQW9CLENBQWhDLENBQWY7QUFDSDs7O0FDeENEOzs7Ozs7QUFPQTs7Ozs7QUFLQSxJQUFJcUIsTUFBTSxHQUFJLEtBQWQ7QUFDQSxJQUFJaEIsS0FBSyxHQUFLLEtBQWQ7QUFDQSxJQUFJaUIsTUFBTSxHQUFJLEtBQWQ7QUFDQSxJQUFJQyxLQUFLLEdBQUssTUFBZDtBQUNBLElBQUlDLE1BQU0sR0FBSSxNQUFkO0FBR0E7Ozs7Ozs7O0FBT0EsQ0FBQyxZQUFXO0FBQ1YsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsSUFBVCxFQUFlQyxJQUFmLEVBQXFCQyxHQUFyQixFQUEwQjtBQUN2Q0EsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLElBQUl6QixNQUFiO0FBQ0EsUUFBSTBCLE9BQU8sR0FBRyxLQUFkOztBQUNBLFFBQUlDLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQVc7QUFDcEIsVUFBSUQsT0FBSixFQUFhO0FBQUU7QUFBUzs7QUFDeEJBLE1BQUFBLE9BQU8sR0FBRyxJQUFWO0FBQ0NFLE1BQUFBLHFCQUFxQixDQUFDLFlBQVc7QUFDaENILFFBQUFBLEdBQUcsQ0FBQ0ksYUFBSixDQUFrQixJQUFJQyxXQUFKLENBQWdCTixJQUFoQixDQUFsQjtBQUNBRSxRQUFBQSxPQUFPLEdBQUcsS0FBVjtBQUNELE9BSHFCLENBQXJCO0FBSUYsS0FQRDs7QUFRQUQsSUFBQUEsR0FBRyxDQUFDMUIsZ0JBQUosQ0FBcUJ3QixJQUFyQixFQUEyQkksSUFBM0I7QUFDRCxHQVpEO0FBY0E7OztBQUNBTCxFQUFBQSxRQUFRLENBQUMsUUFBRCxFQUFXLGlCQUFYLENBQVI7QUFDRCxDQWpCRDtBQXFCQTs7Ozs7OztBQU1BIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEF1dGhvciBoaWdodGxpZ2h0XG4qIFxuKi9cblxuXG4vLyBPcGVuXG52YXIgYXV0aG9yX29wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtYXV0aG9yLW9wZW4nKTtcbmZvcih2YXIgaSA9IDA7IGkgPCBhdXRob3Jfb3Blbi5sZW5ndGg7IGkrKyl7XG4gIGF1dGhvcl9vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgXHRpZiAod2luZG93LmlubmVyV2lkdGggPiBzbWFsbCApIHtcbiAgICBcdHRoaXMucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrLWF1dGhvci0taGlnaHRsaWdodCcpO1xuICAgIH1cbiAgfSk7XG59XG5cblxuLy8gQ2xvc2VcbnZhciBhdXRob3Jfb3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1hdXRob3ItY2xvc2UnKTtcbmZvcih2YXIgaSA9IDA7IGkgPCBhdXRob3Jfb3Blbi5sZW5ndGg7IGkrKyl7XG4gIGF1dGhvcl9vcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnYmxvY2stYXV0aG9yLS1oaWdodGxpZ2h0Jyk7XG4gIH0pO1xufVxuXG5cbi8vIE9wZW4gd2l0aCBVUkwgaGFzaFxudmFyIGF1dGhvcl9oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpO1xuaWYoYXV0aG9yX2hhc2gubGVuZ3RoID4gMSkge1xuXHRpZiAod2luZG93LmlubmVyV2lkdGggPiBzbWFsbCApIHtcblx0ICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChhdXRob3JfaGFzaCkuY2xhc3NMaXN0LmFkZCgnYmxvY2stYXV0aG9yLS1oaWdodGxpZ2h0Jyk7XG5cdH1cbn1cblxuXG5cbi8vIFNodWZmbGUgbGlzdCBpdGVtc1xudmFyIHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm0tbGlzdC0tYXV0aG9yJyk7XG5mb3IgKHZhciBpID0gdWwuY2hpbGRyZW4ubGVuZ3RoOyBpID49IDA7IGktLSkge1xuICAgIHVsLmFwcGVuZENoaWxkKHVsLmNoaWxkcmVuW01hdGgucmFuZG9tKCkgKiBpIHwgMF0pO1xufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIiwiLypcbiogSmF2YXNjcmlwdCBiYXNlIHZhcmlhYmxlcyAmIGZ1bmN0aW9uc1xuKiBBdXRldXIgOiBNclJheXVyZXMgLSB3d3cubXItcmF5dXJlcy5jb21cdFx0XG4qIENvcHlyaWdodCAoQykgMjAxOFxuKi9cblxuXG4vKiAgXG4qIEJyZWFja3BvaW50IFxuKiBCYXNlZCBvbiBDU1MgYnJlYWNrcG9pbnQgKHNjc3MvaGVscGVycy92YXJpYWJsZXMpXG4qIFVzZSA6IGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSB4c21hbGwgKSB7fVxuKi9cbnZhciB4c21hbGwgID0gXCI0NTBcIjtcbnZhciBzbWFsbCAgID0gXCI3NjhcIjtcbnZhciBtZWRpdW0gID0gXCI5NjBcIjtcbnZhciBsYXJnZSAgID0gXCIxMjAwXCI7XG52YXIgeGxhcmdlICA9IFwiMTYwMFwiO1xuXG5cbi8qXG4qIFJlc2l6ZSBldmVudFxuKiBGdW5jdGlvbiA6XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3B0aW1pemVkUmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiUmVzb3VyY2UgY29uc2Npb3VzIHJlc2l6ZSBjYWxsYmFjayFcIik7XG4gIH0pO1xuKi9cbihmdW5jdGlvbigpIHtcbiAgdmFyIHRocm90dGxlID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgb2JqKSB7XG4gICAgb2JqID0gb2JqIHx8IHdpbmRvdztcbiAgICB2YXIgcnVubmluZyA9IGZhbHNlO1xuICAgIHZhciBmdW5jID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAocnVubmluZykgeyByZXR1cm47IH1cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcbiAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcbiAgfTtcblxuICAvKiBpbml0IC0geW91IGNhbiBpbml0IGFueSBldmVudCAqL1xuICB0aHJvdHRsZShcInJlc2l6ZVwiLCBcIm9wdGltaXplZFJlc2l6ZVwiKTtcbn0pKCk7XG5cblxuXG4vKlxuKiBqUXVlcnkgdmVyc2lvbiBpZiBuZWVkZWRcbiogZGVib3VuY2luZyBmdW5jdGlvbiBmcm9tIEpvaG4gSGFublxuKiBodHRwOi8vdW5zY3JpcHRhYmxlLmNvbS9pbmRleC5waHAvMjAwOS8wMy8yMC9kZWJvdW5jaW5nLWphdmFzY3JpcHQtbWV0aG9kcy9cbiogVVNFIDogJCh3aW5kb3cpLnNtYXJ0cmVzaXplKGZ1bmN0aW9uKCkge30pO1xuKi9cbi8qXG4oZnVuY3Rpb24oJCxzcil7XG4gIHZhciBkZWJvdW5jZSA9IGZ1bmN0aW9uIChmdW5jLCB0aHJlc2hvbGQsIGV4ZWNBc2FwKSB7XG4gICAgICB2YXIgdGltZW91dDtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBkZWJvdW5jZWQgKCkge1xuICAgICAgICAgIHZhciBvYmogPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQgKCkge1xuICAgICAgICAgICAgICBpZiAoIWV4ZWNBc2FwKVxuICAgICAgICAgICAgICAgICAgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHRpbWVvdXQpXG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICBlbHNlIGlmIChleGVjQXNhcClcbiAgICAgICAgICAgICAgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGRlbGF5ZWQsIHRocmVzaG9sZCB8fCAxMDApO1xuICAgICAgfTtcbiAgfVxuICBqUXVlcnkuZm5bc3JdID0gZnVuY3Rpb24oZm4peyAgcmV0dXJuIGZuID8gdGhpcy5iaW5kKCdyZXNpemUnLCBkZWJvdW5jZShmbikpIDogdGhpcy50cmlnZ2VyKHNyKTsgfTtcbn0pKGpRdWVyeSwnc21hcnRyZXNpemUnKTtcbiovXG5cblxuXG5cblxuXG5cblxuXG4iXX0=
