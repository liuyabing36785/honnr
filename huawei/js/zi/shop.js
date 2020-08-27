function parseUrl() {
	
	var url=decodeURI(location.href);
	// var url = location.href;
	
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
function hoop(){
	let c=0,b=0;
	for(let i=0;i<$(".ta-top1").length;i++)
	{
		b+=Number($(".oadd span").eq(i).html());
	}
	for(let j=0;j<$(".ta-top1").length;j++)
	{
		c+=Number($(".num").eq(j).html())*Number($(".oadd span").eq(j).html());
	}
	$(".zo").html(c);
	$(".la").html(b);
	
}
function aaaaa(){
	$(".oadd1").click(function(){
			let sum1=Number($(this).next().html());
			if(sum1<=1)
			{
				$(this).next().html("1");
				gongji(this)
			}
			else{
				$(this).next().html(sum1-1);
				gongji(this)
			}
	})
	$(".oadd2").click(function(){
			let sum1=Number($(this).prev().html());
			$(this).prev().html(sum1+1);
			gongji(this)
			
	})
}
function gongji(str){
	let a=Number($(str).parent().prev().html())*Number($(str).parent().find("span").html());
	$(str).parent().next().find("span").html(a);
	hoop();
}

var v = parseUrl(); //解析所有参数












// $(".quanxuan").click(function(){
// 	$(":checkbox").attr("checked",true)
// })
// $(".oquan").click(function(){
// 	$(":checkbox").attr("checked",true)
// })
// $(".check").click(function(){
// 	if($(this).attr("checked")=="checked")
// 	{
// 		for(let i=0;i<$(".quanxuan").length;i++)
// 		{
// 			$(".quanxuan").eq(i).attr("checked",false)
// 		}
// 	}
// 	else{
// 		$(this).attr("checked","checked")
// 	}
	
// })