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


function fun21(arr1){
	console.log(arr1);
	// let a = arr1.split("[");
	// let b = a[1].split("]");
	
	// console.log(b[0]);
	let arr3=JSON.parse(arr1);
	// let d=b[0].split(",")
	console.log(arr3);
	for(let i=0;i<arr3.length;i++)
	{
		var arr=arr3[i];
		var odiv=document.createElement("div");
		odiv.innerHTML=`<div class='banner-sh'>
				<ul class='ta-top ta-top1'>
					<li class='ta-top-img'><input type='checkbox' class='check' > <img src='${arr.ocimg}'> </li>
					<li class='oli'>【<span>${arr.odname}</span>】<span class='spid'>${arr.oID}</span><span>${arr.ocolor}&nbsp;${ arr.otaocan}&nbsp;${arr.oleixing}</span></li>
					<li class='num'>${arr.parse}</li>
					<li class='oadd'><div class='oadd1'>-</div><span>${arr.osum}</span><div class='oadd2'>+</div></li>
					<li class='gong'>￥<span>2300</span>.00</li>
					<li class='del'>删除</li>
				</ul>
			</div>`;
		$(".osss").append(odiv);
	}
	aaaaa();
	hoop();
	odel1();
}