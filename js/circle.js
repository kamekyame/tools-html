out = document.getElementById('out');

var PI = 3.14159
var radius = prompt("円の半径を入力してください。");
while (1) {
	if (Number(radius) >= 0) break;
	else if (Number(radius) < 0) {
		radius = prompt("負の数は計算できません。正の数を入力してください。");
	}
	else radius = prompt("数字以外の文字が入力されています。半角数字を入力してください。");
}
var circumference = 2 * PI * radius;
var area = PI * Math.pow(radius,2);
var inscribedSquare = Math.pow(radius, 2) * 2;

var str = "<h2 class='gray midasi'>半径 " + radius + " の円に関しての情報</h2>";
str += "<div class=text><h4>円周：" + circumference + "</h4>";
str += "<h4>面積：" + area + "</h4>";
str += "<h4>内接する正方形の面積：" + inscribedSquare + "</h4></div>";
out.innerHTML = str;
