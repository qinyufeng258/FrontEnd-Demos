var pic_amounts = 8;
var pic_arrays = createImg(pic_amounts);
var photos;
var pic_index = 0;
var autoplay = 1;
var time_id;
function createImg(nums){
	//创建图片标签的二维数组
	var arrays = [];
	var k = 0;
	for(var i=0;i<nums/4;i++){
		arrays[i] = [];
		for(var j=0;j<4;j++){
			arrays[i][j] = $("<img src=\"src/pic"+ k +".jpg\">");
			k++;
		}	
	}

	return arrays;
}

function init(){
	//初始四张图片显示
	photos = $(".photo");
	for(var i=0;i<4;i++){
		photos.eq(i).append(pic_arrays[0][i]);
	}
}

function move(d){
	//左移 & 右移函数
	//获取图片数组元素，设定新元素transform，旧元素过渡消失后，删除旧元素，新元素执行过渡出现
	pic_index +=d;
	//溢出处理
	if(pic_index == -1){

		pic_index = 1;
	}
	if(pic_index == 2){

		pic_index = 0;
	}


	$(".photo").each(function(i){
		var thisitem= $(this);
		var thisImg = thisitem.children("img");
		var targetImg = pic_arrays[pic_index][i];
		
		targetImg.css({ scale: 0.1 });
		targetImg.css({ opacity: 0.1 });
		thisImg.transition({
			opacity: 0.1, scale: 0.1,
			duration: 500+200*i,
			easing: 'in',
		});

  		thisitem.append(targetImg);
		targetImg.transition({
			opacity: 1.0, scale: 1.0,
			duration: 500+200*i,
			easing: 'in',
			complete: function() { thisImg.remove();}		
		});

	});
	
}

function play(d){
	
	
	if(d==1){
		time_id = setInterval("move(1)",3000);
	}
	else{
		
		clearInterval(time_id);
	}
	


}

$(function(){

	init();
	
	$(".leftbt").click(function(){
		move(1);
	});
	$(".rightbt").click(function(){
		move(-1);
	});

	$(".autoplay").click(function(){
		
		//两种状态：自动播放和停止自动播放
		play(autoplay);
		autoplay = autoplay*-1;
	});
});



