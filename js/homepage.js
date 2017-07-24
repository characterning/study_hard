(function($) {
	
	//更多弹框
	let more = $(".more");
	let hide=$(".hiddend");
	let flag = true;
	more.click(()=> {
		if(flag == true) {
			$(".Controllerbox").css({
				"margin-left": "0%",
				"transition": "all 0.5s linear"
			});
			$(".shdow").css({
				"display": "block"
			});
			flag=false;
		}
		else{
			$(".Controllerbox").css({
				"margin-left": "100%",
				"transition": "all 0.5s linear"
			});
			$(".shdow").css({
				"display": "none"
			});
			flag=true;
		}
	})
	hide.click(()=>{
			$(".Controllerbox").css({
				"margin-left": "100%",
				"transition": "all 0.5s linear"
			});
			$(".shdow").css({
				"display": "none"
			});
	})
	
	$(".btn-success").on("click",function(){
		$(this).attr("href","#search")
	})

})(jQuery)