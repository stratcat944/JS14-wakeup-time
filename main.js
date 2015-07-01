$(document).on('ready', function() {

	var innerShell = $('<div class="innerShell"> </div>');

	var clockScreen = $('<div class="clockScreen"> </div>');

	var clockText = $('<div class="clockText">11:57:00</div>');

	var ampmBox = $('<div class="ampmBox"> </div>');

	var amLabel = $('<div class="amLabel">AM</div>');

	var pmLabel = $('<div class="pmLabel">PM</div>');

	var radioTuner = $('<div class="tuner">AM 530 600 700 900 1100 1400 1700</div><div class="tuner">FM 88 90 92 95 98 101 104 106 108</div>');


	$('.container').append(innerShell);

	$(innerShell).append(clockScreen);

	$(innerShell).append(radioTuner);

	$(innerShell).append(radioTuner);

	$(clockScreen).append(clockText);

	$(clockScreen).append(ampmBox);

	$(ampmBox).append(amLabel);

	$(ampmBox).append(pmLabel);




});