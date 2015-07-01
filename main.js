$(document).on('ready', function() {

	var innerShell = $('<div class="innerShell"> </div>');
	var leftbuttonAM = $('<div class="leftLabel"> </div>');
	var rightbuttonPM = $('<div class="rightLabel"> </div>');
	var clockScreen = $('<div class="clockScreen"> </div>');
	var clockText = $('<div class="clockText">12:30</div>');
	var bottomLabelAM = $('<div class="bottomAm">AM</div>');
	var bottomLabelPM = $('<div class="bottomPm">PM</div>'); 



	$('.container').append(innerShell);
	$(innerShell).append(leftbuttonAM);
	$(innerShell).append(rightbuttonPM);
	$(innerShell).append(clockScreen);
	$(clockScreen).append(clockText);
	$(leftbuttonAM).append(bottomLabelAM);
	$(rightbuttonPM).append(bottomLabelPM);


});