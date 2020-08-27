<?php
	header("Content-type:text/html;charset=utf-8");
	$_name=$_REQUEST["ousername"];
	$_pwd=$_REQUEST["opwd"];
	$conn=mysql_connect("localhost","root","root");
	if($conn)
	{
		// echo $_name.$_pwd;
		mysql_select_db("shop");
		
		//添加数据
		$resule1=mysql_query("select * from member where mUserName='$_name' and mUserPwd='$_pwd'",$conn);
		$hue = mysql_num_rows($resule1);
		// echo $hue;
		if($hue==0)
		{
			echo "0";
			
			
		}
		else {
			echo "1";
		}
	}
	// else{
	// 	echo "连接失败";
	// }
	mysql_close($conn); 
?>