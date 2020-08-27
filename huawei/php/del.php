<?php
	header("Content-type:text/html;charset=utf-8");
	$_oid=$_REQUEST["oid"];
	$conn=mysql_connect("localhost","root","root");
	if($conn)
	{
		// echo $_name;
		mysql_select_db("shop");
		
		//添加数据
		// $resule1=mysql_query("select * from dities where dID='$_name'",$conn);
		
		$resule5=mysql_query("delete  from orders where oId='$_oid'",$conn);
		
		echo "1";

	}
	else{
		echo "连接失败";
	}
	mysql_close($conn); 
?>