// Document ready

$(document).on('ready', function() {

// Div variables

var outerShell 		$('<div class="outer-shell"></div>');

var innerShell 		$('<div class="inner-shell"></div>');

var clockScreen 	$('<div class="clock-screen"></div>');

var indicatorAmPm 	$('<div class="ampm-indicator">*</div>');

var clockText		$('<div class="clock-text">15:16</div>');

var amFreqLabel		$('<div class="am-freqlabel">AM</div>');

var pmFreqLabel		$('<div class="pm-freqlabel">PM</div>');


// appends

$('.container').append(outer-shell);

$(outerShell).append(inner-shell);

$(inner-shell).append(clock-screen);

$(inner-shell).append(ampm-indicator);

$(inner-shell).append(clock-text);

$(inner-shell).apend(am-freqlabel);

$(inner-shell).append(pm-freqlabel);






  
});