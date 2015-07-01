$(document).on('ready', function() {

	var innerShell = $('<div class="innerShell"> </div>');

	var clockScreen = $('<div class="clockScreen"> </div>');

	var clockText = $('<div class="clockText">11:57:00</div>');

	var ampmBox = $('<div class="ampmBox"> </div>');

	var amLabel = $('<div class="amLabel">AM</div>');

	var pmLabel = $('<div class="pmLabel">PM</div>');


	$('.container').append(innerShell);

	$(innerShell).append(clockScreen);

	$(clockScreen).append(clockText);

	$(clockScreen).append(ampmBox);

	$(ampmBox).append(amLabel);

	$(ampmBox).append(pmLabel);




});