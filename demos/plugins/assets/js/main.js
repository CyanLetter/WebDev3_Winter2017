$(document).ready(function(){

	$('#scene').parallax();

	$('#down-button').on('click', function(){
		$(window).scrollTo('+=200', 300);
	});
	$('#up-button').on('click', function(){
		$(window).scrollTo(0, 300);
	});

	var waypoint = new Waypoint({
		element: document.getElementById('last'),
		handler: function(direction){
			if (direction === 'down') {
				$('#down-button').addClass('hidden');
				$('#up-button').removeClass('hidden');
			} else {
				$('#down-button').removeClass('hidden');
				$('#up-button').addClass('hidden');
			}
		},
		offset: 'bottom-in-view'
	});

	$('.article-link').each(function(){
		var appearWaypoint = new Waypoint({
			element: $(this),
			handler: function(){
				this.element.addClass('show');
			},
			offset: 'bottom-in-view'
		});
	});
	

	MediumLightbox('.article-link figure');
});