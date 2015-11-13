$('#submit').click(compare);

function compare() {
	var a = $('#a').val(); //the first number is the value of the text input in a
	//console.log(a); //logging the value of a, accessing the variable

	var b = $('#b').val();
	//console.log(b);

	var comparison;

	a = parseInt(a);
	b = parseInt(b);

	if (a > b) {
		comparison = '>';
	} else if (a < b) {
		comparison = '<';
	} else if (a === b) {
		comparison = '=';
	}

	else {
		comparison = 'N/A';
	}

	$('#comparison').html(comparison);

}

