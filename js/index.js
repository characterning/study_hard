var app = angular.module("myApp", ['ngRoute']);
app.controller("ctrl", function($scope, $timeout) {
	$timeout(function() {
		(function($) {
			$(".content").scroll(function() {
				var p = $(this).scrollTop();
				if(p > 150) {
					$(".top").css({
						"opacity": "1",
						"transition": ".5s"
					});
				} else {
					$(".top").css({
						"opacity": "0",
						"transition": "1s"
					});
				}
			});
			//  返回顶部
			$(".top").on("click", function() {
				$(".content").animate({
					"scrollTop": 0
				}, 500);
			});
				$(".wh_tab_title>ul>li").click(function () {
    var index = $(this).index();
    $(this).css({"color": "#70A401", "border-bottom": "2px solid #70A401"}).siblings().css({
        "color": "#333333",
        "border-bottom": "0px"
    });
    $(".wh_tab_box>.wh_tab_now").eq(index).css({"display": "block"}).siblings().css({"display": "none"});
});

var oV = document.querySelector("video");
oV.poster = "img/Curriculumimg/hosity.png";


$(".content").scroll(function () {
    var p = $(".content").scrollTop();
    if (p > 250) {
        $(".wh_tab_title").css({"position": "fixed", "z-index": "100", "left": "0", "top": "4.3rem"});
    }else{
        $(".wh_tab_title").css({"position": ""});
    	
    }
});


var next = 0;
var obj = [
                {
                    "img": "img/Curriculumimg/thankpic_big_240.jpg",
                    "span": "史彬兵：",
                    "p": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img2": "img/Curriculumimg/thankpic_big_358.jpg",
                    "span2": "黎明：",
                    "p2": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img3": "img/Curriculumimg/thankpic_big_462.jpg",
                    "span3": "安师大：",
                    "p3": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img4": "img/Curriculumimg/thankpic_big_491.jpg",
                    "span4": "热热：",
                    "p4": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论"
                },
                {
                    "img": "img/Curriculumimg/thankpic_big_124.jpg",
                    "span": "史彬兵2：",
                    "p": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img2": "img/Curriculumimg/thankpic_big_192.jpg",
                    "span2": "黎明：",
                    "p2": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img3": "img/Curriculumimg/thankpic_big_240.jpg",
                    "span3": "安师大：",
                    "p3": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img4": "img/Curriculumimg/thankpic_big_246.jpg",
                    "span4": "热热：",
                    "p4": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论"
                },
                {
                    "img": "img/Curriculumimg/thankpic_big_533.jpg",
                    "span": "史彬兵3：",
                    "p": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img2": "img/Curriculumimg/thankpic_big_600.jpg",
                    "span2": "黎明：",
                    "p2": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img3": "img/Curriculumimg/thankpic_big_615.jpg",
                    "span3": "安师大：",
                    "p3": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img4": "img/Curriculumimg/thankpic_big_727.jpg",
                    "span4": "热热：",
                    "p4": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论"
                },
                {
                    "img": "img/Curriculumimg/thankpic_big_804.jpg",
                    "span": "史彬兵4：",
                    "p": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img2": "img/Curriculumimg/thankpic_big_861.jpg",
                    "span2": "黎明：",
                    "p2": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img3": "img/Curriculumimg/thankpic_big_885.jpg",
                    "span3": "安师大：",
                    "p3": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img4": "img/Curriculumimg/thankpic_big_1051.jpg",
                    "span4": "热热：",
                    "p4": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论"
                },
                {
                    "img": "img/Curriculumimg/thankpic_big_359.jpg",
                    "span": "史彬兵5：",
                    "p": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img2": "img/Curriculumimg/thankpic_big_523.jpg",
                    "span2": "黎明：",
                    "p2": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img3": "img/Curriculumimg/thankpic_big_312.jpg",
                    "span3": "安师大：",
                    "p3": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论",
                    "img4": "img/Curriculumimg/thankpic_big_266.jpg",
                    "span4": "热热：",
                    "p4": "我是一五年刚毕业的大学生，大学学的是广告专业，但是在校大多学的是理论"
                }
            ];
$("#wh_add").click(function () {
    next++;
    if(next>obj.length-1){
        next=0;
    }
    $(".wh_obj>.wh_group_img_left_o").find("img").attr("src",obj[next].img);
    $(".wh_obj>.wh_group_img_left_o>p>.wh_span").html(obj[next].p);
    $(".wh_obj>.wh_group_img_left_o>p>.wh_p").text(obj[next].span);
    $(".wh_obj>.wh_group_img_left_t").find("img").attr("src",obj[next].img2);
    $(".wh_obj>.wh_group_img_left_t>p>.wh_span").html(obj[next].p2);
    $(".wh_obj>.wh_group_img_left_t>p>.wh_p").text(obj[next].span2);

    $(".wh_ojb>.wh_group_img_left_o").find("img").attr("src",obj[next].img3);
    $(".wh_ojb>.wh_group_img_left_o>p>.wh_span").html(obj[next].p3);
    $(".wh_ojb>.wh_group_img_left_o>p>.wh_p").text(obj[next].span3);
    $(".wh_ojb>.wh_group_img_left_t").find("img").attr("src",obj[next].img4);
    $(".wh_ojb>.wh_group_img_left_t>p>.wh_span").html(obj[next].p3);
    $(".wh_ojb>.wh_group_img_left_t>p>.wh_p").text(obj[next].span3);
});
		})(jQuery)
	},10)


})
app.controller("plane", function($scope,$timeout) {
	
	$scope.datalist = [{
			"data": "photoshop"
		},
		{
			"data": "lilustrator"
		},
		{
			"data": "CorelDraw"
		},
		{
			"data": "lndesign"
		},
		{
			"data": "Dreamweave"
		},
		{
			"data": "SAl"
		},
		{
			"data": "视觉设计"
		},
		{
			"data": "字体设计"
		},
		{
			"data": "字效设计"
		},
		{
			"data": "特效合成"
		},
		{
			"data": "VIS设计"
		},
		{
			"data": "品牌设计"
		},
		{
			"data": "店铺装修"
		},
		{
			"data": "电商设计"
		},
		{
			"data": "网页设计"
		},
		{
			"data": "网页前端代"
		},
		{
			"data": "影视剪辑"
		},
		{
			"data": "ui设计"
		},
		{
			"data": "包装设计"
		},
		{
			"data": "折页设计"
		},
		{
			"data": "三维制作"
		},
		{
			"data": "影视合成"
		},
		{
			"data": "视频包装"
		},
		{
			"data": "影视调色"
		},
		{
			"data": "影视特效"
		},
		{
			"data": "动画"
		},
		{
			"data": "影视理论"
		},
		{
			"data": "游戏设计"
		}
	];
	$scope.dengjilist = [{
			"title": "基础入门"
		},
		{
			"title": "中级提高"
		},
		{
			"title": "高级拓展"
		}
	];
	var  list = [
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}]
	]
	var list1 = [
		[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}]
	]
	var list2 = [
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}]
	]
	var list3 = [
	[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		
		[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}]
	]
	
	var list4 = [
	[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}]
	]
	
	var list5 = [
		[{
			"img": "img/pingmian/128-middler.jpg",
			"text": "AE创意动效设计教程",
			"text1": "讲师：李炳",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/212-middler.jpg",
			"text": "电商视觉设计实战教程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		[{
			"img": "img/pingmian/101-middler.jpg",
			"text": "网页设计高级教程（下篇）",
			"text1": "讲师：Gordan",
			"text2": "课级：高级拓展"
		}],

		[{
			"img": "img/pingmian/105-middler.jpg",
			"text": "Grasshopper参数构建中级教程",
			"text1": "讲师：白云生",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/114-middler.jpg",
			"text": "C4D创意动效设计教程",
			"text1": "讲师：SeLin-ink",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/115-middler.jpg",
			"text": "UI动效设计教程",
			"text1": "讲师：小志",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/102-middler.jpg",
			"text": "网页设计高级教程（下篇）程",
			"text1": "讲师：开心老师",
			"text2": "课级：高级拓展"
		}],
		

		[{
			"img": "img/pingmian/121-middler.jpg",
			"text": "淘宝店铺装修完全自学教程",
			"text1": "讲师：韩文强",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/123-middler.jpg",
			"text": "彩铅画教程-动物篇",
			"text1": "讲师：箐莜",
			"text2": "课级：中级提高"
		}],
		[{
			"img": "img/pingmian/124-middler.jpg",
			"text": "水彩动物插画教程",
			"text1": "讲师：许永伟",
			"text2": "课级：高级拓展"
		}]
	
	];
	$scope.num=[
	{"num":"50","time":"600"},
	{"num":"36","time":"240"},
	{"num":"24","time":"180"},
	{"num":"130","time":"120"},
	{"num":"48","time":"86"},
	{"num":"72","time":"140"},
	]
	var contentlist=[list,list1,list2,list3,list4,list5];
	$scope.weeklist=list;
	$scope.number=$scope.num[0];
	$scope.qiehuan=function(index){
		$scope.weeklist=contentlist[index];
		$scope.number=$scope.num[index];
		var planefenlei=$(".planefenlei>label");
			var pflspan=$(".planefenleicontent>span");	
		var planedengji=$(".planedengji");
//		var pdjspan=$(".planedengjicontent>span");
		planefenlei.text(pflspan[index].innerText);
//		planedengji.text(pdjspan[index].innerHTML);
var planefenleicontent=$(".planefenleicontent");
   planefenleicontent.slideUp(200)
	}
	  $scope.qiehuan2=function(index){

	
		var planedengji=$(".planedengji>label");
		var pdjspan=$(".planedengjicontent>span");
		planedengji.text(pdjspan[index].innerHTML);
var planedengjicontent=$(".planedengjicontent");
   planedengjicontent.slideUp(200)
	}
	  $timeout(function(){
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
	  })
})
app.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/home", {
			templateUrl: "html/home page.html"
		})
		.when("/search", {
			templateUrl: "html/search.html"
		})
		.when("/enter", {
			templateUrl: "html/enter.html"
		})
		.when("/register", {
			templateUrl: "html/register.html"
		})
		.when("/text", {
			templateUrl: "html/text.html"
		})
		.when("/plane", {
			templateUrl: "html/plane.html",
			controller: "plane"
		})
		.when("/Curriculum", {
			templateUrl: "html/Curriculum.html",
		})
		.when("/student", {
			templateUrl: "html/student.html",
		})
		.when("/sousuo", {
			templateUrl: "html/sousuo.html",
		})
		.when("/teacher", {
			templateUrl: "html/Teachers.html",
		})
		.otherwise({
			redirectTo: "/home"
		})
}])