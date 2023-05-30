setInterval(function(){kebiao()},1000);//刷新
function kebiao(){
	var z = new Date();
	var xq = z.getDay();
	var ke = hke();
	function hke(){
		if (xq == 1){ke = "升旗<br>" + "——<br>" + "数学<br>" + "化学<br>" + "历史<br>" + "生物<br>" +"——<br>" + "地理<br>" + "英语<br>" +"语文<br>"+"自习<br>" + "——<br>"+"政治<br>"+"政治<br>"+"政治<br>" }
		else if (xq == 2){ke = "语文<br>" + "——<br>" + "生物<br>" + "数学<br>" + "语文<br>" + "政治<br>" +"——<br>" + "英语<br>" + "地理<br>" +"信|心<br>"+"地理<br>" + "——<br>"+"语文<br>"+"语文<br>"+"语文<br>"}
		else if (xq == 3){ke = "语文<br>" + "——<br>" + "数学<br>" + "数学<br>" + "历史<br>" + "英语<br>" +"——<br>" + "语文<br>" + "化学<br>" +"体育<br>"+"生物<br>" + "——<br>"+"英语<br>"+"英语<br>"+"英语<br>"}
		else if (xq == 4){ke = "英语<br>" + "——<br>" + "语文<br>" + "语文<br>" + "英语<br>" + "化学<br>" +"——<br>" + "地理<br>" + "数学<br>" +"物理<br>"+"社团<br>" + "——<br>"+"历史<br>"+"数学<br>"+"数学<br>"}
		else if (xq == 5){ke = "英语<br>" + "——<br>" + "英语<br>" + "英语<br>" + "政治<br>" + "音|美<br>" +"——<br>" + "数学<br>" + "化学<br>" +"物理<br>"+"数学<br>" + "——<br>"+"数学<br>"+"数学<br>"+"数学<br>"}
		else if (xq == 6){ke = "数学<br>" + "——<br>" + "数学<br>" + "数学<br>" + "语文<br>" + "政治<br>" +"——<br>" + "物理<br>" + "体育<br>" +"生物<br>"+"化学<br>" + "——<br>"+"语文<br>"+"语文<br>"+"语文<br>"}
		else if (xq == 7){ke = "生物<br>" + "——<br>" + "语文<br>" + "物理<br>" + "英语<br>" + "历史<br>" +"——<br>" + "生物<br>" + "历史<br>" +"自习<br>"+"大扫除<br>" + "——<br>"+"生物<br>"+"生物<br>"+"生物<br>"}
		else {ke = "早自习<br>" + "——<br>" + "第一节<br>" + "第二节<br>" + "第三节<br>" + "第四节<br>" +"——<br>" + "第五节<br>" + "第六节<br>" +"第七节<br>"+"第九节<br>" + "——<br>"+"晚一<br>"+"晚二<br>"+"晚三<br>"}
		return ke;
	}
	document.getElementById("kechengbiao").innerHTML = ke
}