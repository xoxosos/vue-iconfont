/*
 * @Author: LinRenJie
 * @Date: 2022-12-10 11:46:38
 * @LastEditTime: 2022-12-10 13:53:22
 * @Description:
 * @FilePath: \vue-demo\vueDemo\src\assets\symbol\iconfont.js
 * @Email: xoxosos666@gmail.com
 */
(window._iconfont_svg_string_3819412 =
  '<svg><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M431.616 791.04c-209.408 0-379.904-170.496-379.904-379.904 0-209.408 170.496-379.904 379.904-379.904s379.904 170.496 379.904 379.904c0 209.408-170.496 379.904-379.904 379.904z m0-693.248c-172.544 0-313.344 140.288-313.344 313.344 0 172.544 140.288 313.344 313.344 313.344 172.544 0 313.344-140.288 313.344-313.344 0-172.544-140.8-313.344-313.344-313.344z" fill="#707070" ></path><path d="M676.864 660.48l278.528 278.528c12.8 12.8 12.8 34.304 0 47.104-12.8 12.8-34.304 12.8-47.104 0L629.76 707.584c-12.8-12.8-12.8-34.304 0-47.104 12.8-12.8 34.304-12.8 47.104 0z" fill="#707070" ></path></symbol><symbol id="icon-gengduo" viewBox="0 0 1024 1024"><path d="M66.488889 211.781818h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485 0-27.397172-22.768485-49.648485-50.980202-49.648485H66.488889C38.341818 112.484848 15.508687 134.723232 15.508687 162.133333s22.833131 49.648485 50.980202 49.648485z m891.009293 248.242424H66.488889C38.277172 460.024242 15.508687 482.262626 15.508687 509.672727s22.768485 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.410101-22.923636-49.648485-50.993131-49.648485z m0 351.63798H66.488889c-28.134141 0-50.980202 22.238384-50.980202 49.648485s22.833131 49.648485 50.980202 49.648485h891.022222c28.198788 0 50.980202-22.238384 50.980202-49.648485-0.012929-27.397172-22.781414-49.648485-50.993131-49.648485z m0 0" fill="#707070" ></path></symbol></svg>'),
  (function (n) {
    var t = (t = document.getElementsByTagName("script"))[t.length - 1],
      e = t.getAttribute("data-injectcss"),
      t = t.getAttribute("data-disable-injectsvg");
    if (!t) {
      var o,
        i,
        c,
        s,
        d,
        a = function (t, e) {
          e.parentNode.insertBefore(t, e);
        };
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0;
        try {
          document.write(
            "<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>"
          );
        } catch (t) {
          console && console.log(t);
        }
      }
      (o = function () {
        var t,
          e = document.createElement("div");
        (e.innerHTML = n._iconfont_svg_string_3819412),
          (e = e.getElementsByTagName("svg")[0]) &&
            (e.setAttribute("aria-hidden", "true"),
            (e.style.position = "absolute"),
            (e.style.width = 0),
            (e.style.height = 0),
            (e.style.overflow = "hidden"),
            (e = e),
            (t = document.body).firstChild
              ? a(e, t.firstChild)
              : t.appendChild(e));
      }),
        document.addEventListener
          ? ~["complete", "loaded", "interactive"].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener("DOMContentLoaded", i, !1), o();
              }),
              document.addEventListener("DOMContentLoaded", i, !1))
          : document.attachEvent &&
            ((c = o),
            (s = n.document),
            (d = !1),
            r(),
            (s.onreadystatechange = function () {
              "complete" == s.readyState &&
                ((s.onreadystatechange = null), l());
            }));
    }
    function l() {
      d || ((d = !0), c());
    }
    function r() {
      try {
        s.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(r, 50);
      }
      l();
    }
  })(window);
