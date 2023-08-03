var htmlCode = '<center>' +
  '<span id="timeDate">正在载入...</span>' +
  '<span id="times">稍等...</span>' +
  '<br>你是第 <span id="busuanzi_value_site_uv"></span> 位萝莉 ；已被画 <span id="busuanzi_value_site_pv"></span> 次正字' +
'</center>' +
'<script>' +
  'var now = new Date();' +
  'function createtime() {' +
  // 这里修改开站时间
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

// 这里往下建议另外开个新的js使用async异步加载，否则可能影响速度
// 比如 <script async src="https://fastly.jsdelivr.net/xxx.js"></script>

// 定义全局变量
var bszCaller, bszTag;

// 立即调用的函数表达式 (IIFE)
(function() {
  var c, d, e, a = false;
  var b = [];

  // DOM 加载完毕后执行的回调函数
  ready = function(c) {
    if (a || document.readyState === "interactive" || document.readyState === "complete") {
      c.call(document);
    } else {
      b.push(function() {
        return c.call(this);
      });
    }
    return this;
  };

  // 执行回调函数并清空回调队列
  d = function() {
    for (var a = 0, c = b.length; a < c; a++) {
      b[a].apply(document);
    }
    b = [];
  };

  // DOM 加载完毕后执行的处理函数
  e = function() {
    if (!a) {
      a = true;
      d.call(window);
      if (document.removeEventListener) {
        document.removeEventListener("DOMContentLoaded", e, false);
      } else if (document.attachEvent) {
        document.detachEvent("onreadystatechange", e);
        if (window == window.top) {
          clearInterval(c);
          c = null;
        }
      }
    }
  };

  // 添加 DOM 加载事件监听
  if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", e, false);
  } else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
      if (/loaded|complete/.test(document.readyState)) {
        e();
      }
    });
    if (window == window.top) {
      c = setInterval(function() {
        try {
          if (!a && document.documentElement.doScroll) {
            document.documentElement.doScroll("left");
          }
        } catch (b) {
          return;
        }
        e();
      }, 5);
    }
  }
})();

// 初始化 bszCaller 对象
bszCaller = {
  fetch: function(a, b) {
    var c = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
    window[c] = this.evalCall(b);
    a = a.replace("=BusuanziCallback", "=" + c);
    var scriptTag = document.createElement("SCRIPT");
    scriptTag.type = "text/javascript";
    scriptTag.defer = true;
    scriptTag.src = a;
    scriptTag.referrerPolicy = "no-referrer-when-downgrade";
    document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
  },
  evalCall: function(a) {
    return function(b) {
      ready(function() {
        try {
          a(b);
          scriptTag.parentElement.removeChild(scriptTag);
        } catch (c) {
          bszTag.hides();
        }
      });
    };
  }
};

// 请求并处理数据
bszCaller.fetch("https://counter.busuanzi.icodeq.com/?jsonpCallback=BusuanziCallback", function(a) {
  bszTag.texts(a);
  bszTag.shows();
});

// bszTag 对象
bszTag = {
  bszs: ["site_pv", "page_pv", "site_uv"],
  texts: function(a) {
    this.bszs.map(function(b) {
      var c = document.getElementById("busuanzi_value_" + b);
      if (c) {
        c.innerHTML = a[b];
      }
    });
  },
  hides: function() {
    this.bszs.map(function(a) {
      var b = document.getElementById("busuanzi_container_" + a);
      if (b) {
        b.style.display = "none";
      }
    });
  },
  shows: function() {
    this.bszs.map(function(a) {
      var b = document.getElementById("busuanzi_container_" + a);
      if (b) {
        b.style.display = "inline";
      }
    });
  }
};
