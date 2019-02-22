Tdisable = false;
var tool = false;

var focused;

var str = "";
str += "<div class=gray>";
str += "<b class='close' style='line-height:30px;'>×閉じる(<u>T<u/>)</b>";
str += "<h3>ツール一覧</h3></div>";
var str2 = "";
str2 += "<div class=text><h5><a href='Convert_number.html'>1.各進数変換ツール</a></h5>";
str2 += "<h5><a href='multi_9_9.html'>2.九九一覧表</a></h5>";
str2 += "<h5><a href='bmi.html'>3.BMI・肥満度計算</a></h5>";
str2 += "<h5><a href='sum_ave.html'>4.合計点・平均点の計算</a></h5>";
str2 += "<h5><a href='circle.html'>5.円の半径からわかる情報</a></h5>";
str2 += "<h5><a href='fortune.html'>6.おみくじヾ(*´∀｀*)ﾉ</a></h5>";
str2 += "<h5><a href='numberAtack.html'>7.Number Atack!</a></h5>";
str2 += "<h5><a href='typing.html'>8.A~Zタイピング練習</a></h5>";
str2 += "<h5><a href='random_typing.html'>9.ランダムタイピング練習</a></h5>";
str2 += "<h5><a href='deviceInfo.html'>A.Javascriptに手取得できる各種情報</a></h5>";
str2 += "</div>";

offCanvas.innerHTML = str + str2;

var title = document.getElementById('title');
var titleStr = "<b style='float:left;line-height:30px;' class=open>←他のツール(<u>T<u/>)</b>";
titleStr += "<b style='float:right;font-size:0.8em;position: absolute;bottom: 0;right:0;margin:0 7px 7px 0;'>";
titleStr += "<img src='img/d4e08d.png' style='height:0.8em;margin:0 0.3em 0 0.3em'onClick='bgcolor(&quot;#d4e08d&quot;);'>"
titleStr += "<img src='img/8dd4e0.png' style='height:0.8em;margin:0 0.3em 0 0.3em' onClick='bgcolor(&quot;#8dd4e0&quot;);'>"
titleStr += "<img src='img/e08dd4.png' style='height:0.8em;margin:0 0.3em 0 0.3em' onClick='bgcolor(&quot;#e08dd4&quot;);'>"
titleStr += "suzutomoyashi蕪式会社</b>";
title.innerHTML = titleStr;

function bgcolor(color, init = false) {
	if (init) var color = $.cookie("color");
	else $.cookie("color", color, { expires: 365 });
	document.body.style.backgroundColor = color;	
}

( function ( $ ) {
  window.addEventListener("keydown" , function(e) {
    if (!Tdisable) {
      e.keyCode == 84 ? key = true : key = false;
      if (key) {
        document.activeElement.blur();
        controller.toggle( 'sb-left' ); // ←これを実行するためにfunction($)の中に設置
        tool = !tool;
        forcus();
        //$('input:visible').eq(0).focus();
      }//$('input:visible').eq(0).focus();
      if (tool) {
        if (e.keyCode == 0x31) window.location.href = "./Convert_number.html";
        if (e.keyCode == 0x32) window.location.href = "./multi_9_9.html";
        if (e.keyCode == 0x33) window.location.href = "./bmi.html";
        if (e.keyCode == 0x34) window.location.href = "./sum_ave.html";
        if (e.keyCode == 0x35) window.location.href = "./circle.html";
        if (e.keyCode == 0x36) window.location.href = "./fortune.html";
        if (e.keyCode == 0x37) window.location.href = "./numberAtack.html";
        if (e.keyCode == 0x38) window.location.href = "./typing.html";
        if (e.keyCode == 0x39) window.location.href = "./random_typing.html";
        if (e.keyCode == 0x41) window.location.href = "./deviceInfo.html";
      }
    }
  });
  var controller = new slidebars();
  controller.init();
  //$('input:visible').eq(0).focus();

  $( '.open' ).on( 'click', function opn( event ) {
    event.preventDefault();
    event.stopPropagation();
    tool = !tool;
    forcus();
    controller.toggle( 'sb-left' );
	} );
  $( '.close' ).on( 'click', function ( event ) {
    event.preventDefault();
    event.stopPropagation();
    tool = !tool;
    forcus();
    controller.close( 'sb-left' );
  } );
} ) ( jQuery );

function forcus() {
  if (tool) {
    focused = $(':focus').attr("id");
    document.activeElement.blur();
  } else {
    $("#" + focused).focus();
  }
}

