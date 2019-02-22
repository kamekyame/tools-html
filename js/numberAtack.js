var out = document.getElementById('out');
var keta = document.getElementById('keta');
var answer = document.getElementById('ans');

var compAns = 0;
var compAns_m = new Array();
var parAns_m = new Array();
var ansKaisu = 0;
var startTime = 0;
var userAns_m = "";

function madeAns() {
	compAns = 0;
	userAns_m = "";
	if (Number(keta.value) < 10) {
		for (var i = 0;i < Number(keta.value);i++){
			var flag = false;
			while (flag == false) {
				flag = true;
				compAns_m[i] = Math.floor(Math.random() * 10);
				if (compAns_m[0] == 0) flag = false;
				for (var j = 0;j < i;j++) if (compAns_m[i] == compAns_m[j]) flag = false;
			}
		}
		for (var i = 0;i < Number(keta.value);i++) compAns += compAns_m[i] * Math.pow(10,Number(keta.value - (i + 1))); 
		console.log(compAns,compAns_m);
		document.getElementById('seisei').innerHTML = "生成完了！(" + keta.value + "ケタ)";
		startTime = new Date();
		$("input").eq(2).focus();
	} else {
		document.getElementById('seisei').innerHTML = "9桁まででお願いします。";
		$("input").eq(0).focus();
	}
}

function NumberAtack() {
	var outStr = "";
	parAns = Number(answer.value);
	for (var i = 0;i < parAns.toString().length;i++) parAns_m[i] = Number(parAns.toString().charAt(i));
	ansKaisu++;
	if (parAns < compAns) outStr += "第1ヒント：小さいよ";
	else if (parAns > compAns) outStr += "第1ヒント：大きいね～";
	else {
		outStr += "正解！！！(" + ansKaisu + "回目)";
		var time = new Date() - startTime;
		outStr += "<br>所要時間：" + (time / 1000) + "秒";
	}
	if (parAns != compAns) {
		var bit = 0;
		var eat = 0;

		for (var i = 0;i < compAns.toString().length;i++) {
			for (var j = 0; j < compAns.toString().length;j++) {
				if (compAns_m[i] == parAns_m[j]) {
					if (i == j) eat++;
					else bit++;
				}
			}
		}
		userAns_m += "<h5>" + parAns + "  " + outStr + "  第2ヒント：" + eat + "EAT " + bit + "BIT</h5>";
		outStr += "<br>第2ヒント：" + eat + "EAT " + bit + "BIT<br><h4>あなたの回答履歴</h4>" + userAns_m;
	}
	out.innerHTML = outStr;
	$("input").eq(2).focus()
}
