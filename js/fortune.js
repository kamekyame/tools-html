var out = document.getElementById('out');
var daiInput = document.getElementById('dai');
var tyuInput = document.getElementById('tyu');
var syoInput = document.getElementById('syo');
var sueInput = document.getElementById('sue');
var kitiInput = document.getElementById('kiti');
var kyoInput = document.getElementById('kyo');
var daikyoInput = document.getElementById('daikyo');
var kaisu = document.getElementById('kaisu');

function fortune() {
	document.getElementById( 'sound-file' ).play() ;
	out.innerHTML = "<div style='text-align:center;'><img src='img/fortune/pull.gif?" + (new Date).getTime() + "' style='max-width:50%'></div>";
	window.setTimeout(Pull, 1900);
}

function Pull() {
	var daikaku = Number(daiInput.value);
	var tyukaku = daikaku + Number(tyuInput.value);
	var syokaku = tyukaku + Number(syoInput.value);
	var suekaku = syokaku + Number(sueInput.value);
	var kitikaku = suekaku + Number(kitiInput.value);
	var kyokaku = kitikaku + Number(kyoInput.value);
	var daikyokaku = kyokaku + Number(daikyoInput.value);
	var outStr = "";
	for (var i = 0;i < Number(kaisu.value);i++) {
		var pull = Math.floor(Math.random() * daikyokaku);
		outStr += "<div style='float:left;margin:1em;'><h4>" + (i+1).toString() + " </h4>"
		if (pull < daikaku) outStr += "<img src='img/fortune/daikiti.png' style='float:left;'>";
		else if (pull < tyukaku) outStr += "<img src='img/fortune/tyukiti.png' style='float:left;'>";
		else if (pull < syokaku) outStr += "<img src='img/fortune/syokiti.png' style='float:left;'>";
		else if (pull < suekaku) outStr += "<img src='img/fortune/suekiti.png' style='float:left;'>";
		else if (pull < kitikaku) outStr += "<img src='img/fortune/kiti.png' style='float:left;'>";
		else if (pull < kyokaku) outStr += "<img src='img/fortune/kyo.png' style='float:left;'>";
		else outStr += "<img src='img/fortune/daikyo.png' style='float:left;'>";
		outStr += "</div>";
	}
	out.innerHTML = outStr;
}