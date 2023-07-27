var htmlCode = '<center>' +
  '<span id="timeDate">正在载入...</span>' +
  '<span id="times">稍等...</span>' +
  '<br>你是第 <span id="busuanzi_value_site_uv"></span> 位萝莉 ；已被画 <span id="busuanzi_value_site_pv"></span> 次正字' +
'</center>' +
'<script>' +
  'var now = new Date();' +
  'function createtime() {' +
    'var grt = new Date("04/17/2023 00:00:00");' +
    'now.setTime(now.getTime() + 250);' +
    'var days = Math.floor((now - grt) / 1000 / 60 / 60 / 24);' +
    'var hours = Math.floor((now - grt) / 1000 / 60 / 60 - (24 * days));' +
    'var minutes = Math.floor((now - grt) / 1000 / 60 - (24 * 60 * days) - (60 * hours));' +
    'var seconds = Math.round((now - grt) / 1000 - (24 * 60 * 60 * days) - (60 * 60 * hours) - (60 * minutes));' +
    'var hnum = String(hours).padStart(2, "0");' +
    'var mnum = String(minutes).padStart(2, "0");' +
    'var snum = String(seconds).padStart(2, "0");' +
    'document.getElementById("timeDate").innerHTML = "⏱已开摆" + days + "天";' +
    'document.getElementById("times").innerHTML = hnum + "小时" + mnum + "分" + snum + "秒";' +
  '}' +
  'setInterval(createtime, 250);' +
'</script>';

document.write(htmlCode);
