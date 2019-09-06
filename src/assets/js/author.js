/*
* Author hightlight
* 
*/


// Open
var author_open = document.querySelectorAll('.js-author-open');
for(var i = 0; i < author_open.length; i++){
  author_open[i].addEventListener("click", function() {
  	if (window.innerWidth > small ) {
    	this.parentNode.parentNode.classList.add('block-author--hightlight');
    }
  });
}


// Close
var author_open = document.querySelectorAll('.js-author-close');
for(var i = 0; i < author_open.length; i++){
  author_open[i].addEventListener("click", function() {
    this.parentNode.classList.remove('block-author--hightlight');
  });
}


// Open with URL hash
var author_hash = window.location.hash.substr(1);
if(author_hash.length > 1) {
	if (window.innerWidth > small ) {
	  document.getElementById(author_hash).classList.add('block-author--hightlight');
	}
}



// Shuffle list items
var ul = document.querySelector('.m-list--author');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}












