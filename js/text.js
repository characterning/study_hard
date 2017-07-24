;(function($){
	window.onscroll=function() {
		
				var p = $("body").scrollTop();
				console.log(p)
				if(p >200) {
					$(".txttop").css({
						"opacity": "1",
						"transition": ".5s"
					});
				} else {
					$(".txttop").css({
						"opacity": "0",
						"transition": "1s"
					});
				}
			};

			//  返回顶部
			$(".txttop").on("click", function() {
				$("body").animate({
					"scrollTop": 0
				}, 500);
			})
})(jQuery)
