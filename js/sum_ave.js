out = document.getElementById('out');

var str = "";

var all = Number(prompt("何教科分の点数の合計点と平均点を表示しますか？"));

point = new Array(all);

for (i=0;i<all;i++){
	point[i] = Number(prompt((i+1) +" : 点数を入力してください"));
}
var pointAll = 0;
for (i = 0;i<all;i++) {
pointAll += point[i];
}
var pointAvr = pointAll / all;

for (i = 0;i < all;i++) {
	str += "<h5>" + (i+1) + " : " + point[i] + " 点</h5>"
}
str += "<div class=text><h4>合計：" + pointAll + " 点</h4>";
str += "<h4>平均：" + pointAvr + " 点</h4></div>";

out.innerHTML = str;
