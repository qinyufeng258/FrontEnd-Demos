requirejs.config({
	paths:{
		jquery:"jquery-2.1.4.min",
	}
});

requirejs(['jquery','backTop'],function($,backTop){
	// new backTop.BackTop($('#backTop'),{
	// 	mode:"move"
	// });
	$("#backTop").backTop({
		mode:"move"
	});
});