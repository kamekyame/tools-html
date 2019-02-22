out = document.getElementById('out');

var str = "";
str += "<table cellpadding='5px' style='border-collapse: collapse; min-width: 950px;'width='100%'>";
for (var i = 1;i <= 9;i++) {
	str += "<tr>";
	for (var j=1;j <= 9;j++){
		var ans = i*j;
		str += "<td style='border: solid 1px #333333;text-align : center'>" + j + " × " +  i + " ＝ " + ans + "</td>";
	}
	str += "</tr>";
}
str += "</table>";
out.innerHTML = str;
