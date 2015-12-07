var total = 0;

function currencyFormat(number) {
	number = parseFloat(number);

	number = number.toFixed(2);

	number = "$" + number;

	return number;
}

function addvalue() {
	var entryElement = document.getElementById('newEntry'),
		entriesElement = document.getElementById('entries'),
		totalelement = document.getElementById('total');

	
}