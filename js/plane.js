
;(function($){
	//点击分类，滑入
	let fenlei=$(".planefenlei");
	let dengji=$(".planedengji");
	let taggle=true;
	fenlei.click(()=>{
		if(taggle==true){
			$(".planefenleicontent").slideDown(300);
			taggle=false;
		}else{
			$(".planefenleicontent").slideUp(300);
			taggle=true;
		}
	})
		dengji.click(()=>{
		if(taggle==true){
			$(".planedengjicontent").slideDown(300);
			taggle=false;
		}else{
			$(".planedengjicontent").slideUp(300);
			taggle=true;
		}
	})
})(jQuery)