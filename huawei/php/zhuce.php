<?php
	header("Content-type:text/html;charset=utf-8");
	$_nicheng=$_REQUEST["onicheng"];
	$_name=$_REQUEST["ousername"];
	$_pwd=$_REQUEST["opwd"];
	$conn=mysql_connect("localhost","root","root");
	if($conn)
	{
		// echo $_name;
		mysql_select_db("shop");
		
		//添加数据
		$resule1=mysql_query("select * from member where mUserName='$_name'",$conn);
		// echo $resule1;
		$hue = mysql_num_rows($resule1);
		// echo $resule1.length;
		if($hue==1)
		{
			echo "0";
		}
		else{
			
			echo "1";
			$result=mysql_query("insert into member (mnicheng,mUserName,mUserPwd) values ('$_nicheng','$_name','$_pwd')",$conn);
		}
	}
	else{
		echo "连接失败";
	}
	mysql_close($conn); 
?>