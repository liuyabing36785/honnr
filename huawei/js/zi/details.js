function parseUrl() {
	var url = location.href;
	var i = url.indexOf('?');
	if (i == -1) return "";
	var querystr = url.substr(i + 1);
	var arr1 = querystr.split('&');
	var arr2 = new Object();
	for (i in arr1) {
		var ta = arr1[i].split('=');
		arr2[ta[0]] = ta[1];
	}
	return arr2;
}

function fun1(arr) {
	let a = arr.split("[");
	let b = a[1].split("]");
	let c = JSON.parse(b[0]);
	let oimg1 = c.dimg;
	console.log(oimg1);
	let oimg = oimg1.split(",");
	$(".content_11 span").eq(0).html(c.cation);
	$(".content_11 span").eq(1).html(c.dName);
	$(".content_rigth p:eq(0) span").html(c.dName);
	$(".content-R-2").html(c.dMoney);
	$("#big img").attr("src", "./img/bigimg/" + oimg[0] + ".png");
	$("#small img").attr("src", "./img/bigimg/" + oimg[1] + ".png");
	$(".content_bottom1 img").eq(0).attr("src", "./img/bigimg/" + oimg[1] + ".png");
	$(".content_bottom1 img").eq(1).attr("src", "./img/bigimg/" + oimg[3] + ".png");
	$(".content_bottom1 img").eq(2).attr("src", "./img/bigimg/" + oimg[4] + ".png");
	$(".content_bottom1 img").eq(3).attr("src", "./img/bigimg/" + oimg[5] + ".png");
	$(".content_bottom1 img").eq(4).attr("src", "./img/bigimg/" + oimg[6] + ".png");

	$(".ofot b").click(function(){
		let ss1=$(".ospancolor").html();
		let ss2=$(".bacolor").html();
		let ss3=$(".otaocan").html();
		let ss4=$(".obtn span").html();
		let oimgs=$(".content_bottom1 img").eq(0).attr("src");
		// window.location.assign(encodeURI(str));
		if(sessionStorage.username)
		{
			let strq=sessionStorage.username;
		
			// var str="shop.html?doimg="+oimgs+"&dID="+c.dID+"&username="+strq+"&dsum="+ss4+"&dName="+c.dName+"&dMoney="+c.dMoney+"&dcolor="+ss1+"&dbanben="+ss2+"&dtaocan="+ss3;
			$.ajax({
				type: "POST",
				url: "php/details1.php",
				data:"dID="+c.dID+"&doimg="+oimgs+"&username="+strq+"&dsum="+ss4+"&dName="+c.dName+"&dMoney="+c.dMoney+"&dcolor="+ss1+"&dbanben="+ss2+"&dtaocan="+ss3,
				success: function(msg) {
					if(msg=="0")
					{
						alert("添加成功");	
					}
					else{
						alert("添加失败");	
					}
				}
			});
			
			
			
			location.href="shop.html?username="+strq;
		}
		else{
			alert("请先登录");
			location.href="Logn.html?dID="+v['dID'];
		}
		
		
	})
}
$("#small").mouseenter(function() {
	$("#mask,#big").show();
}).mouseleave(function() {
	$("#mask,#big").hide();
}).mousemove(function(e) {
	let l = e.pageX - $(this).offset().left - $("#mask").width() * 0.5;
	let t = e.pageY - $(this).offset().top - $("#mask").height() * 0.5;
	if (l <= 0) {
		l = 0;
	}
	if (l >= $(this).width() - $("#mask").width()) {
		l = $(this).width() - $("#mask").width();
	}
	if (t <= 0) {
		t = 0;
	}
	if (t >= $(this).height() - $("#mask").height()) {
		t = $(this).height() - $("#mask").height();
	}

	$("#mask").css({
		left: l,
		top: t
	})

	let n = $("#big img").width() / $(this).width()
	$("#big img").css({
		left: -n * l,
		top: -n * t
	})
})

$(".p-span span").click(function(){
		$(".p-span span").attr("class","");
		$(this).attr("class","ospancolor");
		$(".ocol span").html($(".ospancolor").html());
	})
$(".obtn button").eq(1).click(function(){
	  $(".obtn span").html(Number($(".obtn span").html())+1)
})
$(".obtn button").eq(0).click(function(){
	if(Number($(".obtn span").html()!=1))
	{
		 $(".obtn span").html(Number($(".obtn span").html())-1)
	}
	 
})




$(".p-banben span").click(function(){
		$(".p-banben span").attr("class","");
		$(this).attr("class","bacolor");
})
$(".p-taocan span").click(function(){
		$(".p-taocan span").attr("class","");
		$(this).attr("class","otaocan");
})


$(".content_bottom1 img").mouseover(function(){
		$(".content_bottom1 img").css({border:"0"});
		$(this).css({border:"1px solid red"});
		let a=$(this).attr("src");
		$("#small img").attr("src",a);
		$("#big img").attr("src",a)
		
})