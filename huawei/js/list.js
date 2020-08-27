$("nav").load("nav.html", function() {
	$(".navigation li:eq(0)").hover(function() {
		$("#phone").css({
			"display": "block",
			"display": "flex"
		});
		$("#phone").siblings().css({
			"display": "none"
		});
		$("#secondary").stop().slideDown(function() {
			$(".detailed").stop().slideDown();
		});
	}, function() {
		$(".detailed").stop().slideUp(function() {
			$("#secondary").stop().slideUp();
		})
	})

	$("#secondary").hover(function() {
		$("#secondary").stop().slideDown(function() {
			$(".detailed").stop().slideDown();
		});
	}, function() {
		$(".detailed").stop().slideUp(function() {
			$("#secondary").stop().slideUp();
		})
	})

	$(".detailed").hover(function() {
		$("#secondary").stop().slideDown(function() {
			$(".detailed").stop().slideDown();
		});
	}, function() {
		$(".detailed").stop().slideUp(function() {
			$("#secondary").stop().slideUp();
		})
	})


	$(".navigation li:eq(4)").hover(function() {
		$("#secondary2").stop().slideDown(function() {
			$(".detailed2").stop().slideDown();
		});
	}, function() {
		$(".detailed2").stop().slideUp(function() {
			$("#secondary2").stop().slideUp();
		})
	})
	$("#secondary2").hover(function() {
		$("#secondary2").stop().slideDown(function() {
			$(".detailed2").stop().slideDown();
		});
	}, function() {
		$(".detailed2").stop().slideUp(function() {
			$("#secondary2").stop().slideUp();
		})
	})
	$(".detailed2").hover(function() {
		$("#secondary2").stop().slideDown(function() {
			$(".detailed2").stop().slideDown();
		});
	}, function() {
		$(".detailed2").stop().slideUp(function() {
			$("#secondary2").stop().slideUp();
		})
	})


	//
	$("#secondary li:eq(1)").click(function() {
		$("#comput").css({
			"display": "block",
			"display": "flex"
		});
		$("#comput").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(0)").click(function() {
		$("#phone").css({
			"display": "block",
			"display": "flex"
		});
		$("#phone").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(2)").click(function() {
		$("#ipir").css({
			"display": "block",
			"display": "flex"
		});
		$("#ipir").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(3)").click(function() {
		$("#wisdom").css({
			"display": "block",
			"display": "flex"
		});
		$("#wisdom").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(4)").click(function() {
		$("#intelligence").css({
			"display": "block",
			"display": "flex"
		});
		$("#intelligence").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(5)").click(function() {
		$("#room").css({
			"display": "block",
			"display": "flex"
		});
		$("#room").siblings().css({
			"display": "none"
		});
	})

	$("#secondary li:eq(6)").click(function() {
		$("#accessories").css({
			"display": "block",
			"display": "flex"
		});
		$("#accessories").siblings().css({
			"display": "none"
		});
	})
	$("#secondary li:eq(7)").click(function() {
		$("#choice").css({
			"display": "block",
			"display": "flex"
		});
		$("#choice").siblings().css({
			"display": "none"
		});
	})

	//新闻
	$("#news").hover(function() {
		$("#new1").stop().slideDown();
	}, function() {
		$("#new1").stop().slideUp();
	})
	$("#new1").hover(function() {
		$("#new1").stop().slideDown();
	}, function() {
		$("#new1").stop().slideUp();
	})

});



//背景彩色图片
$(".action_footer_aa1").hover(function(){
		$(".action_footer_aa1").find($("#action_footer_a1_bgc")).css({display:"block"});
		},function(){
		$(".action_footer_aa1").find($("#action_footer_a1_bgc")).css({display:"none"});
	})
	$(".action_footer_aa2").hover(function(){
		$(".action_footer_aa2").find($(".action_footer_a1_bgc")).css({display:"block"});
	},function(){
		$(".action_footer_aa2").find($(".action_footer_a1_bgc")).css({display:"none"});
	})
	$(".action_footer_a1_nei1").hover(function(){
		$(".action_footer_aa1").find($(".oaspan")).css({display:"block"})
	},function(){
		$(".action_footer_aa1").find($(".oaspan")).css({display:"none"})
	})
	$(".action_footer_a1_nei2").hover(function(){
		$(".action_footer_aa2").find($(".oaspan")).css({display:"block"})
	},function(){
		$(".action_footer_aa2").find($(".oaspan")).css({display:"none"})
	})
	
for(let i=0;i<$(".action_content_nu1").length;i++)
	{
		$(".action_content_nu1").eq(i).hover(function(){
			$(".action_content_nu1").eq(i).find($("img")).css({transform:"scale(1.1)"})
		},function(){
			$(".action_content_nu1").eq(i).find($("img")).css({transform:"scale(1)"})
			
		})
	}
