function banner(){
		
		let a=0
		let oimg=document.querySelector("#banner-img img");
		let ofirst=setTimeout(otime,0);
		let time=setInterval(otime,3000);
		$("#banner_btoom li").hover(function() {
			clearInterval(time);
			index = $(this).index();
			$("#banner_btoom span").eq(index-1).stop().animate({width:"100%"},1500);
			$("#banner_btoom span").not($("#banner_btoom span").eq(index-1)).stop().animate({width:"0"},0);
			$("#banner-img img").eq(index-1).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
		},function() {
			a=index;
			time=setInterval(otime,3000)
		});
		$(".banner-broom-L").eq(0).click(function(){
			clearInterval(time);
			a-=2;
			 ofirst=setTimeout(otime,0);
			 time=setInterval(otime,3000);
		});
		$(".banner-broom-L").eq(1).click(function(){
			clearInterval(time);
			ofirst=setTimeout(otime,0);
			time=setInterval(otime,3000);
		})
		function otime(){
			$("#banner-img img").eq(a).stop().fadeIn(1500).siblings().stop().fadeOut(1500);
			$("#banner_btoom span").eq(a).stop().animate({width:"100%"},1500);
			$("#banner_btoom span").not($("#banner_btoom span").eq(a)).stop().animate({width:"0"},0);
			a++;
			if(a==7)
			{
				a=0;
			}
			if(a==-1)
			{
				a=6
			}
		}
	}
banner();