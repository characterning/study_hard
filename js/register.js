;(function($) {
	let imglist = ["img/Registerimg/yanzheng.jpg", "img/Registerimg/yanzheng-f.jpg", "img/Registerimg/yanzheng-re.jpg", "img/Registerimg/yanzheng-t.jpg"];
	let index=0;
	$("#next").click(function(){
		index++;
		alert("888")
		let nowimg=imglist[index];
		if(index>imglist.length-1){
			index=0;
			$(".yanimg").attr("src",nowimg);
		}else{
			$(".yanimg").attr("src",nowimg);
		}
		
	})
})(jQuery)