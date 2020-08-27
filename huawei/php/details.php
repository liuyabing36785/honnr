<?php
	header("Content-type:text/html;charset=utf-8");
	$_name=$_REQUEST["ousername"];
	$conn=mysql_connect("localhost","root","root");
	if($conn)
	{
		// echo $_name;
		mysql_select_db("shop");
		
		//添加数据
		$resule1=mysql_query("select * from dities where dID='$_name'",$conn);
		$results = array();
		
		while ($row = mysql_fetch_assoc($resule1)) {
		
		$results[] = $row;
		
		}
		echo json_encode($results);
		
		
	}
	else{
		echo "连接失败";
	}
	mysql_close($conn); 
?>