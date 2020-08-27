<?php
	header("Content-type:text/html;charset=utf-8");
	$_name=$_REQUEST["username"];
	$_dname=$_REQUEST["dName"];
	$_dsum=$_REQUEST["dsum"];
	$_dname=$_REQUEST["dName"];
	$_dMoney=$_REQUEST["dMoney"];
	$_dcolor=$_REQUEST["dcolor"];
	$_dbanben=$_REQUEST["dbanben"];
	$_dtaocan=$_REQUEST["dtaocan"];
	$_oimg=$_REQUEST["doimg"];
	
	$conn=mysql_connect("localhost","root","root");
	if($conn)
	{
		// echo $_name;
		mysql_select_db("shop");
		
		//添加数据
		$resule1=mysql_query("insert into orders (ocimg,omname,odname,parse,ocolor,otaocan,osum,oleixing)
		 values ('$_oimg','$_name','$_dname','$_dMoney','$_dcolor','$_dtaocan','$_dsum','$_dbanben')",$conn);
		
		$hue1 = mysql_num_rows($resule1);
		if($hue1==1)
		{
			echo "0";
		}
		else{
			echo "1";
		}
		
		
		// echo $results;
	}
	else{
		echo "连接失败";
	}
	mysql_close($conn); 
?>