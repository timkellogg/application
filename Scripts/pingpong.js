
//Version 3.0 Writing to Div 

numberGame = function () {
	var number = prompt("What number would you like me to ping-pong up to?");
	$('.playbtn').html("Restart").css('font-family', 'Open Sans');
	$('.output').html('<code>Here is the result:</code>');
	$('.output').css("background-color", "black");
	$('.output').css("color", "white");
	$('.output').css("font-family", "monospace");
	$('.output').css("padding", "5px");
	for (i = 1; i <= number; i++) {
		if (i % 15 == 0) {
			$('.output').append('<br>' + i + " Ping-pong");
		} else if (i % 5 == 0) {
			$('.output').append('<br>' + i + " Pong");
		} else if (i % 3 == 0) {
			$('.output').append('<br>' + i + " Ping");
		} else {
			$('.output').append('<br>' + i);
		}
	} //end for loop
}; //end all


// Version 1.0 On Page Load
// $(document).ready(function () {
// 	var number = prompt("What number would you like me to ping-pong up to?");
// 	for (i = 1; i <= number; i++) {
// 		if (i % 15 == 0) {
// 			document.write('<br>' + i + " Ping-pong");
// 		} else if (i % 5 == 0) {
// 			document.write('<br>' + i + " Pong");
// 		} else if (i % 15 == 0) {
// 			document.write('<br>' + i + " Ping");
// 		} else {
// 			document.write('<br>' + i);
// 		}
// 	} //end for loop
// }); //end all

//Version 2.0 On Button Click
// numberGame = function () {
// 	var number = prompt("What number would you like me to ping-pong up to?");
// 	for (i = 1; i <= number; i++) {
// 		if (i % 15 == 0) {
// 			document.write('<br>' + i + " Ping-pong");
// 		} else if (i % 5 == 0) {
// 			document.write('<br>' + i + " Pong");
// 		} else if (i % 3 == 0) {
// 			document.write('<br>' + i + " Ping");
// 		} else {
// 			document.write('<br>' + i);
// 		}
// 	} //end for loop
	
// }; //end all
