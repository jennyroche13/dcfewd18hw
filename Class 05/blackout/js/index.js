$('#light_switch').click(switchLights);

var lights = 'on';

function switchLights(){
	if(lights == 'on'){
		$('body').addClass('dark');
	lights='off';
	} else {
		$('body').removeClass('dark');
	lights='on';
	} 

}



 //if (body = black){}

//function blackout(){
	//$("body").css("background", "black");
//}

//function whiteout(){
	//$("body").css("background", "white");
//}
