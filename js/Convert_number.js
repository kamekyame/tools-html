var kakutyo = false;
var str = "";
var out;
var input = null;
		
var timer = null;
input = document.getElementById('inputMain');
var data = 0;
var a_old;
str = "";
out = document.getElementById('out');
calc();
input.addEventListener("focus", function(){
	a_old = Number(input.value);
	data = Number(input.value);
	window.clearInterval(timer);
	timer = window.setInterval(function(){
		data = Number(input.value);
		if (data != a_old) {
			calc();
			a_old = Number(input.value);
		}
	},10);
}, false);

input.addEventListener("blur", function(){
	window.clearInterval(timer);
}, false);

function calc() {
	str = "";
	
	if (kakutyo == false) {
		str += "<div class=text><h4 style='margin:0 0 10px 0'>2進数：" + data.toString(2) + "</h4>";
		str += "<h4 style='margin:0 0 10px 0'>8進数：" + data.toString(8) + "</h4>";
		str += "<h4 style='margin:0 0 10px 0'>10進数：" + data.toString(10) + "</h4>";
		str += "<h4 style='margin:0 0 10px 0'>16進数：" + data.toString(16) + "</h4>";
		str += "<h4 style='margin:0 0 10px 0'>32進数：" + data.toString(32) + "</h4>";
		str += "<h4 style='margin:0 0 10px 0'>36進数：" + data.toString(36) + "</h4></div>";
	} else {
		str += "<div class=text>";
		for (var i = 2;i<=36;i++){
			str += "<h4 style='margin:0 0 10px 0'>"+ i + "進数：" + data.toString(i) + "</h4>";
		}
		str += "</div>"
	}	
	out.innerHTML = str;
}

function ext() {
	kakutyo = !kakutyo;
	if(kakutyo == true) document.getElementById('Extension').innerHTML = "簡易表示";
	else document.getElementById('Extension').innerHTML = "拡張表示";
	calc();
}