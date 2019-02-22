var odaimozi = document.getElementById('odaimozi');
var odaisu = document.getElementById('odaisu');
var out = document.getElementById('out');
var odai = document.getElementById('odai');
var answer = document.getElementById('ans');

var mozisu = 0;
var compAns;
var ansKaisu = 0;
var inmozi = 0;
var outStr = "";
var startTime = 0;
var miss = 0;
var isStart = false;
var count = 0;
var isShift = false;
var daken = 0;
	 	
ansChar = new Array();
missChar = new Array(26);
for (var i = 0;i < 26;i++) {
	missChar[i] = 0;
}

window.addEventListener("keydown" , function(e) {
	if (isStart) {
		if (inmozi < mozisu + 1) {
			var keyCode = e.keyCode;
			console.log(keyCode,ansChar);
			if (keyCode < 0x3a);
			else if (!isShift) keyCode += 32;
			console.log(keyCode,ansChar);
			if (keyCode == 0x10) isShift = true;
			else if (ansChar[inmozi] == keyCode) {
				outStr += isShift ? String.fromCharCode(keyCode).toUpperCase() : String.fromCharCode(keyCode).toLowerCase();
				inmozi++;
				daken++;
			} else {
				if (!isShift) keyCode -= 32;
				keyCode -= 65;
				missChar[keyCode]++;
				miss++
			}
			if (inmozi == mozisu) {
				count++;
				if (count == ansKaisu) {
					var time = new Date() - startTime;
					outStr += "<br><h4>終了！！！<br>" + (time / 1000) + "秒<br>";
					outStr += "総打鍵数：" + (miss + inmozi) + "回<br>";
					outStr += "ミス：" + miss + "回<br>";
					outStr += "1打鍵の平均 : " + ((time / 1000)/daken) + "秒<br><br>";
					outStr += "間違やすい文字";
					for (var i = 0;i < 26;i++) {
						if (missChar[i] > 0) outStr += "<h5>" + String.fromCharCode(i + 65) + " : " + missChar[i] + "回</h5>";
					}
					isStart = false;
				} else {
					inmozi = 0;
					outStr = "";
					Form();
				}
			}
			out.innerHTML = outStr;
		}
	} else {
		if (e.keyCode == 13) start();
	}
});

document.onkeyup = function(e) {
	if (e.keyCode == 0x10) isShift = false;
	if (!isStart) Tdisable = false;
}

function start() {
	inmozi = miss = i = count = daken = 0;
	document.activeElement.blur();
	mozisu = Number(odaimozi.value);
	ansKaisu = Number(odaisu.value);
	outStr = "";
	out.innerHTML = outStr;
	Form();
	startTime = new Date();
	isStart = Tdisable = true;
}

function Form() {
	ansStr = "";
	for (var i = 0;i < mozisu; i++) {
		ansChar[i] = 0;
		while (ansChar[i] < 0x30 || (ansChar[i] > 0x39 && ansChar[i] < 0x41) || (ansChar[i] > 0x5a && ansChar[i] < 0x61) || ansChar[i] > 0x7a) ansChar[i] = Math.floor(Math.random() * 255);
		ansStr += String.fromCharCode(ansChar[i]);
	}
	odai.innerHTML = (count + 1) + " : " + ansStr;
}