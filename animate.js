$(function(){

	$('#animationBtn').click(function(){
		animate('#anim-head', 'bounce');
		animate('#anim-body', 'rubberBand');
		return	false;
	});

	$('#animationBtn-2').click(function(){
		animate('header', 'slideOutUp');
		setTimeout(function(){
			$('header').css('visibility','hidden');
		}, 1000)
		return	false;
	});

	// animate
	function animate(element, animation){
		$(element).addClass('animated '+animation);
		let wait = setTimeout(function(){
			$(element).removeClass('animated '+animation);
		}, 1000);
	}
})