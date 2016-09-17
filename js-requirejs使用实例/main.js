requirejs.config({
	paths:{
		jquery: 'G:/Web/jquery-2.1.4.min'
	}
});


requirejs(['jquery','validate'],function($,validate){
	//$('body').css('background-color','red');
	console.log(validate.isEqual(1,1));
});