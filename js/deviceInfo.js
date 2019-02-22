out = document.getElementById('out');
var str = "";
str += '<h3>ブラウザの情報</h3><div style="margin-left:3em">';

str += '<h4>横幅 : ' + window.outerWidth + ' px</h4>';
str += '<h4>縦幅 : ' + window.outerHeight + ' px</h4>';
str += '<h4>コード名 : ' + navigator.appCodeName + '</h4>';
str += '<h4>マイナーバージョン : ' + navigator.appMinorVersion + '</h4>';
str += '<h4>ブラウザ名 : ' + navigator.appName + '</h4>';
str += '<h4>バージョン : ' + navigator.appVersion + '</h4>';
str += '<h4>言語 : ' + navigator.browserLanguage + '</h4>';
str += '<h4>cookie : ' + (window.navigator.cookieEnablet ? "利用可能" : "利用不可") + '</h4>';
str += '<h4>Java : ' + (window.navigator.javaEnablet ? "利用可能" : "利用不可") + '</h4>';
str += '<h4>プラットフォーム : ' + navigator.platform + '</h4>';
str += '<h4>非通知データ送信 : ' + (window.navigator.taintEnabled ? "可能" : "不可") + '</h4>';


str += '</div><h3>システムの情報</h3><div style="margin-left:3em">';
str += '<h4>OS : ' + window.navigator.platform + '</h4>';
str += '<h4>デフォルト言語 : ' + window.navigator.systemLanguage + '</h4>';
str += '<h4>使用言語 : ' + window.navigator.Language + '</h4>';
str += '<h4>設定されている言語 : ' + navigator.userLanguage + '</h4>';
str += '<h4>CPU情報 : ' + window.navigator.cpuClass + '</h4>';
str += '<h4>ネット接続 : ' + (window.navigator.onLine ? "オンライン" : "オフライン") + '</h4>';
str += '<h4>ネット種別 : ' + navigator.connection.type + '</h4>';
str += '<h4>ユーザーエージェント : ' + navigator.userAgent + '</h4>';


out.innerHTML = str;