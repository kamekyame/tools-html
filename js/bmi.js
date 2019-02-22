out = document.getElementById('out');
var height = prompt("身長[m]または[cm]を入力してください");
while (1) {
	if (Number(height) >= 0) break;
	else if (Number(height) < 0) {
		height = prompt("負の数は計算できません。正の数で身長[m]または[cm]を入力してください。");
	}
	else height = prompt("数字以外の文字が入力されています。半角数字で身長[m]または[cm]を入力してください。");
}
if (height > 10) {
	height /= 100;
	cmIs = true;
}
var weight = prompt("体重[kg]を入力してください");
while (1) {
	if (Number(weight) >= 0) break;
	else if (Number(weight) < 0) {
		height = prompt("0と負の数は計算できません。正の数で体重[kg]を入力してください。");
	}
	else weight = prompt("数字以外の文字が入力されています。半角数字で体重[kg]を入力してください。");
}
var bmi = weight / Math.pow(height,2);
var obesity = ((weight - (22 * Math.pow(height,2))) / (22 * Math.pow(height,2)) * 100);

var str = "<div class=text><h4>身長：" + height * 100 + "[cm]</h4>";
str += "<h4>体重：" + weight + "[kg]</h4>";
str += "<h4>BMI：" + bmi + "</h4>";
str += "<h4>肥満度：" + obesity.toFixed(2) + "[%]</h4></div>";

if (obesity < -10) str += "<br><h3>あなたの判定：<span style='color:#0000ff'>やせ</span></h3>";
else if (obesity > 20) str += "<br><h3>あなたの判定：<span style='color:#ff0000'>肥満</span></h3>";
else if (obesity >= -10 && obesity <= 20) str += "<br><h3>あなたの判定：標準</h3>";
else ;

out.innerHTML = str;