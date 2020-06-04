

$('a[data-rel=lightcase:myCollection:slideshow]').lightcase({
  transition: 'scrollHorizontal',
  showSequenceInfo: false,
  showTitle: false
});


$(document).ready(function(){
  $('#search').hideseek();
});


$('a[data-rel^=lightcase]').lightcase({
	swipe: true
});
