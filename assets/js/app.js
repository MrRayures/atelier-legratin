/*
* Projet :
* Website : 
* Auteur : MrRayures - www.mr-rayures.com		
* Copyright (C) 2016
*/

/*  Breackpoint ------------------------------- */
// Use : if (window.innerWidth <= small_breakpoint ) {}
var xsmall_breakpoint  = "450";
var small_breakpoint   = "767";
var medium_breakpoint  = "960";
var large_breakpoint   = "1200";
var xlarge_breakpoint  = "1600";


$(document).ready(function() {

  (function($){
	  $.fn.shuffle = function() {
      var allElems = this.get(),
      getRandom = function(max) {
        return Math.floor(Math.random() * max);
      },
      shuffled = $.map(allElems, function(){
        var random = getRandom(allElems.length),
            randEl = $(allElems[random]).clone(true)[0];
        allElems.splice(random, 1);
        return randEl;
    	});

      this.each(function(i){
        $(this).replaceWith($(shuffled[i]));
      });
      return $(shuffled);
    };
	})(jQuery);

	// Randomize
	//$('.list-author > li').shuffle();
	$('.list-author > li').css({ 'opacity': 1 });

	// TweenMax
	//TweenMax.staggerFrom('.list-author > li', 0.6, { opacity: 0,  scale: 0.8, ease:Back.easeOut}, 0.2);


});


$(window).resize(function() {});


$(window).scroll(function() {});

var app = new Vue({
  el: '#app',
  data: {
  	img_path: 'assets/img/',
    authors: [
    	{ name: 'Alexandre Clérisse', job: 'auteur, illustrateur, graphiste', avatar: 'alexandre-clerisse.jpg', url: 'http://alexclerisse.over-blog.com', email: 'alexandre.clerisse@gmail.com'},
    	{ name: 'Camille Marine Julie', job: 'réalisatrice de documentaire', avatar: 'camille-marine-julie.jpg', url: 'http://camillemarinejulie.com', email: 'camillemarinejulie@gmail.com'},
    	{ name: 'François Leproust', job: 'webdesigner & developpeur front-end', avatar: 'francois-leproust.jpg', url: 'http://mr-rayures.com"', email: 'hello@mr-rayures.com'}
    ] 
  }
})