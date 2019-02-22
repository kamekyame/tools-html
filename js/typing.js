var out = document.getElementById("out");
var answer = document.getElementById("ans");
var startBox = document.getElementById("isStart");

var mozisu = 26;
var compAns;
var ansKaisu = 0;
var inmozi = mozisu + 2;
var outStr = "";
var startTime = 0;
var miss = 0;
	 	
ansChar = new Array(mozisu);

window.addEventListener("keydown" , function(e) {
    if (inmozi < mozisu + 1) {
		var keyCode = e.keyCode;
	 	if (ansChar[inmozi] == keyCode + 32) {
			outStr += String.fromCharCode(keyCode).toLowerCase();
			inmozi++;
		} else miss++
		if (inmozi == mozisu) {
			var time = new Date() - startTime;
			startBox.innerHTML = "<h4>待機中…</h4>";
			outStr += "<br><br>終了！！！<br>" + (time / 1000) + "秒<br>";
			outStr += "総打鍵数：" + (miss + inmozi) + "回<br>";
			outStr += "ミス：" + miss + "回<br>";
			outStr += "1打鍵の平均 : " + ((time / 1000)/inmozi) + "秒";
			inmozi++;
			Tdisable = false;
		}
		out.innerHTML = outStr;
	} else {
		if (e.keyCode == 13) {
			inmozi = miss = 0;
			outStr = "";
			out.innerHTML = outStr;
			start();
		}
	}
});

function start() {
	ansStr = "";
	for (var i = 0;i < mozisu; i++) ansChar[i] = i + 0x61;
	startBox.innerHTML = "<h4>計測中…</h4>";
	outStr = "<h4>答えを入力してください</h4>";
	startTime = new Date();
	Tdisable = true;
}
/*
function juage(a) {
	for (var j = 0;j < a;j++) if (ansChar[a] == ansChar[j]) return false;
	return true;
}*/