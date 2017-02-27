$(document).ready(function(){

	$('#hourly-forecast, .forecast-day').on('click', function(){
		$('#hourly-forecast, #five-day-forecast').toggleClass('hidden');
	});

});