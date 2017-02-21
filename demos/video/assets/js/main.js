$(document).ready(function(){

	new WOW().init();

	window.setTimeout(function(){
		$('.statistic').countTo({
			from: 0,
			to: 30000,
			speed: 1000,
			refreshInterval: 5
		});
	}, 1200);

});