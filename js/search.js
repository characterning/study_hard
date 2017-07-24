;(function($){
	//点击分类，滑入
	let fenlei=$(".fenlei");
	let dengji=$(".dengji");
	let taggle=true;
	fenlei.click(()=>{
		if(taggle==true){
			$(".fenleicontent").slideDown(300);
			taggle=false;
		}else{
			$(".fenleicontent").slideUp(300);
			taggle=true;
		}
	})
		dengji.click(()=>{
		if(taggle==true){
			$(".dengjicontent").slideDown(300);
			taggle=false;
		}else{
			$(".dengjicontent").slideUp(300);
			taggle=true;
		}
	})
})(jQuery)
