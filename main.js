$(document).on('ready', function() {

	var innerShell = $('<div class="innerShell"> </div>');

	var clockScreen = $('<div class="clockScreen"> </div>');

	var clockText = $('<div class="clockText">11:57</div>');

	var amLabel = $('<div class="amLabel"> </div>')

	var pmLabel = $('<div class="pmLabel"> </div>')


	$('.container').append(innerShell);

	$(innerShell).append(clockScreen);

	$(clockScreen).append(clockText);

	$(clockScreen).append(amLabel);

	$(clockScreen).append(pmLabel);




});