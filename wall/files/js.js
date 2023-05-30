setInterval(function(){daojishi()},1000);//刷新
function daojishi(){
			   
	
		var Stime=new Date(),
		Sday=Stime.getDate(),
		Shour=Stime.getHours(),
		Sminutes=Stime.getMinutes(),
		Ssecond=Stime.getSeconds(),
		
		Ntime= new Date();
		Nday=Ntime.getDate();
		Nyear=Ntime.getFullYear();
		Nmonth=Ntime.getMonth()+1;
		Nhour=Ntime.getHours();
		Nmintues=Ntime.getMinutes();
		Nsecond=Ntime.getSeconds();
	
		Etime = new Date(); // 这个地方可以自定义了.....
		Etime.setMonth(6 - 1); // 目标月份（从0开始，所以减1）
		Etime.setDate(14); // 目标日期
		Etime.setFullYear(2023); // 目标年份

			if(Nmonth>=6){
				Etime.setFullYear(Nyear+1);
				Ayear = Nyear + 1;

			}
			else Etime.setFullYear(Nyear);
			//尝试固定化倒计时 - -/End
		Eday=Etime.getDate(),
		

		
		day=Math.floor((Etime-Stime)/1000/60/60/24),
		
		hhour=24-Shour,
		hminutes=59-Sminutes,
		second=59-Ssecond;
		
		if(second<10){var second="0"+second}
		else var second =second;
		if(hminutes<10){var minutes="0"+hminutes}
		else var minutes =hminutes;
		if(hhour<10){var hour="0"+hhour}
		else var hour =hhour;

		if(Nmonth<10){Nmonth="0"+Nmonth}else Nmonth = Nmonth;
		if(Nday<10){Nday="0"+Nday}else Nday = Nday;
		if(Nsecond<10){Nsecond="0"+Nsecond}else Nsecond=Nsecond;
		if(Nmintues<10){Nmintues="0"+Nmintues}else Nmintues=Nmintues;
		if(Nhour<10){Nhour="0"+Nhour}else Nhour=Nhour;



		


	document.getElementById("ltian").innerHTML = day;
	document.getElementById("lshi").innerHTML = hour;
	document.getElementById("lfen").innerHTML = minutes;
	document.getElementById("lmiao").innerHTML = second;
	document.getElementById("nnian").innerHTML = Nyear;
	document.getElementById("nyue").innerHTML = Nmonth;
	document.getElementById("nri").innerHTML = Nday;
	document.getElementById("nshi").innerHTML = Nhour;
	document.getElementById("nfen").innerHTML = Nmintues;
	document.getElementById("nmiao").innerHTML = Nsecond;
	if(Nmonth>=6&Nday>8){
		Ayear=Ntime.getFullYear()+1;
		document.getElementById("er").innerHTML =Ayear;
	}
	else document.getElementById("er").innerHTML = Nyear;
	
}
window.onload=function(){

    setInterval(function(){
    	daojishi();
    	},1000
    );
    hitokoto();
};
