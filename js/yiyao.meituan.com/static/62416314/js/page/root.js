define('module/cookie', [], function() {
    function e(e, o) {
        var n = arguments[2] ? arguments[2] : "";
        document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + n
    }
    function o(e) {
        for (var o = e + "=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
            var i = $.trim(n[t]);
            if (0 == i.indexOf(o))
                return decodeURIComponent(i.substring(o.length, i.length))
        }
        return ""
    }
    function n(e, o, n) {
        if (n) {
            var t = new Date;
            t.setTime(t.getTime() + 1e3 * n),
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + t.toUTCString()
        } else
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/"
    }
    function t(e) {
        var n = new Date;
        n.setTime(n.getTime() - 1);
        var t = o(e);
        null != t && (document.cookie = e + "=" + t + "; path=/; expires=" + n.toUTCString())
    }
    return {
        setCookie: e,
        getCookie: o,
        setCookieEx: n,
        delCookie: t
    }
});
define('util/ubl', ["module/cookie"], function(e) {
    "use strict";
    function t() {
        var e = (new Date).getTime()
          , t = localStorage.getItem("ad_ubl_sessionid") || 0
          , i = e - t > 18e5 ? !0 : !1;
        return i && localStorage.setItem("ad_ubl_sessionid", e),
        localStorage.getItem("ad_ubl_sessionid")
    }
    $(document).delegate('.ubl[data-ubl-action="click"]', "click", function() {
        var i = e.getCookie("wmPoiId")
          , a = $(this)
          , l = a.data("ublDes") || ""
          , o = a.data("ublType") || "default"
          , c = {}
          , d = {
            nm: "mge",
            val: {
                act: "click",
                lab: {
                    element_id: l,
                    poi_id: i
                }
            }
        };
        switch (o) {
        case "ad":
            c = {
                val: {
                    val: {
                        ad_sessionid: t(),
                        ad_poiid: i
                    }
                }
            }
        }
        $.extend(!0, d, c),
        Analytics("event", d),
        "function" == typeof mta && mta("count", "click." + l)
    });
    var i = document.title
      , a = e.getCookie("wmPoiId");
    return Analytics("set", {
        visitid: e.getCookie("wmPoiId") + t(),
        cityid: e.getCookie("city_id"),
        uid: e.getCookie("acctId"),
        poi_id: a
    }),
    Analytics("send", "pv", {
        cid: i,
        val: {
            lab: {
                poi_id: a
            }
        },
        ref: localStorage.getItem("REF_PAGE_ID") || ""
    }),
    localStorage.setItem("REF_PAGE_ID", i),
    window.LXAnalyticsSG = function(e, t, i) {
        var l = {
            nm: "mge",
            val_cid: i.cid,
            val: {
                lab: {
                    poi_id: a
                }
            }
        };
        switch (e) {
        case "moduleClick":
            $.extend(!0, l, {
                val_bid: t,
                val: {
                    act: "click"
                }
            })
        }
        $.extend(!0, l.val.lab, i),
        Analytics("event", l)
    }
    ,
    {
        reportShow: function(e) {
            var t = {
                nm: "mge",
                val: {
                    act: "show",
                    lab: e,
                    val: {
                        times: 1
                    }
                }
            };
            Analytics("event", t)
        }
    }
});
define('util/template', [], function() {
    "use strict";
    var e = {}
      , t = {};
    !function(e) {
        for (var r = e.length; r--; )
            t[e[r]] = !0
    }("break,case,catch,continue,debugger,default,delete,do,else,false,finally,for,function,if,in,instanceof,new,null,return,switch,this,throw,true,try,typeof,var,void,while,with,abstract,boolean,byte,char,class,const,double,enum,export,extends,final,float,goto,implements,import,int,interface,long,native,package,private,protected,public,short,static,super,synchronized,throws,transient,volatile,arguments,let,yield".split(","));
    var r = function(e) {
        return t[e]
    };
    return function(t, n) {
        if (e[t])
            return n ? e[t](n) : e[t];
        t = t.replace(/\/\*.*?\*\/|\/\/.*?[\n\r\t]/g, "").replace(/[\r\t\n]/g, " ");
        var a = {}
          , i = "var "
          , o = t.match(/<%(.*?)%>/g).join(",").match(/[\_\$a-zA-Z]+[0-9]*/g);
        !function(e) {
            for (var t = e.length, n = ""; t--; )
                n = e[t],
                n && !r(n) && (a.hasOwnProperty(n) || (i += n + "= __data." + n + ",",
                a[n] = !0))
        }(o);
        var c = e[t] = new Function("__data",i + "__s=''; __s += '" + t.replace(/%>[\s]*<%/g, "").replace(/<%=(.*?)%>/g, "'+($1)+'").replace(/<%/g, "';").replace(/%>/g, "__s += '") + "';return __s;");
        return n ? c(n) : c
    }
});
define('tpl/tips/logistics', [], function() {
    return '           <% for(i in data){ %>               无配送员接单提醒：订单序号<a href="javascript:;" class="page-jump" data-url="/v2/order/history/r/search?searchItem=<%= data[i].dayPushOrderSeq %>">【<%= data[i].dayPushOrderSeq %>】</a>，10分钟内没有配送团队配送员接单！           <% } %>'
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('util/utils', ["module/cookie"], function(e) {
    "use strict";
    return {
        urlParams: function(e) {
            e = e || window.location.search;
            var t = {}
              , r = new RegExp("([^?=&]+)(=([^&]*))?","g");
            return e && e.replace(r, function(e, r, o, n) {
                t[r] = n
            }),
            t
        },
        getTime: function(e, t) {
            var r = t ? new Date(1e3 * t) : new Date
              , o = {
                "M+": r.getMonth() + 1,
                "d+": r.getDate(),
                "h+": r.getHours(),
                "m+": r.getMinutes(),
                "s+": r.getSeconds(),
                "q+": Math.floor((r.getMonth() + 3) / 3),
                S: r.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in o)
                new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
            return e
        },
        changeDate: function(e) {
            var t = new Date;
            t.setDate(t.getDate() + 1 - 1 * e);
            var r = t.getFullYear()
              , o = t.getMonth() + 1
              , n = t.getDate();
            return 10 > o && (o = "0" + o),
            10 > n && (n = "0" + n),
            r + "-" + o + "-" + n
        },
        getOffsetDays: function(e, t) {
            var r = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}( \\d{1,2}:\\d{1,2}:\\d{1,2})?$");
            if (!r.test(e) || !r.test(t))
                return null;
            var o = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
            o.test(e) && (e += " 00:00:00"),
            o.test(t) && (t += " 23:59:59");
            var n = new Date(e)
              , i = new Date(t);
            if (isNaN(n)) {
                var a = e.split(/[- :]/)
                  , c = t.split(/[- :]/);
                n = new Date(a[0],a[1] - 1,a[2],a[3],a[4],a[5]),
                i = new Date(c[0],c[1] - 1,c[2],c[3],c[4],c[5])
            }
            var s = n.getTime()
              , l = i.getTime();
            return s > l ? -1 : (l - s + 1e3) / 864e5
        },
        formatSecond: function(e, t, r) {
            if (0 >= e)
                return '<strong class="time">00</strong>:<strong class="time">00</strong>:<strong class="time">00</strong>';
            if (r) {
                var o = Math.floor(e / 86400)
                  , n = o > 0 ? '<strong class="time">' + o + "</strong>" : '<strong class="time">00</strong>';
                e %= 86400
            }
            var i = Math.floor(e / 3600)
              , a = i > 0 ? '<strong class="time">' + (i >= 10 ? i : "0" + i) + "</strong>" : '<strong class="time">00</strong>';
            e %= 3600;
            var c = Math.floor(e / 60)
              , s = c > 0 ? '<strong class="time">' + (c >= 10 ? c : "0" + c) + "</strong>" : '<strong class="time">00</strong>';
            e %= 60;
            var l = e > 0 ? '<strong class="time">' + (e >= 10 ? e : "0" + e) + "</strong>" : '<strong class="time">00</strong>';
            return t ? r ? n + "天" + a + "小时" + s + "分钟" + l + "秒" : a + "小时" + s + "分钟" + l + "秒" : r ? n + ":" + a + ":" + s + ":" + l : a + ":" + s + ":" + l
        },
        countDown: function(e) {
            var t = this
              , r = new Date
              , o = 0
              , n = !1
              , i = function() {
                if (!document.body.contains || document.body.contains(e.jQelem[0])) {
                    var a = Math.floor((new Date - r) / 1e3);
                    e.countStyle ? (o = e.time - a,
                    e.midTime && o <= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0))) : (o = e.time + a,
                    e.midTime && o >= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0)));
                    var c = t.formatSecond(0 > o ? 0 : o, e.chn, e.needDay);
                    return e.jQelem.html(e.txt.replace("{time}", c)),
                    0 > o ? (o = 0,
                    e.jQelem.trigger("endCount"),
                    void ("function" == typeof e.cb && e.cb())) : void setTimeout(i, 1e3)
                }
            };
            i()
        },
        setStorage: function(e, t) {
            var r = window.wmSystemApi;
            r ? (t = String(t),
            r.setStorage(e, encodeURIComponent(t))) : localStorage.setItem(e, t)
        },
        getStorage: function(e) {
            var t, r = window.wmSystemApi;
            return r ? (t = r.getStorage(e),
            t && (t = decodeURIComponent(r.getStorage(e)))) : t = localStorage.getItem(e),
            t
        },
        removeStorage: function(e) {
            var t = window.wmSystemApi;
            t ? t.setStorage(e, "") : localStorage.removeItem(e)
        },
        replaceChinese: function(e) {
            return e.replace(/[^\x00-\xff]/g, "")
        },
        checkTag: function(e) {
            return /<|>/.test(e)
        },
        showTip: function(e, t) {
            e || (e = "未知错误"),
            $().inform({
                type: t ? t : "warn",
                title: e,
                delay: e.length < 10 ? 2e3 : 200 * e.length,
                size: "large"
            })
        },
        filterShowString: function(e) {
            return e.replace(/[<>"&]/g, function(e) {
                switch (e) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case '"':
                    return "&quot;";
                case "&":
                    return "&amp;";
                default:
                    return e
                }
            })
        },
        ifAutoAccept: function(e) {
            var t = localStorage.getItem("autoAcceptWmPoiList") || "";
            if (!t)
                return !1;
            for (var r = t.split(","), o = 0, n = r.length; n > o; o++)
                if (e == r[o])
                    return !0;
            return !1
        },
        getGraphicPrintConfig: function(t) {
            try {
                t = t || e.getCookie("wmPoiId");
                var r = JSON.parse(localStorage.getItem("GraphicPrintAfterOrderAcceptConfig") || "{}");
                return r[t] || {}
            } catch (o) {}
            return {}
        },
        graphicPrintAfterOrderConfirm: function(e, t, r) {
            var o = this.getGraphicPrintConfig(t);
            if ("" + o.auto == "1") {
                var n = 0 === e.code
                  , i = "object" == typeof e.data && 1 === e.data.updateStatus;
                n && i ? (this.graphicPrint(t, r, o),
                this.reportMC("b_shangou_online_e_46grpax8_mc", "c_shangou_online_e_vbzrhmnc")) : (this.reportMC("b_shangou_online_e_28cu7gpz_mc", "c_shangou_online_e_vbzrhmnc"),
                this.ajaxWarn("接单失败", {
                    tag1: n ? "接口调用成功" : "接口调用失败"
                }, "utils.graphicPrintAfterOrderConfirm"))
            }
        },
        graphicPrint: function(e, t, r) {
            window.nw && (console.log("接单后自动A4打印"),
            window.nw.Window.open(location.protocol + "//" + location.host + "/page/printer/graphic/template?orderId=" + t + "&wmPoiId=" + e + "&copies=" + r.copies + "&printer=" + encodeURIComponent(r.printer) + "&mode=auto&callFrom=pcapi", {
                show: !1
            }))
        },
        multiply: function(e, t) {
            var r = 0
              , o = e.toString()
              , n = t.toString();
            try {
                r += o.split(".")[1].length
            } catch (i) {}
            try {
                r += n.split(".")[1].length
            } catch (i) {}
            return Number(o.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, r)
        },
        getVerifyCode: function(e, t, r) {
            var o = this;
            e.off("endCount").on("endCount", function() {
                e.text("免费获取手机动态码"),
                e.removeAttr("disabled")
            }),
            r(function() {
                e.attr("disabled", !0),
                o.countDown({
                    countStyle: !0,
                    time: 60,
                    jQelem: e,
                    txt: t
                })
            })
        },
        reportLogData: function(e, t) {
            var r = {
                nm: "mge",
                val: {
                    act: e,
                    lab: t
                }
            };
            Analytics("event", r)
        },
        changeImgUrl: function(e, t) {
            return e.indexOf("/0.0.o") > -1 && (e = e.replace("/0.0.o", "")),
            localStorage.getItem("hasSupportWebp") && (e += ".webp"),
            e += "@" + t + "w"
        },
        getPoiNickName: function() {
            var t = e.getCookie("wmPoiId")
              , r = this.getStorage("poiNickName" + t);
            if (!r) {
                var o = e.getCookie("wmPoiName") || localStorage.getItem("wmPoiName")
                  , n = e.getCookie("device_uuid").substr(-2);
                r = (-1 == t ? "总店" : o) + "客服" + n
            }
            return r
        },
        isOrNewThanChrome70: function() {
            var e = navigator.userAgent
              , t = Number((e.match(/Chrome\/(\d+)\./) || [])[1]);
            return t >= 70
        }(),
        reportPV: function(t, r, o) {
            if (!t)
                return void console.error("pv未填写cid");
            var n = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, r)
            }
              , i = $.extend({}, {
                uid: ""
            }, o);
            try {
                LXAnalytics("pageView", n, i, t)
            } catch (a) {}
        },
        reportMV: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mv未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleView", t, a, s)
            } catch (l) {}
        },
        reportMVList: function(t, r, o, n) {
            if (!t)
                return void console.error("mv未填写bid");
            var i = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            }
              , a = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleViewList", t, i, a)
            } catch (c) {}
        },
        reportMC: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mc未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleClick", t, a, s)
            } catch (l) {}
        },
        reportMC_SG: {
            setCid: function(t) {
                return t ? void e.setCookie("LX_SC_CONSTANT", t) : void console.error("mc未填写cid")
            },
            report: function(t, r, o) {
                if (!t)
                    return void console.error("mc未填写bid");
                r = r || {};
                var n = {
                    poi_id: e.getCookie("wmPoiId"),
                    order_id: r.order_id || ""
                };
                n = $.extend({}, n, r);
                var i = {
                    cid: o || e.getCookie("LX_SC_CONSTANT")
                };
                try {
                    LXAnalytics("moduleClick", t, n, i)
                } catch (a) {}
            }
        },
        addJsError: function(t, r) {
            console.warn(t),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.wmPoiId = e.getCookie("wmPoiId"),
            r.acctId = e.getCookie("acctId"),
            window.Owl.addError(t, {
                level: "warn",
                combo: !1,
                tags: r
            }))
        },
        ajaxWarn: function(t, r, o) {
            console.warn(t, o),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.userId = e.getCookie("wmPoiId"),
            window.Owl.addError("string" == typeof o ? {
                name: t,
                msg: o
            } : t, {
                level: "warn",
                category: "ajaxError",
                tags: r
            }))
        },
        versionCompare: function(e, t) {
            function r(e, t) {
                return "number" != typeof e && (e = 0),
                "number" != typeof t && (t = 0),
                e > t ? n : t > e ? i : a
            }
            var o, n = 1, i = -1, a = 0, c = String(e).split(".").map(function(e) {
                return parseInt(e)
            }), s = String(t).split(".").map(function(e) {
                return parseInt(e)
            }), l = Math.max(c.length, s.length);
            if (void 0 == e || void 0 == t)
                throw new Error;
            if (0 == e.length && 0 == t.length)
                return a;
            if (0 == e.length)
                return i;
            if (0 == t.length)
                return n;
            for (var u = 0; l > u && (o = r(c[u], s[u]),
            o == a); u++)
                ;
            return o
        },
        getStaticVersion: function(e) {
            var t;
            if ("iframe" === e) {
                if (window.sameSrc) {
                    var r = window.frames[0];
                    try {
                        t = r.VM
                    } catch (o) {
                        console.error("frame blocked")
                    }
                }
            } else
                t = window.VM;
            var n = (t || {}).STATIC_URL || ""
              , i = n.indexOf("/static");
            return n.slice(i + 8, i + 16) || ""
        },
        customReport: function(e, t) {
            if (Owl && Owl.metricManager) {
                var r = Owl.metricManager;
                t && r.setTags(t),
                r.setMetric(e, 1),
                r.report()
            }
        },
        detectCrash: function() {
            if (window.localStorage && window.performance && window.performance.memory) {
                var e = "crash"
                  , t = this
                  , r = t.getStorage(e)
                  , o = window.performance.memory;
                r && t.customReport(e, JSON.parse(r)),
                window.crash_heartbeat = function() {
                    r = {
                        memory: Math.min(Math.ceil(o.usedJSHeapSize / (o.totalJSHeapSize || 1) * 100), 100),
                        hash: location.hash.split("?")[0].replace(/\W+/g, "|")
                    },
                    t.setStorage(e, JSON.stringify(r))
                }
                ,
                window.addEventListener("beforeunload", function() {
                    t.removeStorage(e)
                }, !1)
            }
        },
        url2Cid: function() {
            var e = {
                "/v2/order/pre": "c_bd35rzn5",
                "/v2/order/reminder": "c_v48si7wf",
                "/v2/order/refund/unprocessed": "c_o1skm0jl",
                "/v2/order/change_address": "c_waimai_7hhk8b99",
                "/v2/order/history": "c_nehoktcu",
                "/v2/order/deliveryException": "c_pxn9pjfg",
                "/v2/order/compensate/unprocessed": "c_kfuonr1m"
            }
              , t = location.hash.split("?")[0].slice(0) || location.pathname;
            return e[t] || "c_nehoktcu"
        },
        _debounce: function(e, t) {
            var r = null;
            return function() {
                var o = this
                  , n = arguments;
                clearTimeout(r),
                r = setTimeout(function() {
                    e.apply(o, n)
                }, t)
            }
        },
        getLocalAllPoiList: function() {
            return "object" == typeof CommConstants && CommConstants.waimai_e_poi_list ? CommConstants.waimai_e_poi_list : JSON.parse(localStorage.getItem("localAllPoiList")) || []
        },
        ownRightReportBid: {
            beforeOrder: "b_shangou_online_e_v9x42u5d_mv",
            orderDetail: "b_shangou_online_e_fho0spxq_mv",
            orderDetailClick: "b_shangou_online_e_fho0spxq_mc",
            beforeOrdered: "b_shangou_online_e_1pi68e7q_mv",
            ordered: "b_shangou_online_e_sm8oxu53_mv"
        }
    }
});
define('widgets/tips_append', ["util/template", "tpl/tips/logistics", "util/utils", "module/cookie"], function(e, t, a, i) {
    "use strict";
    var n = function() {
        return $(".J-boards-wrapper")
    }
      , s = function(e, t) {
        e.indexOf("+") > 0 && (e = e.replace("+", " "));
        var a = document.createElement("div");
        a.innerHTML = e;
        for (var i = a.querySelectorAll("a"), n = 0, s = i.length; s > n; n++) {
            var o = i[n];
            if (-1 === o.href.indexOf("javascript") || -1 === i[n].className.indexOf("page-jump")) {
                var r = i[n].href;
                i[n].href = "javascript:void(0);",
                i[n].className += " page-jump J-close-tip",
                i[n].setAttribute("data-url", r)
            }
        }
        return e = a.innerHTML,
        $('<div class="alert alert-single wm-tips-append" role="alert"><div class="b-tip">' + e + '</div><span class="wm-tips-know color-link font-12 cursor J-close-tip" data-dismiss="alert" aria-label="Close">我知道了</span><div class="wm-tips-icon"></div></div>')
    }
      , o = function(e, t, a, i) {
        var o = n()
          , l = s(e, t)
          , c = $("#main-container");
        $("#aside");
        o && (o.empty(),
        l.appendTo(o).slideDown(),
        "function" == typeof a && a(l),
        l.find(".J-close-tip").click(function() {
            r(l, c),
            "function" == typeof i && i()
        }))
    }
      , r = function(e, t) {
        var a;
        if ("string" == typeof e) {
            var i = n();
            i && (a = i.find("." + e))
        } else
            a = e;
        a.size() > 0 && a.slideUp("normal", function() {
            a.remove()
        })
    }
      , l = function(e, t) {
        e.find(".b-tip").html(t)
    }
      , c = function(a, i) {
        var n = {
            data: a
        };
        o(e(t, n), i, null, function() {
            var e = localStorage.getItem("logistics") || "";
            e = "" != e ? JSON.parse(e) : [],
            0 != e.length && c(e, i)
        }),
        localStorage.setItem("logistics", "")
    }
      , p = function(e) {
        var t = localStorage.getItem("logistics") || "";
        t = "" != t ? JSON.parse(t) : [],
        t.push(e);
        var a = "J-logistics"
          , i = n();
        if (i) {
            var s = i.find("." + a);
            if (0 == s.size())
                c(t, a);
            else {
                var o = JSON.stringify(t);
                localStorage.setItem("logistics", o)
            }
        }
    }
      , d = function(e, t, a) {
        o(e + '<a href="javascript:;" class="page-jump J-close-tip" data-url="/v2/shop/manage/shopInfo">前去修改</a>', "", function(e) {
            e.find(".page-jump").click(function() {
                window.selectCurrentPoi(t, a, "/v2/shop/manage/shopInfo")
            })
        })
    }
      , f = function(e) {
        var t = e.totalCount
          , a = e.spanCount
          , s = e.preOrderNotifyTime
          , r = n();
        if (r) {
            var c = r.find(".J-pre-order-notify");
            if (a > 0) {
                var p = i.getCookie("wmPoiId")
                  , d = '<a href="javascript:;" data-url="/v2/order/pre" class="pre-order-notify ct-lred page-jump J-close-tip">您有' + a + "个预订单";
                d += -1 == p ? "临近送达时间" : "需" + s + "分钟内送达",
                d += "，请注意备货并配送，点击查看</a>",
                0 === c.size() ? o(d, "J-pre-order-notify", function(e) {
                    e.data("total", t),
                    e.data("span", a),
                    e.data("time", s)
                }) : (t != c.data("total") || a != c.data("span") || s != c.data("time")) && (l(c, d),
                c.data("total", t),
                c.data("span", a),
                c.data("time", s))
            } else
                c.size() > 0 && c.remove()
        }
    };
    return {
        assembleNormalTip: o,
        assembleLogisticsCancel: p,
        assembleLogisticsTimeChangedTip: d,
        assemblePreOrderCountTip: f
    }
});
define('module/interface', [], function() {
    "use strict";
    return {
        root: {
            allPoiCheck: "/poi/health/allPoiCheck",
            isB2cCheck: "/poi/health/b2cCheck",
            isMainAccount: "/api/retail/subAccount/type/query",
            isChain: "/v2/chat/im/charge/ischain",
            chatCapability: "/v2/chat/im/capability",
            imCapability: "/v2/chat/im/multi/capability",
            getPoiLogoUrl: "/v2/chat/im/shop/logo",
            chatLaunch: "/v2/chat/im/launch/",
            chatLaunchMulti: "/v2/chat/im/multi/launch/",
            imSwitch: "/v2/chat/im/sc/switch/get",
            groupChatImSwitch: "/v2/chat/im/sc/merchantusergroup/getgroupswitch",
            groupChatImUpdate: "/v2/chat/im/sc/merchantusergroup/updategroupswitch",
            imSwitchBatch: "/v2/chat/im/searchSwitch",
            updateImSwitch: "/v2/chat/im/switch/update",
            uploadImg: "/v2/chat/im/upload/image",
            getTips: "/v2/chat/im/answer/infos",
            getScTips: "/v2/chat/im/sc/answer/infos",
            containsIm: "/v2/chat/im/contains/shop",
            postPubid: "/v2/chat/im/pubid/get",
            getInprogressOrderInfo: "/v2/chat/im/order/inprogress",
            foodRecommendCapability: "/v2/chat/im/productCapability/get",
            getPubids: "/v2/chat/im/multi/pubids/get",
            getPoiIdsByPubIds: "/v2/chat/im/multi/poiids/get",
            unreplay: "/v2/chat/im/unreplay/count",
            unreplayMulti: "/v2/chat/im/multi/unreplay/count",
            getAutoSendConfig: "/v2/chat/im/sc/r/autoSendConfig/get",
            updateStatus: "/v2/chat/im/sc/w/status/update",
            setAutoSendConfig: "/v2/chat/im/sc/w/autoSendConfig/set",
            queryImgroupAccountList: "/v2/chat/im/sc/imgroup/accoutlist",
            querySmartRobotMainSwitch: "/api/retail/im/smartAutoReply/masterSwitch/get",
            updateSmartRobotMainSwitch: "/api/retail/im/smartAutoReply/masterSwitch/update",
            querySceneList: "/api/retail/im/smartAutoReply/scene/get",
            updateSceneInfo: "/api/retail/im/smartAutoReply/scene/update",
            queryNewLabel: "/api/retail/im/tag/get",
            closeNewLabel: "/api/retail/im/tag/report",
            queryShowBoxRemind: "/health/pc/deposit/queryShowBoxRemind",
            confirmShowBoxSuccess: "/health/pc/deposit/confirmShowBoxSuccess"
        },
        logon: {
            accountLogon: "/v2/logon/pass/step1/logon",
            sendSms: "/v2/logon/mobile/sendSms",
            phoneLogon: "/v2/logon/mobile",
            sendPassSms: "/v2/logon/pass/step2/sendSms",
            verify: "/v2/logon/pass/step2/verify"
        },
        index: {
            getBusinessOverview: "/v2/index/r/businessOverview",
            getPreOrderAndFeedback: "/v2/index/r/order",
            getRank: "/v2/index/r/analysis/rank",
            getCustomer: "/v2/index/r/analysis/customer",
            getPerformance: "/v2/index/r/performance",
            getCampaignNotice: "/v2/index/r/campaignNotice",
            getProCampaign: "/v2/index/r/adNotice",
            getMyCampaign: "/v2/index/r/myCampaign",
            getLearnInfo: "/v2/index/r/learning",
            getBanner: "/v2/index/r/banner",
            getAccount: "/index/r/account",
            getImgMessage: "/v2/shop/manage/speedRefund/r/message"
        },
        order: {
            sc: {
                getChangeAddressInfo: "/health/pc/order/modifyAddress/batchAddressInfo",
                submitChangeAddressReply: "/health/pc/order/modifyAddress/updateStatus",
                getChangeAddressOrderList: "/health/pc/order/modifyAddress/auditList",
                getProcessedRefund: "/sc/order/refund/processed/r/query",
                getUnprocessedRefund: "/sc/order/refund/unprocessed/r/query",
                getRefundInfo: "/sc/order/refund/r/list",
                agreeReturn: "/sc/order/refund/w/agreeReturn",
                rejectReturn: "/sc/order/refund/w/rejectReturn",
                agreeRefund: "/sc/order/refund/w/agreeRefund",
                rejectRefund: "/sc/order/refund/w/rejectRefund",
                payToUser: "/sc/order/refund/w/payFreight",
                afterSaleTime: "/sc/order/refund/afterSaleTime/r/query",
                orderExtends: "/sc/order/retail/w/extends",
                uploadToken: "/sc/retail/express/r/excel/uploadToken",
                batchDelivery: "/sc/retail/express/w/excel/upload",
                batchDeliveryList: "/sc/retail/express/r/upload/task/info",
                batchDeliveryCapbility: "/sc/retail/express/r/ability",
                batchDeliveryFailed: "/sc/retail/express/r/excel/download",
                supportMultiPartRefund: "/sc/order/retail/w/extends",
                getLogisticsplats: "/sc/retail/express/logisticsplat/get",
                setExpressTime: "/sc/retail/express/hour/set",
                reportRiderInfo: "/sc/retail/express/report/rider",
                reportLogisticsInfo: "/sc/retail/express/report/logistics",
                getWeightRefundFoodInfo: "/sc/order/refund/gRefund/foodInfo",
                calWeightRefundPrice: "/sc/order/refund/gRefund/calPrice",
                applyWeightRefund: "/sc/order/refund/gRefund/apply",
                getRefundPic: "/sc/order/refund/gRefund/pic/get",
                checkCommodityBatchInfo: "/sc/order/retail/commodity/medical/check",
                addCommodityBatchInfo: "/sc/order/retail/commodity/medical/add",
                fulfillRecordList: "/sc/order/retail/cycle/query/cyclePerformanceOrderList",
                initiateDelivery: "/sc/order/retail/cycle/initiateDelivery",
                cyclePartRefund: "/sc/order/retail/cycle/partRefund/foodInfo",
                calPartRefundPrice: "/sc/order/retail/cycle/partRefund/calPrice",
                partRefundSubmit: "/sc/order/retail/cycle/apply/partRefund",
                cycleOrderPrivacyPhone: "/sc/order/retail/cycle/query/orderPrivacyPhone"
            },
            getSendBtnBannerList: "/v2/order/receive/processed/r/pt/bannerList",
            getChangeAddressOrderCount: "/health/pc/order/modifyAddress/notifyCount",
            getRefundOrderCount: "/v2/order/history/r/refundOrderCount/notify",
            getAbnormalOrderCount: "/health/pc/order/queryUnusualCount",
            getUnprocessedReminderCnt: "/v2/order/customer/reminder/unprocessed/r/count",
            getUnprocessedReminder: "/v2/order/customer/reminder/unprocessed",
            getReminderReply: "/v2/order/customer/reminder/unprocessed/r/exlain",
            postReminderReply: "/v2/order/customer/reminder/unprocessed/w/response/v2",
            queryReminderDetail: "/v2/order/customer/reminder/list/v2",
            queryPoiFavorites: "/v2/order/receive/processed/r/favorites",
            queryriderPayment: "/v2/order/receive/processed/r/riderPayment/list/v2",
            getCommentContext: "/v2/customer/comment/context",
            getCommentSummary: "/v2/customer/commentSummary",
            getComment: "/v2/customer/comment/r/list",
            getMidbadComment: "/v2/customer/comment/r/queryMediumComment",
            getReportConfig: "/v2/customer/comment/r/report/config",
            replyComment: "/v2/order/customer/comment/w/reply",
            changeComment: "/v2/customer/comment/w/changeReply",
            getReportPermit: "/v2/customer/comment/r/permit",
            reportSave: "/v2/customer/comment/w/report",
            getReportInfo: "/v2/customer/comment/r/report/info",
            getNewOrderFromPush: "/v2/order/receive/unprocessed/r/orderFromPush/v2",
            getNewOrderFromInterval: "/v2/order/receive/unprocessed/r/ofq",
            confirmNewOrder: "/v2/order/receive/unprocessed/w/confirm",
            cancelOrder: "/v2/order/receive/unprocessed/w/cancel",
            getNewOrderCount: "/v2/order/receive/unprocessed/r/count",
            getCancelReasons: "/v2/order/receive/cancelReasons/r/get",
            newOrderReceipt: "/v2/order/receive/unprocessed/w/mreceipt",
            getOrderChargeInfo: "/v2/order/receive/r/chargeInfo",
            getOrderMedicareInfo: "/health/pc/medicare/order/amountInfo",
            hasSent: "/v2/order/receive/processed/w/sent/v2",
            sendDistribution: "/v2/order/receive/processed/w/distribute/v2",
            sendDistributionForPtGray: "/v2/order/receive/processed/w/pt/distribute",
            getDistributionStatus: "/v2/order/receive/processed/r/distribute/list/v2",
            getRefundInfo: "/v2/order/refund/list/v2",
            agreeRefund: "/v2/order/refund/unprocessed/w/agree",
            disagreeRefund: "/v2/order/refund/unprocessed/w/reject",
            getReparationInfo: "/v2/order/receive/processed/r/distribute/payment/list/v2",
            getReparationCount: "/v2/order/receive/processed/r/distribute/payment/amount/v2",
            applyReparation: "/v2/order/receive/processed/w/distribute/payment/apply/v2",
            cancelReparation: "/v2/order/receive/processed/w/distribute/payment/cancel/v2",
            acquireOrder: "/v2/order/acquire/unprocessed/r/get",
            confirmAcquiredOrder: "/v2/order/acquire/unprocessed/w/confirm/v2",
            cancelAcquiredOrder: "/v2/order/acquire/unprocessed/w/cancel/v2",
            getNewAcquiringOrderCount: "/v2/order/acquire/unprocessed/r/count",
            cancelDelivery: "/v2/order/receive/processed/w/distribute/cancel/v2",
            confirmCancelDelivery: "/v2/order/receive/processed/w/distribute/cancel/confirm/v2",
            queryProcessedOrderList: "/v2/order/receive/processed/r/query",
            queryUnprocessedCompensate: "/v2/order/compensate/unprocessed/r/query",
            queryProcessedCompensate: "/v2/order/compensate/processed/r/query",
            queryPreOrderList: "/v2/order/pre/r/query",
            getPrintOrderInfo: "/v2/order/history/r/print/info/v2",
            getHistoryOrderDetail: "/v2/order/history/r/detail/v2",
            getDistributionEvaluation: "/v2/order/receive/processed/r/distribute/evaluation/v2",
            submitDistributionEvaluation: "/v2/order/receive/processed/w/distribute/evaluation/v2",
            autoAgreeRefund: "/v2/order/refund/unprocessed/w/autoAgree/v2",
            queryHisOrderList: "/v2/order/history/r/query",
            getShippingFee: "/v2/order/receive/processed/r/distribute/shippingFee/v2",
            addTipAmount: "/v2/order/receive/processed/w/distribute/tipAmount/v2",
            getProcessedRefund: "/v2/order/refund/processed/r/query",
            getUnprocessedRefund: "/v2/order/refund/unprocessed/r/query",
            getDeliveryDistance: "/v2/order/receive/processed/r/distribute/pathDistance/v2",
            getDeliveryCancelReasons: "/v2/order/receive/processed/r/distribute/cancel/reason/v2",
            getNumAndAmount: "/v2/order/receive/r/countAndSumOfToday",
            closeGprs: "/v2/shop/systemSettings/w/closeGPRS",
            getCanceledCount: "/v2/order/receive/distribute/r/canceledCount",
            getUnprocessedCount: "/v2/order/receive/distribute/r/unprocessedCount",
            getStyle: "/v2/shop/systemSettings/r/wmPoi",
            getOrderAsyncInfos: "/v2/order/receive/processed/r/orderAsyncInfos/v3",
            recipientPhone: "/v2/order/receive/processed/r/recipientPhone/v2",
            refundAgreeOrNot: "/v2/order/refund/r/judge",
            refundAgree: "/v2/order/refund/w/agree",
            getPartRefundFoodInfo: "/v2/order/refund/partRefund/foodInfo",
            getPartRefundFoodPrice: "/v2/order/refund/partRefund/calPrice",
            applyPartRefund: "/v2/order/refund/partRefund/apply",
            rejectReason: "/v2/order/refund/unprocessed/r/rejectReason",
            completeDelivery: "/v2/order/receive/delivery/complete",
            isTipAmountGray: "/v2/order/receive/processed/w/distribute/tipAmount/grep/v3"
        },
        shop: {
            sc: {
                getReturnAddress: "/sc/address/poi/getReturnAddress",
                setReturnAddress: "/sc/address/poi/setReturnAddress",
                expressCapability: "/sc/retail/express/poiinfo/get",
                generateQrCode: "/sc/shop/generateQrCode",
                saveOrderLimit: "/v2/shop/orderLimit/w/update",
                batchSaveOrderLimit: "/v2/shop/orderLimit/w/batchUpdate",
                savePacket: "/v2/shop/packet/w/update",
                batchCheckPacket: "/v2/shop/packet/w/batchCheck",
                batchSavePacket: "/v2/shop/packet/w/batchUpdate",
                batchSaveDrugQuality: "/v2/shop/drugQuality/w/batchUpdate",
                checkModifyAuth: "/v2/shop/businessStatus/r/checkPoiContain"
            },
            changeAccountPwd: "/v2/shop/accountSettings/w/changePassword",
            verifyPwd: "/v2/shop/accountSettings/r/validateUserPass",
            msgLink: "/v2/help/msgbox/r/msglink",
            delQual: "/v2/shop/businessQualification/w/deleteQual",
            saveQual: "/v2/shop/businessQualification/w/saveQual",
            saveSound: "/v2/shop/systemSettings/w/saveReminder",
            switchMultiLog: "/v2/shop/accountSettings/w/updateMultiLog",
            saveArea: "/v2/shop/distributionSettings/w/saveArea",
            deleteArea: "/v2/shop/distributionSettings/w/deleteArea",
            deleteDeliveryPlan: "/v2/shop/distributionSettings/w/deleteDeliveryPlan",
            saveShopInfo: "/v2/shop/shopInfo/w/savePoi",
            uploadImage: "/v2/shop/businessQualification/w/uploadImage",
            poiTagList: "/v2/shop/shopInfo/r/tag",
            poiListSearch: "/v2/shop/businessStatus/r/poiListSearch",
            distinguish: "/health/pc/shop/info/distinguish",
            getTaskId: "/health/pc/shop/info/download",
            getPolling: "/health/pc/shop/info/polling",
            noOpenPrivilege: "/v2/shop/businessStatus/r/unOpenWeightPoiList",
            batchOpenShop: "/v2/shop/businessStatus/w/batchSetSelfOnline",
            batchUpdateWmPoiBusinessTimeInfo: "/v2/shop/businessStatus/w/batchUpdateWmPoiBusinessTimeInfo",
            batchSetBulletin: "/v2/shop/businessStatus/w/batchSetBulletin",
            batchSetCallCenter: "/v2/shop/businessStatus/w/batchSetCallCenter",
            batchSetAutoAcceptType: "/v2/shop/businessStatus/w/batchSetAutoAcceptType",
            batchSetStatus: "/v2/shop/businessStatus/w/batchSetStatus",
            getPrintModels: "/v2/shop/systemSettings/r/getPrintTemplate",
            getWmAcctContact: "/v2/shop/systemSettings/r/getWmAcctContact",
            bindVerifyAcctPass: "/v2/shop/accountSettings/bind/step1/verifyAcctPass",
            bindSendSms: "/v2/shop/accountSettings/bind/step2/sendSms",
            bindBindindNewPhone: "/v2/shop/accountSettings/bind/step3/bindNewPhone",
            openSendSms: "/v2/shop/accountSettings/open/step1/sendSms",
            openSmsLogin: "/v2/shop/accountSettings/open/step2/openSmsLogin",
            rebindVerifyAcctPass: "/v2/shop/accountSettings/rebind/step1/verifyAcctPass",
            rebindSendSms: "/v2/shop/accountSettings/rebind/step1/sendSms",
            rebindVerifyBindPhone: "/v2/shop/accountSettings/rebind/step1/verifyBindPhone",
            rebindIsBindByOtherAcct: "/v2/shop/accountSettings/rebind/step2/isBindByOtherAcct",
            rebindSendNewSms: "/v2/shop/accountSettings/rebind/step2/sendSms",
            rebindBindNewPhone: "/v2/shop/accountSettings/rebind/step3/bindNewPhone",
            updateNewDeviceVerify: "/v2/shop/accountSettings/w/updateNewDeviceVerify",
            contractList: "/v2/shop/contract/r/list",
            contractListAgent: "/v2/shop/contract/r/C2list",
            batchVerify: "/v2/campaign/shopActivity/w/batchVerify",
            kickByDeviceUuid: "/v2/logon/kickByDeviceUuid",
            logonHistory: "/v2/logon/history",
            logonHistorySelf: "/v2/logon/history/self",
            isNeedAudit: "/v2/shop/distributionSettings/r/isNeedAudit",
            getOptionalLogos: "/v2/shop/shopInfo/r/getPicLists",
            getLogoInfo: "/v2/shop/shopInfo/r/poiPicUrl",
            uploadLogoPic: "/v2/shop/shopInfo/w/savePoiPic",
            updateStoreInfo: "/v2/shop/shopInfo/w/update/shopName",
            canModify: "/v2/shop/shopInfo/r/check/canModify",
            getCategoryCell: "/v2/shop/shopInfo/r/get/cates",
            getPoiQrCode: "/sc/shop/poi/address/qrCode/get",
            getSpeedRefundDataForSingle: "/v2/shop/manage/speedRefund/r/data/poi",
            openSpeedRefundForSingle: "/v2/shop/manage/speedRefund/w/open",
            closeSpeedRefundForSingle: "/v2/shop/manage/speedRefund/w/close",
            getSpeedRefundDataForAll: "/v2/shop/manage/speedRefund/r/data/poiList",
            getSpeedRefundListForAll: "/v2/shop/manage/speedRefund/r/list",
            openSpeedRefundForAll: "/v2/shop/manage/speedRefund/w/open/batch",
            closeSpeedRefundForAll: "/v2/shop/manage/speedRefund/w/close/batch",
            uploadBase64: "/v2/shop/decoration/w/upload/base64",
            getFeedbackRecord: "/bizdata/businessStatisticsV2/feedback/getFeedbackRecord",
            feedback: "/bizdata/businessStatisticsV2/feedback/likePage",
            tabPaneList: "/v2/shop/decoration/r/queryCategory",
            templateList: "/v2/shop/decoration/r/queryTemplate",
            goUpdate: "/v2/shop/manage/distributionSettings/upgrade",
            closeDispatcher: "/v2/shop/manage/distributionSettings/closeDispatcher",
            getPrintType: "/api/printType/get",
            setPrintType: "/api/printType/set",
            setPrintIsGray: "/api/retail/receipt/template/refactor/isGray",
            queryCustomerConfig: "/v2/chat/im/sc/brand/consult/config/query",
            setMessageShuntStatus: "/v2/chat/im/sc/brand/consult/config/offline/update",
            checkPoi: "/api/retail/subAccount/poi/check",
            checkAccount: "/api/retail/subAccount/account/name/check",
            isB2cPoi: "/health/pc/merchant/shop/isB2cPoi",
            getPoiAddressInfo: "/health/pc/merchant/storeaddress",
            getPoiModifyStatus: "/health/pc/merchant/coordinate/button",
            poiModifySubmit: "/health/pc/merchant/coordinate/update",
            getPoiDeliveryType: "/health/pc/merchant/deliveryType",
            getPoiAddressDisplay: "/health/pc/merchant/coordinate/show",
            getPoiType: "/health/pc/merchant/getPoiType",
            showCustomsDeclare: "/health/pc/shop/whitePoi",
            saveCustomsDeclare: "/health/pc/shop/customs/save",
            getCustomsDeclareInfo: "/health/pc/shop/customs/get",
            getCustomsPortsList: "/health/pc/shop/customs/getPort",
            queryPoiOpenStatistics: "/health/center/shop/delivery/queryPoiOpenStatistics",
            queryMultiStoreDeliveryInfo: "/health/center/shop/delivery/queryMultiStoreDeliveryInfo",
            batchUpdate: "/health/center/shop/delivery/dynamicPrice/batchUpdate",
            queryProcessingProgress: "/health/center/shop/delivery/dynamicPrice/batchUpdate/polling"
        },
        productManage: {
            sc: {
                searchMedicine: "/v2/product/medicine/search",
                getMedicineCategories: "/v2/product/medicine/getCategories"
            },
            spuList: "/reuse/product/food/r/spuList",
            searchByName: "/reuse/product/food/r/searchByName"
        },
        help: {
            getSuggest: "/v2/feedback/r/list",
            addSuggest: "/v2/feedback/w/add",
            replySuggest: "	/v2/feedback/w/reply"
        },
        common: {
            getServerTime: "/v2/order/pre/r/unixTime",
            ajaxExceptionReport: "/api/log/exception/w/report",
            postHearbeatRestLog: "/v2/common//heartbeat/w/log",
            getAutoAcceptCount: "/v2/shop/systemSettings/r/getAutoAcceptCount",
            getBusinessStatus: "/common/businessStatus",
            getIfBusy: "/v2/common/status/r/ifBusyStatus",
            getExceptionInfo: "/index/unprocessed/r/ErrorMsgInfo",
            transcoding: "/v2/common/query/transcoding",
            getSearchTag: "/api/retail/v3/order/getSearchTag"
        },
        pc: {
            report: "/v2/pc/report/log/info"
        }
    }
});
define('module/sys_api', ["module/cookie"], function(e) {
    var n = window.wmSystemApi
      , t = n && n.getAppInfo && n.getAppInfo();
    if (n) {
        var o = function(o) {
            if (t.code >= 4010)
                n.getDeviceReportData().then(function(e) {
                    o({
                        sys: e.sys,
                        usb: e.usb,
                        appVersion: t.code
                    })
                });
            else if (t.code < 4e3) {
                var a = function(e, o) {
                    var a = "";
                    n.createCommand(function(e) {
                        "out" === e.type && (a += e.str),
                        "close" === e.type && o && o(a)
                    }).execute(t.exePath + '\\AppDiagnose.exe "/command:' + e + '"')
                }
                  , i = [{
                    type: "sys",
                    command: "sys",
                    deal: function(e) {
                        return e ? e.replace(/修补程序[^\n]*\n(\s+[^\n]*\n)*/g, "") : ""
                    }
                }, {
                    type: "usb",
                    command: "usb /title:name"
                }]
                  , s = 0
                  , c = function(t) {
                    var p = i[t];
                    a(p.command, function(t) {
                        if (p.data = p.deal ? p.deal(t) : t,
                        ++s < i.length)
                            c(s);
                        else {
                            var a = {
                                wmPoiId: e.getCookie("wmPoiId")
                            };
                            $(i).each(function() {
                                a[this.type] = this.data
                            });
                            var f = n && n.getAppInfo && n.getAppInfo();
                            a.appVersion = f && f.code || 0,
                            "function" == typeof o && o(a)
                        }
                    })
                };
                c(s)
            }
        };
        return {
            sys: n,
            appInfo: t,
            getSysInfo: o
        }
    }
    return null
});
define('module/page_jump', [], function() {
    function t() {
        return window.topWindow ? window : parent
    }
    function o(t) {
        var o = t.replace(/(http|https):\/\//, "")
          , e = location.host + "/#";
        return o.startsWith(e)
    }
    return $(document).delegate(".page-jump", "click", function() {
        var o = t()
          , e = o.location.hash.substr(1)
          , a = $(this).data("url")
          , n = $(this).data("medicine-url")
          , i = $(this).data("selectLabel");
        "medicine" == window.CommConstants.shopCate && n && (a = n),
        i && localStorage.setItem("selectLabel", i),
        o.location.hash = a,
        a === e && "function" == typeof o.goPager && o.goPager()
    }),
    {
        go: function(o) {
            var e = t()
              , a = e.location.hash.substr(1)
              , n = o;
            if (e.location.hash = o,
            n === a) {
                var i = localStorage.getItem("nojump");
                localStorage.removeItem("nojump"),
                "true" != i && e.location.reload()
            }
        },
        goMessage: function(t) {
            t && (o(t) ? parent.location.href = t : this.go("/v2/shop/msgbox/wrap?redirect=" + encodeURIComponent(t)))
        }
    }
});
define('widgets/normal_dialog', ["module/page_jump"], function(a) {
    return function(n) {
        function t() {
            u && (clearInterval(u),
            u = null)
        }
        function s(a) {
            if (_) {
                var n = h.eq(a).data("resource-id");
                r.reportMV("b_shangou_online_e_enjmt6gt_mv", v, {
                    resourceId: n
                })
            }
        }
        var e = 5e3
          , o = n.size ? "modal-" + n.size : "modal-sm"
          , i = n["class"] ? n["class"] : ""
          , l = n.bannerList
          , d = n.bannerSize || 0
          , r = n.utils || null
          , c = '<div class="modal ' + i + '" role="dialog" aria-labelledby="normalModalLabel"' + (n.id ? ' id="' + n.id + '"' : "") + '><div class="modal-dialog ' + o + '" role="document"><div class="modal-content">';
        if (c += n.noHeader ? '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute;top: 10px;right: 10px;z-index: 999;"><span aria-hidden="true">×</span></button>' : '<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button><h5 class="modal-title" id="normalModalLabel">' + n.title + "</h5></div>",
        c += '<div class="modal-body">' + n.content + '</div><div class="modal-footer">' + (n.btns[0] ? '<button type="button" class="btn btn-primary J-confirm ' + (n.btns[0]["class"] || "") + '">' + n.btns[0].txt + "</button>" : "") + (n.btns[1] ? '<button type="button" class="btn btn-default J-cancel ' + (n.btns[1]["class"] || "") + '" data-dismiss="modal">' + n.btns[1].txt + "</button>" : "") + "</div>",
        d) {
            c += '<div class="J-modal-banner css-modal-banner">' + l + '<div class="offset">';
            for (var b = 0; d > b; b++)
                c += '<span data-index="' + b + '" class="JS-banner-offset"></span>';
            c += "</div></div>"
        }
        c += "</div></div></div>";
        var u = null
          , m = $(c);
        m.find(".J-confirm").on("click", function() {
            n.btns[0] && n.btns[0].fn ? n.btns[0].fn() : "",
            t()
        }),
        m.find(".J-cancel").on("click", function() {
            n.btns[1] && n.btns[1].fn ? n.btns[1].fn() : "",
            m.modal("hide"),
            t()
        }),
        m.on("hide.bs.modal", function(a) {
            n.onClose && n.onClose(),
            m.remove(),
            t()
        });
        var f = m.find(".modal-dialog");
        if (d && r) {
            var v = r.url2Cid()
              , p = m.find(".J-modal-banner ul")
              , h = m.find(".J-modal-banner li")
              , g = m.find(".JS-banner-offset");
            g.eq(0).addClass("active"),
            h.on("click", function() {
                var n = $(this).data("link")
                  , t = $(this).data("resourceId");
                n && (a.go(n),
                r.reportMC("b_shangou_online_e_enjmt6gt_mc", v, {
                    resourceId: t
                }))
            });
            var C = 1
              , _ = !0;
            u = setInterval(function() {
                C === d && (C = 0,
                _ = !1),
                g.removeClass("active"),
                g.eq(C).addClass("active"),
                s(C);
                var a = -78 * C;
                p.css("transform", "translateY(" + a + "px)"),
                C++
            }, e),
            g.on("click", function() {
                C = $(this).data("index"),
                g.removeClass("active"),
                $(this).addClass("active");
                var a = -78 * C;
                p.css("transform", "translateY(" + a + "px)")
            }),
            s(0)
        }
        return m.modal("show"),
        f.css("margin-top", ($(window).height() - f.height()) / 2),
        m
    }
});
define('widgets/get_poilist', ["util/utils"], function(o) {
    function i(i, a) {
        a = a || {},
        "function" != typeof i && (i = function() {}
        );
        var s = o.getLocalAllPoiList();
        a.force || !t.hasLoadPoiList && !t.isLoadingPoiList || !s ? (t.isLoadingPoiList = !0,
        $.ajax({
            url: "/api/poi/poiList",
            type: "POST",
            success: function(s) {
                if (0 === s.code) {
                    try {
                        localStorage.setItem("localAllPoiList", JSON.stringify(s.data))
                    } catch (e) {
                        o.customReport("poiListMaximumLengthExceed", {
                            url: "/api/poi/poiList",
                            acctId: CommConstants.waimai_e_acctId,
                            isInApp: CommConstants.IS_IN_APP
                        })
                    }
                    i(s.data),
                    CommConstants.waimai_e_poi_list = s.data,
                    getShopCate && (CommConstants.shopCate = getShopCate(CommConstants.waimai_e_wmPoiId)),
                    t.hasLoadPoiList = !0,
                    t.isLoadingPoiList = !1
                } else
                    localStorage.removeItem("localAllPoiList"),
                    t.isLoadingPoiList = !1,
                    a.showError !== !1 && o.showTip("加载门店列表失败，请稍后重试")
            },
            error: function() {
                localStorage.removeItem("localAllPoiList"),
                t.isLoadingPoiList = !1,
                a.showError !== !1 && o.showTip("加载门店列表失败，请稍后重试")
            }
        })) : i(s || [])
    }
    var t = window;
    return top !== self ? t = parent : (localStorage.removeItem("localAllPoiList"),
    t.hasLoadPoiList = !1,
    t.isLoadingPoiList = !1),
    i
});
define('module/root/account_role_permission', ["module/cookie"], function(e) {
    function o() {
        for (var e = 0; e < t.length; e++) {
            var o = t[e].id
              , a = t[e].status;
            a && i.indexOf(o) > -1 ? $("[data-role=" + o + "]").show() : !a && n.indexOf(o) > -1 && $("[data-role=" + o + "]").hide()
        }
    }
    var t = []
      , i = []
      , n = [3002]
      , a = e.getCookie("wmPoiId")
      , d = e.getCookie("acctId")
      , c = e.getCookie("token")
      , r = e.getCookie("device_uuid");
    return "food" != CommConstants.shopCate && $.ajax({
        type: "GET",
        url: "/sc/retail/account/r/permissions",
        data: {
            wmPoiId: a,
            poiId: a,
            acctId: d,
            deviceUuid: r,
            token: c
        },
        success: function(e) {
            0 == e.code && (t = e.data,
            o())
        }
    }),
    {
        getPermission: function(e) {
            var o = t.filter(function(o) {
                return o.id == e
            });
            return !o[0] || o[0] && 1 == o[0].status
        },
        checkPermission: o
    }
});
define("module/root/custom_menu", ["module/cookie"], function(e) {
    var t = location.host
      , o = "//portal-portm.meituan.com/test/shangou/hot-replace/menu";
    -1 === t.indexOf("test") && -1 === t.indexOf("st") && (o = "//portal-portm.meituan.com/shangou/hot-replace/menu");
    var n = null
      , i = e.getCookie("wmPoiId")
      , u = function() {
        $.ajax({
            url: o,
            type: "GET",
            success: function(e) {
                e && (n = e)
            }
        })
    }
      , r = function(e) {
        var t = e.split("?")[0];
        if (!n)
            return void u();
        if (t)
            if (-1 == i) {
                if (n.all)
                    return n.all[t]
            } else if (n.single)
                return n.single[t]
    };
    return u(),
    {
        init: u,
        getCustomHash: r
    }
});
define('module/root/head_nav', ["util/ubl", "module/cookie", "widgets/tips_append", "module/interface", "util/utils", "module/sys_api", "module/page_jump", "widgets/normal_dialog", "widgets/get_poilist", "module/root/account_role_permission", "module/root/custom_menu"], function(t, e, i, a, o, s, n, l, c, r, u) {
    "use strict";
    function p() {
        var t = [];
        $.each(S, function(e, i) {
            e > 19 || (-1 == i.id ? t.push('<li id="-1">' + i.poiName + "</li>") : t.push(m(i)),
            I.empty().html(t.join("")))
        })
    }
    function m(t) {
        var e = ""
          , i = ""
          , a = ""
          , o = t.kangarooPackageInfo || {}
          , s = o.status
          , n = o.version
          , l = ""
          , c = "";
        return i = 0 === t.status ? "待设置" : t.businessDesc,
        "营业中" !== i && (a = "no-open"),
        (10 === s || 20 === s) && (20 === s ? l = "/static/62416314/imgs/kanOver.webp" : "v1" === n ? l = "/static/62416314/imgs/kanV1.webp" : "v2" === n ? l = "/static/62416314/imgs/kanV2.webp" : "v3" === n && (l = "/static/62416314/imgs/kanV3.webp"),
        c = '<img src="' + l + '" class="kangaroo-status">'),
        e = '<li id="' + t.id + '" class="' + a + '" title="' + t.poiName + '">' + c + "<span>" + t.poiName + '</span><b class="font-12">' + i + "</b></li>"
    }
    function h(t) {
        t.wmPoiId = v,
        $.ajax({
            type: "POST",
            url: "/api/log/pc/report",
            data: t
        })
    }
    function f(t, e) {
        var i;
        return i = t.replace(/(^\s+)|(\s+$)/g, ""),
        "g" == e.toLowerCase() && (i = i.replace(/\s/g, "")),
        i
    }
    function _(t) {
        return o.checkTag(t) || !t ? (o.showTip("输入不能为空或包含特殊字符"),
        !1) : !0
    }
    function d(t) {
        if (CommConstants.IS_LIANSUO && !/^1\d{3,10}$/.test(t))
            return void o.showTip("请输入手机号查询");
        var e = ""
          , i = Math.random();
        e = "/v2/order/history/r/search?searchItem=" + f(t, "g") + "&random=" + i,
        k.tagList && k.tagList.length && (e = C + "/searchItem=" + f(t, "g") + "&random=" + i),
        document.location.hash = e
    }
    var g, b;
    s && (g = s.sys,
    b = s.appInfo);
    var v = e.getCookie("wmPoiId")
      , w = !1
      , C = "/page/order#/order/allHistory/r/search"
      , k = new Vue({
        el: "#J-search-tag",
        template: "#searchTagPanel",
        data: {
            showSearchTag: !1,
            tagList: [],
            currentTag: ""
        },
        watch: {
            showSearchTag: function() {
                this.showSearchTag && this.setMatchTag()
            }
        },
        created: function() {
            this.getSearchTag()
        },
        methods: {
            setMatchTag: function() {
                var t = document.location.hash.match(/\/tagId=(.*?)&/);
                t && t.length > 1 ? this.currentTag = t[1] : this.currentTag = -1
            },
            getSearchTag: function() {
                var t = this;
                $.post(a.common.getSearchTag, {
                    poiId: e.getCookie("wmPoiId"),
                    acctId: e.getCookie("acctId")
                }, function(e) {
                    0 == e.code && (t.tagList = e.data)
                })
            },
            confirmSearch: function(t) {
                if (M && M.val(""),
                this.tagList && this.tagList.length && void 0 !== t.tagId) {
                    var e = Math.random()
                      , i = C + "/tagId=" + t.tagId + "&random=" + e;
                    this.currentTag = t.tagId,
                    this.showSearchTag = !1,
                    document.location.hash = i
                }
            }
        }
    })
      , T = $("#J-poi-dropdown")
      , S = []
      , x = T.find(".input-key")
      , I = T.find(".J-wm-poi-list");
    $(".J-change-poi-wrapper").on("mouseenter", function() {
        c(function(t) {
            S = t,
            p()
        })
    }),
    x.keyup(function() {
        var t = x.val();
        if ("" == $.trim(t))
            p();
        else {
            var e = [];
            $.each(S, function(i, a) {
                a.poiName.indexOf(t) > -1 && "-1" != a.id && e.push(m(a))
            }),
            0 == e.length && e.push("<li>没有搜到相关的门店</li>"),
            I.empty().html(e.join(""))
        }
    }),
    function() {
        var t = function() {
            var t = $(".J-kangaroo-status");
            $.ajax({
                url: "/api/poi/poiStatus",
                type: "GET",
                data: {
                    wmPoiId: v
                },
                success: function(e) {
                    if (0 === e.code) {
                        var i = e.data || {}
                          , a = i.status
                          , o = i.version || ""
                          , s = i.name || ""
                          , n = i.url || ""
                          , l = ""
                          , c = "";
                        $(".J-ad-url").attr("data-url", n),
                        (10 === a || 20 === a) && (20 === a ? (l = "/static/62416314/imgs/kanOver.webp",
                        c = "您的袋鼠店长已过期，去续费") : (t.removeClass("box J-box"),
                        c = "袋鼠店长 - " + s,
                        "v1" === o ? l = "/static/62416314/imgs/kanV1.webp" : "v2" === o ? l = "/static/62416314/imgs/kanV2.webp" : "v3" === o && (l = "/static/62416314/imgs/kanV3.webp"),
                        t.attr("data-original-title", c).tooltip()),
                        $(".J-kangaroo-home img").attr("src", l),
                        $(".J-kangaroo-home").show(),
                        $('.J-wm-poi-list li[id="' + v + '"] img').attr("src", l))
                    }
                }
            })
        };
        t(),
        window.addEventListener("message", function(e) {
            var i = e.data || {};
            "update-kangaroo-rights" === i.action && (t(),
            c(function(t) {
                S = t
            }, {
                force: !0,
                showError: !1
            }))
        })
    }(),
    $(document).on("click", ".J-wm-poi-list li", function() {
        var t = $(this)
          , e = t.attr("id");
        S.forEach(function(t) {
            if (t.id == e) {
                var i = t.id
                  , a = t.status
                  , o = t.poiName.replace(/[\r\n]/gi, "");
                -1 !== o.indexOf("'") && (o = o.replace(/'/g, "\\'")),
                selectCurrentPoi(i, o, "", a)
            }
        }),
        parent.postMessage(JSON.stringify({
            type: "COMM_PROTOCOL",
            refresh: !0
        }), "*"),
        o.reportMC("b_shangou_online_e_bphnz1v3_mc", "c_shangou_online_e_c15oulll")
    });
    var y = 0;
    $(".J-change-status-wrapper").on("mouseenter", function() {
        y = setTimeout(function() {
            $.post(a.common.getBusinessStatus, {
                wmPoiId: v
            }, function(t) {
                0 == t.code ? (J(t),
                o.reportMV("b_waimai_e_0xagmzhd_mv", "c_waimai_e_fa4ps4ng", {
                    is_delivery_temp_biz_hour_effective: w
                })) : (t.code = 1007) && window.location.reload()
            })
        }, 200)
    }),
    $(".J-change-status-wrapper").on("mouseleave", function() {
        clearTimeout(y)
    });
    var P = null;
    $(".J-box").hover(function() {
        var t = $(this);
        P = setTimeout(function() {
            t.addClass("show")
        }, 100)
    }, function() {
        $(this).removeClass("show"),
        clearTimeout(P)
    }),
    $(".J-change-status-wrapper").on("hide.bs.dropdown", function() {
        var t = $(this).find(".fa");
        t.removeClass("fa-chevron-up").addClass("fa-chevron-down")
    }),
    window.selectCurrentPoi = function(t, i, a, o) {
        var s, n = e.getCookie("wmPoiId");
        if (n != t && (localStorage.setItem("fromPoiChange", !0),
        (-1 == t || -1 == n) && (s = u.getCustomHash(location.hash.substr(1)))),
        0 > t)
            return e.setCookie("wmPoiId", t, new Date((new Date).getTime() + 2592e6).toUTCString()),
            e.delCookie(""),
            s && (document.location.hash = s),
            void location.reload(!0);
        if (e.setCookie("isOfflineSelfOpen", 0 == o ? 1 : 0),
        $("#select_poi_button_text").text(i),
        e.setCookie("wmPoiId", t, new Date((new Date).getTime() + 2592e6).toUTCString()),
        e.setCookie("wmPoiName", i),
        e.setCookie("shopCategory", ""),
        e.setCookie("logistics_support", ""),
        a)
            document.location.hash = a;
        else {
            var l = location.hash.substr(1)
              , c = l.split("?")[0];
            c.match("/reuse/product/medicine/r/list") ? document.location.hash = "/foods/list" : s && (document.location.hash = s)
        }
        location.reload(!0)
    }
    ,
    window.changeStatus = function(t) {
        var i = l({
            title: "切换营业状态",
            content: "确认切换营业状态？",
            btns: [{
                txt: "确认",
                fn: function() {
                    $.post("/api/poi/change_status", {
                        wmPoiId: e.getCookie("wmPoiId"),
                        token: e.getCookie("token"),
                        status: t
                    }, function(e) {
                        var a = e.data || {};
                        if (0 === e.code) {
                            var s = 1 == t ? "营业中" : "已停止营业"
                              , c = a.strWmPoiStatusDesc || s
                              , r = a.goodsCheckCode
                              , u = a.goodsCheckDesc || {}
                              , p = u.lineOne || ""
                              , m = u.lineTwo || ""
                              , h = "<div>" + p + "</div><div>" + m + "</div>";
                            if (-1 === r)
                                var f = l({
                                    title: "温馨提示",
                                    content: h,
                                    btns: [{
                                        txt: "设置商品",
                                        fn: function() {
                                            n.go("/v2/shop/productManage"),
                                            f.modal("hide")
                                        }
                                    }, {
                                        txt: "稍后设置",
                                        fn: function() {
                                            f.modal("hide")
                                        }
                                    }]
                                });
                            else
                                $("#select_poi_status_button_text").text(c)
                        } else
                            o.showTip(e.msg, "error");
                        i.modal("hide")
                    })
                }
            }, {
                txt: "取消"
            }]
        });
        3 == t && o.reportMC("b_shangou_online_e_fem8f9ft_mc", "c_shangou_online_e_y888u7e7", {
            is_delivery_temp_biz_hour_effective: w
        }),
        1 == t && o.reportMC("b_shangou_online_e_03yw8idj_mc", "c_shangou_online_e_y888u7e7", {
            is_delivery_temp_biz_hour_effective: w
        })
    }
    ;
    var J = function(t) {
        var i = t.status
          , a = t.subStatus
          , s = t.shippingTimeDesc
          , l = t.wmPoiStatusDesc || ""
          , c = t.restType || 0
          , u = t.restDesc || ""
          , p = t.restTime || ""
          , m = t.statusRestoreMaxTime || "";
        $("#J-business-hour").text("营业时间：" + s),
        $("#select_poi_status_button_text").text(l),
        $("#wmPoiStatusDiv").html("");
        var h = CommConstants.shopCategoryObj.shopG;
        w = t.hasSpecialShippingTime,
        t.hasSpecialShippingTime && 0 === $(".J-change-status-wrapper .notice").length ? $('<span class="notice"><i></i></span>').insertAfter("#select_poi_status_button_text") : t.hasSpecialShippingTime || $(".J-change-status-wrapper .notice").remove();
        var f = '<button class="pull-right  btn btn-default btn-sm" ' + ("food" == CommConstants.shopCate || r.getPermission(3001) ? "" : "disabled") + ' onclick="changeStatus(3)">停止营业</button>'
          , _ = '<button class="pull-right  btn btn-default btn-sm page-jump" ' + ("food" == CommConstants.shopCate || r.getPermission(3001) ? "" : "disabled") + ' data-url="/v2/shop/manage/shopInfo">营业调整</button>'
          , d = '<button class="pull-right  btn btn-default btn-sm" ' + ("food" == CommConstants.shopCate || r.getPermission(3001) ? "" : "disabled") + ' onclick="changeStatus(1)">恢复营业</button>';
        if (t.statusDescInfo) {
            var g = 3 == i || 1 == i && 4 == a ? " block-warn" : ""
              , b = ""
              , v = ""
              , C = !0;
            "food" == CommConstants.shopCate || r.getPermission(3001) || (C = !1),
            3 == i && (void 0 === c || 0 === c || 2 === c ? (b = '<li class="clearfix">' + d + '<p class="pull-left status-tip">恢复营业后，系统会根据营业时间自动切换营业中、已打烊状态。</p></li>',
            C = !1) : (1 === c || 3 === c) && (b = '<li class="clearfix"><button class="pull-right btn btn-primary btn-sm unable" disabled>恢复营业</button><p class="pull-left status-tip">提前恢复营业需联系业务经理。</p></li>')),
            1 == i && (b = '<li class="clearfix">' + f + '<p class="pull-left status-tip">停业后，门店将不再接收新订单，不再会自动恢复营业。</p></li>',
            (2 == a || 4 == a) && (v = '<li class="clearfix">' + _ + '<p class="pull-left status-tip">如您期望调整当前营业状态，可更改营业时间、预订设置</p></li>')),
            C && ($("#J-business-hour").append('<span class="J-goto-shopinfo edit"><i class="fa fa-edit"></i>编辑</span>'),
            $("#J-business-hour").find(".J-goto-shopinfo").bind("click", function() {
                o.reportMC("b_waimai_e_vvmjq8uu_mc", "c_waimai_e_fa4ps4ng", {
                    is_delivery_temp_biz_hour_effective: w
                }),
                n.go("/v2/shop/manage/shopInfo")
            })),
            $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 block-normal ' + g + '">' + l + '</b><p class="pull-left status-tip">' + t.statusDescInfo + "</p></li>" + b + v + "<hr>")
        } else
            1 == i && (0 == a ? $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 mt10 block-normal">营业中</b><p class="pull-left status-tip">当前' + h + '处于设置的营业时间内，正常接受新订单</p></li><li class="clearfix">' + f + '<p class="pull-left status-tip">适用于较长时间停止提供服务，不接受任何订单，手动恢复营业后可正常接受订单</p></li><hr>') : 2 == a ? $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 mt10 block-normal">仅接受预订</b><p class="pull-left status-tip">当前' + h + '处于设置的营业时间外，且设置了接受预订单，新订单会以预订单的形式提示</p></li><li class="clearfix">' + f + '<p class="pull-left status-tip">适用于较长时间停止提供服务，不接受任何订单，手动恢复营业后可正常接受订单</p></li><li class="clearfix">' + _ + '<p class="pull-left status-tip">如您期望调整当前营业状态，可更改营业时间、预订设置</p></li><hr>') : 4 == a && $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 mt10 block-normal block-warn">待开始营业</b><p class="pull-left status-tip">当前' + h + "处于设置的营业时间外，网站上会显示" + h + '休息中</p></li><li class="clearfix">' + f + '<p class="pull-left status-tip">适用于较长时间停止提供服务，不接受任何订单，手动恢复营业后可正常接受订单</p></li><li class="clearfix">' + _ + '<p class="pull-left status-tip">如您期望调整当前营业状态，可更改营业时间、预订设置</p></li><hr>')),
            3 == i && (void 0 === c || 0 === c || 2 === c ? $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 mt10 block-normal block-warn">停止营业中</b><p class="pull-left status-tip">当前' + h + '处于较长时间停止提供服务，不接受任何订单，手动恢复营业后可正常接受订单</p></li><li class="clearfix">' + d + '<p class="pull-left status-tip">系统将根据' + h + "的营业时间、预订设置自动恢复营业</p></li><hr>") : (1 === c || 3 === c) && $("#wmPoiStatusDiv").html('<li class="clearfix"><b class="pull-right font-12 mt10 block-normal block-warn">停止营业中</b><p class="pull-left status-tip">您的门店因为' + u + "被设置为休息" + p + '，请联系您的美团业务经理，谢谢！</p></li><li class="clearfix"><button class="pull-right btn btn-primary btn-sm unable" disabled>恢复营业</button><p class="pull-left status-tip">系统将于' + m + "自动恢复</p></li><hr>"));
        if (t.hasSpecialShippingTime) {
            var k = ""
              , T = [];
            try {
                T = JSON.parse(t.specialShippingTime)
            } catch (S) {}
            T.slice(0, 2).forEach(function(t) {
                var e = Object.keys(t)[0]
                  , i = Number(e.substr(4, 2))
                  , a = Number(e.substr(6, 2));
                k += '<p class="special-shipping-time">' + i + "月" + a + "日：" + t[e].join(" ") + "</p>"
            }),
            $("#wmTempBusinessTimeDiv").html('<hr><li class="clearfix"><span class="important-notice"><i></i>重要通知</span></li><li class="clearfix"><p>' + t.importantNotice + '</p><p class="mb5">配送站近期营业时间安排：</p>' + k + '<a class="notice-detail-url" href="javascript:void(0)">查看完整通知</a></li>'),
            $("#wmTempBusinessTimeDiv").find(".notice-detail-url").bind("click", function() {
                o.reportMC("b_waimai_e_ya38wffa_mc", "c_waimai_e_fa4ps4ng", {
                    is_delivery_temp_biz_hour_effective: w
                });
                var i = t.noticeUrl;
                if (0 == i.indexOf("http")) {
                    var a = {
                        _source: "PC",
                        token: e.getCookie("token"),
                        acctId: e.getCookie("acctId"),
                        wmPoiId: e.getCookie("wmPoiId"),
                        region_id: e.getCookie("region_id"),
                        device_uuid: e.getCookie("device_uuid"),
                        bsid: e.getCookie("bsid"),
                        appType: CommConstants.APPTYPE,
                        fromPoiChange: !1
                    }
                      , s = i.split("#")
                      , n = "string" == typeof s[0] && s[0].indexOf("?") > 0 ? "&" : "?";
                    n += $.param(a),
                    i = s[0] + n + (s && s.length > 1 ? "#" + s[1] : "")
                }
                window.frames.hashframe.location = i,
                setTimeout(function() {
                    $(".J-main-menu").find(".active").removeClass("active")
                }, 20)
            })
        } else
            $("#wmTempBusinessTimeDiv").html("")
    };
    b && b.code >= 30 ? (setTimeout(function() {
        try {
            var t = g.getCache("report_lastReportTime");
            (!t || (new Date).getTime() - parseInt(t) > 6048e5) && (g.setCache("report_lastReportTime", (new Date).getTime().toString()),
            g.flushCache(),
            s && s.getSysInfo(h))
        } catch (e) {}
    }, 6e5),
    Analytics("event", {
        nm: "mge",
        val: {
            act: "appCode",
            lab: b.code
        }
    })) : localStorage.getItem("info_reported") || (h({}),
    localStorage.setItem("info_reported", !0)),
    $("#top-nav").delegate(".j-view-orderstat", "click", function() {
        var t = "/v2/campaign/statistics";
        document.location.hash = t
    });
    var M = $(".J-search");
    CommConstants.IS_LIANSUO && M.attr("placeholder", "请输入手机号查询"),
    M.on("click", function(t) {
        k.showSearchTag = !k.showSearchTag
    }),
    M.keyup(function(t) {
        if (13 == t.keyCode) {
            var e = f($(this).val(), "g");
            _(e) ? d(e) : "",
            k.showSearchTag = !1
        }
    }),
    $(".J-search-btn").bind("click", function() {
        var t = f(M.val(), "g");
        _(t) ? d(t) : ""
    }),
    M.bind("click", function() {
        o.reportMC("b_shangou_online_e_6mmp5e5b_mc", "c_shangou_online_e_22anofv7")
    }),
    T.find(".J-check-all").bind("click", function() {
        o.reportMC("b_shangou_online_e_fif5kdgh_mc", "c_shangou_online_e_22anofv7")
    }),
    $("#amend-ps-btn").bind("click", function() {
        o.reportMC("b_shangou_online_e_53t117rh_mc", "c_shangou_online_e_22anofv7")
    }),
    $("#amend-phone-btn").bind("click", function() {
        o.reportMC("b_shangou_online_e_jfw1elu2_mc", "c_shangou_online_e_22anofv7")
    }),
    $("#J-button-logout").bind("click", function() {
        o.reportMC("b_shangou_online_e_xbpgzu3y_mc", "c_shangou_online_e_22anofv7")
    }),
    $(document).on("click", "#sg-aside .icon-ul li", function() {
        var t = $(this).index();
        0 === t && o.reportMC("b_shangou_online_e_sjppxg34_mc", "c_shangou_online_e_22anofv7"),
        1 === t && o.reportMC("b_shangou_online_e_ln6ooa1b_mc", "c_shangou_online_e_22anofv7"),
        3 === t && o.reportMC("b_shangou_online_e_40ui9u2r_mc", "c_shangou_online_e_22anofv7")
    }),
    $(document).on("click", "#sg-aside .aside-collspan", function() {
        o.reportMC("b_shangou_online_e_7yc5lpf6_mc", "c_shangou_online_e_22anofv7")
    }),
    $(document).on("click", "#sg-im", function() {
        o.reportMC("b_shangou_online_e_ekjgy0mx_mc", "c_shangou_online_e_22anofv7")
    })
});
define('module/root/audio', ["util/utils"], function(e) {
    var a = window.wmSystemApi
      , i = a && a.getAppInfo && a.getAppInfo();
    if (i && i.code < 4e3)
        ;
    else {
        var o = e.getStorage("audioVolume") || 1
          , n = function(e) {
            this.type = e,
            this.audioDOMObj = document.getElementById(e + "-audio"),
            this.audioObj = null,
            this.jQaudioDOMObj = $(this.audioDOMObj);
            var a = this.jQaudioDOMObj.data("loop");
            switch (this.audioSrc = this.jQaudioDOMObj.data("src"),
            this.loop = -1 === a ? 1 / 0 : a,
            this.isPlaying = !1,
            this.level = 0,
            e) {
            case "neworder":
                this.level = 1;
                break;
            case "cancel":
                this.level = 2;
                break;
            case "refund":
                this.level = 3;
                break;
            case "reminder":
                this.level = 4;
                break;
            case "auto-neworder":
                this.level = 5;
                break;
            case "pre-order":
                this.level = 6;
                break;
            case "new-message-again":
                this.level = 7;
                break;
            case "new-message":
                this.level = 8;
                break;
            case "delivery-exception":
                this.level = 9;
                break;
            case "new-order":
                this.level = 10;
                break;
            case "over-time-order":
                this.level = 11
            }
        };
        n.prototype.audioPlay = function() {
            var e = this;
            for (var a in window.audioControls) {
                var i = window.audioControls[a];
                if (i.level < this.level && (i.isPlaying || i.audioDownloading))
                    return;
                i.level > this.level && (i.isPlaying || i.audioDownloading) && i.audioStop()
            }
            if (this.audioObj) {
                if (this.isPlaying)
                    return;
                e.looped = 0,
                e.audioObj.addEventListener("pause", e.pauseFunc, !1),
                e.safePlay(),
                e.isPlaying = !0
            } else {
                e.looped = 0,
                e.audioDownloading = !0;
                var n = new Audio;
                n.preload = "auto",
                e.playFunc = function() {
                    e.audioObj = n,
                    e.audioObj.volume = o,
                    e.isPlaying = !0,
                    e.audioDownloading = !1,
                    e.safePlay()
                }
                ,
                n.addEventListener("canplaythrough", e.playFunc, !1),
                e.pauseFunc = function() {
                    e.looped++,
                    e.isPlaying = !1,
                    e.looped < e.loop ? e.safePlay() : e.audioStop()
                }
                ,
                n.addEventListener("pause", e.pauseFunc, !1),
                n.src = "/static/media/" + this.audioSrc
            }
        }
        ,
        n.prototype.audioStop = function(e) {
            var a = this
              , i = function() {
                a.isPlaying = !1,
                a.audioDownloading = !1,
                a.audioObj && (a.audioObj.removeEventListener("canplaythrough", a.playFunc),
                a.audioObj.removeEventListener("pause", a.pauseFunc),
                a.audioObj.pause(),
                a.audioObj.currentTime = 0)
            };
            "auto-neworder" !== this.type && i()
        }
        ,
        n.prototype.safePlay = function() {
            var e = this
              , a = e.audioObj.play()
              , i = "[object Promise]" === Object.prototype.toString.call(a);
            i && a["catch"](function(e) {
                console.warn(e)
            })
        }
        ,
        window.audioControls = {
            neworder: new n("neworder"),
            refund: new n("refund"),
            "pre-order": new n("pre-order"),
            "delivery-exception": new n("delivery-exception"),
            cancel: new n("cancel"),
            reminder: new n("reminder"),
            "auto-neworder": new n("auto-neworder"),
            "new-message": new n("new-message"),
            "new-message-again": new n("new-message-again"),
            "new-order": new n("new-order"),
            "over-time-order": new n("over-time-order")
        }
    }
});
define('module/root/audio_for_old', ["util/utils"], function(e) {
    var i = window.wmSystemApi
      , a = i && i.getAppInfo && i.getAppInfo();
    if (a && a.code < 4e3) {
        var o = e.getStorage("audioVolume") || 1
          , n = function(e) {
            this.type = e,
            this.audioDOMObj = document.getElementById(e + "-audio"),
            this.audioObj = null,
            this.jQaudioDOMObj = $(this.audioDOMObj);
            var i = this.jQaudioDOMObj.data("loop");
            switch (this.audioSrc = this.jQaudioDOMObj.data("src"),
            this.loop = -1 === i ? 1 / 0 : i,
            this.isPlaying = !1,
            this.level = 0,
            e) {
            case "neworder":
                this.level = 1;
                break;
            case "cancel":
                this.level = 2;
                break;
            case "refund":
                this.level = 3;
                break;
            case "reminder":
                this.level = 4;
                break;
            case "auto-neworder":
                this.level = 5;
                break;
            case "pre-order":
                this.level = 6;
                break;
            case "new-message-again":
                this.level = 7;
                break;
            case "new-message":
                this.level = 8;
                break;
            case "delivery-exception":
                this.level = 9;
                break;
            case "new-order":
                this.level = 10;
                break;
            case "over-time-order":
                this.level = 11
            }
        };
        n.prototype.audioPlay = function() {
            var e = this;
            for (var i in window.audioControls) {
                var a = window.audioControls[i];
                if (a.level < this.level && (a.isPlaying || a.audioDownloading))
                    return;
                a.level > this.level && (a.isPlaying || a.audioDownloading) && a.audioStop()
            }
            this.isPlaying || (e.looped = 0,
            e.RealAudioPlay())
        }
        ,
        n.prototype.RealAudioPlay = function() {
            var e = this;
            e.audioDownloading = !0;
            var i = new Audio;
            i.preload = "auto",
            e.playFunc = function() {
                e.audioObj = i,
                e.audioObj.volume = o,
                e.isPlaying = !0,
                e.audioDownloading = !1,
                e.audioObj.play()
            }
            ,
            i.addEventListener("canplaythrough", e.playFunc, !1),
            e.pauseFunc = function() {
                e.looped++,
                e.isPlaying = !1,
                e.looped < e.loop ? e.RealAudioPlay() : e.audioStop()
            }
            ,
            i.addEventListener("pause", e.pauseFunc, !1),
            i.src = "/static/media/" + this.audioSrc
        }
        ,
        n.prototype.audioStop = function(e) {
            var i = this
              , a = function() {
                i.isPlaying = !1,
                i.audioDownloading = !1,
                i.audioObj && (i.audioObj.removeEventListener("canplaythrough", i.playFunc),
                i.audioObj.removeEventListener("pause", i.pauseFunc),
                i.audioObj.pause(),
                i.audioObj.currentTime = 0)
            };
            "auto-neworder" !== this.type && a()
        }
        ,
        window.audioControls = {
            neworder: new n("neworder"),
            refund: new n("refund"),
            "pre-order": new n("pre-order"),
            "delivery-exception": new n("delivery-exception"),
            cancel: new n("cancel"),
            reminder: new n("reminder"),
            "auto-neworder": new n("auto-neworder"),
            "new-message": new n("new-message"),
            "new-message-again": new n("new-message-again"),
            "new-order": new n("new-order"),
            "over-time-order": new n("over-time-order")
        }
    }
});
require.config({
    baseUrl: VM.STATIC_URL
}),
define('module/kernel', [], function() {
    var e = window.wmNetworkApi
      , i = window.wmSystemApi;
    window.wmPrinterApi,
    i && i.getAppInfo && i.getAppInfo();
    return new function() {
        this.getAppInfo = function() {
            return i && i.getAppInfo && i.getAppInfo() || {
                version: "",
                code: "0"
            }
        }
        ,
        this.getSystemInfo = function() {
            return i && i.getSystemInfo && i.getSystemInfo() || {
                majorVersion: 0,
                minorVersion: 0
            }
        }
        ,
        this.readFile = function(e) {
            return i && i.readFile ? i.readFile(e) : void 0
        }
        ,
        this.writeFile = function(e, t, n) {
            return i && i.writeFile ? i.writeFile(e, t, n) : void 0
        }
        ,
        this.fileExists = function(e) {
            return i && i.fileExists ? i.fileExists(e) : void 0
        }
        ,
        this.directoryExists = function(e) {
            return i && i.directoryExists ? i.directoryExists(e) : void 0
        }
        ,
        this.deleteFile = function(e) {
            return i && i.fileExists && i.deletePath ? i.fileExists(e) && i.deletePath(e) : void 0
        }
        ,
        this.deleteDirectory = function(e) {
            return i && i.directoryExists && i.deletePath ? i.directoryExists(e) && i.deletePath(e) : void 0
        }
        ,
        this.moveFile = function(e, t) {
            return i && i.moveFile ? i.moveFile(e, t) : void 0
        }
        ,
        this.copyFile = function(e, t) {
            return i && i.copyFile ? i.copyFile(e, t) : void 0
        }
        ,
        this.fileInfo = function(e) {
            return i && i.fileInfo ? i.fileInfo(e) : void 0
        }
        ,
        this.directoryInfo = function(e) {
            return i && i.directoryInfo ? i.directoryInfo(e) : void 0
        }
        ,
        this.download = function(i, t, n) {
            return e && e.download ? e.download(i, t, n) : void 0
        }
        ,
        this.executeCommand = function(e) {
            return i && i.executeCommand ? i.executeCommand(e) : void 0
        }
        ,
        this.getSpecialFolder = function(e) {
            return i && i.getSpecialFolder ? i.getSpecialFolder(e) : void 0
        }
        ,
        this.parseFilePath = function(e) {
            return i && i.parseFilePath ? i.parseFilePath(e) : void 0
        }
    }
});
define('module/root/crash_log_reporter', ["module/cookie", "module/kernel"], function(t, e) {
    function i() {
        var t = "{f:COMMON_APPDATA}\\waimai\\running_log"
          , i = e.readFile(t);
        if (i) {
            var n = [];
            $(i.split("\n")).each(function(t, e) {
                if (e = e.replace(/^\s+|\s+$/g, ""),
                "" != e) {
                    var i = {};
                    $(e.match(/[^:\s]*:[^,\s]*/g)).each(function(t, e) {
                        var n = e.indexOf(":")
                          , t = e.substr(0, n)
                          , s = e.substr(n + 1);
                        i[t] = s
                    }),
                    n.push(i)
                }
            }),
            _nt.post(a + "/api/crash/log/batch", function(i) {
                i.httpSuccess && e.deleteFile(t)
            }, {
                list: JSON.stringify(n)
            })
        }
    }
    function n() {
        var i = "{f:COMMON_APPDATA}\\waimai\\trace"
          , n = e.allFiles(i, "*.crash.dmp");
        if (n && n.length) {
            var s = _sys && _sys.getAppInfo && _sys.getAppInfo() || {}
              , o = s.clientId
              , r = 0;
            $(n).each(function(i, n) {
                var s = n.lastIndexOf("\\")
                  , c = n.substr(s + 1)
                  , f = n.substr(0, s);
                if ("_" != c.charAt("0")) {
                    if (1 > r) {
                        var l = t.getCookie("wmPoiId")
                          , u = t.getCookie("token");
                        _nt.postFile(a + "/api/crash/data/file", function(t) {}, n, {
                            clientId: o,
                            time: (new Date).getTime(),
                            sysInfo: JSON.stringify(e.getSystemInfo()),
                            wmPoiId: l,
                            token: u
                        }, null, null, "zip"),
                        r++
                    }
                    e.moveFile(n, f + "\\_" + c)
                }
            })
        }
    }
    function s(t) {
        try {
            t()
        } catch (e) {}
    }
    var a = "";
    return {
        report: function() {
            _nt && _nt.postFile && (s(i),
            s(n))
        }
    }
});
define('util/code', [], function() {
    return new function() {
        this.allASCII = function(r) {
            if (!r)
                return !1;
            for (var e = 0, t = r.length; t > e; e++) {
                var n = r.charCodeAt(e);
                if (n >= 256)
                    return !1
            }
            return !0
        }
        ,
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        this.base64Encode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = _utf8_encode(r); d < r.length; )
                e = r.charCodeAt(d++),
                t = r.charCodeAt(d++),
                n = r.charCodeAt(d++),
                o = e >> 2,
                a = (3 & e) << 4 | t >> 4,
                c = (15 & t) << 2 | n >> 6,
                f = 63 & n,
                isNaN(t) ? c = f = 64 : isNaN(n) && (f = 64),
                h = h + _keyStr.charAt(o) + _keyStr.charAt(a) + _keyStr.charAt(c) + _keyStr.charAt(f);
            return h
        }
        ,
        this.base64Decode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length; )
                o = _keyStr.indexOf(r.charAt(d++)),
                a = _keyStr.indexOf(r.charAt(d++)),
                c = _keyStr.indexOf(r.charAt(d++)),
                f = _keyStr.indexOf(r.charAt(d++)),
                e = o << 2 | a >> 4,
                t = (15 & a) << 4 | c >> 2,
                n = (3 & c) << 6 | f,
                h += String.fromCharCode(e),
                64 != c && (h += String.fromCharCode(t)),
                64 != f && (h += String.fromCharCode(n));
            return h = _utf8_decode(h)
        }
        ,
        _utf8_encode = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var e = "", t = 0; t < r.length; t++) {
                var n = r.charCodeAt(t);
                128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192),
                e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224),
                e += String.fromCharCode(n >> 6 & 63 | 128),
                e += String.fromCharCode(63 & n | 128))
            }
            return e
        }
        ,
        _utf8_decode = function(r) {
            for (var e = "", t = 0, n = c1 = c2 = 0; t < r.length; )
                n = r.charCodeAt(t),
                128 > n ? (e += String.fromCharCode(n),
                t++) : n > 191 && 224 > n ? (c2 = r.charCodeAt(t + 1),
                e += String.fromCharCode((31 & n) << 6 | 63 & c2),
                t += 2) : (c2 = r.charCodeAt(t + 1),
                c3 = r.charCodeAt(t + 2),
                e += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                t += 3);
            return e
        }
    }
});
define('module/printer_33', ["util/code"], function(utils) {
    function WmPrinter() {
        function _WmPrinterWrapper(t) {
            function n(t) {
                var n = t ? "array" == typeof t ? t : t.split(",") : []
                  , r = [];
                for (var e in n)
                    r.push(n[e].trim());
                return r
            }
            function r(t) {
                var n = {}
                  , r = [];
                for (var e in t) {
                    var i = t[e].toUpperCase();
                    switch (i) {
                    case "L":
                    case "R":
                    case "C":
                        n.align = i;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        n.vAlign = i;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        var s = [n.font, i].join(",");
                        "DH,DW" == s || "DW,DH" == s ? n.font = "DHW" : ("DHW" != n.font || "DH" != i && "DW" != i) && (n.font = i);
                        break;
                    default:
                        r.push(i)
                    }
                }
                return n.align && r.push(n.align),
                n.vAlign && r.push(n.vAlign),
                n.font && r.push(n.font),
                r
            }
            function e(t) {
                function e(t) {
                    switch (t) {
                    case "L":
                    case "R":
                    case "C":
                        o != t && i.push(o = t),
                        s = !0;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        u != t && i.push(u = t),
                        a = !0;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        f != t && i.push(f = t),
                        c = !0;
                        break;
                    case "PRINT":
                        l = !0,
                        i.push(t);
                        break;
                    default:
                        i.push(t)
                    }
                }
                "string" == typeof t && (t = n(t));
                var i = []
                  , s = !1
                  , a = !1
                  , c = !1;
                t = r(t);
                for (var h in t)
                    e(t[h]);
                return !s && l && e("L"),
                !a && l && e("B"),
                c || e("CHW"),
                l = !1,
                i
            }
            var i, a = t, o = "L", u = "B", f = "CHW", c = !1, l = !1;
            this.prop = function(t) {
                return a.prop(t)
            }
            ,
            this.infos = function(t) {
                return t ? a.infos[t] : a.infos
            }
            ,
            this.width = function() {
                return this.prop("width")
            }
            ,
            this.name = function() {
                return this.prop("name")
            }
            ,
            this.key = function() {
                return a.key
            }
            ,
            this.flag = function() {
                return a.flag()
            }
            ,
            this.open = function() {
                return a.open()
            }
            ,
            this.close = function() {
                return a.close()
            }
            ,
            this.write = function(t, n) {
                return a.write ? a.write(t, n) : !1
            }
            ,
            this.canWrite = function() {
                return !!a.write
            }
            ,
            this.type = function() {
                return a.type
            }
            ,
            this.set = function(t) {
                a.set && a.set(t)
            }
            ,
            this.test = function(t) {
                if (void 0 !== i && !t)
                    return i;
                if (a.test)
                    return i = a.test().success;
                if (!this.open())
                    return !1;
                try {
                    return i = this.init()
                } catch (n) {
                    return !1
                } finally {
                    this.close()
                }
            }
            ,
            this.init = function(t) {
                if (t) {
                    var n = t.pageWidth || 0
                      , r = _self.charWidthOfPageWidth(n) || this.width()
                      , e = {
                        pageWidth: n,
                        charWidth: r,
                        cmdModel: t.cmdModel,
                        orderType: t.orderType
                    };
                    t.font && (e.font = utils.base64Decode(t.font)),
                    this.set(e)
                }
                var i = a.init();
                return c = !1,
                l = !1,
                o = "L",
                u = "B",
                f = "CHW",
                i.success
            }
            ,
            this.unknown = function() {
                return a.unknown ? a.unknown() : !1
            }
            ,
            this.pageEnd = function(t) {
                a.pageEnd && a.pageEnd(t)
            }
            ,
            this.cmd = function(t, r) {
                for (var i = null !== r && void 0 != r ? n : e, s = i(t), o = 0, u = s.length; u > o; o++)
                    a.cmd(s[o], r);
                return this
            }
            ,
            this.pt = function(t, n) {
                return this.cmd(n),
                !String.empty(t) && (a.data(t),
                c = !1),
                this
            }
            ,
            this.ptf = function(t) {
                var n = -1
                  , r = Array.clone(arguments)
                  , e = r.length;
                r.push(function(t, r) {
                    n = Math.max(n, t)
                });
                var i = String.format.apply(null, r);
                return this.pt(i, e - 1 > n ? r[e - 1] : void 0)
            }
            ,
            this.ptl = function(t, n) {
                return this.pt(t, n),
                this.cmd("PRINT")
            }
            ,
            this.ptfl = function(t) {
                return this.ptf.apply(this, arguments),
                this.ptl()
            }
            ,
            this.pts = function(t, n, r) {
                n || (n = this.width()),
                1 > n && (n = parseInt(this.width() * n)),
                "object" != typeof t && (t = {
                    "char": (t || "-").toString(),
                    text: "",
                    align: "C"
                });
                var e = t["char"] || "-"
                  , i = t.text || ""
                  , a = t.align || "C";
                if (i && i.length) {
                    var o = i.width();
                    o >= n ? s = i : "L" == a ? s = i.fill(n, e) : "R" == a ? s = i.fill(-n, e) : s = i.fill(-((n - o) / 2 + o), e).fill(n, e)
                } else
                    s = "".fill(n, e);
                return this.pt(s, r)
            }
            ,
            this.ptsl = function(t, n, r) {
                return this.pts(t, n, r),
                c = !0,
                this.ptl()
            }
            ,
            this.ptsli = function(t, n, r) {
                return c || this.ptsl(t, n, r),
                this
            }
            ,
            this.ptqc = function(t, n) {
                return t || (t = ""),
                n || (n = 5),
                n = Math.min(Math.max(1, n), 16),
                t.length > 124 && (t = t.substr(0, 124)),
                this.cmd("QC_SIZE", n),
                this.cmd("QC_LEN", t.length),
                this.pt(t),
                this.cmd("QC_PRINT"),
                this
            }
            ,
            this.cut = function() {
                this.cmd("CUT")
            }
        }
        function _getUdVpids() {
            return _udVpids || (_udVpids = {},
            $(_pt.getUserDefineUsbPrinterFlags()).each(function() {
                _udVpids[this.vpid.toUpperCase()] = this
            })),
            _udVpids
        }
        function _isUsbPrinter(t, n) {
            var r = _flagToKey(n)
              , e = _getUdVpids()
              , i = e[r];
            return i && (String.empty(i.service) || i.service.toLowerCase() == t) ? (!_allProps[r] && (_allProps[r] = {}),
            !String.empty(i.name) && (_allProps[r].name = i.name),
            !0) : _self.containts(n) && t && t.indexOf("libusb") >= 0 || "usbprint" == t
        }
        function _refresh() {
            var t = {}
              , n = _pt && _pt.getUsbDevices();
            n && n.success && $(n.devices).each(function(n, r) {
                var e = (r.infos.SERVICE || "").toLowerCase()
                  , i = {
                    vid: r.vid,
                    pid: r.pid
                };
                if (i.toString = function() {
                    return _flagToKey(i)
                }
                ,
                _isUsbPrinter(e, i)) {
                    var s, a = _all ? _all[r.key] : null, o = r.init;
                    a || (a = new _WmPrinterWrapper(r),
                    r.init = function() {
                        var t = o ? o.call(r, _self.getCmd(i, "INIT"), 2e3) : r.cmd("INIT");
                        return t && t.success && r.cmd("ENCODING", "chs"),
                        t
                    }
                    ,
                    r.set = function(t) {
                        s = t
                    }
                    ,
                    r.cmd = function(t, n) {
                        var e = _self.getCmd(i, t, n, s && s.cmdModel);
                        return !String.empty(e) && r.write(e)
                    }
                    ,
                    r.data = function(t) {
                        return !String.empty(t) && r.write(t)
                    }
                    ,
                    r.prop = function(t) {
                        return _self.getProp(i, t)
                    }
                    ,
                    r.flag = function() {
                        return i
                    }
                    ,
                    r.unknown = function() {
                        return !_self.containts(i)
                    }
                    ,
                    r.pageEnd = function(t) {
                        t = t || 4;
                        for (var n = 0, r = Math.max(0, t - 3); t > n; n++)
                            n == r ? a.ptsl("  .      ") : a.ptl();
                        a.cmd("CUT")
                    }
                    ),
                    t[a.key()] = a
                }
            });
            var r = _pt && _pt.getGdiPrinters();
            r && r.success && $(r.printers).each(function(n, r) {
                try {
                    r.key = _appInfo && _appInfo.code > 32 ? decodeURIComponent(r.key.replace(/\+/g, " ")) : r.key
                } catch (e) {}
                utils.allASCII(r.key) || (r.key = utils.base64Encode(r.key));
                var i = _all ? _all[r.key] : null;
                i || (i = new _WmPrinterWrapper(r),
                r.prop = function(t) {
                    switch (t) {
                    case "name":
                        return r.name || "";
                    case "width":
                        return 32
                    }
                    return void 0
                }
                ,
                r.infos.name || (r.infos.name = this.name),
                r.flag = function() {
                    return null
                }
                ,
                r.pageEnd = function() {
                    i.cmd("CUT")
                }
                ),
                t[i.key()] = i
            }),
            _all = t
        }
        function _allPrinters(t) {
            return (!_all || t) && _refresh(),
            _all
        }
        function _first(t, n) {
            var r;
            return $(t).each(function(t, e) {
                return n.call(e, t, e) ? (r = e,
                !1) : void 0
            }),
            r
        }
        function _findDefaultPinter(t) {
            var n = _first(t, function(t, n) {
                return "usb" == n.type() && n.test()
            });
            if (n)
                return n;
            var r = _pt && _pt.getDefaultPrinter()
              , n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.name() == r && n.test()
            });
            if (n)
                return n;
            var n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.test()
            });
            return n
        }
        function _char(t) {
            return String.fromCharCode([parseInt(t)])
        }
        function _charOfEncoding(t) {
            var n = {
                chs: 15
            }
              , r = n[t];
            return void 0 === r && (r = 15),
            _char(r)
        }
        function _flagToKey(t) {
            return t.vid.toString(16).fill(-4, "0").toUpperCase() + "-" + t.pid.toString(16).fill(-4, "0").toUpperCase()
        }
        var _all = null, _self = this, _udVpids;
        this.refresh = _refresh,
        this.getDefaultPrinter = function(t) {
            return _findDefaultPinter(this.allPrinters(t))
        }
        ,
        this.getPrinters = function(t, n) {
            var r = this.settings
              , e = r.getSettings(t, !0);
            !e.useModel && "-1" != t && (e = r.getSettings("-1", !0),
            t = "-1");
            var i = []
              , s = this.allPrinters(n);
            if (n && _refresh(),
            0 == e.model) {
                var a = _findDefaultPinter(s);
                a && i.push(a)
            } else
                $(s).each(function(n, e) {
                    var s = r.getPrinterSetting(t, e.key(), !0);
                    s && s.enable && i.push(e)
                });
            return i
        }
        ,
        this.anyPrinter = function(t) {
            var n = _allPrinters(t)
              , r = null;
            for (var e in n) {
                var i = n[e];
                if (i.test()) {
                    if (_self.containts(i.flag()))
                        return i;
                    r || (r = i)
                }
            }
            return r
        }
        ,
        this.allPrinters = function(t) {
            var n = []
              , r = _allPrinters(t);
            for (var e in r)
                n.push(r[e]);
            return n
        }
        ,
        this.allCmdModels = function() {
            var t = [];
            for (var n in _allProps) {
                var r = _allProps[n];
                r.title && (r.name = n,
                t.push(r))
            }
            return t
        }
        ,
        this.settings = new function() {
            function t(t) {
                try {
                    return JSON.parse(t)
                } catch (n) {
                    return null
                }
            }
            function n(t) {
                return JSON.parse(JSON.stringify(t))
            }
            function r(t) {
                for (var n in t)
                    return t[k]
            }
            function e(t) {
                function n(n, r) {
                    void 0 === t[n] && (t[n] = r)
                }
                n("orderCount", 1),
                n("orderInterval", 1),
                n("inshopCount", 1),
                n("inshopInterval", 1),
                n("inshopAutoPrint", !0),
                n("pageWidth", 0),
                n("cmdModel", "default"),
                n("orderType", "default")
            }
            function i() {
                if (!s) {
                    var i, o = _sys && _sys.getStorage(a);
                    if (!o || !(i = t(o))) {
                        var u = {};
                        $(_pt && _pt.allPrinterSettings()).each(function() {
                            u[this.id] = this
                        }),
                        i = {
                            "-1": {
                                list: u || {},
                                model: _pt && _pt.getPrinterModel(),
                                useModel: 0
                            }
                        },
                        _sys && _sys.setStorage(a, JSON.stringify(i))
                    }
                    i[-1] || (i[-1] = n(r(i) || {
                        "-1": {
                            list: {},
                            model: 0,
                            useModel: 0
                        }
                    })),
                    $(i).each(function(t) {
                        $(this.list).each(function() {
                            e(this)
                        })
                    }),
                    s = i
                }
                return s
            }
            var s, a = "printer_settings";
            this.allSettings = function() {
                return i()
            }
            ,
            this.getSettings = function(t, r) {
                var e = i()
                  , s = e[t];
                return !s && r && (e[t] = s = n(e[-1])),
                s
            }
            ,
            this.newDefPrintSetting = function(t) {
                var n = {
                    id: t,
                    enable: !1
                };
                return e(n),
                n
            }
            ,
            this.getPrinterSetting = function(t, n, r) {
                var e = this.getSettings(t, r);
                if (e) {
                    var i = e.list[n];
                    return !i && r && (e.list[n] = i = this.newDefPrintSetting(n)),
                    i
                }
                return null
            }
            ,
            this.save = function() {
                if (s) {
                    _sys && _sys.setStorage(a, JSON.stringify(s));
                    var t = this.getSettings("-1");
                    t && ($(t.list).each(function() {
                        _pt.setPrinterSetting(this.id, this)
                    }),
                    _pt.setPrinterModel(t.model))
                }
            }
            ,
            this.reload = function() {
                s = null
            }
        }
        ;
        var _allProps = {
            "default": {
                title: "默认",
                commands: {
                    ENCODING: function(t) {
                        return "R" + _char(t)
                    },
                    NOP_STOP: function(t) {
                        return "c4" + _char(void 0 === t ? 1 : t)
                    },
                    INIT: "@",
                    PRINT: "\n",
                    L: "a\x00",
                    C: "a",
                    R: "a",
                    DH: "!",
                    DW: "! ",
                    DHW: "!0",
                    CHW: "!\x00",
                    CUT: "i",
                    QC_SIZE: function(t) {
                        return "(k\x001C" + _char(t)
                    },
                    QC_LEN: function(t) {
                        return "(k" + _char(t + 3 & 255) + _char(t + 3 >> 8) + "1P0"
                    },
                    QC_PRINT: "(k\x001Q0"
                },
                width: 32,
                name: "USB打印机",
                endsWith: "\x00"
            },
            "default-2": {
                title: "方案二",
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                }
            },
            "067B-2305": {
                commands: {
                    ENCODING: "",
                    NOP_STOP: "",
                    L: "",
                    C: "",
                    R: ""
                },
                name: "爱宝打印机",
                endsWith: null
            },
            "0416-5011": {
                name: "浩顺打印机"
            },
            "6868-0300": {
                name: "佳博打印机"
            },
            "1A86-7584": {
                name: "佳博打印机"
            },
            "1CBE-0002": {
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                },
                name: "佳博打印机"
            }
        }
          , _defProp = _allProps["default"];
        if (this.containts = function(t) {
            return t && !!_allProps[_flagToKey(t)]
        }
        ,
        this.getProp = function(t, n, r) {
            var e = r && "default" != r && _allProps[r] ? r : t ? _flagToKey(t) : "default"
              , i = _allProps[e] || _defProp;
            return n ? void 0 !== i[n] ? i[n] : _defProp[n] : i
        }
        ,
        this.getCmd = function(t, n, r, e) {
            var i = this.getProp(t, "commands", e)[n]
              , s = void 0 !== i ? i : this.getProp(null, "commands")[n];
            if (s = "function" == typeof s ? s(r) : s,
            !String.empty(s)) {
                var a = this.getProp(t, "endsWith");
                "string" == typeof a && (s += a)
            }
            return s
        }
        ,
        this.printTestPage = function() {
            var t = printer.getPrinter(!0);
            if (!t)
                return void alert("当前尚未连接打印机");
            if (!t.open())
                return void alert("打印机连接失败");
            try {
                t.init(),
                t.ptl("美团打印机测试页", "DHW"),
                t.close()
            } catch (n) {
                alert(n)
            }
        }
        ,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
        ,
        _sys && _sys.readFile)
            try {
                eval(_sys.readFile("printer.js"))
            } catch (e) {}
    }
    var _nt = window.wmNetworkApi
      , _sys = window.wmSystemApi
      , _pt = window.wmPrinterApi
      , _appInfo = _sys && _sys.getAppInfo && _sys.getAppInfo();
    return String.prototype.width = function() {
        for (var t = this, n = 0, r = 0, e = t.length; e > r; r++) {
            var i = t.charCodeAt(r);
            n += i >= 256 ? 2 : 1
        }
        return n
    }
    ,
    String.prototype.fill = function(t, n) {
        var r = this
          , e = r.width();
        if (!t || e >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > e; )
                if (t >= e + i)
                    r += n,
                    e += i;
                else
                    for (var s = 0, a = n.length; a > s; s++) {
                        var o = n.charAt(s)
                          , u = o.width();
                        if (!(t >= e + u))
                            break t;
                        r += o,
                        e += u
                    }
        } else
            r = "".fill(-t - e, n) + r;
        return r
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , r = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var e in t)
            t[e] && (n += r + e + "=" + t[e],
            r = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone(arguments)
          , r = n[n.length - 1]
          , e = r instanceof Function ? (n.length--,
        r) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, r, i, s, a) {
            function o(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var u = o(n[r = parseInt(r) + 1], "").toString();
            return a && (u = u.fill(parseInt((i || "") + a), s ? s : " ")),
            e(r, a),
            u
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], r = 0, e = t.length; e > r; r++)
            n.push(t[r]);
        return n
    }
    ,
    Array.join = function(t, n, r) {
        var e = "";
        for (var i in t) {
            var s = t[i];
            r && !String.empty(s) && (e.length && (e += n),
            e += s)
        }
        return e
    }
    ,
    new WmPrinter
});
define('module/printer', ["util/code", "module/printer_33"], function(t, n) {
    function e() {
        function t(t, n) {
            var e;
            return $(t).each(function(t, r) {
                return n.call(r, t, r) ? (e = r,
                !1) : void 0
            }),
            e
        }
        function n(n) {
            var e = t(n, function(t, n) {
                return "usb" == n.type
            });
            if (e)
                return e;
            var i = r.getDefaultPrinter()
              , o = i && i.name
              , e = t(n, function(t, n) {
                return "printer" == n.type && n.name == o
            });
            if (e)
                return e;
            var e = t(n, function(t, n) {
                return "printer" == n.type
            });
            return e
        }
        this.refresh = function() {}
        ,
        this.getDefaultPrinter = function(t) {
            return n(this.allPrinters())
        }
        ,
        this.getPrinters = function(t, e) {
            var r = this.settings
              , i = r.getSettings(t, !0);
            !i.useModel && "-1" != t && (i = r.getSettings("-1", !0),
            t = "-1");
            var o = []
              , s = this.allPrinters();
            if (0 == i.model) {
                var u = n(s);
                u && o.push(u)
            } else
                $(s).each(function(n, e) {
                    var i = r.getPrinterSetting(t, e.id, !0);
                    i && i.enable && o.push(e)
                });
            return o
        }
        ,
        this.allPrinters = function() {
            return wmPrinterApi.getAllPrinters()
        }
        ,
        this.settings = new s,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
    }
    var r = window.wmPrinterApi
      , i = window.wmSystemApi
      , o = (window.wmNetworkApi,
    i && i.getAppInfo && i.getAppInfo());
    if (o && o.code < 4e3)
        return n;
    var s = function() {
        function t() {
            this._settings = null,
            this._settingsKey = "printer_settings"
        }
        var n = window.wmPrinterApi
          , e = window.wmSystemApi;
        window.wmNetworkApi;
        return t.prototype.jsonParse = function(t) {
            try {
                return JSON.parse(t)
            } catch (n) {
                return null
            }
        }
        ,
        t.prototype.clone = function(t) {
            return JSON.parse(JSON.stringify(t))
        }
        ,
        t.prototype._setPrintDef = function(t) {
            function n(n, e) {
                void 0 === t[n] && (t[n] = e)
            }
            n("orderCount", 1),
            n("orderInterval", 1),
            n("inshopCount", 1),
            n("inshopInterval", 1),
            n("inshopAutoPrint", !0),
            n("pageWidth", 0),
            n("cmdModel", "default"),
            n("orderType", "default")
        }
        ,
        t.prototype._getSettings = function() {
            if (!this._settings) {
                var t = e.getStorage(this._settingsKey) || ""
                  , n = this.jsonParse(t);
                (0 == t.length || null == n) && (n = {
                    "-1": this.createSettingPoi()
                },
                e.setStorage(this._settingsKey, JSON.stringify(n))),
                void 0 == n[-1] && (n[-1] = this.createSettingPoi()),
                this._settings = n
            }
            return this._settings
        }
        ,
        t.prototype.createSettingPoi = function() {
            return {
                list: {},
                model: 0,
                useModel: 0
            }
        }
        ,
        t.prototype.allSettings = function() {
            return this._getSettings()
        }
        ,
        t.prototype.getSettings = function(t, n) {
            void 0 === n && (n = !1);
            var e = this._getSettings()
              , r = e[t];
            return void 0 == r && n && (r = this.clone(e[-1]),
            e[t] = r),
            r
        }
        ,
        t.prototype.newDefPrintSetting = function(t) {
            var n = {
                id: t,
                enable: !1
            };
            return this._setPrintDef(n),
            n
        }
        ,
        t.prototype.getPrinterSetting = function(t, n, e) {
            var r = this.getSettings(t, e);
            if (r) {
                var i = r.list[n];
                return !i && e && (i = this.newDefPrintSetting(n),
                r.list[n] = i),
                i
            }
            return null
        }
        ,
        t.prototype.save = function() {
            if (this._settings) {
                e.setStorage(this._settingsKey, JSON.stringify(this._settings));
                var t = this.getSettings("-1");
                t && n.setPrinterModel(t.model)
            }
        }
        ,
        t.prototype.reload = function() {
            this._settings = null
        }
        ,
        t
    }();
    return String.prototype.width = function() {
        for (var t = this, n = 0, e = 0, r = t.length; r > e; e++) {
            var i = t.charCodeAt(e);
            n += i >= 256 ? 2 : 1
        }
        return "".indexOf,
        n
    }
    ,
    String.prototype.fill = function(t, n) {
        var e = this
          , r = e.width();
        if (!t || r >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > r; )
                if (t >= r + i)
                    e += n,
                    r += i;
                else
                    for (var o = 0, s = n.length; s > o; o++) {
                        var u = n.charAt(o)
                          , a = u.width();
                        if (!(t >= r + a))
                            break t;
                        e += u,
                        r += a
                    }
        } else
            e = "".fill(-t - r, n) + e;
        return e
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , e = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var r in t)
            t[r] && (n += e + r + "=" + t[r],
            e = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone([].slice.call(arguments))
          , e = n[n.length - 1]
          , r = e instanceof Function ? (n.length--,
        e) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, e, i, o, s) {
            function u(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var a = u(n[e = parseInt(e) + 1], "").toString();
            return s && (a = a.fill(parseInt((i || "") + s), o ? o : " ")),
            r(e, s),
            a
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], e = 0, r = t.length; r > e; e++)
            n.push(t[e]);
        return n
    }
    ,
    Array.join = function(t, n, e) {
        var r = "";
        for (var i in t) {
            var o = t[i];
            e && !String.empty(o) && (r.length && (r += n),
            r += o)
        }
        return r
    }
    ,
    new e
});
(function defineMustache(global, factory) {
    if (typeof exports === "object" && exports && typeof exports.nodeName !== "string") {
        factory(exports)
    } else if (typeof define === "function" && define.amd) {
        define('lib/mustache.min', ["exports"], factory)
    } else {
        global.Mustache = {};
        factory(global.Mustache)
    }
}
)(this, function mustacheFactory(mustache) {
    var objectToString = Object.prototype.toString;
    var isArray = Array.isArray || function isArrayPolyfill(object) {
        return objectToString.call(object) === "[object Array]"
    }
    ;
    function isFunction(object) {
        return typeof object === "function"
    }
    function typeStr(obj) {
        return isArray(obj) ? "array" : typeof obj
    }
    function escapeRegExp(string) {
        return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }
    function hasProperty(obj, propName) {
        return obj != null && typeof obj === "object" && propName in obj
    }
    var regExpTest = RegExp.prototype.test;
    function testRegExp(re, string) {
        return regExpTest.call(re, string)
    }
    var nonSpaceRe = /\S/;
    function isWhitespace(string) {
        return !testRegExp(nonSpaceRe, string)
    }
    var entityMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
    };
    function escapeHtml(string) {
        return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
            return entityMap[s]
        })
    }
    var whiteRe = /\s*/;
    var spaceRe = /\s+/;
    var equalsRe = /\s*=/;
    var curlyRe = /\s*\}/;
    var tagRe = /#|\^|\/|>|\{|&|=|!/;
    function parseTemplate(template, tags) {
        if (!template)
            return [];
        var sections = [];
        var tokens = [];
        var spaces = [];
        var hasTag = false;
        var nonSpace = false;
        function stripSpace() {
            if (hasTag && !nonSpace) {
                while (spaces.length)
                    delete tokens[spaces.pop()]
            } else {
                spaces = []
            }
            hasTag = false;
            nonSpace = false
        }
        var openingTagRe, closingTagRe, closingCurlyRe;
        function compileTags(tagsToCompile) {
            if (typeof tagsToCompile === "string")
                tagsToCompile = tagsToCompile.split(spaceRe, 2);
            if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
                throw new Error("Invalid tags: " + tagsToCompile);
            openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
            closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
            closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]))
        }
        compileTags(tags || mustache.tags);
        var scanner = new Scanner(template);
        var start, type, value, chr, token, openSection;
        while (!scanner.eos()) {
            start = scanner.pos;
            value = scanner.scanUntil(openingTagRe);
            if (value) {
                for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
                    chr = value.charAt(i);
                    if (isWhitespace(chr)) {
                        spaces.push(tokens.length)
                    } else {
                        nonSpace = true
                    }
                    tokens.push(["text", chr, start, start + 1]);
                    start += 1;
                    if (chr === "\n")
                        stripSpace()
                }
            }
            if (!scanner.scan(openingTagRe))
                break;
            hasTag = true;
            type = scanner.scan(tagRe) || "name";
            scanner.scan(whiteRe);
            if (type === "=") {
                value = scanner.scanUntil(equalsRe);
                scanner.scan(equalsRe);
                scanner.scanUntil(closingTagRe)
            } else if (type === "{") {
                value = scanner.scanUntil(closingCurlyRe);
                scanner.scan(curlyRe);
                scanner.scanUntil(closingTagRe);
                type = "&"
            } else {
                value = scanner.scanUntil(closingTagRe)
            }
            if (!scanner.scan(closingTagRe))
                throw new Error("Unclosed tag at " + scanner.pos);
            token = [type, value, start, scanner.pos];
            tokens.push(token);
            if (type === "#" || type === "^") {
                sections.push(token)
            } else if (type === "/") {
                openSection = sections.pop();
                if (!openSection)
                    throw new Error('Unopened section "' + value + '" at ' + start);
                if (openSection[1] !== value)
                    throw new Error('Unclosed section "' + openSection[1] + '" at ' + start)
            } else if (type === "name" || type === "{" || type === "&") {
                nonSpace = true
            } else if (type === "=") {
                compileTags(value)
            }
        }
        openSection = sections.pop();
        if (openSection)
            throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
        return nestTokens(squashTokens(tokens))
    }
    function squashTokens(tokens) {
        var squashedTokens = [];
        var token, lastToken;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            if (token) {
                if (token[0] === "text" && lastToken && lastToken[0] === "text") {
                    lastToken[1] += token[1];
                    lastToken[3] = token[3]
                } else {
                    squashedTokens.push(token);
                    lastToken = token
                }
            }
        }
        return squashedTokens
    }
    function nestTokens(tokens) {
        var nestedTokens = [];
        var collector = nestedTokens;
        var sections = [];
        var token, section;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            token = tokens[i];
            switch (token[0]) {
            case "#":
            case "^":
                collector.push(token);
                sections.push(token);
                collector = token[4] = [];
                break;
            case "/":
                section = sections.pop();
                section[5] = token[2];
                collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                break;
            default:
                collector.push(token)
            }
        }
        return nestedTokens
    }
    function Scanner(string) {
        this.string = string;
        this.tail = string;
        this.pos = 0
    }
    Scanner.prototype.eos = function eos() {
        return this.tail === ""
    }
    ;
    Scanner.prototype.scan = function scan(re) {
        var match = this.tail.match(re);
        if (!match || match.index !== 0)
            return "";
        var string = match[0];
        this.tail = this.tail.substring(string.length);
        this.pos += string.length;
        return string
    }
    ;
    Scanner.prototype.scanUntil = function scanUntil(re) {
        var index = this.tail.search(re), match;
        switch (index) {
        case -1:
            match = this.tail;
            this.tail = "";
            break;
        case 0:
            match = "";
            break;
        default:
            match = this.tail.substring(0, index);
            this.tail = this.tail.substring(index)
        }
        this.pos += match.length;
        return match
    }
    ;
    function Context(view, parentContext) {
        this.view = view;
        this.cache = {
            ".": this.view
        };
        this.parent = parentContext
    }
    Context.prototype.push = function push(view) {
        return new Context(view,this)
    }
    ;
    Context.prototype.lookup = function lookup(name) {
        var cache = this.cache;
        var value;
        if (cache.hasOwnProperty(name)) {
            value = cache[name]
        } else {
            var context = this, names, index, lookupHit = false;
            while (context) {
                if (name.indexOf(".") > 0) {
                    value = context.view;
                    names = name.split(".");
                    index = 0;
                    while (value != null && index < names.length) {
                        if (index === names.length - 1)
                            lookupHit = hasProperty(value, names[index]);
                        value = value[names[index++]]
                    }
                } else {
                    value = context.view[name];
                    lookupHit = hasProperty(context.view, name)
                }
                if (lookupHit)
                    break;
                context = context.parent
            }
            cache[name] = value
        }
        if (isFunction(value))
            value = value.call(this.view);
        return value
    }
    ;
    function Writer() {
        this.cache = {}
    }
    Writer.prototype.clearCache = function clearCache() {
        this.cache = {}
    }
    ;
    Writer.prototype.parse = function parse(template, tags) {
        var cache = this.cache;
        var tokens = cache[template];
        if (tokens == null)
            tokens = cache[template] = parseTemplate(template, tags);
        return tokens
    }
    ;
    Writer.prototype.render = function render(template, view, partials) {
        var tokens = this.parse(template);
        var context = view instanceof Context ? view : new Context(view);
        return this.renderTokens(tokens, context, partials, template)
    }
    ;
    Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate) {
        var buffer = "";
        var token, symbol, value;
        for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
            value = undefined;
            token = tokens[i];
            symbol = token[0];
            if (symbol === "#")
                value = this.renderSection(token, context, partials, originalTemplate);
            else if (symbol === "^")
                value = this.renderInverted(token, context, partials, originalTemplate);
            else if (symbol === ">")
                value = this.renderPartial(token, context, partials, originalTemplate);
            else if (symbol === "&")
                value = this.unescapedValue(token, context);
            else if (symbol === "name")
                value = this.escapedValue(token, context);
            else if (symbol === "text")
                value = this.rawValue(token);
            if (value !== undefined)
                buffer += value
        }
        return buffer
    }
    ;
    Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
        var self = this;
        var buffer = "";
        var value = context.lookup(token[1]);
        function subRender(template) {
            return self.render(template, context, partials)
        }
        if (!value)
            return;
        if (isArray(value)) {
            for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate)
            }
        } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
            buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate)
        } else if (isFunction(value)) {
            if (typeof originalTemplate !== "string")
                throw new Error("Cannot use higher-order sections without the original template");
            value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
            if (value != null)
                buffer += value
        } else {
            buffer += this.renderTokens(token[4], context, partials, originalTemplate)
        }
        return buffer
    }
    ;
    Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
        var value = context.lookup(token[1]);
        if (!value || isArray(value) && value.length === 0)
            return this.renderTokens(token[4], context, partials, originalTemplate)
    }
    ;
    Writer.prototype.renderPartial = function renderPartial(token, context, partials) {
        if (!partials)
            return;
        var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
        if (value != null)
            return this.renderTokens(this.parse(value), context, partials, value)
    }
    ;
    Writer.prototype.unescapedValue = function unescapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null)
            return value
    }
    ;
    Writer.prototype.escapedValue = function escapedValue(token, context) {
        var value = context.lookup(token[1]);
        if (value != null)
            return mustache.escape(value)
    }
    ;
    Writer.prototype.rawValue = function rawValue(token) {
        return token[1]
    }
    ;
    mustache.name = "mustache.js";
    mustache.version = "2.2.1";
    mustache.tags = ["{{", "}}"];
    var defaultWriter = new Writer;
    mustache.clearCache = function clearCache() {
        return defaultWriter.clearCache()
    }
    ;
    mustache.parse = function parse(template, tags) {
        return defaultWriter.parse(template, tags)
    }
    ;
    mustache.render = function render(template, view, partials) {
        if (typeof template !== "string") {
            throw new TypeError('Invalid template! Template should be a "string" ' + 'but "' + typeStr(template) + '" was given as the first ' + "argument for mustache#render(template, view, partials)")
        }
        return defaultWriter.render(template, view, partials)
    }
    ;
    mustache.to_html = function to_html(template, view, partials, send) {
        var result = mustache.render(template, view, partials);
        if (isFunction(send)) {
            send(result)
        } else {
            return result
        }
    }
    ;
    mustache.escape = escapeHtml;
    mustache.Scanner = Scanner;
    mustache.Context = Context;
    mustache.Writer = Writer
});
define('module/order/printorder_parser', ["lib/mustache.min", "module/printer", "util/utils"], function(e, t, r) {
    var n = function(e, t) {
        for (var r = [], t = Math.floor(t); t-- > 0; )
            r.push(e);
        return r.join("")
    }
      , a = function(e) {
        return e % 2 === 1 ? !0 : !1
    }
      , i = function(e) {
        for (var t = len = e.length, r = 0; r < len; r++)
            e.charCodeAt(r) >= 255 && t++;
        return t
    }
      , o = function(e, t) {
        for (var r = 0, n = e.length, a = 0; n > a && (r += e.charCodeAt(a) >= 255 ? 2 : 1,
        !(r > t)); a++)
            ;
        return [e.substr(0, a), e.substr(a)]
    }
      , l = {
        _alignStyle: {
            left: "L",
            center: "C",
            right: "R"
        },
        _fontStyle: {
            B: "DHW",
            W: "DW",
            H: "DH",
            D: "CHW"
        },
        _getXmlDoc: function(e) {
            var t, r, n = e.replace(/(&nbsp;|nbsp;)/g, CommConstants.IS_NEW_APP ? " " : "/blank");
            return window.DOMParser ? (t = new DOMParser,
            r = t.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"),
            r.async = "false",
            r.loadXML(n)),
            r
        },
        _ifLeafNode: function(e) {
            var t = e.childNodes
              , r = t.length;
            return 0 === r ? !0 : !1
        },
        _printNode: function(e, t, r) {
            switch (e.nodeName) {
            case "br":
                t.ptl("\n");
                break;
            case "line":
                t.ptsl(e.getAttribute("chars") || "-", r);
                break;
            case "div":
                var l = []
                  , s = e.getAttribute("align")
                  , d = e.getAttribute("font");
                if (s ? l.push(this._alignStyle[s]) : "",
                d ? l.push(this._fontStyle[d]) : "",
                !this._ifLeafNode(e)) {
                    for (var u = e.childNodes, f = u.length, c = [], h = 0; f > h; h++)
                        ("span" === u[h].nodeName && u[h].childNodes.length > 0 || "#text" === u[h].nodeName && "" !== $.trim(u[h].nodeValue)) && c.push(u[h]);
                    f = c.length;
                    for (var h = 0; f > h; h++)
                        if ("span" === c[h].nodeName) {
                            var g = c[h].getAttribute("font")
                              , p = g ? l.concat(this._fontStyle[g]) : l
                              , m = g ? this._fontStyle[g] : ""
                              , v = $.trim(c[h].childNodes[0].nodeValue).replace(/\/blank/g, " ");
                            h === f - 1 ? t.ptl(v, p.join(",")) : t.pt(v, m)
                        } else if ("#text" === c[h].nodeName) {
                            var v = $.trim(c[h].nodeValue);
                            h === f - 1 ? t.ptl(v, l.join(",")) : t.pt(v)
                        }
                }
                break;
            case "tr":
                for (var d = e.getAttribute("font"), d = d ? this._fontStyle[d] : "", N = [], u = e.childNodes, f = u.length, h = 0; f > h; h++)
                    if ("td" === u[h].nodeName) {
                        var b = u[h].getAttribute("width") * r / 32
                          , _ = u[h].getAttribute("align")
                          , w = u[h].childNodes.length > 0 && u[h].childNodes[0].nodeValue ? u[h].childNodes[0].nodeValue.replace(/[\s\r\n]/g, "") : "";
                        N.push({
                            value: w,
                            width: "DHW" === d || "DW" === d ? Math.round(b / 2) : Math.round(b),
                            align: _ ? _ : "left"
                        })
                    }
                for (var A = N.length; ; ) {
                    for (var h = 0; A > h; h++) {
                        var S = o(N[h].value, N[h].width)
                          , D = S[0]
                          , P = "";
                        switch (N[h].align) {
                        case "left":
                            P = D + n(" ", N[h].width - i(D));
                            break;
                        case "center":
                            var y = N[h].width - i(D)
                              , M = a(y) ? (y - 1) / 2 : y / 2
                              , k = a(y) ? (y + 1) / 2 : y / 2;
                            P = n(" ", M) + D + n(" ", k);
                            break;
                        case "right":
                            P = n(" ", N[h].width - i(D)) + D
                        }
                        h === A - 1 ? t.ptl(P, d) : t.pt(P, d),
                        N[h].value = S[1]
                    }
                    for (var h = 0; A > h && "" === N[h].value; h++)
                        ;
                    if (h === A)
                        break
                }
            }
        },
        printXml: function(e, t, r) {
            for (var n = this._getXmlDoc(e), a = n.getElementsByTagName("print")[0], i = a.childNodes, o = i.length, l = 0; o > l; l++)
                this._printNode(i[l], t, r)
        }
    }
      , s = function(e) {
        return {
            time: e.order_time_fmt,
            poiName: e.poi_name
        }
    }
      , d = function(t, n) {
        var a = JSON.parse(localStorage.getItem("poiPrintTemplates"))
          , i = 0;
        if (a)
            for (var o = 0, l = a.length; l > o; o++)
                a[o].wmPoiId === n && (i = a[o].nowTemplateId);
        var s = parent.PRINTTEMPLATES[i];
        if (!s)
            return "";
        s = s.replace(/(&nbsp;|nbsp;)/g, CommConstants.IS_NEW_APP ? " " : "/blank");
        for (var d, u, f = function(e, t, n, a, i) {
            if ($.isPlainObject(n)) {
                "mul" === i ? void 0 === n[e] || void 0 === n[t] || isNaN(n[e]) || isNaN(n[t]) || (n[a] = r.multiply(n[e], n[t])) : "equal" === i && void 0 !== n[e] && (d = n[e] + "" === t ? !0 : !1,
                n[a] = d);
                for (var o in n)
                    f(e, t, n[o], a, i)
            } else if ($.isArray(n))
                for (var l = 0, s = n.length; s > l; l++)
                    f(e, t, n[l], a, i)
        }, c = /#DEF (([^\s]+)#equal#([^\s]+))/g; u = c.exec(s); )
            f(u[2], u[3], t, u[1], "equal");
        for (var h = /#DEF (([^\s]+)#mul#([^\s]+))/g; u = h.exec(s); )
            f(u[2], u[3], t, u[1], "mul");
        return e.render(s.substr(s.indexOf("<print>")), t)
    };
    return {
        xmlToPrinter: l,
        printVoToStandard: s,
        jsonToXml: d
    }
});
require.config({
    baseUrl: VM.STATIC_URL,
    paths: {}
}),
define('components/img_verify', ["util/utils"], function(i) {
    Vue.component("imgVerify", {
        props: {
            url: String,
            require: !0
        },
        data: function() {
            return {
                timer: $.now(),
                verifyValue: "",
                modalShow: !0
            }
        },
        computed: {
            getUrl: function() {
                return "/v2/common/captcha/get?url=" + this.url + "&time=" + this.timer
            }
        },
        mounted: function() {
            $("#verifyModal").modal("show")
        },
        methods: {
            changeTimer: function() {
                this.timer = $.now()
            },
            submit: function() {
                if ("/v2/order/history/r/print/info/v2" === this.url) {
                    var e = this;
                    $.get("/v2/common/captcha/verify", {
                        verifyValue: this.verifyValue,
                        url: this.url
                    }, function(a) {
                        0 === a.code ? ($("#verifyModal").modal("hide"),
                        e.verifyValue = "") : i.showTip("验证码输入错误，请重新输入")
                    })
                } else
                    $.get("/v2/common/captcha/verify", {
                        verifyValue: this.verifyValue,
                        url: this.url
                    }, function(e) {
                        0 === e.code ? location.reload() : i.showTip("验证码输入错误，请重新输入")
                    })
            }
        },
        template: '<div v-if="modalShow" class="modal fade" id="verifyModal" tabindex="-1" role="dialog" aria-labelledby="createModalLabel"> <div class="modal-dialog modal-sm" role="document"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h5 class="modal-title" id="createModalLabel">访问次数过多，请输入验证码</h5> </div> <div class="modal-body"> <div class="row"> <div class="col-sm-8"> <input v-model="verifyValue" class="form-control J-verify-value"> </div> <div class="col-sm-4"> <img class="J-verify-img" @click="changeTimer" :src="getUrl" alt="点击更换" title="点击更换" style="height: 34px;"> </div> </div> </div> <div class="modal-footer"> <span class="btn btn-primary J-submit-verify" @click="submit">提交</span> </div> </div> </div> </div>'
    })
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('module/order/order_utils', ["module/interface", "util/utils", "components/img_verify"], function(t, a, e) {
    "use strict";
    function o(t, a, e, o) {
        return t && a && e ? o ? a > t ? '<i class="fa fa-custom-down scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分下降"></i>' : t > a ? '<i class="fa fa-custom-up scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分上升"></i>' : '<i class="fa fa-exchange scroll cursor" data-toggle="tooltip" data-placement="top" title="与上月相比本月评分持平"></i>' : a > t ? '<i class="fa fa-custom-down scroll"></i>' : t > a ? '<i class="fa fa-custom-up scroll"></i>' : '<i class="fa fa-exchange scroll"></i>' : ""
    }
    return {
        isPre: function(e, o) {
            if (!e)
                return !1;
            var s = e.data("pre");
            if (2 != s)
                return !1;
            var r = e.data("destinationDate").substring(0, 10);
            $.get(t.common.getServerTime, function(t) {
                return 0 == t.code && t.unixTime ? a.getTime("yyyy-MM-dd", t.unixTime) != r ? (a.showTip("该订单期望送达日期为[" + r + "]，请勿今日配送！"),
                o && o.enable(),
                !0) : !1 : void 0
            })
        },
        getCommentContext: function() {
            var a = $(".J-alert")
              , e = $(".J-info-icon")
              , o = $(".J-alert-text");
            $.ajax({
                url: t.order.getCommentContext,
                type: "GET",
                success: function(t) {
                    var s = t.context
                      , r = t.url;
                    s && (o.text(s),
                    a.show(),
                    r && (e.show(),
                    a.addClass("page-jump cursor"),
                    a.attr("data-url", r)))
                }
            })
        },
        commentCompare: o,
        commentStars: function(t) {
            for (var a = "", e = '<span><i class="fa fa-star star bg-yellow"></i></span> ', o = '<span><i class="fa fa-star star"></i></span> ', s = 0; 5 > s; s++)
                a += s < Math.round(t.toFixed(1)) ? e : o;
            return a
        },
        commentListHtml: function(t) {
            var a = "";
            return t.forEach(function(t, e) {
                a += t.hasData ? '<tr><td class="first"><div class="no-wrap">' + t.poiName + "</div></td><td>" + (t.level || "-- ") + "</td><td><span>" + (t.bizScore ? t.bizScore.toFixed(1) : "-- ") + " " + o(t.bizScore, t.bizScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.tasteScore ? t.tasteScore.toFixed(1) : "-- ") + " " + o(t.tasteScore, t.tasteScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.packScore ? t.packScore.toFixed(1) : "-- ") + " " + o(t.packScore, t.packScorePrevious, t.hasCompareData, 1) + "</span></td><td><span>" + (t.deliverySatisfaction ? t.deliverySatisfaction + "%" : "-- ") + " " + o(t.deliverySatisfaction, t.deliverySatisfactionPrevious, t.hasCompareData, 1) + "</span></td><td>" + (t.commentCnt || "-- ") + '</td><td class="last">' + (t.avgDeliveryTime || "-- ") + "分钟</td></tr>" : '<tr><td class="first"><div class="no-wrap">' + t.poiName + '</div></td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td>--</td><td class="last">--分钟</td></tr>'
            }),
            a
        }
    }
});
define('module/order/printorder_33', ["module/printer", "module/cookie", "util/utils", "module/interface", "module/order/printorder_parser", "widgets/normal_dialog", "components/img_verify", "module/order/order_utils"], function(t, i, e, n, r, o, a, d) {
    function c(t, i) {
        h && h.log && h.log(t, i)
    }
    function u(t, i) {
        c("[ajax post] " + t),
        $.ajax({
            type: "POST",
            url: t,
            success: function(t) {
                c("[ajax response] " + JSON.stringify(t)),
                i({
                    httpSuccess: !0,
                    data: t
                })
            },
            error: function(t, e, n) {
                c("[ajax response error] " + JSON.stringify(t), "error"),
                i({
                    httpSuccess: !1,
                    statusCode: t.status
                })
            }
        })
    }
    function p(i) {
        function r(t) {
            if (l)
                t && t(l);
            else {
                var i = s.appendUrlArgs({
                    wmPoiId: T,
                    token: F,
                    acctId: x
                });
                u(i, function(i) {
                    if (i.httpSuccess)
                        l = i.data,
                        0 === l.code ? t(i.data) : 999 === l.code && new Vue({
                            el: "#verify_img",
                            data: {
                                url: n.order.getPrintOrderInfo
                            },
                            components: [a],
                            template: '<div id="verify_img"><img-verify :url="url"></img-verify></div>'
                        });
                    else {
                        var e = "数据下载失败";
                        i.statusCode && (e += "，状态码：" + i.statusCode),
                        t(null, e)
                    }
                })
            }
        }
        function o(i) {
            function e(i) {
                return t.settings.getPrinterSetting(o.useModel ? n : "-1", i, !0)
            }
            var n = g(i)
              , r = t.getPrinters(n, !0)
              , o = t.settings.getSettings(n, !0);
            r.length ? $(r).each(function(t, n) {
                d(i, n, e(n.key()))
            }) : f(!1, "当前尚未安装或选择有效的打印机")
        }
        function d(t, i, e) {
            p(i, e, function(n) {
                !n && c(t, i, e, function(t) {
                    !t && f("打印失败！")
                })
            })
        }
        function c(t, i, e, n) {
            if (!m || !s)
                return void (n && n(!1, "不支持本地指令打印"));
            if (i.open()) {
                var r = !0;
                try {
                    m(i, t, e)
                } catch (o) {
                    alert(o),
                    r = !1
                } finally {
                    i.close()
                }
                n && n(r)
            } else
                n && n(!1, "打印机连接失败")
        }
        function p(t, i, e) {
            return void (e && e(!1))
        }
        t.settings.reload();
        var l, s = i.dataUrl, f = (i.cmdUrl,
        i.callback || function(t, i) {
            !t && i && e.showTip(i)
        }
        ), m = i.localPrintFunc, g = i.poiIdFunc;
        r(function(t, i) {
            i ? f(!1, i) : o(t)
        })
    }
    function l(i, n, o, a) {
        if (n.data && n.data.length)
            try {
                var d = o.ticketsCount;
                d || (d = o.orderCount ? {
                    1: o.orderCount
                } : {
                    1: 1,
                    2: 1,
                    3: 1
                }),
                e.showTip("订单正在打印，请稍等");
                var u = 0
                  , p = o.pageWidth || 0
                  , l = t.charWidthOfPageWidth(p) || i.width();
                for (var s in n.data) {
                    var f = n.data[s];
                    f.supportBarCode = k && e.versionCompare(k, S) > -1 ? 1 : 0;
                    for (var m in d)
                        for (var g = 0; g < d[m]; g++) {
                            u && h.sleep && h.sleep(1e3 + 1e3 * u),
                            f.receiptHoler = m,
                            f.caution = f.remark,
                            1 === f.has_been_invoiced && f.invoice_title && f.invoice_taxpayer_id && -1 === f.invoice_title.indexOf("税号") && (f.invoice_title = f.invoice_title + "（税号：" + f.invoice_taxpayer_id + "）"),
                            f.pickType = f.pick_type;
                            var v = r.jsonToXml(f, a);
                            localStorage.setItem("xmlTempStorage", "string" == typeof v ? v : JSON.stringify(v)),
                            i.init(o),
                            r.xmlToPrinter.printXml(v, i, l),
                            i.pageEnd(o.pageSpace)
                        }
                }
            } catch (w) {
                c("[_printOrder] " + w)
            }
        else
            alert("无订单数据！")
    }
    function s(t, i, e, r) {
        $.post("/api/order/today/history/print"),
        p({
            dataUrl: n.order.getPrintOrderInfo + "?wmOrderViewId=" + i + "&wmPoiId=" + e + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + t + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, n, o) {
                l(t, n, o, e);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: i,
                            wmPoiId: e
                        }, function(t) {
                            var i = t.data;
                            r && r.text("打印订单(" + i + ")")
                        })
                    }, 200)
                } catch (a) {}
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintOrder(t, i, "today", null, e.pageWidth)
            }
        })
    }
    function f(t, i) {
        var e = t ? t.id : i.data("orderId")
          , r = t ? t.wm_order_id_view_str : i.attr("data-view-id")
          , o = t ? t.wm_poi_id : i.data("poiId");
        t ? t.city_id : i.data("cityId");
        d.isPre(i),
        p({
            dataUrl: n.order.getPrintOrderInfo + "?wmOrderViewId=" + r + "&wmPoiId=" + o + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + e + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, i, e) {
                l(t, i, e, o);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: r,
                            wmPoiId: o
                        })
                    }, 200)
                } catch (n) {}
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintOrder(t, i, "today", null, e.pageWidth)
            }
        })
    }
    function m(t) {
        var i = $(this)
          , e = i.parents(".order")
          , n = e.data("orderId")
          , r = e.attr("data-view-id")
          , o = (e.data("orderType") || "",
        e.data("poiId"))
          , a = (e.data("cityId"),
        i.data("clicked"));
        d.isPre(e),
        1 != a && s(n, r, o, i)
    }
    function g(t) {
        var i = t.id
          , e = t.wm_order_id_view
          , n = t.wm_poi_id;
        s(i, e, n)
    }
    function v() {
        return e.getTime("yyyy-MM-dd")
    }
    function w() {
        $.post("/api/order/today/statistics/print"),
        p({
            dataUrl: "/v2/common/statistics/r/today/data?date=" + v(),
            cmdUrl: null,
            poiIdFunc: function(t) {
                return i.getCookie("wmPoiId")
            },
            localPrintFunc: function(t, i, e) {
                t.init(e),
                t.ptl(i.poi_name, "DHW,C"),
                t.ptl(i.date + " 当日汇总（有效）订单", "DH,C"),
                t.ptsl("*"),
                t.ptfl("{0:-6}{1:-25}", "订单号", "金额"),
                t.ptsl();
                var n = 0
                  , r = 0;
                for (var o in i.list) {
                    var a = i.list[o]
                      , d = 2 == a.wm_order_pay_type;
                    t.ptfl("{0:-6}{1:5}{2:-20}", a.num, d ? "(!)" : "", a.total),
                    d && (r++,
                    n += a.total)
                }
                t.ptsl("*"),
                t.ptl("有效订单数 " + i.count + (r ? " (在线支付 " + r + ")" : "")),
                t.ptl("总金额￥" + i.total + (n ? " (在线支付￥" + n.toFixed(2) + ")" : "")),
                t.pageEnd(e.pageSpace)
            },
            gdiPrintFunc: function(t, i, e) {
                return C.gdiPrintStatistics(t, i, null, e.width)
            }
        })
    }
    function y(t, i, e) {
        _(t, function(n) {
            n.ptl("#" + t + "订单申请退款", "DHW,C"),
            n.ptl("请于 " + i + " 前处理退款请求，超时未处理系统将自动退款", "DH"),
            n.ptl("订单号：" + e)
        })
    }
    function _(n, r) {
        function o(i) {
            return t.settings.getPrinterSetting(c.useModel ? a : "-1", i, !0)
        }
        if (CommConstants.IS_IN_APP) {
            var a = i.getCookie("wmPoiId")
              , d = t.getPrinters(a, !0)
              , c = t.settings.getSettings(a, !0);
            d.length ? $(d).each(function(t, i) {
                var n = o(i.key());
                i.open() ? (i.init(n),
                r(i),
                i.pageEnd(n.pageSpace)) : e.showTip("打印机连接失败")
            }) : e.showTip("当前尚未安装或选择有效的打印机")
        }
    }
    function I(t, i, e) {
        _(t, function(n) {
            n.ptl("#" + t + "订单已取消", "DHW,C"),
            n.ptl("请勿继续备餐配送", "DH"),
            n.ptl("订单号：" + i),
            n.ptl("取消原因：" + e)
        })
    }
    function P(t, i, e) {
        _(t, function(n) {
            n.ptl(i, "DHW,C"),
            n.ptl(e, "DH"),
            n.ptl("订单号：" + t)
        })
    }
    var h = (window.wmNetworkApi,
    window.wmSystemApi)
      , C = window.wmPrinterApi
      , S = "4.0.1.8"
      , O = /MeituanWaimai\/([\d\.]+)/
      , k = window.navigator.userAgent.match(O) || [];
    k = k[1];
    var T = "1" === localStorage.getItem("isChain") ? -1 : i.getCookie("wmPoiId")
      , F = i.getCookie("token")
      , x = i.getCookie("acctId");
    return {
        printOrder: m,
        printDayStatistics: w,
        printWhenConfirm: f,
        printRefundTips: y,
        printReturnGoodsTips: P,
        printCancelTips: I,
        printByOrder: g
    }
});
define('module/order/printorder', ["module/printer", "module/cookie", "util/utils", "module/interface", "module/order/printorder_parser", "widgets/normal_dialog", "components/img_verify", "module/order/order_utils", "module/order/printorder_33"], function(t, i, n, r, e, o, d, a, c) {
    function u(t, i) {
        C && C.log && C.log(t, i)
    }
    function l(t, i) {
        u("[ajax post] " + t),
        $.ajax({
            type: "POST",
            url: t,
            success: function(t) {
                u("[ajax response] " + JSON.stringify(t)),
                i({
                    httpSuccess: !0,
                    data: t
                })
            },
            error: function(t, n, r) {
                u("[ajax response error] " + JSON.stringify(t), "error"),
                i({
                    httpSuccess: !1,
                    statusCode: t.status
                })
            }
        })
    }
    function p(i) {
        function e(t) {
            if (p)
                t && t(p);
            else {
                var i = s.appendUrlArgs({
                    wmPoiId: S,
                    token: k,
                    acctId: T
                });
                l(i, function(i) {
                    if (i.httpSuccess)
                        p = i.data,
                        0 === p.code ? t(i.data) : 999 === p.code && new Vue({
                            el: "#verify_img",
                            data: {
                                url: r.order.getPrintOrderInfo
                            },
                            components: [d],
                            template: '<div id="verify_img"><img-verify :url="url"></img-verify></div>'
                        });
                    else {
                        var n = "数据下载失败";
                        i.statusCode && (n += "，状态码：" + i.statusCode),
                        t(null, n)
                    }
                })
            }
        }
        function o(i) {
            function n(i) {
                return t.settings.getPrinterSetting(o.useModel ? r : "-1", i, !0)
            }
            var r = g(i)
              , e = t.getPrinters(r, !0)
              , o = t.settings.getSettings(r, !0);
            e.length ? $(e).each(function(t, r) {
                a(i, r, n(r.id))
            }) : f(!1, "当前尚未安装或选择有效的打印机")
        }
        function a(t, i, n) {
            u(i, n, function(r) {
                !r && c(t, i, n, function(t) {
                    !t && f("打印失败！")
                })
            })
        }
        function c(t, i, n, r) {
            if (!v || !s)
                return void (r && r(!1, "不支持本地指令打印"));
            var e = !0;
            try {
                v(i, t, n)
            } catch (o) {
                alert(o),
                e = !1
            } finally {}
            r && r(e)
        }
        function u(t, i, n) {
            n && n(!1)
        }
        t.settings.reload();
        var p, s = i.dataUrl, f = (i.cmdUrl,
        i.callback || function(t, i) {
            !t && i && n.showTip(i)
        }
        ), v = i.localPrintFunc, g = i.poiIdFunc;
        e(function(t, i) {
            i ? f(!1, i) : o(t)
        })
    }
    function s(i, r, o, d) {
        if (r.data && r.data.length)
            try {
                var a = o.ticketsCount;
                a || (a = o.orderCount ? {
                    1: o.orderCount
                } : {
                    1: 1,
                    2: 1,
                    3: 1
                }),
                n.showTip("订单正在打印，请稍等");
                var c = 0
                  , l = o.pageWidth || 0
                  , p = t.charWidthOfPageWidth(l);
                for (var s in r.data) {
                    var f = r.data[s];
                    f.supportBarCode = U && n.versionCompare(U, x) > -1 ? 1 : 0;
                    for (var v in a)
                        for (var g = 0; g < a[v]; g++) {
                            c && C.sleep && C.sleep(1e3 + 1e3 * c),
                            f.receiptHoler = v,
                            f.caution = f.remark,
                            1 === f.has_been_invoiced && f.invoice_title && f.invoice_taxpayer_id && -1 === f.invoice_title.indexOf("税号") && (f.invoice_title = f.invoice_title + "（税号：" + f.invoice_taxpayer_id + "）"),
                            f.pickType = f.pick_type;
                            var m = e.jsonToXml(f, d);
                            localStorage.setItem("xmlTempStorage", "string" == typeof m ? m : JSON.stringify(m)),
                            W.print(i.id, m, {
                                charWidth: p
                            })
                        }
                }
            } catch (h) {
                u("[_printOrder] " + h)
            }
        else
            alert("无订单数据！")
    }
    function f(t, i, e, o) {
        $.post("/api/order/today/history/print"),
        p({
            dataUrl: r.order.getPrintOrderInfo + "?wmOrderViewId=" + i + "&wmPoiId=" + e + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + t + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, n, r) {
                s(t, n, r, e);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: i,
                            wmPoiId: e
                        }, function(t) {
                            var i = t.data;
                            o && o.text("打印订单(" + i + ")")
                        })
                    }, 200)
                } catch (d) {}
            }
        }),
        n.reportMC_SG.report("b_s9qljzfz")
    }
    function v(t, i) {
        var n = t ? t.id : i.data("orderId")
          , e = t ? t.wm_order_id_view_str : i.attr("data-view-id")
          , o = t ? t.wm_poi_id : i.data("poiId");
        t ? t.city_id : i.data("cityId");
        a.isPre(i),
        p({
            dataUrl: r.order.getPrintOrderInfo + "?wmOrderViewId=" + e + "&wmPoiId=" + o + "&getNewVo=1",
            cmdUrl: "/order/printCommand/v2?orderId=" + n + "&type=today",
            poiIdFunc: function(t) {
                var i = t.data && t.data[0];
                return i ? i.wm_poi_id : null
            },
            localPrintFunc: function(t, i, n) {
                s(t, i, n, o);
                try {
                    setTimeout(function() {
                        $.post("/print/count/v2", {
                            wmOrderViewId: e,
                            wmPoiId: o
                        })
                    }, 200)
                } catch (r) {}
            }
        })
    }
    function g(t) {
        var i = $(this)
          , r = i.parents(".order")
          , e = r.data("orderId")
          , o = r.attr("data-view-id")
          , d = (r.data("orderType") || "",
        r.data("poiId"))
          , c = (r.data("cityId"),
        i.data("clicked"));
        if (a.isPre(r),
        1 != c) {
            f(e, o, d, i);
            var u = n.url2Cid();
            u && n.reportMC("b_shangou_online_e_g5ytv0qf_mc", u, null, null, {
                order_id: e
            })
        }
    }
    function m(t) {
        var i = t.id
          , n = t.wm_order_id_view
          , r = t.wm_poi_id;
        f(i, n, r)
    }
    function h() {
        return n.getTime("yyyy-MM-dd")
    }
    function w() {
        $.post("/api/order/today/statistics/print"),
        p({
            dataUrl: "/v2/common/statistics/r/today/data?date=" + h(),
            cmdUrl: null,
            poiIdFunc: function(t) {
                return i.getCookie("wmPoiId")
            },
            localPrintFunc: function(i, n, r) {
                var e = '<print>\n<div font="B" align="center">' + n.poi_name + '</div>\n<div font="H" align="center">' + (n.date + " 当日汇总（有效）订单") + '</div>\n<line chars="*"/>\n<tr>\n    <td width="6" align="left">订单号</td>\n    <td width="25" align="right">金额</td>\n</tr>\n<line />'
                  , o = 0
                  , d = 0;
                for (var a in n.list) {
                    var c = n.list[a]
                      , u = 2 == c.wm_order_pay_type;
                    e += '\n<tr>\n<td width="6" align="right">' + c.num + '</td>\n<td width="5" align="left">' + (u ? "(!)" : "") + '</td>\n<td width="20" align="right">' + c.total + "</td>\n</tr>",
                    u && (d++,
                    o += c.total)
                }
                e += '\n<line chars="*"/>\n<div>' + ("有效订单数 " + n.count + (d ? " (在线支付 " + d + ")" : "")) + "</div>\n<div>" + ("总金额￥" + n.total + (o ? " (在线支付￥" + o.toFixed(2) + ")" : "")) + "</div>\n</print>";
                var l = r.pageWidth || 0
                  , p = t.charWidthOfPageWidth(l);
                W.print(i.id, e, {
                    charWidth: p
                })
            }
        })
    }
    function _(i, n, r) {
        y(i, function(e, o) {
            var d = '\n<print>\n<div font="B" align="center">#' + i + '订单申请退款</div>\n<div font="H">请于 ' + n + ' 前处理退款请求，超时未处理系统将自动退款</div>\n<div font="D">订单号：' + r + "</div>\n</print>\n"
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a);
            W.print(e.id, d, {
                charWidth: c
            })
        })
    }
    function y(r, e) {
        function o(i) {
            return t.settings.getPrinterSetting(c.useModel ? d : "-1", i, !0)
        }
        if (CommConstants.IS_IN_APP) {
            var d = i.getCookie("wmPoiId")
              , a = t.getPrinters(d, !0)
              , c = t.settings.getSettings(d, !0);
            a.length ? $(a).each(function(t, i) {
                var n = o(i.id);
                e(i, n)
            }) : n.showTip("当前尚未安装或选择有效的打印机")
        }
    }
    function I(i, n, r) {
        y(i, function(e, o) {
            var d = '\n<print>\n<div font="B" align="center">#' + i + '订单已取消</div>\n<div font="H">请勿继续备餐配送</div>\n<div font="D">订单号：' + n + '</div>\n<div font="D">取消原因：' + r + "</div>\n</print>\n"
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a);
            W.print(e.id, d, {
                charWidth: c
            })
        })
    }
    function P(i, n, r) {
        y(i, function(e, o) {
            var d = r.split("\n").map(function(t) {
                return '<div font="H">' + t + "</div>\n"
            }).join("")
              , a = o.pageWidth || 0
              , c = t.charWidthOfPageWidth(a)
              , u = '\n<print>\n<div font="B" align="center">' + n + "</div>\n<line/>\n" + d + '<line/>\n<div font="D" align="right">订单号：' + i + "</div>\n</print>\n";
            W.print(e.id, u, {
                charWidth: c
            })
        })
    }
    var C = (window.wmNetworkApi,
    window.wmSystemApi)
      , W = window.wmPrinterApi
      , O = C && C.getAppInfo && C.getAppInfo();
    if (!O || O.code < 4e3)
        return c;
    var S = "1" === localStorage.getItem("isChain") ? -1 : i.getCookie("wmPoiId")
      , k = i.getCookie("token")
      , T = i.getCookie("acctId")
      , x = "4.0.1.8"
      , F = /MeituanWaimai\/([\d\.]+)/
      , U = window.navigator.userAgent.match(F) || [];
    return U = U[1],
    {
        printOrder: g,
        printDayStatistics: w,
        printWhenConfirm: v,
        printRefundTips: _,
        printReturnGoodsTips: P,
        printCancelTips: I,
        printByOrder: m
    }
});
define('widgets/exception_prompt', ["widgets/normal_dialog"], function(t) {
    var e, i = document.getElementById("hashframe") ? document.getElementById("hashframe").contentWindow : window;
    try {
        e = i.document
    } catch (n) {
        console.error("frame blocked")
    }
    var o = function(t) {
        if (!(this instanceof o))
            return new o(t);
        if (this.mainTitle = t.mainTitle,
        this.subTile = t.subTile,
        t.target && (this.target = t.target),
        t.isDialog)
            this.isDialog = !0,
            this.html = '<h3 style="margin:0 0 10px 0;text-align:center;font-size:18px;color:#666;">' + t.mainTitle + '</h3><div style="color:#999;">' + t.subTile + "</div>";
        else {
            this.isDialog = !1;
            var e = t.type
              , i = "";
            i = 2 === e ? "no-wifi-icon fa fa-wifi" : "no-data-icon fa fa-file-text-o",
            this.html = '<div id="exception-pro" class="panel" style="width:500px;margin:0 auto;padding: 50px 0;text-align:center;"><i class="' + i + '"></i><h3 style="margin:20px 0 10px 0;font-size:18px;color:#666;">' + t.mainTitle + '</h3><div style="color:#999;"><span style="display:inline-block;text-align:left;">' + t.subTile + "</span></div></div>"
        }
    };
    return o.prototype.show = function() {
        if (this.isDialog)
            t({
                title: this.mainTitle,
                content: this.html,
                btns: [{
                    txt: "刷新",
                    fn: function() {
                        window.location.reload()
                    }
                }]
            });
        else {
            var i = $(e);
            this.target ? i.find(this.target).append(this.html) : i.find("body").append(this.html)
        }
        return this
    }
    ,
    o.hide = function() {
        var t, e = document.getElementById("hashframe") ? document.getElementById("hashframe").contentWindow : window;
        try {
            t = e.document;
            var i = $(t).find("#exception-pro");
            i.length > 0 && i.remove()
        } catch (n) {
            console.error("frame blocked")
        }
    }
    ,
    o
});
define('module/set', ["module/cookie", "util/utils"], function(o, e) {
    var r = "set_info"
      , i = function(o) {
        return null == o || "string" == typeof o && "" === o.trim()
    }
      , n = function(e) {
        if (null != e) {
            var n;
            e.ignoreSetRouterProxy ? n = {
                wmPoiId: e.wmPoiId,
                ignoreSetRouterProxy: !0
            } : i(e.regionId) || (n = {
                wmPoiId: e.wmPoiId,
                region_id: e.regionId,
                region_version: e.regionVersion
            }),
            null != n && o.setCookie(r, JSON.stringify(n))
        }
    }
      , t = function() {
        var e;
        try {
            var n = o.getCookie(r);
            if (!i(n)) {
                try {
                    e = JSON.parse(decodeURIComponent(n))
                } catch (t) {
                    e = JSON.parse(n)
                }
                "string" == typeof e && (e = JSON.parse(e))
            }
        } catch (t) {
            console.warn("SET化参数获取失败")
        }
        if (null == e)
            return null;
        var u = o.getCookie("wmPoiId")
          , g = String(e.wmPoiId);
        return u !== g ? (console.warn("SET化参数门店ID不匹配"),
        null) : e.ignoreSetRouterProxy === !0 ? {
            ignoreSetRouterProxy: !0
        } : i(e.region_id) ? null : {
            region_id: e.region_id,
            region_version: e.region_version
        }
    };
    return {
        saveParams: n,
        getParams: t
    }
});
define('module/ajax_util', ["module/interface", "module/set", "util/utils"], function(e, r, n) {
    var t = jQuery.ajax
      , o = $(".J-csrf-token")
      , a = $(".J-sign-token")
      , i = o.val()
      , d = a.val()
      , u = [e.order.getNewOrderFromInterval, e.order.queryProcessedOrderList, e.order.queryHisOrderList];
    o.remove(),
    a.remove();
    var s = function(r) {
        return r && r.indexOf(e.order.queryHisOrderList) > -1 ? 100007 : r && r.indexOf(e.order.recipientPhone) > -1 ? 100008 : r && r.indexOf(e.order.getPrintOrderInfo) > -1 ? 100009 : r && r.indexOf(e.order.queryProcessedOrderList) > -1 ? 100040 : null
    }
      , l = location.origin
      , c = function(e) {
        var r = [];
        for (var n in e)
            r.push(n + "=" + e[n]);
        return r.join("&")
    }
      , f = function(e, r) {
        for (var n = 0, t = e.length; t > n; n++)
            if (r && -1 !== r.indexOf(e[n]))
                return !0
    }
      , p = function(e) {
        if (e) {
            for (var r = "", n = 0, t = e.length; t > n; n++)
                r += String.fromCharCode(2 ^ e.charCodeAt(n));
            return r
        }
        return ""
    }
      , v = p(d);
    $.ajax = function(e, o) {
        "string" == typeof e && (e = $.extend({
            url: e
        }, o)),
        e.type && "post" === e.type.toLowerCase() && (e.data && "function" == typeof e.data.append ? e.data.append("csrfToken", i) : e.data = $.extend(e.data || {}, {
            csrfToken: i
        })),
        f(u, e.url) && (e.data && "function" == typeof e.data.append ? e.data.append("signToken", v) : e.data = $.extend(e.data || {}, {
            signToken: v
        }));
        var a = r.getParams();
        if (a) {
            var d = (e.method || e.type || "GET").toUpperCase()
              , p = "GET" === d ? e.data || {} : n.urlParams(e.url);
            if ((null != p.region_id || null != p.region_version || null != p.ignoreSetRouterProxy) && console.warn("region_id、region_version与ignoreSetRouterProxy为SET化保留参数，请勿设置"),
            "GET" === d)
                e.data = $.extend(e.data, a);
            else {
                var g = e.url
                  , x = g.indexOf("?");
                -1 === x ? g += "?" : x !== g.length - 1 && (g += "&");
                var h = [];
                for (var y in a)
                    h.push(y + "=" + a[y]);
                g += h.join("&"),
                e.url = g
            }
        }
        var O = function(e, r, n) {};
        e.success && jQuery.isFunction(e.success) && (O = e.success),
        e.success = function(r, n, t) {
            4001 === r.code || 4002 === r.code || 1017 === r.code || O(r, n, t),
            Owl && Owl.addApi({
                name: e.url,
                statusCode: r.code
            })
        }
        ;
        var m = function(e, r, n) {};
        "function" == typeof e.error && (m = e.error),
        e.error = function(e, r, n) {
            m(e, r, n)
        }
        ;
        var _ = s(e.url);
        if (_) {
            Rohr_Opt.Flag = _;
            var P = c(e.data ? e.data : {});
            Rohr_Opt.reload(l + e.url + (P ? (e.url.indexOf("?") > -1 ? "&" : "?") + P : "")),
            e.data ? e.data._token = rohrdata : e.data = {
                _token: rohrdata
            }
        }
        return t(e)
    }
    ,
    Vue && Vue.http && (Vue.http.interceptors.push(function(e, n) {
        var t = e.data || {};
        (null != t.region_id || null != t.region_version || null != t.ignoreSetRouterProxy) && console.warn("region_id、region_version与ignoreSetRouterProxy为SET化保留参数，请勿设置");
        var o = r.getParams();
        e.params = $.extend(e.params, o),
        n()
    }),
    Akita && Akita.interceptors.vueResource.use(Vue.http))
});
define("module/root/new_order/checkOnline", ["widgets/normal_dialog"], function(e) {
    return {
        init: function() {
            this.errorTimes = 0,
            this.offlineStartTime = 0,
            this.offlineEndTime = 0,
            this.isOnline = !0
        },
        startInterval: function(e) {
            window.checkNeworderInterval = setInterval(e.check.bind(e), 6e4)
        },
        endInterval: function() {
            window.checkNeworderInterval && clearInterval(window.checkNeworderInterval)
        },
        connectedHandler: function() {
            this.offlineTipDialog && this.offlineTipDialog.modal("hide"),
            this.errorTimes = 0,
            this.endInterval(),
            this.isOnline = !0,
            this.offlineEndTime = Math.floor((new Date).getTime() / 1e3),
            $.post("/poi/offline/log", {
                fromTime: this.offlineStartTime,
                toTime: this.offlineEndTime
            }, function() {}),
            console.log("fromTime:" + this.offlineStartTime + ",toTime:" + this.offlineEndTime)
        },
        disconnectedHandler: function(o) {
            var t = this;
            this.errorTimes += 1,
            2 == this.errorTimes && (this.checkService("www.baidu.com", function() {
                t.checkLabHouses()
            }, function() {
                t.offlineTipDialog = e({
                    title: "网络无连接",
                    content: "系统检测到网络连接异常，请检查网络连接后重新连接网络",
                    btns: [{
                        txt: "重试",
                        fn: function() {
                            window.location.href = "/"
                        }
                    }]
                })
            }),
            this.startInterval(o),
            this.isOnline = !1,
            this.offlineStartTime = Math.floor((new Date).getTime() / 1e3)),
            1 == this.errorTimes && o.check()
        },
        checkService: function(e, o, t, n) {
            var i = document.createElement("img");
            i.style.display = "none",
            i.src = "//" + e + "/favicon.ico?" + String(Math.random()),
            i.onload = function() {
                "function" == typeof o && o(),
                $(i).remove(),
                "function" == typeof n && n()
            }
            ,
            i.onerror = function() {
                "function" == typeof t && t(),
                $(i).remove(),
                "function" == typeof n && n()
            }
            ,
            $("body").append(i)
        },
        checkLabHouses: function() {
            var o = this
              , t = ["waimai.dxvip.meituan.com", "waimai.yfvip.meituan.com", "waimai.cqvip.meituan.com"]
              , n = t.length
              , i = new Array(n).join(",").split(",")
              , r = function() {
                i.every(function(e) {
                    return "" !== e
                }) && (i.reduce(function(e, o) {
                    return e + o
                }) === n ? top.location.reload() : o.offlineTipDialog = e({
                    title: "网络无连接",
                    content: "系统检测到网络连接异常，请检查网络连接后重新连接网络(" + i.join(",") + ")",
                    btns: [{
                        txt: "重试",
                        fn: function() {
                            o.checkService("waimaie.meituan.com", function() {
                                window.location.href = "/"
                            }, function() {
                                o.offlineTipDialog.modal("hide"),
                                o.checkLabHouses()
                            })
                        }
                    }]
                }))
            };
            t.forEach(function(e, t) {
                o.checkService(e, function() {
                    i[t] = 1
                }, function() {
                    i[t] = 0
                }, r)
            })
        },
        offlineTipDialog: null
    }
}),
define("module/root/new_order", ["module/cookie", "module/root/new_order/checkOnline", "module/order/printorder", "module/interface", "util/utils", "widgets/exception_prompt", "widgets/normal_dialog", "module/ajax_util", "widgets/get_poilist"], function(e, o, t, n, i, r, a, d, c) {
    "use strict";
    i.setStorage("isShowDialog", 0);
    var s = e.getCookie("acctId")
      , f = s + "-labelInfo"
      , l = s + "-countLabelInfo"
      , u = i.getStorage(f) || ""
      , h = i.getStorage(l) || ""
      , m = window.frames[0];
    "" === u && i.getStorage("labelInfo") && (u = i.getStorage("labelInfo"),
    i.removeStorage("labelInfo"));
    var g = window.audioControls.neworder
      , w = window.audioControls["auto-neworder"]
      , p = e.getCookie("wmPoiId")
      , I = window.CommConstants.IS_CHAIN ? 0 : i.ifAutoAccept(p) ? 1 : 0;
    return {
        init: function() {
            var e = this;
            o.init(),
            c(function(o) {
                var t = [];
                $.each(o, function(e, o) {
                    "-1" != o.id && t.push(o.id)
                }),
                e.linkedPoiIds = t.join("|")
            }),
            CommConstants.IS_LIANSUO ? setInterval(this.checkLiansuo.bind(this), 3e3) : this.check()
        },
        checkLiansuo: function() {
            var e = this
              , o = this._getInnerDoc();
            if (o)
                var t = o.find("#newOrderNum")
                  , i = o.find("#urgencyOrderNum");
            $.get(n.order.getNewAcquiringOrderCount, {}, function(o) {
                var n, r = 0;
                1 == o.code ? (n = o.newOrderNum,
                r = o.urgencyOrderNum) : (n = 0,
                r = 0),
                parseInt(n) > 0 ? (g.audioPlay(),
                e._showWindow()) : g.audioStop(),
                e._isInUnprocessedPage() && (t.text(n),
                i.text(r)),
                e.updateCount(n)
            })
        },
        check: function() {
            this._isInUnprocessedPage() ? this.getListFromInterval(!0) : localStorage.getItem("autoAcceptWmPoiList") ? this._getList() : this.getCount()
        },
        getCount: function() {
            var e = this;
            $.get(n.order.getNewOrderCount, e._getAccountInfo(), function(t) {
                if (0 == o.isOnline && o.connectedHandler(),
                t && 0 == t.code) {
                    var t = t.data
                      , n = t.count;
                    e.updateCount(n),
                    t.countLabelInfo && t.countLabelInfo !== h && (i.setStorage(l, t.countLabelInfo),
                    h = t.countLabelInfo)
                } else
                    t && t.msg;
                setTimeout(e.check.bind(e), 1e3 * (t && t.data && t.data.loopInterval ? t.data.loopInterval : 60))
            }).error(function() {
                o.disconnectedHandler(e)
            })
        },
        _getList: function() {
            var e = this;
            $.ajax({
                url: n.order.getNewOrderFromInterval + "?time=" + (new Date).getTime(),
                data: {
                    isQuery: 1,
                    getNewVo: 1,
                    labelInfo: u,
                    doEncrypt: 1,
                    isAutoAccept: I
                },
                success: function(t) {
                    if (0 == o.isOnline && o.connectedHandler(),
                    t && 0 == t.code) {
                        var n = t.data || t.wmOrderList
                          , r = n.length;
                        e.updateCount(r, e._checkIfAllAutoOrders(n) ? "auto" : "");
                        var a = e.getOrderInfos(n);
                        r > 0 && e.recordReceiptInfo(a, !1, 0),
                        t.labelInfo && t.labelInfo !== u && (i.setStorage(f, t.labelInfo),
                        u = t.labelInfo),
                        e.checkAndConfirmAutoOrders(n)
                    } else
                        t && t.msg;
                    setTimeout(e.check.bind(e), 1e3 * (t && t.loopInterval ? t.loopInterval : 60))
                },
                error: function(t, n, i) {
                    o.disconnectedHandler(e)
                }
            })
        },
        getListFromInterval: function(e) {
            var t, a = this, d = a._getInnerDoc();
            d && (t = d.find("#J-no-order"));
            var c = e ? 1 : 0;
            $.ajax({
                url: n.order.getNewOrderFromInterval + "?time=" + (new Date).getTime(),
                data: {
                    isQuery: c,
                    getNewVo: 1,
                    labelInfo: u,
                    doEncrypt: 1,
                    isAutoAccept: I
                },
                success: function(n) {
                    if (0 == o.isOnline && o.connectedHandler(),
                    n && 0 == n.code) {
                        var d = n.data || n.wmOrderList
                          , c = d.length;
                        a.updateCount(c, a._checkIfAllAutoOrders(d) ? "auto" : "");
                        var s = a._getInnerDoc();
                        s && s.find("#orders-container .order").remove(),
                        n.labelInfo && n.labelInfo !== u && (i.setStorage(f, n.labelInfo),
                        u = n.labelInfo),
                        c > 0 && m.postMessage(JSON.stringify({
                            handlerType: "analyseOrder",
                            orderData: d,
                            fontString: n.fontString
                        }), "*");
                        var l = a.getOrderInfos(d);
                        c > 0 && a.recordReceiptInfo(l, !1, 0),
                        c > 0 ? (a._showWindow(),
                        t && t.hide(),
                        location.href.indexOf("order/receive/unprocessed") > -1 && r.hide()) : 0 == c && (t && t.show(),
                        location.href.indexOf("order/receive/unprocessed") > -1 && r({
                            isDialog: !1,
                            mainTitle: "暂无新订单",
                            subTile: "暂时没有新的订单，稍后再来看看吧!",
                            target: ".J-order-list"
                        }).show()),
                        a.checkAndConfirmAutoOrders(d)
                    } else
                        n && n.msg && s && s.find("#validateWarning").text(n.msg);
                    e && setTimeout(a.check.bind(a), 1e3 * (n && n.loopInterval ? n.loopInterval : 60))
                },
                error: function(t, n, i) {
                    e && o.disconnectedHandler(a)
                }
            })
        },
        getListFromPush: function(e, o) {
            if (!(this.linkedPoiIds && this.linkedPoiIds.indexOf(o) < 0)) {
                var t = this
                  , a = parseInt(localStorage.getItem("count")) || 0
                  , d = function() {
                    $.get(n.order.getNewOrderFromPush, {
                        wmOrderViewId: e,
                        wmPoiId: o,
                        getNewVo: 1,
                        doEncrypt: 1,
                        isAutoAccept: I
                    }, function(n) {
                        if (n && 0 == n.code) {
                            var d = n.data;
                            t.updateCount(a + 1, i.ifAutoAccept(o) ? "auto" : ""),
                            m.postMessage(JSON.stringify({
                                handlerType: "analyseOrder",
                                orderData: d,
                                fontString: n.fontString
                            }), "*");
                            var c = t.getOrderInfos(d);
                            t.recordReceiptInfo(c, !0, 0),
                            t._showWindow();
                            var s = t._getInnerDoc();
                            s && s.find("#J-no-order").hide(),
                            location.href.indexOf("order/receive/unprocessed") > -1 && r.hide(),
                            t.checkAndConfirmAutoOrders(d)
                        } else if (n && n.msg) {
                            var s = t._getInnerDoc();
                            s && s.find("#validateWarning").text(n.msg),
                            t.checkAndConfirmAutoOrders([{
                                wm_poi_id: o,
                                wm_order_id_view_str: e
                            }])
                        }
                    })
                };
                if (this._isInUnprocessedPage()) {
                    if (this._checkIfSameWithPageOrders(e))
                        return;
                    d()
                } else {
                    var c = localStorage.getItem("autoAcceptWmPoiList") || "";
                    c.indexOf(o) > -1 ? d() : (t.updateCount(a + 1),
                    t._showWindow())
                }
            }
        },
        timeId: null,
        updateCount: function(e, o) {
            var t = this._getInnerDoc()
              , n = $(".J-order-count")
              , i = "";
            t && (i = t.find("#J-no-order"));
            var a;
            parseInt(e) > 0 ? (a = e > 99 ? "99+" : e,
            o && "auto" === o ? w.audioPlay() : g.audioPlay(),
            i && i.hide(),
            location.href.indexOf("order/receive/unprocessed") > -1 && r.hide()) : (a = "",
            e = 0,
            g.audioStop(),
            w.audioStop(),
            i && i.show(),
            location.href.indexOf("order/receive/unprocessed") > -1 && r({
                isDialog: !1,
                mainTitle: "暂无新订单",
                subTile: "暂时没有新的订单，稍后再来看看吧!",
                target: ".J-order-list"
            }).show()),
            localStorage.setItem("count", e),
            n.text(a),
            window.refreshOrderModuleNewTag && window.refreshOrderModuleNewTag()
        },
        _checkIfSameWithPageOrders: function(e) {
            var o = this._getInnerDoc();
            if (o)
                for (var t = o.find(".order"), n = 0; n < t.size(); n++)
                    if (t.eq(n).attr("id") == e)
                        return !0;
            return !1
        },
        recordReceiptInfo: function(o, t, i) {
            if (0 != o.length) {
                var r = e.getCookie("acctId")
                  , a = e.getCookie("token");
                $.post(n.order.newOrderReceipt, {
                    orderInfoPair: JSON.stringify(o),
                    acctId: r,
                    appType: "3",
                    token: a,
                    isFromPush: t,
                    isRefreshPage: i
                })
            }
        },
        getOrderInfos: function(e) {
            var o = [];
            return $.each(e, function(e, t) {
                o.push({
                    wmPoiId: t.wm_poi_id,
                    wmOrderViewId: t.wm_order_id_view_str
                })
            }),
            o
        },
        _getInnerDoc: function() {
            return window.top != window.self ? $("document") : window.sameSrc ? $(document.getElementById("hashframe").contentWindow.document) : void 0
        },
        _getAccountInfo: function() {
            return {
                wmPoiId: "1" === localStorage.getItem("isChain") ? -1 : p,
                acctId: e.getCookie("acctId"),
                token: e.getCookie("token"),
                appType: "3",
                labelInfo: u,
                countLabelInfo: h
            }
        },
        _showWindow: function() {
            var e = window.wmSystemApi;
            if (e && e.showWindow) {
                var o = $("#J-neworder-notify-type")
                  , t = o && o.val() || "alert";
                if ("alert" === t) {
                    var n = e && e.getAppInfo && e.getAppInfo();
                    n && n.code < 4e3 ? e.showWindow("Maximize") : e.showWindow(window)
                } else
                    "flash" === t && e.flashWindow && e.flashWindow("CAPTION,TIMERNOFG,TRAY", 1e3)
            } else
                window.orderNotify && window.orderNotify({
                    request: "New_order",
                    "\ufeffpersistent": !0
                })
        },
        checkAndConfirmAutoOrders: function(e) {
            for (var o = 0, t = e.length; t > o; o++) {
                var n = e[o];
                i.ifAutoAccept(n.wm_poi_id) && this._confirmOrder(n, 1)
            }
        },
        _checkIfAllAutoOrders: function(e) {
            for (var o = 0, t = e.length; t > o; o++) {
                var n = e[o];
                if (!i.ifAutoAccept(n.wm_poi_id))
                    return !1
            }
            return !0
        },
        _confirmOrder: function(o, r) {
            var d = this
              , c = o.wm_poi_id
              , s = o.wm_order_id_view_str
              , f = e.getCookie("token")
              , l = e.getCookie("acctId")
              , u = {};
            u.invokeTime = (new Date).getTime(),
            u.orderId = s,
            u.poiId = c,
            u.type = 0,
            $.post(n.order.confirmNewOrder, {
                wmPoiId: c,
                orderId: s,
                acctId: l,
                appType: "3",
                token: f,
                isPrint: 1,
                isAutoAccept: r
            }, function(e) {
                if (u.responseTime = (new Date).getTime(),
                0 === e.code || 10031 === e.code || 10032 === e.code) {
                    10031 === e.code ? d._showAcceptProtocolModal("美团跑腿") : 10032 === e.code && d._showAcceptProtocolModal("混合"),
                    d._removeOrder(s),
                    t.printWhenConfirm(o, void 0);
                    var n = parseInt(i.getStorage("readTime") || 0)
                      , r = parseInt(i.getStorage("isShowDialog") || 0);
                    if (3 > n && !r) {
                        i.setStorage("isShowDialog", 1);
                        var f = new a({
                            title: "备货提醒",
                            content: "顾客有权在接单1分钟内极速退款，请接单1分钟后开始备货，以免造成损失",
                            btns: [{
                                txt: "我知道了",
                                fn: function() {
                                    f.modal("hide")
                                }
                            }]
                        });
                        f.on("hide.bs.modal", function(e) {
                            i.setStorage("readTime", n + 1),
                            i.setStorage("isShowDialog", 0)
                        })
                    }
                } else
                    9 == e.code || e.data && "undefined" != typeof e.data.status && 9 == e.data.status ? d._removeOrder(s) : i.showTip(e.msg);
                u.domTime = (new Date).getTime(),
                $.post("/api/log/orderLog", u, function(e) {}),
                i.graphicPrintAfterOrderConfirm(e, c, s)
            })
        },
        _showAcceptProtocolModal: function(e) {
            a({
                title: "发配送失败",
                content: "由于您未在7天内确认" + e + "配送补充协议，已无法再使用" + e + "配送服务，请尽快前往处理",
                btns: [{
                    txt: "去看看",
                    fn: function() {
                        parent.location.href = "/promise"
                    }
                }, {
                    txt: "知道了"
                }]
            })
        },
        _removeOrder: function(e) {
            m.postMessage(JSON.stringify({
                handlerType: "removeOrder",
                orderViewId: e
            }), "*");
            var o = localStorage.getItem("count")
              , t = o - 1;
            0 > t && (t = 0),
            this.updateCount(t)
        },
        _isInUnprocessedPage: function() {
            return -1 !== location.href.indexOf("/v2/order/receive/unprocessed")
        }
    }
});
define("module/root/change_address_order_count", ["module/interface"], function(e) {
    return {
        timer: null,
        _queryChangeAddressOrderCount: function() {
            var r = this;
            $.ajax({
                url: e.order.getChangeAddressOrderCount,
                success: function(e) {
                    0 === e.code && (r._renderChangeAddressOrderCount(e.data.modifyCount),
                    r.timer && clearTimeout(r.timer),
                    r.timer = setTimeout(function() {
                        r._queryChangeAddressOrderCount()
                    }, e && e.data && e.data.loopInterval ? 1e3 * e.data.loopInterval : 12e4))
                },
                error: function() {
                    r.timer && clearTimeout(r.timer),
                    r.timer = setTimeout(function() {
                        r._queryChangeAddressOrderCount()
                    }, 6e5)
                }
            })
        },
        _renderChangeAddressOrderCount: function(e) {
            var r = $(".J-change-address-count");
            e > 0 ? r.text(e > 99 ? "99+" : e) : r.empty(),
            localStorage.setItem("changeAddressOrderCount", e),
            window.refreshOrderModuleNewTag && window.refreshOrderModuleNewTag()
        },
        init: function() {
            this._queryChangeAddressOrderCount()
        }
    }
});
define("module/root/refund_order", ["module/cookie", "module/interface"], function(e, n) {
    return {
        innerIframeWindow: window.frames[0],
        _getRefundOrderList: function(e) {
            var n = this;
            window.loadRefundOrderList && (e ? loadRefundOrderList() : loadRefundOrderList(function(e) {
                setTimeout(function() {
                    n._check()
                }, e && e.data && e.data.refundCountLoopInterval ? 1e3 * e.data.refundCountLoopInterval : 12e4)
            }))
        },
        _getRefundOrderCount: function(e) {
            var t = this;
            $.ajax({
                url: n.order.getRefundOrderCount,
                success: function(n) {
                    0 === n.code && t.handleRefundApply(n.data.toRefundCount),
                    e || setTimeout(function() {
                        t._check()
                    }, n.data && n.data.refundCountLoopInterval ? 1e3 * n.data.refundCountLoopInterval : 12e4)
                },
                error: function() {
                    setTimeout(function() {
                        t._check()
                    }, 12e4)
                }
            })
        },
        _getAbnormalOrderCount: function(e) {
            var t = this;
            $.ajax({
                url: n.order.getAbnormalOrderCount,
                data: {
                    update: 0
                },
                success: function(e) {
                    if (0 === e.code) {
                        var n = e.data.cnt
                          , t = $(".J-abnormal-count");
                        if ("undefined" != typeof n && n > 0) {
                            var o = "";
                            o = n > 99 ? "99+" : n,
                            t.text(o)
                        } else
                            t.empty()
                    }
                },
                error: function() {
                    setTimeout(function() {
                        t._check()
                    }, 12e4)
                }
            })
        },
        _isInUnprocessedPage: function() {
            var e = location.hash;
            return -1 === e.indexOf("/v2/order/refund/unprocessed") ? !1 : !0
        },
        _check: function() {
            this._isInUnprocessedPage() ? this._getRefundOrderList() : (this._getRefundOrderCount(),
            this._getAbnormalOrderCount())
        },
        handleRefundApply: function(e) {
            var n, t = window.audioControls.refund, o = parseInt(localStorage.getItem("orderRefundCount")) || 0, r = $(".J-refund-count");
            if ("+1" === e ? n = o + 1 : (n = isNaN(parseInt(e)) ? 0 : parseInt(e),
            n = n > 0 ? n : -1 === n && o > 0 ? o - 1 : 0),
            "undefined" != typeof n && n > 0) {
                var d = "";
                d = n > 99 ? "99+" : n,
                r.text(d),
                t.audioPlay()
            } else
                r.empty(),
                t.audioStop();
            this.innerIframeWindow.postMessage(JSON.stringify({
                handlerType: "updateRefundCount",
                count: n
            }), "*"),
            localStorage.setItem("orderRefundCount", n),
            window.refreshOrderModuleNewTag && window.refreshOrderModuleNewTag()
        },
        handlePush: function() {
            this._isInUnprocessedPage() ? this._getRefundOrderList(!0) : this._getRefundOrderCount(!0)
        },
        init: function() {
            this._check()
        }
    }
});
define("module/root/order_reminder_push", ["module/cookie", "module/interface"], function(e, o) {
    var r = window.frames[0]
      , n = window.audioControls && window.audioControls.reminder;
    return {
        updateCount: function(e) {
            var o = $(".J-reminder-count");
            0 == e ? (o.removeClass("in"),
            n && n.audioStop()) : (o.addClass("in"),
            n && n.audioPlay()),
            localStorage.setItem("orderReminderCount", e),
            e > 99 && (e = "99+"),
            o.text(e),
            window.refreshOrderModuleNewTag && window.refreshOrderModuleNewTag()
        },
        checkNew: function(e, o) {
            var n = parseInt(localStorage.getItem("orderReminderCount")) + 1;
            this.updateCount(n),
            location.hash.indexOf("/v2/order/reminder") > -1 && r.location.reload()
        },
        getUnprocessedCount: function() {
            var e = this;
            $.ajax({
                url: o.order.getUnprocessedReminderCnt,
                success: function(o) {
                    0 == o.code && o.data ? e.updateCount(o.data) : e.updateCount(0)
                }
            })
        }
    }
});
define("module/root/order_exception_push", ["module/cookie", "module/interface"], function(e, o) {
    var t = window.frames[0]
      , r = window.audioControls && window.audioControls["delivery-exception"];
    return {
        updateCount: function(e, o) {
            var t = $(".J-exception-count");
            0 >= e ? (localStorage.setItem("orderExceptionCount", 0),
            t.empty(),
            r && r.audioStop()) : (localStorage.setItem("orderExceptionCount", e),
            e > 99 && (e = "99+"),
            t.text(e),
            o && r && r.audioPlay()),
            window.refreshOrderModuleNewTag && window.refreshOrderModuleNewTag()
        },
        checkNew: function(e, o) {
            var r = parseInt(localStorage.getItem("orderExceptionCount"));
            0 == e ? (r++,
            this.updateCount(r, !0)) : (r--,
            this.updateCount(r, !1)),
            location.hash.indexOf("/v2/order/deliveryException") > -1 && t.location.reload(),
            location.hash.indexOf("/v2/order/history") > -1 && o && t.location.reload()
        },
        getUnprocessedCount: function() {
            var e = this;
            $.ajax({
                url: "/v2/order/receive/processed/r/distribute/countDeliveryExceptionOrder",
                success: function(o) {
                    0 == o.code && o.data ? e.updateCount(o.data, !0) : e.updateCount(0)
                }
            })
        }
    }
});
define('module/root/url_mapping', [], function() {
    var e = {
        mtdxSource: CommConstants.IS_IN_APP ? "shangou_PCgongnenglan" : "shangou_PCWEBgongnenglan"
    };
    return {
        "/v2/order/receive": "/v2/order/receive/unprocessed",
        "/v2/order/acquire": "/v2/order/acquire/unprocessed",
        "/v2/order/refund": "/v2/order/refund/unprocessed",
        "/v2/order/compensate": "/v2/order/compensate/unprocessed",
        "/v2/shop/systemSettings": CommConstants.IS_IN_APP ? "/v2/shop/systemSettings/r/printer" : "/v2/shop/systemSettings/r/reminder",
        "/v2/shop/msgbox": "/v2/shop/msgbox/business",
        "https://daxue.meituan.com/m/shangoushang": "https://daxue.meituan.com/m/shangoushang?" + $.param(e)
    }
});
define('module/root/left_nav', ["module/cookie", "module/root/audio", "module/root/audio_for_old", "module/root/crash_log_reporter", "module/root/new_order", "module/root/change_address_order_count", "module/root/refund_order", "module/root/order_reminder_push", "module/root/order_exception_push", "module/page_jump", "util/utils", "module/root/url_mapping"], function(a, e, n, t, s, C, i, L, d, r, l, o) {
    "use strict";
    function c(a) {
        var e = $(".J-ajax-menu")
          , n = $(".J-model-menu")
          , t = "";
        n.remove(),
        e.removeClass("hide");
        if(a.menuName == '订单管理'){a.push({interfaceCode: "", limitInfo: "", mask: "new", menuCode: "Sub.OrderHistory", menuIcon: null, pageId: null, permissionId: 0, rank: "12", subMenuName: "历史订单(旧)", url: "/v2/order/history"})};
        a.forEach(function(a, e) {
            var n = a.subMenus || [];
            t += '<li class="openable">',
            t += '<a class="nav-header collapsed" href="#menu#' + e + '" data-toggle="collapse" data-menu-code="' + a.menuCode + '" data-label="' + a.menuName + '" ',
            "门店推广" === a.menuName && (t += 'data-ubl-type="ad" '),
            t += a.url && 0 === n.length ? 'data-link="' + a.url + '" ' : 'data-expand="true" ',
            t += ">",
            t += a.menuIcon ? '<i class="' + a.menuIcon + ' svg-icon font-16"></i>' : g(a.menuName),
            "订单管理" === a.menuName ? (t += '<span class="text">' + a.menuName,
            t += '<span class="badge badge-danger J-order-new"></span></span>') : "店铺装修" === a.menuName ? t += '<span class="text J-mark-tip">' + a.menuName : (t += '<span class="text J-mark-tip">' + a.menuName,
            a.url && 0 === n.length && ("hot" === a.mask ? t += '<span class="badge-new-hot font-12">热</span>' : "new" === a.mask ? t += '<span class="badge-new-hot font-12">新</span>' : "beta" === a.mask ? t += '<span class="badge-new-hot font-12">beta</span>' : "开门营业" === a.menuName && (t += '<span class="wait-open font-12">待开门</span>')),
            t += "</span>"),
            t += "</a>",
            n.length && (t += '<ul id="menu#' + e + '" class="nav nav-list submenu collapse">',
            console.log('myJs root:'),
            console.log(a),
            n.forEach(function(a, e) {
                t += '<li data-menu-name ="' + a.subMenuName + '" data-menu-code ="' + a.menuCode + '">',
                t += '<a href="javascript:;" data-link="' + a.url + '" ',
                "黄金排名" === a.subMenuName && (t += 'data-ubl-type="ad"'),
                t += ">",
                t += '<span class="submenu-label" data-label="' + a.subMenuName + '">' + a.subMenuName,
                "退单" === a.subMenuName ? t += '<span class="badge badge-danger J-refund-count"></span>' : "修改地址" === a.subMenuName ? t += '<span class="badge badge-danger J-change-address-count"></span>' : "催单" === a.subMenuName ? t += '<span class="badge badge-danger J-reminder-count fade"></span>' : "接单" === a.subMenuName ? t += '<span class="badge badge-danger J-order-count"></span>' : "配送异常" === a.subMenuName ? t += '<span class="badge badge-danger J-exception-count"></span>' : "订单定责" === a.subMenuName ? t += '<span class="badge badge-danger J-responsibility-count"></span>' : "订单下载" === a.subMenuName ? t += '<span class="badge badge-danger J-abnormal-count"></span>' : "hot" === a.mask ? t += '<span class="badge-new-hot font-12">热</span>' : "new" === a.mask ? t += '<span class="badge-new-hot font-12">新</span>' : "beta" === a.mask && (t += '<span class="badge-new-hot font-12">beta</span>'),
                t += "</span>",
                t += "</a>",
                t += "</li>"
            }),
            t += "</ul>"),
            t += "</li>"
        }),
        e.html(t),
        $("a[data-expand]").on("click", function() {
            $(this).toggleClass("collapsed"),
            $(this).next().toggleClass("in")
        }),
        p()
    }
    function g(a) {
        var e = "";
        switch (a) {
        case "商家首页":
            e = '<svg class="svg-icon">\n                <g id="index">\n                <path d="M14.6,8 C14.8209139,8 15,8.1790861 15,8.4 L15,14 C15,14.5522847 14.5522847,15 14,15 L9.4,15 C9.1790861,15 9,14.8209139 9,14.6 L9,8.4 C9,8.1790861 9.1790861,8 9.4,8 L14.6,8 Z M1.4,10 L6.6,10 C6.8209139,10 7,10.1790861 7,10.4 L7,14.6 C7,14.8209139 6.8209139,15 6.6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,10.4 C1,10.1790861 1.1790861,10 1.4,10 Z M1.4,8 C1.1790861,8 1,7.8209139 1,7.6 L1,2 C1,1.44771525 1.44771525,1 2,1 L6.6,1 C6.8209139,1 7,1.1790861 7,1.4 L7,7.6 C7,7.8209139 6.8209139,8 6.6,8 L1.4,8 Z M14.6,6 L9.4,6 C9.1790861,6 9,5.8209139 9,5.6 L9,1.4 C9,1.1790861 9.1790861,1 9.4,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,5.6 C15,5.8209139 14.8209139,6 14.6,6 Z"></path>\n                </g>\n                </svg>';
            break;
        case "激励直通车":
            e = '<svg class="svg-icon">\n<g id="encourage" transform="translate(1.000000, 1.000000) scale(0.3333, 0.3333)">\n<path d="M12.762392,29.6947798 C15.4737201,32.4504411 15.7875528,35.4126021 12.7822253,38.4669295 C10.9202289,40.3580925 7.90556815,41.4944236 3.75690949,41.9809227 C3.54224326,42.0065893 3.32524368,42.0054226 3.10941074,41.979756 C1.65108022,41.802423 0.585915638,40.5062588 0.655915502,39.0257617 L0.671082176,38.8320954 L0.730582061,38.3420964 C1.23924772,34.387104 2.34057894,31.491443 4.12907547,29.6737798 C7.13440299,26.6206191 10.0498973,26.9402851 12.762392,29.6947798 L12.762392,29.6947798 Z M37.6018439,0.746335933 L38.0708429,0.889835655 L38.5293421,1.04266871 C39.6728674,1.44361564 40.5682712,2.34848549 40.9571707,3.49616395 C42.7853338,8.83715359 42.2043349,14.2481431 39.2573406,19.6124661 C38.042843,21.8221284 36.488846,23.9139577 34.597683,25.8867872 L34.0738507,26.4222861 L33.5780184,26.9076186 L33.5640184,27.0581183 C33.2198524,30.271112 30.7826904,34.5201038 26.2921991,40.0139265 L25.9025332,40.4887589 L25.1850346,41.3462572 C24.3730362,42.309922 22.8610391,42.0415892 22.3873734,40.9029248 L22.3313735,40.7500917 L19.8207117,32.7374406 L19.5932121,32.5799409 C18.1824764,31.5749424 16.8387421,30.4790663 15.5705533,29.2992806 L14.9463878,28.7042817 L14.3350557,28.0976162 C12.5293493,26.2601196 10.9041268,24.2535948 9.48173174,22.1056279 L9.34289866,21.8897949 L1.16691451,19.2461334 C0.0165833907,18.8728008 -0.35441589,17.4506369 0.375916045,16.556972 L0.472749209,16.4473055 L0.577749006,16.3493057 C7.30240261,10.4739837 12.2642263,7.56082272 15.8178861,7.80348895 L16.0465524,7.82332221 L16.1795521,7.83965553 L16.4793848,7.53632277 C18.091715,5.93332587 19.7798784,4.56949517 21.5450417,3.44833069 L22.1353738,3.08316475 L22.6778728,2.76583202 C27.6035299,-0.0271625668 32.6038535,-0.714327883 37.6018439,0.747502634 L37.6018439,0.746335933 Z M22.5297064,12.0291474 C20.4845438,14.0754768 20.4915437,17.3993036 22.5460398,19.4537997 C24.6005358,21.5082957 27.9243627,21.5152957 29.970692,19.470133 C32.0158547,17.4238036 32.0088547,14.0999767 29.9543587,12.0454807 C27.8998627,9.99098471 24.5760358,9.98398472 22.5297064,12.0291474 Z"></path>\n</g>\n</svg>';
            break;
        case "开门营业":
            e = '<svg class="svg-icon">\n                <g id="order">\n                <rect id="Rectangle-21-Copy-2" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M2,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M4.4,9 C4.1790861,9 4,9.1790861 4,9.4 L4,10.6 C4,10.8209139 4.1790861,11 4.4,11 L10.6,11 C10.8209139,11 11,10.8209139 11,10.6 L11,9.4 C11,9.1790861 10.8209139,9 10.6,9 L4.4,9 Z M4.4,5 C4.1790861,5 4,5.1790861 4,5.4 L4,6.6 C4,6.8209139 4.1790861,7 4.4,7 L7.6,7 C7.8209139,7 8,6.8209139 8,6.6 L8,5.4 C8,5.1790861 7.8209139,5 7.6,5 L4.4,5 Z"></path>\n                </g>\n                </svg>';
            break;
        case "订单管理":
            e = '<svg class="svg-icon">\n                <g id="order">\n                <rect id="Rectangle-21-Copy-2" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M2,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M4.4,9 C4.1790861,9 4,9.1790861 4,9.4 L4,10.6 C4,10.8209139 4.1790861,11 4.4,11 L10.6,11 C10.8209139,11 11,10.8209139 11,10.6 L11,9.4 C11,9.1790861 10.8209139,9 10.6,9 L4.4,9 Z M4.4,5 C4.1790861,5 4,5.1790861 4,5.4 L4,6.6 C4,6.8209139 4.1790861,7 4.4,7 L7.6,7 C7.8209139,7 8,6.8209139 8,6.6 L8,5.4 C8,5.1790861 7.8209139,5 7.6,5 L4.4,5 Z"></path>\n                </g>\n                </svg>';
            break;
        case "B2C订单管理":
            e = '<svg class="svg-icon">\n                <g id="order">\n                <rect id="Rectangle-21-Copy-2" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M2,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M4.4,9 C4.1790861,9 4,9.1790861 4,9.4 L4,10.6 C4,10.8209139 4.1790861,11 4.4,11 L10.6,11 C10.8209139,11 11,10.8209139 11,10.6 L11,9.4 C11,9.1790861 10.8209139,9 10.6,9 L4.4,9 Z M4.4,5 C4.1790861,5 4,5.1790861 4,5.4 L4,6.6 C4,6.8209139 4.1790861,7 4.4,7 L7.6,7 C7.8209139,7 8,6.8209139 8,6.6 L8,5.4 C8,5.1790861 7.8209139,5 7.6,5 L4.4,5 Z"></path>\n                </g>\n                </svg>';
            break;
        case "商品管理":
            e = '<svg class="svg-icon">\n                <g id="product">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M6.5,3.09398255 L6.5,1.9 C6.5,1.6790861 6.6790861,1.5 6.9,1.5 L9.1,1.5 C9.3209139,1.5 9.5,1.6790861 9.5,1.9 L9.5,3.09398255 C12.6225924,3.62511546 15,6.34374461 15,9.61764706 L15,10.6 C15,10.8209139 14.8209139,11 14.6,11 L1.4,11 C1.1790861,11 1,10.8209139 1,10.6 L1,9.61764706 C1,6.34374461 3.37740764,3.62511546 6.5,3.09398255 Z M1,14 L1,13.4 C1,13.1790861 1.1790861,13 1.4,13 L14.6,13 C14.8209139,13 15,13.1790861 15,13.4 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 Z"></path>\n                </g>\n                </svg>';
            break;
        case "售后管理":
            e = '<svg class="svg-icon">\n                <g id="evaluate">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M8,14 C7.20339795,14 4.5,14 3,14 C2.84360964,14 2.66999472,14 2.5552063,14 C1.90553555,14 1.92965204,13.8253519 2.32208635,13.4342849 C2.38672371,13.3698728 2.47454816,13.2885572 2.5552063,13.2098846 C2.76853847,13.0018042 3.02726433,12.7665042 3.14550627,12.6107208 C3.26126716,12.4582063 3.34739685,12.388092 3.2461571,12.2712162 C1.86477257,11.0838902 1,9.38572082 1,7.5 C1,3.91014913 4.13400675,1 8,1 C11.8659932,1 15,3.91014913 15,7.5 C15,11.0898509 11.8659932,14 8,14 Z M5.5,6 C4.94771525,6 4.5,6.44771525 4.5,7 L4.5,7.6 C4.5,7.8209139 4.6790861,8 4.9,8 L6.1,8 C6.3209139,8 6.5,7.8209139 6.5,7.6 L6.5,6.4 C6.5,6.1790861 6.3209139,6 6.1,6 L5.5,6 Z M9.9,6 C9.6790861,6 9.5,6.1790861 9.5,6.4 L9.5,7.6 C9.5,7.8209139 9.6790861,8 9.9,8 L11.1,8 C11.3209139,8 11.5,7.8209139 11.5,7.6 L11.5,7 C11.5,6.44771525 11.0522847,6 10.5,6 L9.9,6 Z"></path>\n                </g>\n                </svg>';
            break;
        case "财务管理":
            e = '<svg class="svg-icon">\n                <g id="finace">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M8,15.5 C3.85786438,15.5 0.5,12.1421356 0.5,8 C0.5,3.85786438 3.85786438,0.5 8,0.5 C12.1421356,0.5 15.5,3.85786438 15.5,8 C15.5,12.1421356 12.1421356,15.5 8,15.5 Z M8.62799174,8.65427965 L8.62799174,7.98141948 L10.2847886,7.98141948 C10.5057025,7.98141948 10.6847886,7.80233338 10.6847886,7.58141948 L10.6847886,7.03569913 C10.6847886,6.81478523 10.5057025,6.63569913 10.2847886,6.63569913 L8.91197613,6.63569913 L10.6150433,4.97689874 C10.6171966,4.97480145 10.6193261,4.97267995 10.6214316,4.97053466 C10.7761696,4.81286703 10.7737948,4.55961218 10.6161272,4.4048741 L10.2176539,4.01380468 C10.0624938,3.86152753 9.81411763,3.86105693 9.65838159,4.01274501 L7.94239278,5.68413115 L6.19204787,4.00805995 C6.03598162,3.85861618 5.78944009,3.86013197 5.6352232,4.01148343 L5.23688017,4.40242504 C5.23392532,4.40532499 5.23101567,4.40827063 5.22815227,4.41126092 C5.07536457,4.57081928 5.08085328,4.82402579 5.24041164,4.97681349 L6.97280944,6.63569913 L5.59999695,6.63569913 C5.37908305,6.63569913 5.19999695,6.81478523 5.19999695,7.03569913 L5.19999695,7.58141948 C5.19999695,7.80233338 5.37908305,7.98141948 5.59999695,7.98141948 L7.25679383,7.98141948 L7.25679383,8.65427965 L5.59999695,8.65427965 C5.37908305,8.65427965 5.19999695,8.83336575 5.19999695,9.05427965 L5.19999695,9.6 C5.19999695,9.8209139 5.37908305,10 5.59999695,10 L7.25679383,10 L7.25679383,11.7914407 C7.25679383,12.0123546 7.43587993,12.1914407 7.65679383,12.1914407 L8.22799174,12.1914407 C8.44890564,12.1914407 8.62799174,12.0123546 8.62799174,11.7914407 L8.62799174,10 L10.2847886,10 C10.5057025,10 10.6847886,9.8209139 10.6847886,9.6 L10.6847886,9.05427965 C10.6847886,8.83336575 10.5057025,8.65427965 10.2847886,8.65427965 L8.62799174,8.65427965 Z"></path>\n                </g>\n                </svg>';
            break;
        case "点金推广":
            e = '<svg class="svg-icon">\n                <g id="spread">\n                <path d="M4,9 L4,11 L4.82450296,13.4735089 C4.89436207,13.6830862 4.78109808,13.9096142 4.57152075,13.9794733 C4.53073416,13.9930688 4.48802248,14 4.44502965,14 L2.4,14 C2.1790861,14 2,13.8209139 2,13.6 L2,9 C2,8.44771525 2.44771525,8 3,8 L3,8 C3.55228475,8 4,8.44771525 4,9 Z"></path>\n                <path d="M2,5.00001262 L5.1,5.00001262 C5.3209139,5.00001262 5.5,5.17909872 5.5,5.40001262 L5.5,9.60000024 C5.5,9.82091414 5.3209139,10.0000002 5.1,10.0000002 L2,10.0000002 C1.44771525,10.0000002 1,9.55228499 1,9.00000024 L1,6.00001262 C1,5.44772787 1.44771525,5.00001262 2,5.00001262 Z M7.66750472,4.88035377 L12.9187618,1.12945585 C13.3681744,0.808446862 13.9927245,0.912538544 14.3137335,1.36195113 C14.4348769,1.53155188 14.5,1.73476635 14.5,1.94318932 L14.5,13.0568109 C14.5,13.6090957 14.0522847,14.0568109 13.5,14.0568109 C13.291577,14.0568109 13.0883626,13.9916878 12.9187618,13.8705444 L7.66750472,10.1196465 C7.56238627,10.0445619 7.5,9.92333352 7.5,9.79415308 L7.5,5.20584716 C7.5,5.07666672 7.56238627,4.95543838 7.66750472,4.88035377 Z"></path>\n                </g>\n                </svg>';
            break;
        case "经营指导":
            e = '<svg class="svg-icon">\n                <g id="analysis">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M9,6.58976942 L9,1 C12.0812933,1.44299901 14.5592555,3.89271445 15,6.98976942 L9.4,6.98976942 C9.1790861,6.98976942 9,6.81068332 9,6.58976942 Z M9,15 L9,9.41023058 C9,9.18931668 9.1790861,9.01023058 9.4,9.01023058 L15,9.01023058 C14.5592555,12.1072856 12.0812933,14.557001 9,15 Z M1,8 C1,4.43745022 3.62097715,1.49019384 7.03053556,1 L7.03053556,15 C3.62097715,14.5098062 1,11.5625498 1,8 Z"></path>\n                </g>\n                </svg>';
            break;
        case "顾客管理":
            e = '<svg class="svg-icon">\n                <g id="userManage">\n                <rect id="Rectangle-29" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M11.4330218,10.1024592 L9.95969879,12.6543295 L9.95969879,15 L0,15 L2.86611155e-05,12.6130046 C3.34704671e-05,11.8948477 0.385083428,11.2318259 1.00884356,10.8759151 C3.00589961,9.73641613 5.00295567,9.16666667 7.00001172,9.16666667 C8.47768174,9.16666667 9.95535176,9.47859752 11.4330218,10.1024592 Z M6.99998828,8 C5.06699489,8 3.49999414,6.43299662 3.49999414,4.5 C3.49999414,2.56700338 5.06699489,1 6.99998828,1 C8.93298167,1 10.4999824,2.56700338 10.4999824,4.5 C10.4999824,6.43299662 8.93298167,8 6.99998828,8 Z"></path>\n                <path d="M13.7167271,8.5368803 L13.7167271,13.5639264 L12.9638625,15.1009132 C12.9152733,15.2001091 12.7954697,15.2411339 12.6962739,15.1925446 C12.660587,15.1750641 12.6309165,15.1473488 12.6110474,15.1129346 L11.7167271,13.5639264 L11.7167271,8.51206628 L13.7167271,8.5368803 Z" transform="translate(12.716727, 11.862523) rotate(30.000000) translate(-12.716727, -11.862523) "></path>\n                </g>\n                </svg>';
            break;
        case "营销活动":
            e = '<svg class="svg-icon">\n                <g id="activity">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M8,4.32217114 C7.34506234,3.84633108 7.56082058,3.10399623 8.21355013,2.07624606 C8.3809695,1.81263721 8.53501818,1.59473901 8.80278669,1.23089118 C8.86506456,1.14629603 8.86506456,1.14629603 8.91746681,1.07453453 C9.51261233,0.255386995 10.6591234,0.0737974826 11.4782709,0.668943006 C12.2974185,1.26408853 12.479008,2.41059959 11.8838625,3.22974713 C11.2618545,4.08586757 8.81152856,4.91178115 8,4.32217114 Z M11.0748455,2.64196187 C11.3453661,2.26962208 11.2628255,1.74848069 10.8904857,1.47796 C10.5181459,1.20743931 9.99700449,1.28998 9.7264838,1.66231979 C9.67072351,1.73867979 9.67072351,1.73867979 9.60819112,1.82361683 C9.35337684,2.16986227 9.20928251,2.37368026 9.05769241,2.61236527 C8.85468862,2.93200329 8.71702124,3.20235647 8.6584248,3.40396258 C8.62866568,3.5063514 8.6238702,3.53131103 8.60431642,3.52342273 C8.94495463,3.70489744 10.7484855,3.09115779 11.0748455,2.64196187 Z"></path>\n                <path d="M8.01623236,4.32217114 C7.2047038,4.91178115 4.75437782,4.08586757 4.13236991,3.22974713 C3.53722439,2.41059959 3.7188139,1.26408853 4.53796144,0.668943006 C5.35710897,0.0737974826 6.50362003,0.255386995 7.09876556,1.07453453 C7.1511678,1.14629603 7.1511678,1.14629603 7.21344567,1.23089118 C7.48121418,1.59473901 7.63526286,1.81263721 7.80268223,2.07624606 C8.45541178,3.10399623 8.67117002,3.84633108 8.01623236,4.32217114 Z M4.9413869,2.64196187 C5.26774684,3.09115779 7.07127773,3.70489744 7.41191594,3.52342273 C7.39236217,3.53131103 7.38756668,3.5063514 7.35780756,3.40396258 C7.29921112,3.20235647 7.16154374,2.93200329 6.95853995,2.61236527 C6.80694985,2.37368026 6.66285552,2.16986227 6.40804124,1.82361683 C6.34550886,1.73867979 6.34550886,1.73867979 6.28974856,1.66231979 C6.01922787,1.28998 5.49808648,1.20743931 5.12574669,1.47796 C4.7534069,1.74848069 4.67086621,2.26962208 4.9413869,2.64196187 Z M7.42844711,3.51315415 C7.42180614,3.51797909 7.41646216,3.52158872 7.41191594,3.52342273 C7.41788004,3.52024536 7.42339569,3.51682422 7.42844711,3.51315415 Z"></path>\n                <path d="M7,8 L7,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,8.4 C2,8.1790861 2.1790861,8 2.4,8 L7,8 Z M9,8 L13.6,8 C13.8209139,8 14,8.1790861 14,8.4 L14,14 C14,14.5522847 13.5522847,15 13,15 L9,15 L9,8 Z M7,4 L7,7 L1.40000001,7 C1.1790861,7 1,6.8209139 1,6.59999999 L1,5 C1,4.44771525 1.44771525,4 2,4 L7,4 Z M9,4 L14,4 C14.5522847,4 15,4.44771525 15,5 L15,6.59999999 C15,6.8209139 14.8209139,7 14.6,7 L9,7 L9,4 Z"></path>\n                </g>\n                </svg>';
            break;
        case "门店推广":
            e = '<svg class="svg-icon">\n                <g id="spread">\n                <path d="M4,9 L4,11 L4.82450296,13.4735089 C4.89436207,13.6830862 4.78109808,13.9096142 4.57152075,13.9794733 C4.53073416,13.9930688 4.48802248,14 4.44502965,14 L2.4,14 C2.1790861,14 2,13.8209139 2,13.6 L2,9 C2,8.44771525 2.44771525,8 3,8 L3,8 C3.55228475,8 4,8.44771525 4,9 Z"></path>\n                <path d="M2,5.00001262 L5.1,5.00001262 C5.3209139,5.00001262 5.5,5.17909872 5.5,5.40001262 L5.5,9.60000024 C5.5,9.82091414 5.3209139,10.0000002 5.1,10.0000002 L2,10.0000002 C1.44771525,10.0000002 1,9.55228499 1,9.00000024 L1,6.00001262 C1,5.44772787 1.44771525,5.00001262 2,5.00001262 Z M7.66750472,4.88035377 L12.9187618,1.12945585 C13.3681744,0.808446862 13.9927245,0.912538544 14.3137335,1.36195113 C14.4348769,1.53155188 14.5,1.73476635 14.5,1.94318932 L14.5,13.0568109 C14.5,13.6090957 14.0522847,14.0568109 13.5,14.0568109 C13.291577,14.0568109 13.0883626,13.9916878 12.9187618,13.8705444 L7.66750472,10.1196465 C7.56238627,10.0445619 7.5,9.92333352 7.5,9.79415308 L7.5,5.20584716 C7.5,5.07666672 7.56238627,4.95543838 7.66750472,4.88035377 Z"></path>\n                </g>\n                </svg>';
            break;
        case "特色服务":
            e = '<svg class="svg-icon">\n                <g id="设计">\n                <rect x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M3.5,1 L12.5,1 C13.0522847,1 13.5,1.44771525 13.5,2 L13.5,14.3261831 C13.5,14.547097 13.3209139,14.7261831 13.1,14.7261831 C13.0330724,14.7261831 12.9672146,14.7093898 12.9084591,14.6773414 L8.19154085,12.1044768 C8.07214986,12.0393545 7.92785014,12.0393545 7.80845915,12.1044768 L3.09154085,14.6773414 C2.89760152,14.7831264 2.65462686,14.7116633 2.54884177,14.517724 C2.51679335,14.4589685 2.5,14.3931107 2.5,14.3261831 L2.5,2 C2.5,1.44771525 2.94771525,1 3.5,1 Z"></path>\n                <polygon fill="#FFF" points="7.82622133 8.74055997 5.76897295 9.82211945 6.16187243 7.53133971 4.49752353 5.90900049 6.79759714 5.57478023 7.82622133 3.49055997 8.85484553 5.57478023 11.1549191 5.90900049 9.49057024 7.53133971 9.88346972 9.82211945"></polygon>\n                </g>\n                </svg>';
            break;
        case "店铺设置":
            e = '<svg class="svg-icon">\n                <g id="settings">\n                <path d="M8.33712489,15 L5.18061235,15 C4.81474906,15.0044089 4.47568836,14.8466906 4.29657497,14.5276392 L2.75126095,11.7131115 L1.14006242,8.9985107 C0.953312525,8.68386826 0.953312525,8.2923547 1.14006242,7.97771226 L2.75126095,5.26311143 L4.29657497,2.47236079 C4.47568836,2.15330941 4.81474906,1.99559106 5.18061235,2 L8.33712489,2 L11.4936374,2 C11.8595007,1.99559106 12.1985614,2.15330941 12.3776748,2.47236079 L13.9229888,5.26311143 L15.5341874,7.97771226 C15.7209373,8.2923547 15.7209373,8.68386826 15.5341874,8.9985107 L13.9229888,11.7131115 L12.3776748,14.5276392 C12.1985614,14.8466906 11.8595007,15.0044089 11.4936374,15 L8.33712489,15 Z M8.33712489,10.4881115 C9.44169439,10.4881115 10.3371249,9.59268098 10.3371249,8.48811148 C10.3371249,7.38354198 9.44169439,6.48811148 8.33712489,6.48811148 C7.23255539,6.48811148 6.33712489,7.38354198 6.33712489,8.48811148 C6.33712489,9.59268098 7.23255539,10.4881115 8.33712489,10.4881115 Z"></path>\n                </g>\n                </svg>';
            break;
        case "袋鼠学院":
        case "商家学习中心":
        case "闪购培训":
            e = '<svg class="svg-icon">\n                <g id="college">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M2,2 L11.6,2 C11.8209139,2 12,2.1790861 12,2.4 L12,14.6 C12,14.8209139 11.8209139,15 11.6,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,3 C1,2.44771525 1.44771525,2 2,2 Z"></path>\n                <path d="M13.5,3 L13.6,3 C13.8209139,3 14,3.1790861 14,3.4 L14,13.6 C14,13.8209139 13.8209139,14 13.6,14 L13.5,14 C13.2238576,14 13,13.7761424 13,13.5 L13,3.5 C13,3.22385763 13.2238576,3 13.5,3 Z" transform="translate(13.500000, 8.500000) scale(-1, 1) translate(-13.500000, -8.500000) "></path>\n                <g id="袋鼠" transform="translate(3.000000, 5.000000)" fill="#FFFFFF">\n                <path d="M5.5832,6.93 L0.868,6.9174201 C0.868,6.51540794 2.7852608,5.09086271 1.9208,2.76329435 C0.4817792,3.08859602 0.21,1.95927003 0.21,1.95927003 C0.21,1.95927003 0.818100109,1.55725818 1.6576,1.55725787 C1.792,1.55725781 1.2124,0.747080318 1.2628,0.217217351 C1.2796,0.183032644 2.842,0.229523909 2.842,1.28924984 C3.3207328,1.61400456 6.79,1.95927005 6.79,1.95927005 C6.79,1.95927005 6.6584,3.83532667 4.3736,3.6455333 C3.63248421,3.8351005 5.57855255,4.9900637 5.5832,6.93 Z M2.7272,2.32615385 C2.7272,2.54035385 2.9003072,2.71384615 3.1136,2.71384615 C3.327086,2.71384615 3.5,2.54035385 3.5,2.32615385 C3.5,2.11195385 3.327086,1.93846154 3.1136,1.93846154 C2.9003072,1.93846154 2.7272,2.11195385 2.7272,2.32615385 Z"></path>\n                </g>\n                </g>\n                </g>\n                </svg >';
            break;
        case "服务市场":
            e = '<svg class="svg-icon">\n                <g id="market">\n                <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M4.77992447,2 L11.2200755,2 C11.4976783,2 11.7627892,2.11539544 11.9519567,2.31856771 L15.6405054,6.28019282 C16.0124311,6.67965348 15.9953549,7.30355204 15.6021358,7.68207059 L8.69351158,14.3324154 C8.30629614,14.7051548 7.69370386,14.7051548 7.30648842,14.3324154 L0.3978642,7.68207059 C0.00464512733,7.30355204 -0.0124310593,6.67965348 0.359494619,6.28019282 L4.04804331,2.31856771 C4.23721083,2.11539544 4.50232166,2 4.77992447,2 Z M4.33069317,6.27512617 C4.18622406,6.44023373 4.20168051,6.69089068 4.3653403,6.83699784 L4.36537765,6.836956 C5.42057789,7.77898533 6.63211867,8.25 8,8.25 C9.36790064,8.25 10.5794563,7.77897203 11.634667,6.83691609 C11.798309,6.69082213 11.8137628,6.44019066 11.6693082,6.2750997 L11.1914757,5.72903347 C11.0510478,5.5685444 10.8094196,5.54641525 10.642176,5.67872667 L10.6422173,5.67877887 C9.7395242,6.39292629 8.8587851,6.75 8,6.75 C7.16211467,6.75 6.281337,6.39116348 5.35766698,5.67349045 C5.19034688,5.5434861 4.9506799,5.56649498 4.81114971,5.72595806 L4.33069317,6.27512617 Z"></path>\n                </g>\n                </svg>';
            break;
        case "店铺装修":
            e = '<svg class="svg-icon">\n                <g id="设计">\n                <path d="M10.9,11.5 L14.5,11.5 C15.0522847,11.5 15.5,11.9477153 15.5,12.5 L15.5,13.1 C15.5,13.3209139 15.3209139,13.5 15.1,13.5 L10.9,13.5 C10.6790861,13.5 10.5,13.3209139 10.5,13.1 L10.5,11.9 C10.5,11.6790861 10.6790861,11.5 10.9,11.5 Z" transform="translate(13.000000, 12.500000) rotate(90.000000) translate(-13.000000, -12.500000) "></path>\n                <path d="M2.77855129,2 L13.2211992,2 C13.3969616,2 13.5521314,2.11473463 13.6036383,2.28278054 L14.9596686,6.70695136 C15.1215149,7.23498945 14.8246578,7.79425124 14.2966197,7.95609753 C14.2016591,7.98520344 14.1028921,8 14.003571,8 L1.99617949,8 C1.44389474,8 0.996179489,7.55228475 0.996179489,7 C0.996179489,6.90067893 1.01097605,6.80191199 1.04008195,6.70695136 L2.39611227,2.28278054 C2.44761918,2.11473463 2.60278898,2 2.77855129,2 Z"></path>\n                <path d="M2,9 C1.44771525,9 1,8.55228475 1,8 C1,7.44771525 1.44771525,7 2,7 C2.55228475,7 3,7.44771525 3,8 C3,8.55228475 2.55228475,9 2,9 Z M5,9 C4.44771525,9 4,8.55228475 4,8 C4,7.44771525 4.44771525,7 5,7 C5.55228475,7 6,7.44771525 6,8 C6,8.55228475 5.55228475,9 5,9 Z M8,9 C7.44771525,9 7,8.55228475 7,8 C7,7.44771525 7.44771525,7 8,7 C8.55228475,7 9,7.44771525 9,8 C9,8.55228475 8.55228475,9 8,9 Z M11,9 C10.4477153,9 10,8.55228475 10,8 C10,7.44771525 10.4477153,7 11,7 C11.5522847,7 12,7.44771525 12,8 C12,8.55228475 11.5522847,9 11,9 Z M14,9 C13.4477153,9 13,8.55228475 13,8 C13,7.44771525 13.4477153,7 14,7 C14.5522847,7 15,7.44771525 15,8 C15,8.55228475 14.5522847,9 14,9 Z"></path>\n                <path d="M2.4,10 L9.6,10 C9.8209139,10 10,10.1790861 10,10.4 L10,14.6 C10,14.8209139 9.8209139,15 9.6,15 L3,15 C2.44771525,15 2,14.5522847 2,14 L2,10.4 C2,10.1790861 2.1790861,10 2.4,10 Z"></path>\n                </g>\n                </svg>';
            break;
        case "配送服务":
            e = '<svg class="svg-icon">\n                <g id="设计">\n                <rect x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M12.9511358,14.5486226 C11.5474417,14.5486226 10.365652,13.3261252 10.0109318,12 L5.98890876,12 C5.63434795,13.3261252 4.45239887,14.5486226 3.04886422,14.5486226 C1.36490964,14.5486226 8.8817842e-16,13.1460446 8.8817842e-16,11.4159712 C8.8817842e-16,11.0631642 0.0566818968,10.7243484 0.1613162,10.4079343 C0.1613162,10.4079343 0.229759491,9.32799864 1.5,8 L1,8 C0.978003544,7.33333333 1.02332847,7 1.13597477,7 L7,7 L7,8 L6.5,9 L9.14419853,9 C9.40227156,8.69086543 10,8 10.0109318,6.93447401 L10.0109318,4.0205208 L9,4.0205208 L9,3.0330341 L12.6272677,2.99580422 C12.6272677,2.99580422 14.4351492,4.32317052 12.9511358,5.98639754 L12.9511358,8 C13.0576435,7.98848026 13.1655464,7.98238158 13.2750039,7.98238158 C14.958799,7.98238158 16,9.68593765 16,11.4159712 C16,13.1460446 14.6349309,14.5486226 12.9511358,14.5486226 Z M3.18993119,10.2860801 C2.50189516,10.2860801 1.94422287,10.8437847 1.94422287,11.5317718 C1.94422287,12.2196686 2.50189516,12.7773731 3.18993119,12.7773731 C3.87784351,12.7773731 4.4355158,12.2196686 4.4355158,11.5317718 C4.4355158,10.8437847 3.87784351,10.2860801 3.18993119,10.2860801 Z M13.1551029,10.2860801 C12.4670669,10.2860801 11.9093946,10.8437847 11.9093946,11.5317718 C11.9093946,12.2196686 12.4670669,12.7773731 13.1551029,12.7773731 C13.8430152,12.7773731 14.4006875,12.2196686 14.4006875,11.5317718 C14.4006875,10.8437847 13.8430152,10.2860801 13.1551029,10.2860801 Z M0.997467781,3.26547057 C0.997467781,3.1285645 1.12425825,3.01738342 1.28081661,3.01738342 L6.71411896,3.01738342 C6.87064037,3.01738342 6.99746778,3.1285645 6.99746778,3.26547057 L6.99746778,5.76904436 C6.99746778,5.90632828 6.87064037,6.01738342 6.71411896,6.01738342 L1.28081661,6.01738342 C1.12425825,6.01738342 0.997467781,5.90632828 0.997467781,5.76904436 L0.997467781,3.26547057 Z"></path>\n                </g>\n                </svg>';
            break;
        case "会员管理":
            e = '<svg class="svg-icon">\n                <g id="Page-1">\n                <path d="M12.9527841,11 L3.04721587,11 C2.7514528,11 2.49980684,10.7844726 2.45434599,10.4922242 L1.69694001,5.62318581 C1.662984,5.40489714 1.81241514,5.20041243 2.0307038,5.16645642 C2.08895762,5.15739471 2.14849431,5.16132186 2.20505313,5.1779568 L3.86097777,5.66499346 C4.56312629,5.87150773 5.3220007,5.6779993 5.83952398,5.16047602 L7.71715729,3.28284271 C7.873367,3.126633 8.126633,3.126633 8.28284271,3.28284271 L10.160476,5.16047602 C10.6779993,5.6779993 11.4368737,5.87150773 12.1390222,5.66499346 L13.7949469,5.1779568 C14.006884,5.11562234 14.2292251,5.2368993 14.2915596,5.44883647 C14.3081945,5.5053953 14.3121217,5.56493199 14.30306,5.62318581 L13.545654,10.4922242 C13.5001932,10.7844726 13.2485472,11 12.9527841,11 Z M13.2393249,12.4614828 L13.0789873,13.4922242 C13.0335265,13.7844726 12.7818805,14 12.4861175,14 L3.51388254,14 C3.21811947,14 2.96647351,13.7844726 2.92101265,13.4922242 L2.7606751,12.4614828 C2.72671909,12.2431941 2.87615022,12.0387094 3.09443889,12.0047534 C3.1147803,12.0015892 3.13533564,12 3.15592169,12 L12.8440783,12 C13.0649922,12 13.2440783,12.1790861 13.2440783,12.4 C13.2440783,12.4205861 13.2424891,12.4411414 13.2393249,12.4614828 Z M1.2,4.4 C0.5372583,4.4 2.22044605e-16,3.8627417 2.22044605e-16,3.2 C2.22044605e-16,2.5372583 0.5372583,2 1.2,2 C1.8627417,2 2.4,2.5372583 2.4,3.2 C2.4,3.8627417 1.8627417,4.4 1.2,4.4 Z M8,2.4 C7.3372583,2.4 6.8,1.8627417 6.8,1.2 C6.8,0.5372583 7.3372583,4.5519144e-14 8,4.5519144e-14 C8.6627417,4.5519144e-14 9.2,0.5372583 9.2,1.2 C9.2,1.8627417 8.6627417,2.4 8,2.4 Z M14.8,4.4 C14.1372583,4.4 13.6,3.8627417 13.6,3.2 C13.6,2.5372583 14.1372583,2 14.8,2 C15.4627417,2 16,2.5372583 16,3.2 C16,3.8627417 15.4627417,4.4 14.8,4.4 Z" id="Combined-Shape2" fill-rule="nonzero"></path>\n                </g>\n                </svg>';
            break;
        case "处方审核":
            e = '<svg class="svg-icon"> \n<g id="pre" transform="translate(-1.000000, -1.000000)">\n <path d="M9.5,8.5 C9.5,9.5 10.7582404,10.2642592 13.2747211,10.7927775 C13.7040227,10.9154351 14,11.3078211 14,11.7543014 L14,11.6 C14,11.8209139 13.8209139,12 13.6,12 L2.4,12 C2.1790861,12 2,11.8209139 2,11.6 L2,11.7543014 C2,11.3078211 2.29597731,10.9154351 2.72527887,10.7927775 C5.24175962,10.2642592 6.5,9.5 6.5,8.5 C6.5,6 4.5,6 4.5,4 C4.5,2 6,1 8,1 C10,1 11.5,2 11.5,4 C11.5,6 9.5,6 9.5,8.5 Z M1.4,13 L14.6,13 C14.8209139,13 15,13.1790861 15,13.4 L15,14.1 C15,14.3209139 14.8209139,14.5 14.6,14.5 L1.4,14.5 C1.1790861,14.5 1,14.3209139 1,14.1 L1,13.4 C1,13.1790861 1.1790861,13 1.4,13 Z" id="pre-icon"></path>\n</g>\n</svg>';
            break;
        case "处方图片下载":
            e = '<svg class="svg-icon"> \n                   <g id="下载">\n                      <rect id="矩形" fill="#000000" fill-rule="nonzero" opacity="0" x="0" y="0" width="16" height="16"></rect>\n                      <path d="M8,1 C11.8659932,1 15,4.13400675 15,8 C15,11.8659932 11.8659932,15 8,15 C4.13400675,15 1,11.8659932 1,8 C1,4.13400675 4.13400675,1 8,1 Z M8.71159785,4.01375267 L7.26390188,4.01375267 C7.04298798,4.01375267 6.86390188,4.19283877 6.86390188,4.41375267 L6.86390188,4.41375267 L6.863,8.26775267 L5.76402308,8.26898485 L5.64564614,8.274553 C5.28113135,8.32141804 5,8.61753538 5,8.97578534 C5,9.15784247 5.07459229,9.3220429 5.19163481,9.44915011 L5.19163481,9.44915011 L7.43476047,11.8066398 C7.57136419,11.9502238 7.76738201,12.0425917 7.98774987,12.0425917 C8.20811773,12.0425917 8.40421671,11.9502238 8.54309311,11.8081008 L8.54309311,11.8081008 L10.7815111,9.4474456 C10.9009074,9.32196173 10.9755809,9.15784247 10.975503,8.97578534 C10.975503,8.58488603 10.6410114,8.26792968 10.2285217,8.26792968 L10.2285217,8.26792968 L10.1841234,8.27020235 L10.1841234,8.26452068 L9.111,8.26475267 L9.11159785,4.41375267 C9.11159785,4.19283877 8.93251175,4.01375267 8.71159785,4.01375267 L8.71159785,4.01375267 Z" id="形状结合" fill="#A2A4B3"></path>\n                   </g>\n                </svg>';
            break;
        case "处方药订单":
            e = '<svg class="svg-icon"> \n                   <g id="编组-11">\n                      <path d="M13.5,1.5 C14.0522847,1.5 14.5,1.94771525 14.5,2.5 L14.5,13.5 C14.5,14.0522847 14.0522847,14.5 13.5,14.5 L2.5,14.5 C1.94771525,14.5 1.5,14.0522847 1.5,13.5 L1.5,2.5 C1.5,1.94771525 1.94771525,1.5 2.5,1.5 L13.5,1.5 Z M11.1,9.5 L3.9,9.5 C3.6790861,9.5 3.5,9.6790861 3.5,9.9 L3.5,9.9 L3.5,11.1 C3.5,11.3209139 3.6790861,11.5 3.9,11.5 L3.9,11.5 L11.1,11.5 C11.3209139,11.5 11.5,11.3209139 11.5,11.1 L11.5,11.1 L11.5,9.9 C11.5,9.6790861 11.3209139,9.5 11.1,9.5 L11.1,9.5 Z M7.1,5.5 L3.9,5.5 C3.6790861,5.5 3.5,5.6790861 3.5,5.9 L3.5,5.9 L3.5,7.1 C3.5,7.3209139 3.6790861,7.5 3.9,7.5 L3.9,7.5 L7.1,7.5 C7.3209139,7.5 7.5,7.3209139 7.5,7.1 L7.5,7.1 L7.5,5.9 C7.5,5.6790861 7.3209139,5.5 7.1,5.5 L7.1,5.5 Z" id="Combined-Shape"></path>\n                   </g>\n                </svg>';
            break;
        case "历史处方":
            e = '<svg class="svg-icon">\n                <g id="order">\n                <rect id="Rectangle-21-Copy-2" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n                <path d="M2,1 L14,1 C14.5522847,1 15,1.44771525 15,2 L15,14 C15,14.5522847 14.5522847,15 14,15 L2,15 C1.44771525,15 1,14.5522847 1,14 L1,2 C1,1.44771525 1.44771525,1 2,1 Z M4.4,9 C4.1790861,9 4,9.1790861 4,9.4 L4,10.6 C4,10.8209139 4.1790861,11 4.4,11 L10.6,11 C10.8209139,11 11,10.8209139 11,10.6 L11,9.4 C11,9.1790861 10.8209139,9 10.6,9 L4.4,9 Z M4.4,5 C4.1790861,5 4,5.1790861 4,5.4 L4,6.6 C4,6.8209139 4.1790861,7 4.4,7 L7.6,7 C7.8209139,7 8,6.8209139 8,6.6 L8,5.4 C8,5.1790861 7.8209139,5 7.6,5 L4.4,5 Z"></path>\n                </g>\n                </svg>';
            break;
        case "工作平台":
            e = '<svg class="svg-icon">\n<g id="页面-1">\n<g id="工作台" transform="translate(-43.000000, -157.000000)">\n<g id="左导航" transform="translate(12.000000, 80.000000)">\n<g id="编组-8" transform="translate(0.000000, 10.000000)">\n<g id="编组-48" transform="translate(0.000000, 50.000000)">\n<g id="icon_gongzuotai" transform="translate(31.000000, 17.000000)">\n   <rect id="Rectangle-3" x="0" y="0" width="16" height="16" fill="#FFF"></rect>\n   <path d="M1.13555712,4.65354029 L7.49993053,8.28887843 L7.50039683,15.6272389 C7.32736852,15.5826143 7.15894722,15.514418 7,15.4226497 L2.07179677,12.5773503 C1.45299462,12.2200847 1.07179677,11.5598306 1.07179677,10.8452995 L1.07179677,5.15470054 C1.07179677,4.98338437 1.09370992,4.81518832 1.13555712,4.65354029 Z M14.9282032,5.15470054 L14.9282032,10.8452995 C14.9282032,11.5598306 14.5470054,12.2200847 13.9282032,12.5773503 L9,15.4226497 C8.84133278,15.5142563 8.67322483,15.582374 8.50051755,15.6270028 L8.49993053,8.28887843 L14.8644429,4.65354029 C14.9062901,4.81518832 14.9282032,4.98338437 14.9282032,5.15470054 Z M9,0.577350269 L13.9282032,3.42264973 C14.0972659,3.5202581 14.2485929,3.64048258 14.379256,3.77825111 L8,7.423 L1.62074397,3.77825111 C1.75140706,3.64048258 1.90273411,3.5202581 2.07179677,3.42264973 L7,0.577350269 C7.61880215,0.220084679 8.38119785,0.220084679 9,0.577350269 Z" id="形状结合" fill="#A2A4B3"></path>\n</g>\n</g>\n</g>\n</g>\n</g>\n</g>\n</svg>';
            break;
        case "仓库中心":
            e = '<svg class="svg-icon">\n     <g id="warehouse">\n       <rect id="Rectangle-3" fill="#FFFFFF" x="0" y="0" width="16" height="16"></rect>\n       <g id="编组" transform="translate(1.000000, 1.000000)">\n         <path d="M0,3.54318262 L7,-1.70488623e-13 L14,3.54318262 L14,4.59822901 L13,4.59822901 L13,13 C13,13.5522847 12.5522847,14 12,14 L2,14 C1.44771525,14 1,13.5522847 1,13 L1,4.59822901 L0,4.59822901 L0,3.54318262 Z" id="形状结合" fill="#A2A4B3"></path>\n         <rect id="矩形" fill="#FFFFFF" x="3" y="6" width="4" height="2" rx="0.5"></rect>\n         <rect id="矩形备份" fill="#FFFFFF" x="3" y="10" width="8" height="2" rx="0.5"></rect>\n       </g>\n     </g>\n   </svg>';
            break;
        case "规则中心":
            e = '<svg class="svg-icon">\n    <g id="rule-icon">\n      <path d="M14.2777778,2 C14.6766501,2 15,2.3233499 15,2.72222222 L15,11.3888889 C15,11.7877612 14.6766501,12.1111111 14.2777778,12.1111111 L3.805,12.111 L3.805,13.194 L14.8194444,13.1944444 C14.9191625,13.1944444 15,13.2752819 15,13.375 L15,14.8194444 C15,14.9191625 14.9191625,15 14.8194444,15 L3.09754625,14.9998629 C3.09281959,14.9999542 3.08808181,15 3.08333333,15 L2.72222222,15 L2.708,14.999 L2.54166667,15 C2.24251243,15 2,14.7574876 2,14.4583333 L2,2.72222222 C2,2.3233499 2.3233499,2 2.72222222,2 L14.2777778,2 Z M6.15277778,7.77777778 L3.98611111,7.77777778 C3.88639303,7.77777778 3.80555556,7.85861525 3.80555556,7.95833333 L3.80555556,7.95833333 L3.80555556,8.68055556 C3.80555556,8.78027364 3.88639303,8.86111111 3.98611111,8.86111111 L3.98611111,8.86111111 L6.15277778,8.86111111 C6.25249586,8.86111111 6.33333333,8.78027364 6.33333333,8.68055556 L6.33333333,8.68055556 L6.33333333,7.95833333 C6.33333333,7.85861525 6.25249586,7.77777778 6.15277778,7.77777778 L6.15277778,7.77777778 Z M8.31944444,5.61111111 L3.98611111,5.61111111 C3.88639303,5.61111111 3.80555556,5.69194859 3.80555556,5.79166667 L3.80555556,5.79166667 L3.80555556,6.51388889 C3.80555556,6.61360697 3.88639303,6.69444444 3.98611111,6.69444444 L3.98611111,6.69444444 L8.31944444,6.69444444 C8.41916252,6.69444444 8.5,6.61360697 8.5,6.51388889 L8.5,6.51388889 L8.5,5.79166667 C8.5,5.69194859 8.41916252,5.61111111 8.31944444,5.61111111 L8.31944444,5.61111111 Z"></path>\n    </g>\n</svg>';
            break;
        case "医保服务":
            e = '<svg t="1636348400680" class="svg-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2421" width="128" height="128"><path d="M157.153882 157.394824L518.023529 60.235294l360.688942 97.099294a120.470588 120.470588 0 0 1 89.027764 121.615059c-6.565647 150.046118-29.033412 268.288-67.463529 354.665412-43.610353 98.183529-159.262118 211.847529-346.774588 340.931765a60.235294 60.235294 0 0 1-69.993412-1.204706c-188.114824-139.023059-304.007529-252.265412-347.738353-339.727059C96.918588 555.971765 74.330353 437.549176 68.065882 278.467765a120.470588 120.470588 0 0 1 89.088-121.072941z" fill="#A2A4B3" p-id="2422"></path><path d="M398.336 702.584471v-333.70353c17.468235-31.683765 31.623529-64.752941 42.345412-99.328l-48.188236-22.889412c-22.347294 74.992941-57.404235 140.167529-104.086588 195.162353l16.504471 54.452706c14.637176-15.540706 28.732235-32.105412 41.863529-48.609882v254.915765h51.561412z m203.354353-0.481883V523.565176h3.433412c28.190118 61.259294 64.210824 112.820706 107.52 154.202353l33.069176-44.272941c-42.767059-31.623529-75.896471-68.065882-99.749647-109.929412h89.99153v-49.633882H601.750588V435.501176h93.967059V271.058824H458.149647v164.442352h92.882824v38.430118H421.707294v49.633882h85.112471A336.956235 336.956235 0 0 1 408.576 632.470588l28.672 45.718588c43.791059-36.984471 80.775529-88.545882 109.989647-154.684235h3.855059v178.537412h50.597647z m44.272941-315.271529H507.783529V319.668706h138.179765v67.162353z" fill="#FFFFFF" p-id="2423" style="fill: #FFF"></path></svg>';
            break;
        case "物料管理":
            e = '<svg class="svg-icon" t="1636348242523" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1215" width="128" height="128"><path d="M924.864 301.12l37.568 36.032c29.76 31.04 50.88 39.424 39.04 105.024-11.968 65.28-69.312 423.872-77.888 472.32-9.152 52.096-58.88 52.544-61.12 52.544H161.6s-51.776 0.768-61.248-52.48C91.904 866.048 34.432 507.52 22.592 442.24 10.624 376.512 31.872 368.128 61.504 337.088l37.632-36.032v93.248h825.728V301.12zM705.28 527.552a46.592 46.592 0 0 0-46.592 46.592v86.528a13.312 13.312 0 0 1-13.376 13.312H378.88a13.312 13.312 0 0 1-13.312-13.312V574.144a46.592 46.592 0 0 0-93.184 0v139.84a53.248 53.248 0 0 0 53.312 53.312h372.864a53.248 53.248 0 0 0 53.312-53.312V574.144a46.848 46.848 0 0 0-46.72-46.592z m101.76-279.68s51.264 0 51.264 46.656v46.592H165.76v-46.592c0-46.592 51.328-46.592 51.328-46.592h589.824zM726.4 128s51.968 0 51.968 66.624H258.944C258.944 128 310.784 128 310.784 128h415.68z" fill="#A2A4B3" p-id="1216"></path></svg>';
            break;
        case "疫情管理":
            e = '<svg class="svg-icon">\n<g id="激励直通车" transform="translate(-336.000000, -50.000000)">\n<g id="icon_covid19备份" transform="translate(336.000000, 50.000000)">\n<path d="M9.16666667,0 C9.5348565,0 9.83333333,0.298476833 9.83333333,0.666666667 C9.83333333,1.0348565 9.5348565,1.33333333 9.16666667,1.33333333 L8.66633333,1.33333333 L8.66620324,3.04399539 C9.54835773,3.16144651 10.3578136,3.50890488 11.0323006,4.02410027 L12.242405,2.81431457 L11.8890873,2.46099688 C11.6287378,2.20064735 11.6287378,1.77853737 11.8890873,1.51818784 C12.1494368,1.25783831 12.5715468,1.25783831 12.8318963,1.51818784 L14.4818122,3.16810366 C14.7421617,3.42845319 14.7421617,3.85056318 14.4818122,4.1109127 C14.2214626,4.37126223 13.7993526,4.37126223 13.5390031,4.1109127 L13.185214,3.75712361 L11.9753925,4.96703542 C12.490737,5.64148496 12.8383395,6.45094425 12.9559156,7.33312892 L14.6666667,7.333 L14.6666667,6.83333333 C14.6666667,6.4651435 14.9651435,6.16666667 15.3333333,6.16666667 C15.7015232,6.16666667 16,6.4651435 16,6.83333333 L16,9.16666667 C16,9.5348565 15.7015232,9.83333333 15.3333333,9.83333333 C14.9651435,9.83333333 14.6666667,9.5348565 14.6666667,9.16666667 L14.6666667,8.66633333 L12.9559601,8.66653716 C12.8384272,9.54885149 12.490802,10.3584299 11.9753925,11.0329646 L13.185214,12.2428764 L13.5390031,11.8890873 C13.7993526,11.6287378 14.2214626,11.6287378 14.4818122,11.8890873 C14.7421617,12.1494368 14.7421617,12.5715468 14.4818122,12.8318963 L12.8318963,14.4818122 C12.5715468,14.7421617 12.1494368,14.7421617 11.8890873,14.4818122 C11.6287378,14.2214626 11.6287378,13.7993526 11.8890873,13.5390031 L12.242405,13.1856854 L11.0323006,11.9758997 C10.3578136,12.4910951 9.54835773,12.8385535 8.66620324,12.9560046 L8.66633333,14.6666667 L9.16666667,14.6666667 C9.5348565,14.6666667 9.83333333,14.9651435 9.83333333,15.3333333 C9.83333333,15.7015232 9.5348565,16 9.16666667,16 L6.83333333,16 C6.4651435,16 6.16666667,15.7015232 6.16666667,15.3333333 C6.16666667,14.9651435 6.4651435,14.6666667 6.83333333,14.6666667 L7.333,14.6666667 L7.33279501,12.9558711 C6.45073999,12.8382518 5.64139986,12.490672 4.96703542,11.9753925 L3.75712361,13.185214 L4.1109127,13.5390031 C4.37126223,13.7993526 4.37126223,14.2214626 4.1109127,14.4818122 C3.85056318,14.7421617 3.42845319,14.7421617 3.16810366,14.4818122 L1.51818784,12.8318963 C1.25783831,12.5715468 1.25783831,12.1494368 1.51818784,11.8890873 C1.77853737,11.6287378 2.20064735,11.6287378 2.46099688,11.8890873 L2.81431457,12.242405 L4.02410027,11.0323006 C3.50896989,10.3578987 3.1615342,9.548562 3.04403986,8.66653716 L1.33333333,8.66633333 L1.33333333,9.16666667 C1.33333333,9.5348565 1.0348565,9.83333333 0.666666667,9.83333333 C0.298476833,9.83333333 0,9.5348565 0,9.16666667 L0,6.83333333 C0,6.4651435 0.298476833,6.16666667 0.666666667,6.16666667 C1.0348565,6.16666667 1.33333333,6.4651435 1.33333333,6.83333333 L1.33333333,7.333 L3.04408435,7.33312892 C3.16162189,6.45123374 3.50903489,5.64201621 4.02410027,4.96769942 L2.81431457,3.75759502 L2.46099688,4.1109127 C2.20064735,4.37126223 1.77853737,4.37126223 1.51818784,4.1109127 C1.25783831,3.85056318 1.25783831,3.42845319 1.51818784,3.16810366 L3.16810366,1.51818784 C3.42845319,1.25783831 3.85056318,1.25783831 4.1109127,1.51818784 C4.37126223,1.77853737 4.37126223,2.20064735 4.1109127,2.46099688 L3.75712361,2.81478597 L4.96703542,4.02460755 C5.64139986,3.50932802 6.45073999,3.16174819 7.33279501,3.04412887 L7.333,1.33333333 L6.83333333,1.33333333 C6.4651435,1.33333333 6.16666667,1.0348565 6.16666667,0.666666667 C6.16666667,0.298476833 6.4651435,0 6.83333333,0 L9.16666667,0 Z" id="路径"></path>\n</g>\n</g>\n</svg>';
            break;
        case "开放平台":
            e = '<svg class="svg-icon" viewBox="0 0 1024 1024">\n     <path d="M731 866.7H291.7c-13.8 0-25-11.2-25-25s11.2-25 25-25H731c13.8 0 25 11.2 25 25s-11.2 25-25 25z"></path>\n     <path d="M513 853.1c-13.8 0-25-11.2-25-25V688.8c0-13.8 11.2-25 25-25s25 11.2 25 25v139.3c0 13.8-11.2 25-25 25z"></path>\n     <path d="M815.7 139.9H220.3c-64.6 0-117.2 52.6-117.2 117.2v339.4c0 64.6 52.6 117.2 117.2 117.2h595.4c64.6 0 117.2-52.6 117.2-117.2V257.2c0-64.7-52.6-117.3-117.2-117.3zM320 556c0 13.8-11.2 25-25 25s-25-11.2-25-25V452c0-13.8 11.2-25 25-25s25 11.2 25 25v104z m146 0c0 13.8-11.2 25-25 25s-25-11.2-25-25V371c0-13.8 11.2-25 25-25s25 11.2 25 25v185z m149 0c0 13.8-11.2 25-25 25s-25-11.2-25-25V422c0-13.8 11.2-25 25-25s25 11.2 25 25v134z m141 0c0 13.8-11.2 25-25 25s-25-11.2-25-25V298c0-13.8 11.2-25 25-25s25 11.2 25 25v258z"></path>\n   </svg>'
        }
        return e
    }
    function h() {
        var a = $(".J-model-menu");
        a.removeClass("hide"),
        p()
    }
    function p() {
        CommConstants.IS_IN_APP && s.init(),
        C.init(),
        i.init(),
        L.getUnprocessedCount(),
        d.getUnprocessedCount(),
        $("#wrapper").layout({
            sidebarToggle: !0
        });
        var a = $(".J-main-menu");
        a.find("a[data-link]").click(function() {
            var a = $(this)
              , e = a.data("link");
            r.go(o[e] ? o[e] : e)
        }),
        a.find("a").click(function() {
            var a, e, n = $(this), t = n.data("label") || n.parent().data("menu-name") || "";
            switch (t) {
            case "配送信息":
                a = "c_shangou_online_e_6b2yb530",
                e = {
                    category: "shangou_online_e"
                };
            case "跑腿配送":
                a = "c_shangou_online_e_9n3var0g",
                e = {
                    category: "shangou_online_e"
                };
            default:
                a = "c_shangou_online_e_yq5ycuff",
                e = null
            }
            l.reportMC("b_shangou_online_e_7xefmydy_mc", a, null, e, {
                button_nm: t
            })
        }),
        $(".nav-header").on("click", function() {
            var a = $(this)
              , e = ""
              , n = a.data("label");
            "订单管理" === n ? (e = "订单定责,餐损赔付",
            $('[data-menu-name="餐损赔付"]').addClass("hide"),
            $('[data-menu-name="订单定责"]').addClass("hide"),
            "-1" != u && $.ajax({
                url: "/v2/order/confirm/responsibility/r/count",
                data: {
                    wmPoiId: u
                },
                success: function(a) {
                    if (0 === a.code) {
                        var e = a.data;
                        e > 0 && handleResponsibilityApply(e)
                    }
                }
            })) : (e = "订单赔付,出餐时间",
            $('[data-menu-name="订单赔付"]').addClass("hide"),
            $('[data-menu-name="出餐时间"]').addClass("hide")),
            $.ajax({
                url: "/v2/common/menu/r/authority",
                data: {
                    wmPoiId: u,
                    menuName: e
                },
                success: function(a) {
                    if (0 === a.code) {
                        var e = a.data;
                        if (e) {
                            var n = e.split(",");
                            n.forEach(function(a) {
                                $('[data-menu-name="' + a + '"]').removeClass("hide")
                            })
                        }
                    }
                }
            })
        });
        var e = function() {
            function e() {
                $(".nav-list").each(function(a, e) {
                    var n = $(e).find(".badge-new-hot");
                    if (n.length > 1)
                        $(e).prev().find(".J-mark-tip").children("span").remove().end().append(' <span class="badge-dot"></span>');
                    else {
                        var t = n.text();
                        $(e).prev().find(".J-mark-tip").children("span").remove().end().append(' <span class="badge-new-hot font-12">' + t + "</span>")
                    }
                })
            }
            function n() {
                a.find("a[data-link]").each(function(a, e) {
                    var n = localStorage.getItem("clickedAll")
                      , t = $(e).find(".J-mark-tip").get(0)
                      , s = $(e).find(".submenu-label").get(0);
                    if (s)
                        var C = $.trim(s.firstChild.nodeValue);
                    else
                        var C = $.trim(t.firstChild.nodeValue);
                    n && -1 !== n.indexOf(C) && ($(e).find(".badge-new-hot").remove(),
                    $(e).find(".badge-dot").remove())
                })
            }
            n(),
            e(),
            a.find("a[data-link]").click(function() {
                var a = $(this);
                if (a.find(".badge-new-hot").length) {
                    var n = localStorage.getItem("clickedAll")
                      , t = a.find(".J-mark-tip").get(0)
                      , s = a.find(".submenu-label").get(0);
                    if (s)
                        var C = $.trim(s.firstChild.nodeValue);
                    else
                        var C = $.trim(t.firstChild.nodeValue);
                    n ? -1 === n.indexOf(C) && localStorage.setItem("clickedAll", n + C) : localStorage.setItem("clickedAll", C),
                    a.find(".badge-new-hot").remove(),
                    a.find(".badge-dot").remove()
                }
                e()
            })
        };
        e(),
        window.refreshOrderModuleNewTag = function() {
            var a = parseInt(localStorage.getItem("count")) || 0
              , e = parseInt(localStorage.getItem("orderReminderCount")) || 0
              , n = parseInt(localStorage.getItem("orderExceptionCount")) || 0
              , t = parseInt(localStorage.getItem("changeAddressOrderCount")) || 0
              , s = parseInt(localStorage.getItem("orderRefundCount")) || 0
              , C = parseInt(localStorage.getItem("orderResponsibilityCount")) || 0
              , i = a + e + n + s + C + t
              , L = $(".J-order-new");
            i > 0 ? (i > 99 && (i = "99+"),
            L.text(i).show()) : L.hide()
        }
        ,
        window.handleResponsibilityApply = function(a) {
            var e = parseInt(localStorage.getItem("orderResponsibilityCount")) || 0
              , n = $(".J-responsibility-count")
              , a = parseInt(a)
              , t = 0;
            if (a > 0 ? t = a : -1 === a && e > 0 && (t = e - 1),
            t > 0) {
                var s = "";
                s = t > 99 ? "99+" : t,
                n.text(s)
            } else
                n.empty();
            localStorage.setItem("orderResponsibilityCount", t),
            window.refreshOrderModuleNewTag()
        }
        ,
        "function" == typeof window.goPager && window.goPager()
    }
    window.NewOrder = s,
    window.ChangeAddressOrderCount = C,
    window.RefundOrder = i,
    window.orderReminderPush = L,
    window.orderExceptionPush = d;
    var u = a.getCookie("wmPoiId");
    !function() {
        $.ajax({
            url: "/queryMenu",
            success: function(a) {
                if (0 === a.code) {
                    var e = a.data
                      , n = e.menus || [];
                    n.length ? (c(n),
                    window.initPageMap ? window.initPageMap(n) : window.navMenus = n) : h()
                } else
                    h()
            },
            error: function() {
                h()
            }
        })
    }();
    var v = $("#wrapper");
    $(".J-sidebar-toggle").click(function() {
        var a = $(this)
          , e = "";
        v.removeClass("pack-up-sidebar-delay"),
        v.toggleClass("pack-up-sidebar"),
        e = v.hasClass("pack-up-sidebar") ? "向右展开" : "向左收起",
        a.find(".text").text(e)
    }),
    $("#aside").hover(function() {
        v.append('<div class="full-screen-mask"></div>')
    }, function() {
        $(".full-screen-mask").remove(),
        v.hasClass("pack-up-sidebar") && v.addClass("pack-up-sidebar-delay")
    });
    try {
        t.report()
    } catch (m) {}
});
function Socket(t, n, e) {
    this.urlList = t,
    this.path = n,
    this.useLoop = e
}
function WebSocketClient(t, n, e) {
    this.socket = window.socket,
    (null == this.socket || void 0 == this.socket) && (this.socket = new Socket(t,n,e),
    window.socket = this.socket,
    this.socket.connect(),
    window.socket_env = "online")
}
function keepAlive(t) {
    var n = new Date;
    -1 != last_health && n.getTime() - last_health > health_timeout ? t.close() : sendHB(t)
}
function sendHB(t) {
    if (window.heartBeatResult || N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL),
    N.NetDaemon.isConnected())
        try {
            t.send("~#HHHBBB#~" + getCookie("pushToken"))
        } catch (n) {}
    window.heartBeatResult = !1
}
function retryConnect(t) {
    t.connect()
}
function getCookie(t) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(t + "="),
    -1 != c_start) ? (c_start = c_start + t.length + 1,
    c_end = document.cookie.indexOf(";", c_start),
    -1 == c_end && (c_end = document.cookie.length),
    unescape(document.cookie.substring(c_start, c_end))) : ""
}
!function(t) {
    function n(t) {
        for (var n = e, o = 0; o < t.length; o++)
            n = n[t[o]] = n[t[o]] || {};
        return n
    }
    var e = {
        version: .1
    };
    e.apply = function(t, n) {
        if (t && n && "object" == typeof n)
            for (var e in n)
                "undefined" != typeof n[e] && (t[e] = n[e]);
        return t
    }
    ,
    e.ns = function(t, o) {
        var i = "string" == typeof t ? n(t.split(".")) : e;
        return e.apply(i, t),
        o && "function" == typeof o && (o = o.apply(i, [e])),
        e.apply(i, o)
    }
    ,
    e.WVS = {},
    t.watt = e
}(window),
watt.ns("bus", function(t) {
    t.WVS.BUS = {};
    var n = function(n) {
        return this.ns = n || this._DEF_NAMESPACE,
        this.events = {},
        t.WVS.BUS[this.ns] ? t.WVS.BUS[this.ns] : (t.WVS.BUS[this.ns] = this,
        this)
    };
    n.prototype = {
        _DEF_NAMESPACE: "_defaultNS",
        on: function(t, n) {
            var e, o = t.split(/\s+/);
            if (n && "function" == typeof n)
                for (; e = o.shift(); )
                    (this.events[e] || (this.events[e] = [])).push(n);
            return this
        },
        off: function(t, n) {
            if (t || n) {
                for (var e, o, i = t.split(/\s+/); e = i.shift(); )
                    if (o = this.events[e])
                        if (n)
                            for (var s = o.length - 1; s >= 0; s--)
                                o[s] === n && o.splice(s, 1);
                        else
                            delete this.events[e]
            } else
                this.events = {};
            return this
        },
        one: function(t, n) {
            var e = this
              , o = function() {
                e.off(t, o),
                n.apply(this, arguments)
            };
            this.on(t, o)
        },
        emit: function(t, n, e) {
            for (var o, i, s, c = t.split(/\s+/); o = c.shift(); )
                for (i = (this.events[o] || []).slice(); s = i.shift(); )
                    s.apply(e || this, n || []);
            return this
        }
    };
    var e = function(n, e) {
        4 == n.length ? "string" != typeof n[1] && (n[3] = n[2],
        n[2] = n[1],
        n[1] = n[0],
        n[0] = t.bus.Bus._DEF_NAMESPACE) : "function" == typeof n[1] && (n[2] = n[1],
        n[1] = n[0],
        n[0] = t.bus.Bus._DEF_NAMESPACE);
        for (var o, i, s = n.shift().split(/\s+/g); o = s.shift(); )
            i = t.WVS.BUS[o || t.bus.Bus._DEF_NAMESPACE],
            i && i[e].apply(i, n)
    };
    return t.ns({
        on: function(t, n, o) {
            return e([t, n, o], "on"),
            this
        },
        off: function(t, n, o) {
            return e([t, n, o], "off"),
            this
        },
        one: function(t, n, o) {
            return e([t, n, o], "one"),
            this
        },
        emit: function(t, n, o, i) {
            return e([t, n, o, i], "emit"),
            this
        },
        Bus: function(n) {
            new t.bus.Bus(n)
        }
    }, 0),
    {
        Bus: new n
    }
});
var N = {
    apply: function(t, n) {
        if (t && n && "object" == typeof n)
            for (var e in n)
                "undefined" != typeof n[e] && (t[e] = n[e]);
        return t
    },
    override: function(t, n) {
        N.apply(t.prototype, n)
    },
    extend: function() {
        var t = function(t) {
            for (var n in t)
                this[n] = t[n]
        }
          , n = Object.prototype.constructor;
        return function(e, o, i) {
            var s, c = function() {
                e.apply(this, arguments),
                o.apply(this, arguments)
            }, r = function() {}, a = e.prototype;
            return r.prototype = a,
            s = c.prototype = new r,
            s.constructor = c,
            c.superclass = a,
            a.constructor == n && (a.constructor = e),
            c.override = function(t) {
                N.override(c, t)
            }
            ,
            s.superclass = function() {
                return a
            }
            ,
            s.override = t,
            N.override(c, i),
            c.extend = function(t) {
                return N.extend(c, t)
            }
            ,
            c
        }
    }()
}
  , isSupportOnline = "onLine"in navigator && -1 == navigator.appName.indexOf("Microsoft");
N.NetDaemon = {
    _connection: void 0,
    _netStatus: 3,
    STATUS_ONLINE: 0,
    STATUS_OFFLINE: 1,
    STATUS_PING_SUCCESS: 2,
    STATUS_PING_FAIL: 3,
    EVENT_ONLINE: 0,
    EVENT_OFFLINE: 1,
    EVENT_PING_SUCCESS: 2,
    EVENT_PING_FAIL: 3,
    INTERVAL_TIME: 1e4,
    PING_TIMEOUT: 3e4,
    PING_FAIL_DELAY: 1e4,
    _onOffline: function(t) {
        this._netStatus = this.STATUS_OFFLINE,
        this.log("Net status change. from " + t + " to STATUS_OFFLINE================"),
        this._connection && this._connection.stopHeartBeat()
    },
    _onPingSuccess: function(t) {
        this._netStatus = this.STATUS_PING_SUCCESS,
        this.log("Net status change. from " + t + " to STATUS_PING_SUCCESS================"),
        watt.emit("pingSuccess")
    },
    _onPingFail: function(t, n) {
        this._netStatus = this.STATUS_PING_FAIL,
        this.log("Net status change. from " + n + " to  STATUS_PING_FAIL, reconnect " + t / 1e3 + "s later=============="),
        this.reconnect(t)
    },
    _onEvents: [function(t) {
        var n = "STATUS_ONLINE";
        switch (t) {
        case this.EVENT_ONLINE:
            this.log("Net status change. unexpected event. on " + n + ", and comes a EVENT_ONLINE===========");
            break;
        case this.EVENT_OFFLINE:
            this._onOffline(n);
            break;
        case this.EVENT_PING_SUCCESS:
            this._onPingSuccess(n);
            break;
        case this.EVENT_PING_FAIL:
            this._onPingFail(this.PING_FAIL_DELAY, n)
        }
    }
    , function(t) {
        var n = "STATUS_OFFLINE";
        switch (t) {
        case this.EVENT_ONLINE:
            this._netStatus = this.STATUS_ONLINE,
            this.log("Net status change. from " + n + " to STATUS_ONLINE, reconnecting==================="),
            watt.emit("online"),
            this.reconnect(1e4);
            break;
        case this.EVENT_OFFLINE:
            this.log("Net status change. unexpected event. on " + n + ", and comes a EVENT_OFFLINE");
            break;
        case this.EVENT_PING_SUCCESS:
            this.log("Net status change. unexpected event. on " + n + ", and comes a EVENT_PING_SUCCESS"),
            this._onPingSuccess(n);
            break;
        case this.EVENT_PING_FAIL:
            this.log("Net status change. from " + n + " to STATUS_ONLINE, reconnecting===================")
        }
    }
    , function(t) {
        var n = "STATUS_PING_SUCCESS";
        switch (t) {
        case this.EVENT_ONLINE:
            this.log("Net status change. unexpected event. on " + n + ", and comes a EVENT_ONLINE");
            break;
        case this.EVENT_OFFLINE:
            this._onOffline("STATUS_PING_SUCCESS");
            break;
        case this.EVENT_PING_SUCCESS:
            this.log("Net status change. from " + n + " to STATUS_PING_SUCCESS.");
            break;
        case this.EVENT_PING_FAIL:
            this._onPingFail(this.PING_FAIL_DELAY, n)
        }
    }
    , function(t) {
        var n = "STATUS_PING_FAIL";
        switch (t) {
        case this.EVENT_ONLINE:
            this.log("Net status change. unexpected event. on " + n + ", and comes a EVENT_ONLINE");
            break;
        case this.EVENT_OFFLINE:
            this._onOffline(n);
            break;
        case this.EVENT_PING_SUCCESS:
            this._onPingSuccess(n);
            break;
        case this.EVENT_PING_FAIL:
            this.log("Net status change. from STATUS_PING_FAIL to " + n + ". reconnect " + this.PING_FAIL_DELAY / 1e3 + "s later.=========="),
            this.reconnect(this.PING_FAIL_DELAY)
        }
    }
    ],
    log: function(t) {
        "dev" == window.socket_env && console.log(t)
    },
    changeStatus: function(t) {
        this._onEvents[this._netStatus].call(this, t)
    },
    reconnect: function(t) {
        this._connection && this._connection.reconnect(t)
    },
    created: function(t) {
        this._connection = t
    },
    connected: function(t) {
        this._connection = t,
        this.changeStatus(this.STATUS_PING_SUCCESS)
    },
    isConnected: function() {
        return this.STATUS_PING_SUCCESS === this._netStatus
    },
    init: function() {
        var t = this;
        isSupportOnline && (window.addEventListener("online", function() {
            t.changeStatus(t.STATUS_ONLINE)
        }),
        window.addEventListener("offline", function() {
            t.changeStatus(t.STATUS_OFFLINE)
        })),
        watt.on("created", function(n) {
            t.created(n)
        }),
        watt.on("connected", function(n) {
            t.connected(n)
        }),
        watt.on("connectFail", function() {
            t.changeStatus(t.STATUS_PING_FAIL)
        }),
        watt.on("onMessage onAck", function() {
            t._connection || (t._connection = N.connection,
            t.changeStatus(t.STATUS_PING_SUCCESS))
        })
    }
},
N.NetDaemon.init();
var last_health = -1
  , health_timeout = 3e3
  , timeoutStep = -1e4;
window.heartBeatResult = !0,
window.heartbeat_timer = 0,
window.retryConnect_timer = 0,
window.retryConnect_index = 0,
window.socket,
window.onMsgListeners = [],
window.onOpenListeners = [],
window.onCloseListeners = [],
window.onErrorListeners = [],
window.socket_env = "online",
Socket.prototype.connect = function() {
    if (this.connection)
        try {
            this.connection.onclose = null,
            this.connection.close()
        } catch (t) {}
    if (window.WebSocket)
        try {
            var n = window.retryConnect_index;
            if (this.connection = new WebSocket(this.urlList[n] + this.path),
            this.useLoop) {
                var e = this.urlList.length;
                n === e - 1 ? window.retryConnect_index = 0 : window.retryConnect_index = n + 1
            }
        } catch (t) {}
    else
        this.connection = {};
    watt.emit("created", [window.socket]),
    this.connection && (this.connection.onmessage = function(t) {
        if (null == t || null == t.data || "HB" == t.data)
            return void ("HB" == t.data && (window.heartBeatResult = !0,
            N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_SUCCESS)));
        var n = "";
        try {
            n = decodeURIComponent(t.data)
        } catch (e) {
            n = t.data
        }
        for (var o = 0; o < window.onMsgListeners.length; o++)
            window.onMsgListeners[o](n)
    }
    ,
    this.connection.onopen = function(t) {
        var n = this;
        window.heartbeat_timer && clearInterval(window.heartbeat_timer),
        window.heartBeatResult = !0,
        window.heartbeat_timer = setInterval(function() {
            keepAlive(n),
            window.crash_heartbeat && window.crash_heartbeat()
        }, 1e4),
        window.retryConnect_timer && clearInterval(window.retryConnect_timer);
        for (var e = 0; e < window.onOpenListeners.length; e++)
            window.onOpenListeners[e](t);
        watt.emit("connected", [window.socket])
    }
    ,
    this.connection.onerror = function(t) {
        clearInterval(window.heartbeat_timer);
        for (var n = 0; n < window.onErrorListeners.length; n++)
            window.onErrorListeners[n](t)
    }
    ,
    this.connection.onclose = function(t) {
        clearInterval(window.heartbeat_timer);
        for (var n = 0; n < window.onCloseListeners.length; n++)
            window.onCloseListeners[n](t);
        N.NetDaemon.changeStatus(N.NetDaemon.STATUS_PING_FAIL)
    }
    )
}
,
Socket.prototype.reconnect = function(t) {
    clearInterval(window.retryConnect_timer);
    var n = this;
    timeoutStep += 1e4,
    t += timeoutStep,
    window.retryConnect_timer = setInterval(function() {
        retryConnect(n)
    }, t)
}
,
Socket.prototype.stopHeartBeat = function() {
    clearInterval(window.heartbeat_timer)
}
,
WebSocketClient.prototype.send = function(t) {
    this.socket.connection.send(t)
}
,
WebSocketClient.prototype = {
    onMessageListener: function(t) {
        window.onMsgListeners.push(t)
    },
    onOpenListener: function(t) {
        window.onOpenListeners.push(t)
    },
    onErrorListener: function(t) {
        window.onErrorListeners.push(t)
    },
    onCloseListener: function(t) {
        window.onCloseListeners.push(t)
    }
};
define("module/root/push_client", function() {});

define('widgets/global_poptip', ["module/cookie", "module/interface", "util/utils"], function(t, s, a) {
    var n = null
      , o = null
      , i = $("#J-global-tips .badge");
    return {
        init: function() {
            var t = this
              , s = '<div class="panel panel-default global-poptip"><span class="arrow"></span><span class="close J-close">&times;</span><div class="panel-body J-poptip-body"></div></div>';
            n = $(s),
            o = n.find(".J-poptip-body"),
            n.hide().appendTo($("#J-global-tips"));
            var a = n.find(".J-close");
            a.on("click", t.hide),
            this.reportData()
        },
        reportData: function() {
            var t = $("#J-global-tips");
            t && (a.reportMV("b_waimai_e_v8b47ocp_mv", "c_waimai_e_um55opap"),
            t.on("click", function() {
                a.reportMC("b_waimai_e_v8b47ocp_mc", "c_waimai_e_um55opap")
            }))
        },
        setRest: function(s, a, n) {
            var o = this
              , i = (t.getCookie("wmPoiId"),
            function(t) {
                var n = "";
                "系统" === s || "平台" === s ? (n = a,
                t(n)) : (n = "置休分店从现在起不接收新订单，手动恢复营业后可正常接收新订单",
                t(n))
            }
            );
            i(function(t) {
                var a = $('<div class="set-rest"><p class="icon"><i class="circle">休</i></p><p class="title">' + ("手动" === s ? n : "") + "已被" + s + '置休</p><p class="content fc-gray">' + t + '</p><p class="opr"><a href="javascript:;" class="btn btn-primary page-jump J-detail" data-url="/v2/shop/manage">查看详情</a><button class="btn btn-default J-ignore">忽略</button></p></div>')
                  , i = $(".global-poptip");
                a.find(".J-ignore").on("click", o.hide),
                a.find(".J-detail").on("click", o.hide),
                i.find(".panel-body").html(a).end().show(),
                o.showBadge()
            })
        },
        setBusy: function(t, s) {
            var a = this
              , n = $('<div class="set-rest"><p class="title">' + ("busy" === t ? "运力不足" : "运力恢复") + '</p><p class="content fc-gray">' + s + "</p></div>")
              , o = $(".global-poptip");
            o.find(".panel-body").html(n).end().show(),
            a.showBadge()
        },
        showSpecialDayTip: function(t, s) {
            var a = this
              , n = $('<div class="set-rest"><p class="title">' + t + '</p><p class="content fc-gray">' + s + "</p></div>");
            o.html(n).end().show(),
            a.showBadge()
        },
        showImTip: function() {
            var t = this
              , s = $('<p class="title">在线对话功能提醒</p><p class="content fc-gray">多店账号暂不支持在线对话功能，如需在线沟通，请登录单店账号使用</p><div class="text-center"><button class="btn btn-primary J-know" style="display: inline-block">我知道了</button></div>');
            s.find(".J-know").on("click", t.hide);
            var a = $(".global-poptip");
            a.find(".panel-body").html(s).end().show(),
            t.showBadge()
        },
        showReportResult: function(t, a, n, i) {
            var e = this;
            "2" === i ? $.ajax({
                url: s.order.getReportInfo,
                data: {
                    commentId: t,
                    wmPoiId: a
                },
                success: function(s) {
                    if (0 === s.code) {
                        var n = s.data
                          , i = n.wmComment ? n.wmComment.clean_comment : ""
                          , c = $('<div class="result-wrap"><span class="re-icon circle posr c-success"><i class="posa middle-center font-16 fa fa-check"></i></span><span class="re-title"><strong>举报评价成功</strong></span><div class="text re-content font-12 color-666">该恶意评价已经从商家评价和综合评分中删除，不再影响您的正常营业</div><div class="color-666 font-12">评价原文：</div><div class="text comment color-666 font-12">' + i + '</div><p class="opr"><a href="javascript:;" class="btn btn-primary page-jump J-detail" data-url="' + CommConstants.eappBaseUrl + "/other/v2/customer/comment/report/info?id=" + t + "&wmPoiId=" + a + '">查看详情</a><button class="btn btn-default J-ignore">忽略</button></p></div>');
                        c.find(".J-ignore").on("click", e.hide),
                        c.find(".J-detail").on("click", e.hide),
                        o.html(c).end().show(),
                        e.showBadge()
                    }
                }
            }) : setTimeout(function() {
                var s = $('<div class="result-wrap"><span class="re-icon circle posr c-refuce"><i class="posa middle-center font-16 fa fa-times"></i></span><span class="re-title"><strong>举报评价被驳回</strong></span><div class="text font-12 color-666">驳回原因：' + n + '</div><p class="opr"><a href="javascript:;" class="btn btn-primary page-jump J-detail" data-url="' + CommConstants.eappBaseUrl + "/other/v2/customer/comment/report/info?id=" + t + "&wmPoiId=" + a + '">查看详情</a><button class="btn btn-default J-ignore">忽略</button></p></div>');
                s.find(".J-ignore").on("click", e.hide),
                s.find(".J-detail").on("click", e.hide),
                o.html(s).end().show(),
                e.showBadge()
            }, 200)
        },
        showManagerChange: function(t) {
            var s = this
              , a = $('<div class="tip-icon">变</div><span class="tip-title"><strong>业务经理变更</strong></span><div class="manager-content">' + t + '</div><p class="opr"><button type="button" class="btn btn-primary btn-stable J-ignore">我知道了</button></p></div>');
            a.find(".J-ignore").on("click", s.hide),
            o.html(a).end().show(),
            s.showBadge()
        },
        showUpdate: function() {
            var t = this
              , s = $('<div><p class="title">发现新版本</p><p class="content fc-gray">为了更好的体验以及新功能的使用，请刷新页面载入新版本的商家中心</p><p class="opr"><button class="btn btn-primary J-refresh">立即刷新</button><button class="btn btn-default J-ignore">稍后刷新</button></p></div>');
            s.find(".J-ignore").on("click", t.hide),
            s.find(".J-refresh").on("click", function() {
                location.reload(!0)
            }),
            o.html(s).end().show(),
            t.showBadge()
        },
        hide: function() {
            n.hide(),
            i.removeClass("show")
        },
        showBadge: function() {
            i.addClass("show")
        }
    }
});
define('module/exception_info', ["module/interface", "widgets/normal_dialog", "widgets/tips_append"], function(e, t, o) {
    "use strict";
    var i = {
        getExceptionInfo: function() {
            $.ajax({
                url: e.common.getExceptionInfo,
                success: function(e) {
                    if (0 == e.code) {
                        var e = e.data;
                        if (e) {
                            var i = localStorage.getItem("exceptionType");
                            if (e.content) {
                                var n = '<div style="word-break:break-all">' + e.content + "</div>";
                                o.assembleNormalTip(n)
                            }
                            if (i && i == e.id)
                                ;
                            else {
                                localStorage.setItem("exceptionType", e.id);
                                var a = '<h3 class="J-exception-title" style="margin:0 0 10px 0;text-align:center;font-size:18px;color:#666;word-break: break-all;">' + e.title + '</h3><div style="height:60px;color:#999;word-break: break-all;overflow-y:auto;">' + e.content + "</div>"
                                  , l = t({
                                    title: e.title,
                                    content: a,
                                    btns: [{
                                        txt: "我知道了",
                                        fn: function() {
                                            l.modal("hide")
                                        }
                                    }]
                                })
                            }
                        } else
                            $(".boards-wrapper-exception").empty(),
                            $(".J-exception-title").length && $(".J-exception-title").parents(".modal").modal("hide")
                    }
                }
            })
        }
    };
    return i
});
define('module/root/push_schedule', ["module/cookie", "util/utils", "module/root/push_client", "module/order/printorder", "widgets/tips_append", "module/interface", "widgets/global_poptip", "module/exception_info", "widgets/normal_dialog", "module/page_jump"], function(e, s, a, o, t, i, n, r, d, c) {
    "use strict";
    var l = e.getCookie("acctId")
      , m = l % 100 || 0
      , u = e.getCookie("wmPoiId")
      , p = e.getCookie("pushToken")
      , g = []
      , w = e.getCookie("wpush_server_url") || "wss://wpush.meituan.com"
      , _ = location.href
      , f = e.getCookie("device_uuid")
      , h = parseInt($("#J-push-percentage").val()) || 0
      , b = window.frames[0]
      , k = !1
      , v = !1;
    if (h > m && (k = !0),
    !p) {
        var y = e.getCookie("token");
        e.setCookieEx("pushToken", y, 31536e3),
        p = y
    }
    g.push(w),
    -1 !== _.indexOf("test") ? g.push("ws://1953-nvoyb-sl-wpush.waimai.test.meituan.com") : -1 !== _.indexOf(".st.") ? g.push("wss://wpush.waimai.st.meituan.com") : -1 !== _.indexOf("shangoue") && g.push("wss://bj-wpush.waimai.meituan.com", "wss://sh-wpush.waimai.meituan.com");
    var I = "/websocket/waimai_e/" + p
      , O = new WebSocketClient(g,I,k);
    O.onOpenListener(function() {
        $.post("/v2/common/pushToken/w/update", {
            uuid: f,
            acctId: l,
            pushToken: p,
            type: "connected"
        }),
        v = !0
    }),
    O.onCloseListener(function() {
        v = !1
    }),
    O.onErrorListener(function() {
        v = !1
    }),
    O.onMessageListener(function(a) {
        function l() {
            var e = JSON.parse(localStorage.getItem("modalMessages"));
            -1 === e.msg.indexOf(m.title) && e.count < 5 && e.msg.push(m.title),
            e.count++,
            localStorage.setItem("modalMessages", JSON.stringify(e))
        }
        var m = JSON.parse(a);
        if (m.handlerType = "fromPushMessage",
        console.log(m, "监听webSocket数据返回"),
        m && m.code)
            switch (parseInt(m.code)) {
            case 1:
                if (!CommConstants.IS_LIANSUO && CommConstants.IS_IN_APP) {
                    b.postMessage(JSON.stringify(m), "*");
                    var g = m.wmOrderViewId
                      , w = m.wmPoiId;
                    if (g && w) {
                        var _ = CommConstants.IS_CHAIN ? 1e3 : 0;
                        setTimeout(function() {
                            window.NewOrder.getListFromPush(g, w)
                        }, _)
                    }
                }
                break;
            case 2:
                "-1" !== u && $.ajax({
                    url: "/common/businessStatus",
                    type: "POST",
                    data: {
                        wmPoiId: u
                    },
                    success: function(e) {
                        0 == e.code && e.wmPoiStatusDesc && $("#select_poi_status_button_text").text(e.wmPoiStatusDesc)
                    }
                });
                break;
            case 3:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 4:
                var f = m.refund_type
                  , h = m.order_push_seq
                  , k = m.end_time
                  , v = m.wmOrderViewId
                  , y = window.audioControls.cancel;
                switch (parseInt(f)) {
                case 0:
                case void 0:
                    if (window.RefundOrder.handlePush(),
                    !v)
                        return void $.post(i.pc.report, {
                            logMsg: a
                        });
                    $.post(i.order.autoAgreeRefund, {
                        wmPoiId: m.wmPoiId,
                        wmOrderViewId: v
                    });
                    break;
                case 1:
                    o.printRefundTips(h, k, v);
                    break;
                case 2:
                    y.audioPlay(),
                    o.printCancelTips(h, v, "订单超建议送达时间30分钟以外");
                    break;
                case 3:
                    y.audioPlay(),
                    o.printCancelTips(h, v, "接单1分钟内顾客取消");
                    break;
                case 4:
                    y.audioPlay(),
                    o.printCancelTips(h, v, "顾客退款请求超时未处理");
                    break;
                case 5:
                    var I = d({
                        title: "极速退款提醒",
                        content: m.message,
                        btns: [{
                            txt: "去关闭",
                            fn: function() {
                                localStorage.setItem("speedRefundFromPush", "true"),
                                window.location.hash = "/v2/shop/manage/speedRefund?fromPush=true",
                                I.modal("hide")
                            }
                        }, {
                            txt: "继续开通"
                        }]
                    });
                    s.reportMV("b_shangou_online_e_16iu7j80_mv", "c_shangou_online_e_ynjw7a7z", m, null, {
                        type: 5
                    });
                    break;
                case 6:
                    y.audioPlay(),
                    o.printCancelTips(h, v, "商家开通极速退款服务，顾客退款系统自动通过");
                    break;
                case 10:
                    JSON.parse(m.is_refresh_order) && window.RefundOrder.handlePush(),
                    m.audio_type && window.audioControls[m.audio_type] && window.audioControls[m.audio_type].audioPlay(),
                    JSON.parse(m.show_message) && t.assembleNormalTip(m.message),
                    m.print_title && o.printReturnGoodsTips(v, m.print_title, m.print_content || "")
                }
                break;
            case 6:
                var O = window.audioControls["pre-order"];
                O.audioPlay();
                break;
            case 7:
                t.assembleLogisticsCancel(m);
                break;
            case 8:
                m.setRest && n.setRest("平台", m.message.replace(/\+/g, " "));
                break;
            case 9:
                var v = m.wmOrderViewId
                  , C = m.remindId;
                window.orderReminderPush.checkNew(v, C);
                break;
            case 10:
                t.assembleLogisticsTimeChangedTip(m.message, m.poi_id, m.poi_name);
                break;
            case 11:
                t.assembleNormalTip(m.message);
                break;
            case 12:
                S(m);
                break;
            case 13:
                n.setRest("系统", m.message.replace(/\+/g, " ")),
                $.post(i.common.postHearbeatRestLog, {
                    wmPoiId: m.wmPoiId
                });
                break;
            case 14:
                n.setRest("手动", m.message.replace(/\+/g, " "), m.poiName);
                break;
            case 15:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 16:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 17:
                if (b.postMessage(JSON.stringify(m), "*"),
                "true" === m.cancelOrderSound) {
                    var y = window.audioControls.cancel;
                    y.audioPlay()
                }
                break;
            case 18:
                n.showManagerChange(m.message);
                break;
            case 21:
                var N = d({
                    title: "已成功开启新商家排序特权",
                    content: "由于您的新商家免费排序特权即将过期，系统已自动为您开启，此特权为期7天哦~",
                    btns: [{
                        txt: "去看看",
                        fn: function() {
                            window.location.hash = "/v2/newcome/privilegeInfo?flag=4",
                            N.modal("hide")
                        }
                    }, {
                        txt: "知道了",
                        fn: function() {
                            -1 !== location.href.indexOf("v2/index") && location.reload()
                        }
                    }]
                });
                s.reportMV("b_shangou_online_e_16iu7j80_mv", "c_shangou_online_e_ynjw7a7z", m, null, {
                    type: 21
                });
                break;
            case 22:
                t.assembleNormalTip(m.message);
                break;
            case 24:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 25:
                n.showReportResult(m.comment_id, m.wm_poi_id, m.reviewReason, m.reviewStatus);
                break;
            case 26:
                if (b.postMessage(JSON.stringify(m), "*"),
                1 == m.large_order) {
                    var P = "<span>自行配送提醒：订单" + (m.num ? "#4" + m.num : "") + '<a href="/v2/order/history/r/search?searchItem=' + m.wm_order_view_id + '">【' + m.wm_order_view_id + "】</a>，因超重/金额过大，跑腿暂无法配送，请您自行完成配送</span>";
                    t.assembleNormalTip(m.message || P)
                }
                1 == m.recovery && t.assembleNormalTip(m.wm_order_view_id + "号订单，配送恢复正常"),
                window.orderExceptionPush.checkNew(m.recovery, m.large_order);
                break;
            case 27:
                var T = e.getCookie("device_uuid")
                  , x = m.mainUuid
                  , M = function() {
                    var e = m.userId
                      , a = (new Date).getDate()
                      , o = "day" + a
                      , t = s.getStorage("waimai_hasRemindTwoMinutesUserIds") || o;
                    e ? (-1 === t.indexOf(o) && (t = o),
                    -1 === t.indexOf(e) && (window.audioControls["new-message-again"].audioPlay(),
                    s.setStorage("waimai_hasRemindTwoMinutesUserIds", t + "," + e))) : window.audioControls["new-message-again"].audioPlay()
                };
                x ? x == T && M() : M();
                break;
            case 28:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 51:
                n.setBusy("busy", m.message);
                break;
            case 52:
                n.setBusy("free", m.message);
                break;
            case 54:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 56:
                b.postMessage(JSON.stringify(m), "*");
                break;
            case 101:
                n.showSpecialDayTip(m.title, m.message);
                break;
            case 119:
                r.getExceptionInfo();
                break;
            case 999:
                var R = parseInt(m.showType)
                  , J = CommConstants.waimai_e_poi_list
                  , j = !1;
                if (J && (j = J.length <= 1),
                R && 1 !== R) {
                    if (2 === R) {
                        if (j) {
                            var V = m.message;
                            V = V.replace(/\+/g, "").replace(/\n/g, "<br>");
                            var L = d({
                                title: m.title || "",
                                content: V || "",
                                btns: [{
                                    txt: "知道了",
                                    fn: function() {
                                        L.modal("hide")
                                    }
                                }]
                            })
                        } else
                            l();
                        s.reportMV("b_shangou_online_e_16iu7j80_mv", "c_shangou_online_e_ynjw7a7z", m, null, {
                            type: 999
                        })
                    } else if (3 === R)
                        s.showTip(m.message);
                    else if (4 === R) {
                        if (j)
                            var z = parseInt(m.type)
                              , D = m.title
                              , A = m.content
                              , E = "/v2/help/msgbox/r/msgdetail?id=" + m.noticeId
                              , U = 1 === z ? D : "重要通知"
                              , B = 1 === z ? A : D
                              , F = 1 === z ? "知道了" : "去查看"
                              , H = d({
                                title: U,
                                content: B,
                                btns: [{
                                    txt: F,
                                    fn: function() {
                                        H.modal("hide"),
                                        2 === z && c.go(E)
                                    }
                                }],
                                "class": "important-msg"
                            });
                        else
                            l();
                        s.reportMV("b_shangou_online_e_16iu7j80_mv", "c_shangou_online_e_ynjw7a7z", m, null, {
                            type: 999
                        })
                    } else if (40 === R) {
                        var q = m.wmOrderViewId
                          , G = m.confirmPushToken;
                        G != p && t.assembleNormalTip(q + "号订单已被其他设备接单")
                    }
                } else
                    t.assembleNormalTip(m.message);
                break;
            case 2e3:
                location.href = "/"
            }
    });
    var S = function(e) {
        if (b.postMessage(JSON.stringify(e), "*"),
        1 === e.operator && 100 === e.logisticsStatus && !$("#delivery-cancelled-dialog").size())
            var s = d({
                title: "订单配送被取消",
                content: "您有订单的配送被取消，请前往处理。<br/>骑手将受到一定处罚，若有疑问可拨打客服电话：4000800610<br/><br/>（稍后也可在待配送页面进行处理）",
                btns: 1 === e.logisticsType ? [{
                    txt: "知道了",
                    fn: function() {
                        s.modal("hide")
                    }
                }] : [{
                    txt: "重发配送",
                    fn: function() {
                        c.go("/v2/order/receive/processed"),
                        s.modal("hide")
                    }
                }, {
                    txt: "稍后处理"
                }],
                id: "delivery-cancelled-dialog"
            });
        if (2 === e.operator && 100 === e.logisticsStatus)
            var a = d({
                title: "订单配送被取消",
                content: e.message,
                btns: [{
                    txt: "查看订单",
                    fn: function() {
                        var s = Math.random()
                          , o = "/v2/order/history/r/search?searchItem=" + e.wmOrderIdView + "&random=" + s;
                        a.modal("hide"),
                        c.go(o)
                    }
                }, {
                    txt: "我知道了"
                }]
            })
    }
});
define('module/root/global_polling', ["module/cookie", "module/set", "util/utils", "widgets/tips_append", "widgets/global_poptip"], function(t, e, o, i, s) {
    "use strict";
    var n = t.getCookie("wmPoiId")
      , a = t.getCookie("acctId")
      , u = t.getCookie("pushToken") || t.getCookie("token")
      , c = t.getCookie("device_uuid")
      , r = window.frames[0]
      , p = o.getPoiNickName()
      , d = {
        getSetParams: function() {
            var t = this;
            $.ajax({
                url: "/v2/common/r/getRegionId",
                type: "GET",
                success: function(t) {
                    t = t || {},
                    0 === t.code && e.saveParams(t.data)
                }
            }),
            setTimeout(function() {
                t.getSetParams()
            }, 36e5)
        },
        reportPcInfo: function() {
            var t = this;
            $.ajax({
                url: "/v2/common/pcInfo/w/report",
                type: "POST",
                success: function(e) {
                    e = e || {};
                    var o = e.data || {}
                      , i = o.loopInterval || 60;
                    setTimeout(function() {
                        t.reportPcInfo()
                    }, 1e3 * i)
                }
            })
        },
        getAcceptWmPoiList: function() {
            var t = this
              , e = o.getStaticVersion();
            $.ajax({
                url: "/v2/shop/systemSettings/r/getPcAutoAcceptWmPoiIdList",
                type: "GET",
                data: {
                    jsVersion: e
                },
                success: function(t) {
                    0 === t.code && null !== t.data && void 0 !== t.data && localStorage.setItem("autoAcceptWmPoiList", t.data)
                }
            }),
            setTimeout(function() {
                t.getAcceptWmPoiList()
            }, 24e4)
        },
        getPreOrderCount: function() {
            var t = this;
            $.ajax({
                url: "/v2/order/pre/r/notify/v2",
                type: "GET",
                success: function(t) {
                    var e = t.spanCount || 0;
                    i.assemblePreOrderCountTip(t),
                    localStorage.setItem("assemblePreCount", e),
                    r.postMessage(JSON.stringify({
                        handlerType: "changeChildDom",
                        count: e
                    }), "*")
                }
            }),
            setTimeout(function() {
                t.getPreOrderCount()
            }, 6e5)
        },
        getFeVersion: function() {
            setInterval(function() {
                var t = o.getStaticVersion("iframe")
                  , e = o.getStaticVersion()
                  , i = (new Date).getHours();
                $.ajax({
                    url: "/v2/common/r/static/version",
                    success: function(o) {
                        var n = o.data;
                        0 === o.code && n && (e !== n || "" !== t && t !== n) && (2 == i ? location.reload(!0) : s.showUpdate())
                    }
                })
            }, 18e5)
        },
        updatePushToken: function() {
            var t = this;
            $.ajax({
                url: "/v2/common/pushToken/w/update",
                type: "POST",
                data: {
                    uuid: c,
                    acctId: a,
                    pushToken: u,
                    type: "interval"
                }
            }),
            setTimeout(function() {
                t.updatePushToken()
            }, 36e5)
        },
        updatePushTokenAndIm: function() {
            var t = this;
            $.ajax({
                url: "/v2/common/v2/pushToken/w/update",
                type: "POST",
                data: {
                    uuid: c,
                    acctId: a,
                    pushToken: u,
                    type: "interval",
                    nickName: p,
                    isMuti: 1
                }
            }),
            setTimeout(function() {
                t.updatePushTokenAndIm()
            }, 36e5)
        },
        getTimeoutOrderNotice: function() {
            var t = this;
            $.ajax({
                url: "/v2/order/history/r/timeoutCancelOrder/notify",
                type: "GET",
                data: {
                    wmPoiId: n,
                    source: 1
                },
                success: function(t) {
                    var e = t.data || {}
                      , o = e.cancelReason;
                    0 === t.code && o && i.assembleNormalTip(o)
                }
            }),
            setTimeout(function() {
                t.getTimeoutOrderNotice()
            }, 12e4)
        },
        reportOperationStatus: function() {
            var t = this
              , e = localStorage.getItem("logonSuccess")
              , o = "true" === e ? 1 : 2
              , i = ""
              , s = ""
              , u = ""
              , r = ""
              , p = location.origin
              , d = "/v2/common/operation/w/status"
              , m = p + d + "?acctId=" + a + "&wmPoiId=" + n + "&deviceUuid=" + c + "&type=" + o;
            m += "&longitude=" + i + "&latitude=" + s + "&ip=" + u,
            Rohr_Opt && "function" == typeof Rohr_Opt.reload && (r = Rohr_Opt.reload(m)),
            localStorage.removeItem("logonSuccess"),
            $.post(d, {
                wmPoiId: n,
                acctId: a,
                uuid: c,
                type: o,
                longitude: i,
                latitude: s,
                ip: u,
                fingerprintInfo: r
            }),
            setTimeout(function() {
                t.reportOperationStatus()
            }, 36e5)
        },
        getBusinessStatus: function() {
            var t = this;
            $.ajax({
                url: "/common/businessStatus",
                type: "POST",
                data: {
                    wmPoiId: n
                },
                success: function(t) {
                    0 == t.code && (t.wmPoiStatusDesc && $("#select_poi_status_button_text").text(t.wmPoiStatusDesc),
                    t.hasSpecialShippingTime && 0 === $(".J-change-status-wrapper .notice").length ? $('<span class="notice"><i></i></span>').insertAfter("#select_poi_status_button_text") : t.hasSpecialShippingTime || $(".J-change-status-wrapper .notice").remove())
                }
            }),
            setTimeout(function() {
                t.getBusinessStatus()
            }, 12e4)
        },
        init: function() {
            this.getSetParams(),
            this.reportPcInfo(),
            this.getAcceptWmPoiList(),
            this.getPreOrderCount(),
            this.getFeVersion(),
            this.updatePushToken(),
            this.updatePushTokenAndIm(),
            this.getTimeoutOrderNotice(),
            this.reportOperationStatus(),
            "-1" !== n && this.getBusinessStatus()
        }
    };
    d.init()
});
define('module/root/print_template', ["module/interface", "widgets/get_poilist"], function(t, e) {
    var n = localStorage.getItem("printTemplates")
      , o = localStorage.getItem("poiPrintTemplates")
      , a = n ? JSON.parse(n) : {}
      , i = o ? JSON.parse(o) : []
      , r = function(t) {
        for (var e = i.length, n = 0; e > n; n++)
            if (i[n].wmPoiId === t)
                return i[n].nowTemplateId;
        return 0
    };
    window.PRINTTEMPLATES = {},
    $.ajax({
        url: "/static/docs/defaultPrintTemplateForWaimai.xml",
        dataType: "text",
        success: function(t) {
            window.PRINTTEMPLATES.food = t
        }
    }),
    $.ajax({
        url: "/static/docs/defaultPrintTemplateForShangchao.xml",
        dataType: "text",
        success: function(t) {
            window.PRINTTEMPLATES.market = t
        }
    }),
    e(function(e) {
        var n = e
          , o = n.length
          , i = [];
        if (o > 0) {
            for (var s = 0; o > s; s++)
                -1 !== n[s].id && i.push({
                    wmPoiId: n[s].id,
                    version: 1,
                    nowTemplateId: r(n[s].id)
                });
            $.ajax({
                url: t.shop.getPrintModels,
                type: "POST",
                data: {
                    nowPrintTemplate: JSON.stringify(i)
                },
                success: function(t) {
                    if (0 === t.code) {
                        for (var e = t.data, n = e.length, o = 0; n > o; o++)
                            a[e[o].nowTemplateId] = e[o].templateUrl,
                            i.map(function(t) {
                                e[o].wmPoiIdList.some(function(e) {
                                    return e === t.wmPoiId
                                }) && (t.nowTemplateId = e[o].nowTemplateId)
                            });
                        var r, s = {}, l = 3, m = function(t) {
                            s[t]++,
                            $.ajax({
                                url: r,
                                dataType: "text",
                                success: function(t) {
                                    return function(e) {
                                        window.PRINTTEMPLATES[t] = e
                                    }
                                }(t),
                                error: function(t) {
                                    return function() {
                                        s[t] < l ? m(t) : window.PRINTTEMPLATES[t] = window.CommConstants.shopCate && "market" === window.CommConstants.shopCate ? window.PRINTTEMPLATES.market : window.PRINTTEMPLATES.food
                                    }
                                }(t)
                            })
                        };
                        for (var T in a)
                            i.some(function(t) {
                                return t.nowTemplateId === parseInt(T)
                            }) ? (r = a[T].replace("https:", "").replace("http:", ""),
                            s[T] = 0,
                            m(T)) : delete a[T];
                        localStorage.setItem("printTemplates", JSON.stringify(a)),
                        localStorage.setItem("poiPrintTemplates", JSON.stringify(i))
                    }
                }
            })
        } else
            localStorage.setItem("printTemplates", JSON.stringify({})),
            localStorage.setItem("poiPrintTemplates", JSON.stringify([]))
    })
});
!function(t, o) {
    "function" == typeof define && define.amd ? define('module/bridge/bridge_platform', ["module/page_jump", "widgets/normal_dialog"], o) : "object" == typeof exports ? module.exports = o() : t.bridge = o()
}(this, function(t, o) {
    "use strict";
    var e = Object.prototype.toString
      , a = {};
    a.inform = function(t) {
        $().inform(t)
    }
    ,
    a.goBack = function(t) {
        var o = -1;
        t && void 0 !== t.step && (o = t.step),
        window.history.go(o)
    }
    ,
    a.jumpTo = function(o) {
        var e = o.href || "/index";
        o.nojump && localStorage.setItem("nojump", !0),
        o.selectLabel && localStorage.setItem("selectLabel", o.selectLabel),
        t.go(e)
    }
    ;
    var n, i = '<div class="modal" role="dialog" id="dialogHook"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h4 class="modal-title"></h4></div><div class="modal-body"></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">关闭</button><button type="button" class="btn btn-primary">确认</button></div></div></div></div>';
    $("body").append(n = $(i)),
    n.find(".btn-primary").click(function(t) {
        var o = n.find("form");
        0 != o.size() && d.postMessage(o.serialize(), l)
    }),
    a.dialog = function(t) {
        n.find(".modal-title").text(t.title || "提示"),
        n.find(".modal-body").html(t.content || ""),
        n.modal("show")
    }
    ,
    a.selectWmPoi = function(t) {
        window.selectCurrentPoi(t.wmPoiId, t.wmPoiName, t.jumpUrl)
    }
    ,
    a.getPlatformShareData = function() {
        a.postMessage({
            type: "platformShareData",
            data: CommConstants
        })
    }
    ;
    var r;
    a.signContract = function(t) {
        r = o({
            noHeader: !0,
            size: "lg",
            "class": "contract-dialog",
            title: "签合同",
            content: '<iframe id="contractframe" src="' + t.url + '" width="100%" height="100%" frameborder="no" border="0" name="contractframe" allowfullscreen=""></iframe>',
            noCloseOnBackdropClick: !0,
            btns: []
        })
    }
    ,
    a.cancelSignContract = function() {
        r && (r.modal("hide"),
        r = null)
    }
    ,
    a.finishSignContract = function() {
        window.location.reload()
    }
    ,
    a.logon = function() {
        var t = top.document;
        $(t).find("#J-button-logout").click()
    }
    ;
    var l, d = window.frames[0], s = function(t) {
        var o = !1;
        if (t.origin === location.origin && (o = !0),
        window.frames.hashframe === t.source && (o = !0),
        window.frames.contractframe === t.source && (o = !0),
        o) {
            l = t.origin;
            var n, i = t.data;
            try {
                n = JSON.parse(i)
            } catch (r) {
                if ("[object Object]" !== e.call(i))
                    return;
                n = i
            }
            var d = n.method;
            if (d) {
                var s = a[d];
                if (s)
                    try {
                        s.apply(null, n.args)
                    } catch (r) {}
            }
        }
    };
    return window.addEventListener("message", s),
    a.postMessage = function(t) {
        d.postMessage(JSON.stringify(t), "*")
    }
    ,
    a
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('util/drag', ["module/cookie"], function(e) {
    "use strict";
    return {
        init: function(e) {
            var n = document.querySelector(e.el)
              , o = document.querySelector(e.point)
              , t = !1
              , i = 0
              , u = 0
              , c = 0
              , r = 0;
            o.onmousedown = function(e) {
                var o = window.getComputedStyle(n, null);
                t = !0,
                i = e.clientX,
                u = e.clientY,
                c = parseInt(o.width),
                r = parseInt(o.height)
            }
            ,
            o.onmousemove = function(e) {
                if (t) {
                    var o = e.clientX
                      , s = e.clientY
                      , f = c + (i - o)
                      , l = r + (u - s);
                    if (550 > f || f > 800)
                        return !1;
                    if (400 > l || l > 700)
                        return !1;
                    n.style.width = f + 10 + "px",
                    n.style.height = l + 10 + "px"
                }
            }
            ,
            o.onmouseup = function() {
                t = !1
            }
            ,
            o.onmouseleave = function() {
                t = !1
            }
            ,
            CommConstants.IS_IN_APP && (window.onmouseup = function() {
                t = !1
            }
            ,
            setTimeout(function() {
                window.hashframe.onmouseup = function() {
                    t = !1
                }
            }, 2e3))
        }
    }
});
define('module/root/im_food_recommend', ["module/cookie", "util/utils", "module/interface"], function(o, t, e) {
    "use strict";
    return {
        data: {
            foodRecommendCapability: 1,
            showFoodRecommendModal: !1,
            isDropdown: !1,
            foodCategoryList: [],
            foodSecondCategoryList: [],
            foodList: [],
            foodPageNum: 1,
            foodPageSize: 10,
            activeFirstCategory: null,
            activeSecondCategory: null,
            searchWord: "",
            foodCheckedList: [],
            xhrStatus: 0
        },
        methods: {
            toggleFoodRecommend: function() {
                this.showFoodRecommendModal = !this.showFoodRecommendModal,
                t.reportMC("b_shangou_online_e_svy4tldc_mc", "c_shangou_online_e_81ellaw0")
            },
            toggleDropdown: function() {
                this.isDropdown = !this.isDropdown
            },
            disableFoodRecommendCapability: function() {
                this.foodRecommendCapability = 1
            },
            checkFoodRecommendCapability: function(o) {
                var t = this
                  , a = JSON.parse(o.message.extension || "{}");
                $.ajax({
                    url: e.root.foodRecommendCapability,
                    type: "GET",
                    data: {
                        acctId: t.acctId,
                        userId: a.user_id,
                        wmPoiId: t.selectedSessionWmPoiId
                    },
                    success: function(o) {
                        0 == o.code && (t.foodRecommendCapability = o.data.productCapability,
                        (2 == t.foodRecommendCapability || 3 == t.foodRecommendCapability) && (t.foodUrl = o.data.productUrl,
                        t.getFoodRecommendInfo()))
                    },
                    error: function(o) {}
                })
            },
            getFoodRecommendInfo: function() {
                var o = this
                  , a = CommConstants.shopCate;
                if ("food" == a)
                    o.getWmFoodListAndCategory();
                else {
                    var d = {
                        acctId: o.acctId,
                        wmPoiId: o.selectedSessionWmPoiId,
                        token: o.token
                    };
                    $.ajax({
                        url: e.productManage.sc.getMedicineCategories,
                        type: "GET",
                        data: d,
                        success: function(e) {
                            o.xhrStatus = 1,
                            0 === e.code ? (o.foodCategoryList = e.data.tagList || [],
                            o.foodCategoryList.unshift({
                                id: "",
                                name: "全部商品"
                            }),
                            o.getScFoodList()) : t.showTip("获取商品分类信息失败，请稍后重试")
                        }
                    })
                }
            },
            getWmFoodListAndCategory: function(o, a) {
                var d = this
                  , s = {
                    acctId: d.acctId,
                    wmPoiId: d.selectedSessionWmPoiId,
                    needTagList: !o,
                    tagId: o && o.id,
                    tagName: o && o.tagName,
                    pageNum: d.pageNum,
                    pageSize: d.pageSize
                };
                d.xhrStatus = 0,
                d.searchWord ? ($.extend(s, {
                    name: d.searchWord
                }),
                $.ajax({
                    url: e.productManage.searchByName,
                    type: "GET",
                    data: s,
                    success: function(o) {
                        d.xhrStatus = 1,
                        0 === o.code ? d.foodList = o.data.productList || [] : t.showTip("获取商品信息失败，请稍后重试")
                    }
                })) : $.ajax({
                    url: e.productManage.spuList,
                    type: "GET",
                    data: s,
                    success: function(e) {
                        d.xhrStatus = 1,
                        0 === e.code ? (o || (d.foodCategoryList = e.data.tagList),
                        e.data.productList && (d.foodPageNum > 1 ? d.foodList = d.foodList.concat(e.data.productList) : d.foodList = e.data.productList,
                        a && a())) : t.showTip("获取商品" + (s.needTagList ? "分类" : "") + "信息失败，请稍后重试")
                    }
                })
            },
            getScFoodList: function(o) {
                var a = this
                  , d = (CommConstants.shopCate,
                e.productManage)
                  , s = {
                    token: a.token,
                    acctId: a.acctId,
                    wmPoiId: a.selectedSessionWmPoiId,
                    tagId: o && o.id,
                    needTag: 0,
                    pageSize: a.foodPageSize,
                    pageNum: a.foodPageNum
                };
                a.searchWord && $.extend(s, {
                    name: a.searchWord,
                    tagId: ""
                }),
                a.xhrStatus = 0,
                $.ajax({
                    url: d.sc.searchMedicine,
                    type: "GET",
                    data: s,
                    success: function(o) {
                        if (a.xhrStatus = 1,
                        0 === o.code) {
                            var e = o.data.productList || [];
                            a.foodPageNum > 1 ? a.foodList = a.foodList.concat(e) : a.foodList = e,
                            a.isDropdown = !1
                        } else
                            t.showTip("获取商品信息失败，请稍后重试")
                    }
                })
            },
            setFirstCategory: function(o, t) {
                var e = this;
                e.activeFirstCategory != o && (e.activeFirstCategory = o,
                e.activeSecondCategory = null,
                e.foodSecondCategoryList = [],
                e.activeFirstCategory.subTags && e.activeFirstCategory.subTags.length ? (e.foodSecondCategoryList = e.activeFirstCategory.subTags,
                e.setSecondCategory(e.activeFirstCategory.subTags[0], !1)) : (e.foodPageNum = 1,
                "food" == CommConstants.shopCate ? t && e.getWmFoodListAndCategory(o, e.toggleDropdown) : e.getScFoodList(o)))
            },
            setSecondCategory: function(o, t) {
                var e = this;
                e.activeSecondCategory != o && (e.activeSecondCategory = o,
                e.foodPageNum = 1,
                "food" == CommConstants.shopCate ? e.getWmFoodListAndCategory(o, t ? e.toggleDropdown : null) : e.getScFoodList(o))
            },
            sendFood: function() {
                var o = this
                  , e = this.foodList.filter(function(o) {
                    return o.checked
                });
                e.forEach(function(t) {
                    o.sendMessage("general", t)
                }),
                o.foodList = o.foodList.map(function(o) {
                    return o.checked = !1,
                    o
                }),
                o.toggleFoodRecommend(),
                t.reportMC("b_shangou_online_e_48sm6njt_mc", "c_shangou_online_e_81ellaw0")
            },
            handleCheckFood: function(o, e) {
                o.checked = e.target.checked;
                var a = this.foodList.filter(function(o) {
                    return o.checked
                });
                a.length > 9 && (t.showTip("单次最多发送9个商品"),
                o.checked = !1,
                e.target.checked = !1)
            },
            searchByName: function() {
                var o = this
                  , t = this.$refs.searchInput.value
                  , e = o.activeSecondCategory || o.activeFirstCategory;
                o.searchWord = t,
                o.foodPageNum = 1,
                $(".food-list")[0].scrollTop = 0,
                "food" == CommConstants.shopCate ? o.getWmFoodListAndCategory(e, closeSelect ? o.toggleDropdown : null) : o.getScFoodList(e)
            },
            getMoreFood: function(o) {
                var t = o.target.offsetHeight
                  , e = o.target.scrollHeight
                  , a = o.target.scrollTop;
                if (a > e - t - 20 && 1 == this.xhrStatus) {
                    var d = this.activeSecondCategory || this.activeFirstCategory || {};
                    this.foodPageNum++,
                    "food" == CommConstants.shopCate ? this.getWmFoodListAndCategory(d, null) : this.getScFoodList(d)
                }
            }
        }
    }
});
define('widgets/new_function_tip', ['require'], function(t) {
    "use strict";
    function i(t) {
        this.tipEl = t.tipEl,
        this.tipContent = t.tipContent,
        this.tipFlag = t.tipFlag,
        this.tipTimes = t.tipTimes || 1,
        this.template = t.oldTemplate ? l : o,
        this.init()
    }
    var o = "";
    o += '    <div class="roo-tooltip roo-tooltip-bottom" role="tooltip" style="position: absolute;">',
    o += '        <div class="roo-tooltip-arrow"></div>',
    o += '        <div class="roo-tooltip-inner tooltip-inner" style="width: 170px; padding-bottom: 30px; line-height: 1.5; font-size: 12px"></div>',
    o += '        <div style="text-align: right; color: #f8c833; margin-top: -25px; padding-right: 15px;line-height: 1.5">',
    o += '            <span class="copy" style="cursor: pointer;">我知道了</span>',
    o += "        </div>",
    o += "    </div>";
    var l = "";
    return l += '    <div class="tooltip" role="tooltip">',
    l += '        <div class="tooltip-arrow"></div>',
    l += '        <div class="tooltip-inner" style="width: 170px; padding-bottom: 30px"></div>',
    l += '        <div style="text-align: right; color: #f8c833; margin-top: -25px; padding-right: 15px;">',
    l += '            <span class="copy" style="cursor: pointer;">我知道了</span>',
    l += "        </div>",
    l += "    </div>",
    i.prototype = {
        init: function() {
            var t = localStorage.getItem(this.tipFlag)
              , i = this;
            if (!t || !("true" === t || t > this.tipTimes)) {
                var o = ($("." + this.tipEl),
                $("." + this.tipEl).tooltip({
                    placement: "bottom",
                    title: this.tipContent,
                    template: this.template,
                    trigger: "click"
                }));
                o.tooltip("show"),
                o.next().find(".copy").on("click", function() {
                    o.tooltip("destroy"),
                    localStorage.setItem(i.tipFlag, t ? ++t : 1)
                }),
                o.on("click", function() {
                    o.tooltip("destroy"),
                    localStorage.setItem(i.tipFlag, t ? ++t : 1)
                })
            }
        }
    },
    i
});
define('components/draggable', [], function() {
    "use strict";
    Vue.component("v-draggable", {
        props: {
            tag: {
                type: String,
                "default": "div"
            },
            mask: {
                type: Boolean,
                "default": !1
            }
        },
        data: function() {
            return {
                top: null,
                right: null,
                bottom: null,
                left: null,
                downTime: null,
                moved: !1,
                startX: null,
                startY: null
            }
        },
        computed: {
            style: function() {
                return {
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    left: this.left,
                    display: "inline-block"
                }
            }
        },
        methods: {
            updatePosition: function(t) {
                var e = document.documentElement
                  , o = e.clientWidth
                  , i = e.clientHeight
                  , n = this.$el
                  , s = n.getBoundingClientRect()
                  , a = s.top
                  , u = s.left
                  , d = s.width
                  , h = s.height
                  , r = o - u - d
                  , m = i - a - h
                  , l = t.pageX
                  , c = t.pageY
                  , p = this.startX
                  , v = this.startY
                  , f = l - p
                  , g = c - v;
                this.startX = l,
                this.startY = c,
                d / 2 + u > o / 2 ? (this.right = Math.max(r - f, 0) + "px",
                this.left = "auto") : (this.left = Math.max(u + f, 0) + "px",
                this.right = "auto"),
                h / 2 + a > i / 2 ? (this.bottom = Math.max(m - g, 0) + "px",
                this.top = "auto") : (this.top = Math.max(a + g, 0) + "px",
                this.bottom = "auto")
            },
            onMousedown: function(t) {
                this.mousedown = !0,
                this.moved = !1,
                this.downTime = Date.now(),
                this.startX = t.pageX,
                this.startY = t.pageY,
                this.mask && this.addMask()
            },
            onMousemove: function(t) {
                this.moved = !0,
                this.mousedown && (this.updatePosition(t),
                this.$emit("drag"))
            },
            onMouseup: function(t) {
                this.mousedown = !1,
                this.moved ? (this.$el.addEventListener("click", this.preventDefault),
                this.$emit("drop")) : this.$emit("click", t),
                this.mask && this.removeMask()
            },
            preventDefault: function(t) {
                t.preventDefault(),
                t.currentTarget.removeEventListener("click", this.preventDefault)
            },
            addMask: function() {
                var t = document.createElement("div");
                t.id = "draggable-mask",
                t.style = "position:fixed; top:0; right:0; bottom:0; left:0; background:transparent;",
                document.body.appendChild(t)
            },
            removeMask: function() {
                var t = document.getElementById("draggable-mask");
                t && document.body.removeChild(t)
            }
        },
        render: function(t) {
            return t(this.tag, {
                style: this.style,
                attrs: {
                    draggable: !1
                },
                on: {
                    mousedown: this.onMousedown
                }
            }, this.$slots["default"])
        },
        created: function() {
            document.addEventListener("mousemove", this.onMousemove),
            document.addEventListener("mouseup", this.onMouseup)
        },
        beforeDestroy: function() {
            document.removeEventListener("mousemove", this.onMousemove),
            document.removeEventListener("mouseup", this.onMouseup)
        }
    })
});
define('util/request', [], function() {
    "use strict";
    var t = function(t) {
        return Array.prototype.slice.call(t)
    };
    return {
        post: function() {
            var a = t(arguments);
            $.post.apply(this, a)
        },
        get: function() {
            var a = t(arguments);
            $.get.apply(this, a)
        },
        ajax: function() {
            var a = t(arguments);
            $.ajax.apply(this, a)
        }
    }
});
define('module/root/im', ["module/cookie", "util/utils", "module/interface", "util/drag", "widgets/normal_dialog", "widgets/get_poilist", "module/root/im_food_recommend", "widgets/new_function_tip", "components/draggable", "util/request", "module/page_jump"], function(t, e, i, o, n, s, a, r, d, u, c) {
    "use strict";
    function m(t, i) {
        var o = "oldSgIm"
          , n = e.urlParams(location.href);
        if (n.sgImMode === o)
            return !1;
        var s = CommConstants.waimai_e_wmPoiId;
        if ("-1" === s)
            return !1;
        if (!i)
            return !1;
        var a = i.find(function(t) {
            return String(t.id) === s
        });
        if (!a)
            return !1;
        var r = t.some(function(t) {
            return t.code === String(a.firstTagId || "")
        });
        return !r
    }
    function g(a) {
        var g = [{
            code: "22",
            name: "医药健康"
        }]
          , l = m(g, a)
          , f = /localhost/
          , _ = /debug=/
          , h = "/health-static"
          , p = "sg_im.json";
        (f.test(location.host) || _.test(location.search)) && (h = "https://shangoue.meituan.com/health-static");
        var b = location.host
          , w = "";
        w = b.indexOf("test") > -1 ? "/sgcdn/mss_kSA9pkozf0iWTcuco+XPnw==/test07-awp-html-st/set/online_shangou_b_im" : b.indexOf("st") > -1 ? "/sgcdn/mss_5d36254f5d7d4de5ad564fb3bb84682c/awp-html-st/set/online_shangou_b_im" : "/sgcdn/mss_5d36254f5d7d4de5ad564fb3bb84682c/awp-html/set/online_shangou_b_im",
        l && (h = "//" + location.host + w,
        p = "sg_im_manifest.json");
        var v = h + "/" + p + "?v=" + (new Date).getTime();
        u.get(v, function(a, u) {
            if ("success" === u) {
                var m = h + a["sgIm.umd.js"];
                require.config({
                    paths: {
                        sg_im: m.replace(/\.js/, "")
                    }
                }),
                require(["sg_im"], function(a) {
                    if (l)
                        var u = {
                            cookie: t,
                            utils: e,
                            i: i,
                            drag: o,
                            dialog: n,
                            getPoiList: s,
                            NewFunctionTip: r,
                            draggable: d,
                            $: $
                        };
                    else
                        var u = [t, e, i, o, n, s, r, d, $, c];
                    a.passMethod(u),
                    a.mount("#sg-im")
                })
            }
        })
    }
    s(function(t) {
        g(t)
    }, {
        force: !0
    })
});
define('module/download_newclient', [], function() {
    function t(t, e) {
        var o = ["https://e-e-download", ".waimai.meituan.com"].join("")
          , n = {
            START: "start",
            DOWNLOADING: "downloading",
            ERROR: "error",
            COMPLETED: "completed"
        }
          , i = !1;
        wmNetworkApi.download(o, t, function(t) {
            function o(t) {
                e({
                    status: n.ERROR
                })
            }
            if (t.type == n.START)
                e({
                    status: n.START
                });
            else if (t.type == n.DOWNLOADING) {
                var a = parseFloat((t.completed / t.total * 100).toFixed(2));
                t.total == t.completed && (i = !0),
                e({
                    status: n.DOWNLOADING,
                    progress: a
                })
            } else
                t.type == n.COMPLETED ? i ? e({
                    status: n.COMPLETED
                }) : o() : t.type == n.ERROR && o()
        })
    }
    return window.wmNetworkApi && window.wmSystemApi ? t : null
});
define('widgets/sc_normal_dialog', [], function() {
    return function(t) {
        var o = t.size ? "modal-" + t.size : "modal-sm"
          , a = t["class"] ? t["class"] : ""
          , n = '<div class="modal ' + a + '" ' + (t.noClose ? 'data-backdrop="static"' : "") + ' role="dialog" aria-labelledby="normalModalLabel"' + (t.id ? ' id="' + t.id + '"' : "") + '><div class="modal-dialog ' + o + '" role="document"><div class="modal-content">';
        t.noHeader ? t.noClose || (n += '<button type="button" class="close" data-dismiss="modal" aria-label="Close" style="position: absolute;top: 10px;right: 10px;z-index: 999;"><span aria-hidden="true">×</span></button>') : n += '<div class="modal-header">' + (t.noClose ? "" : '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>') + '<h5 class="modal-title" id="normalModalLabel">' + t.title + "</h5></div>",
        n += '<div class="modal-body">' + t.content + '</div><div class="modal-footer">' + (t.btns[0] ? '<button type="button" class="btn btn-default J-confirm">' + t.btns[0].txt + "</button>" : "") + (t.btns[1] ? '<button type="button" class="btn btn-primary J-cancel" data-dismiss="modal">' + t.btns[1].txt + "</button>" : "") + "</div></div></div></div>";
        var s = $(n);
        s.find(".J-confirm").on("click", function() {
            t.btns[0] && t.btns[0].fn ? t.btns[0].fn() : "",
            s.modal("hide")
        }),
        s.find(".J-cancel").on("click", function() {
            t.btns[1] && t.btns[1].fn ? t.btns[1].fn() : "",
            s.modal("hide")
        }),
        s.on("hide.bs.modal", function(o) {
            t.onClose && t.onClose(),
            s.remove()
        });
        var l = s.find(".modal-dialog");
        return s.modal("show"),
        l.css("margin-top", ($(window).height() - l.height()) / 2),
        s
    }
});
require.config({
    baseUrl: VM.STATIC_URL
}),
define('module/root/deposit_global_modal', ["module/cookie", "module/interface"], function(e, o) {
    "use strict";
    new Vue({
        el: "#global-deposit-modal",
        data: function() {
            return {
                wmPoiId: e.getCookie("wmPoiId"),
                cacheList: []
            }
        },
        mounted: function() {
            this.queryLoginTime()
        },
        methods: {
            queryLoginTime: function() {
                var e = this;
                $.ajax({
                    url: o.root.queryShowBoxRemind,
                    type: "GET",
                    success: function(o) {
                        if (o && !o.code) {
                            var t = o.data.data || [];
                            e.handleShowGlobalModal(t)
                        } else
                            e.$toast.error(o.msg)
                    }
                })
            },
            handleShowGlobalModal: function(e) {
                for (var o = this, t = 0; t < e.length; t++)
                    !function(t) {
                        var i = e[t] || {};
                        if (i.needShowBox) {
                            var a = o.cacheList.indexOf(i.subjectId);
                            if (-1 !== a)
                                return;
                            o.cacheList.push(i.subjectId);
                            var n = i.showTimeSeconds || 0
                              , d = 1e3 * n;
                            if (d > 0)
                                var c = setTimeout(function() {
                                    o.createModal(i, t),
                                    clearTimeout(c)
                                }, d);
                            else
                                var c = setTimeout(function() {
                                    o.createModal(i, t),
                                    clearTimeout(c)
                                }, 3e3)
                        }
                    }(t)
            },
            confirmShowBoxSuccess: function(e, t) {
                var i = this
                  , a = {};
                "brandId" === t ? a.brandId = e : a.wmPoiId = e,
                $.ajax({
                    url: o.root.confirmShowBoxSuccess,
                    type: "get",
                    data: a,
                    success: function(e) {
                        !e || e.code || e.data.code ? i.$toast.error(e.msg) : i.queryLoginTime()
                    }
                })
            },
            createModal: function(e, o) {
                var t = e.subjectId
                  , i = "box" + t;
                if (!document.getElementById(i)) {
                    var a = this.cacheList.indexOf(t)
                      , n = document.createElement("div")
                      , d = this.isBrand(e.subjectType) ? "brandId" : "wmPoiId"
                      , c = this.isBrand(e.subjectType) ? "品牌" : "门店"
                      , s = "/#/page/medicine/e/deposit/#/agreement?acctType=1049&" + d + "=" + t + "&step=1"
                      , r = "btn-confirm" + o
                      , l = "btn-cancel" + o
                      , u = o ? "_blank" : "_self";
                    n.id = i,
                    n.className = "modal-wrap",
                    n.style.zIndex = 1e3 + o,
                    o > 10 && (o = 10),
                    n.style.top = String(30 + 50 * o) + "px",
                    n.style.left = String(40 + 3 * o) + "%",
                    n.innerHTML = '<div class="modal-header">保证金缴纳</div> <div class="deposit-modal-body font-14">亲爱的美团商户，您好！平台为保障用户的利益与体验，将向您收取保证金。<b>请您在' + e.deadline + "前为" + c + "【" + e.subjectName + '】缴纳保证金，否则将影响门店营业。</b>美团感谢您的配合。</div><div class="modal-footer font-12"><div class="modal-cancel" id=' + l + '>稍后缴纳</div><div class="modal-confirm" id=' + r + "><a href=" + s + ' class="color-fff" target=' + u + ">去缴纳</a></div></div>";
                    var m = document.getElementById("global-deposit-modal");
                    m.appendChild(n),
                    document.getElementById(l).onclick = function() {
                        m.removeChild(n)
                    }
                    ,
                    document.getElementById(r).onclick = function() {
                        m.removeChild(n)
                    }
                    ,
                    this.confirmShowBoxSuccess(t, d),
                    this.cacheList.splice(a, 1)
                }
            },
            isBrand: function(e) {
                return "BRAND" === e || "brand" === e
            }
        }
    })
});
define('module/cookie', [], function() {
    function e(e, o) {
        var n = arguments[2] ? arguments[2] : "";
        document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + n
    }
    function o(e) {
        for (var o = e + "=", n = document.cookie.split(";"), t = 0; t < n.length; t++) {
            var i = $.trim(n[t]);
            if (0 == i.indexOf(o))
                return decodeURIComponent(i.substring(o.length, i.length))
        }
        return ""
    }
    function n(e, o, n) {
        if (n) {
            var t = new Date;
            t.setTime(t.getTime() + 1e3 * n),
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/; expires=" + t.toUTCString()
        } else
            document.cookie = e + "=" + encodeURIComponent(o) + "; path=/"
    }
    function t(e) {
        var n = new Date;
        n.setTime(n.getTime() - 1);
        var t = o(e);
        null != t && (document.cookie = e + "=" + t + "; path=/; expires=" + n.toUTCString())
    }
    return {
        setCookie: e,
        getCookie: o,
        setCookieEx: n,
        delCookie: t
    }
});
define('util/code', [], function() {
    return new function() {
        this.allASCII = function(r) {
            if (!r)
                return !1;
            for (var e = 0, t = r.length; t > e; e++) {
                var n = r.charCodeAt(e);
                if (n >= 256)
                    return !1
            }
            return !0
        }
        ,
        _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        this.base64Encode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = _utf8_encode(r); d < r.length; )
                e = r.charCodeAt(d++),
                t = r.charCodeAt(d++),
                n = r.charCodeAt(d++),
                o = e >> 2,
                a = (3 & e) << 4 | t >> 4,
                c = (15 & t) << 2 | n >> 6,
                f = 63 & n,
                isNaN(t) ? c = f = 64 : isNaN(n) && (f = 64),
                h = h + _keyStr.charAt(o) + _keyStr.charAt(a) + _keyStr.charAt(c) + _keyStr.charAt(f);
            return h
        }
        ,
        this.base64Decode = function(r) {
            if (!r)
                return "";
            var e, t, n, o, a, c, f, h = "", d = 0;
            for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < r.length; )
                o = _keyStr.indexOf(r.charAt(d++)),
                a = _keyStr.indexOf(r.charAt(d++)),
                c = _keyStr.indexOf(r.charAt(d++)),
                f = _keyStr.indexOf(r.charAt(d++)),
                e = o << 2 | a >> 4,
                t = (15 & a) << 4 | c >> 2,
                n = (3 & c) << 6 | f,
                h += String.fromCharCode(e),
                64 != c && (h += String.fromCharCode(t)),
                64 != f && (h += String.fromCharCode(n));
            return h = _utf8_decode(h)
        }
        ,
        _utf8_encode = function(r) {
            r = r.replace(/\r\n/g, "\n");
            for (var e = "", t = 0; t < r.length; t++) {
                var n = r.charCodeAt(t);
                128 > n ? e += String.fromCharCode(n) : n > 127 && 2048 > n ? (e += String.fromCharCode(n >> 6 | 192),
                e += String.fromCharCode(63 & n | 128)) : (e += String.fromCharCode(n >> 12 | 224),
                e += String.fromCharCode(n >> 6 & 63 | 128),
                e += String.fromCharCode(63 & n | 128))
            }
            return e
        }
        ,
        _utf8_decode = function(r) {
            for (var e = "", t = 0, n = c1 = c2 = 0; t < r.length; )
                n = r.charCodeAt(t),
                128 > n ? (e += String.fromCharCode(n),
                t++) : n > 191 && 224 > n ? (c2 = r.charCodeAt(t + 1),
                e += String.fromCharCode((31 & n) << 6 | 63 & c2),
                t += 2) : (c2 = r.charCodeAt(t + 1),
                c3 = r.charCodeAt(t + 2),
                e += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
                t += 3);
            return e
        }
    }
});
define('module/printer_33', ["util/code"], function(utils) {
    function WmPrinter() {
        function _WmPrinterWrapper(t) {
            function n(t) {
                var n = t ? "array" == typeof t ? t : t.split(",") : []
                  , r = [];
                for (var e in n)
                    r.push(n[e].trim());
                return r
            }
            function r(t) {
                var n = {}
                  , r = [];
                for (var e in t) {
                    var i = t[e].toUpperCase();
                    switch (i) {
                    case "L":
                    case "R":
                    case "C":
                        n.align = i;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        n.vAlign = i;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        var s = [n.font, i].join(",");
                        "DH,DW" == s || "DW,DH" == s ? n.font = "DHW" : ("DHW" != n.font || "DH" != i && "DW" != i) && (n.font = i);
                        break;
                    default:
                        r.push(i)
                    }
                }
                return n.align && r.push(n.align),
                n.vAlign && r.push(n.vAlign),
                n.font && r.push(n.font),
                r
            }
            function e(t) {
                function e(t) {
                    switch (t) {
                    case "L":
                    case "R":
                    case "C":
                        o != t && i.push(o = t),
                        s = !0;
                        break;
                    case "T":
                    case "B":
                    case "M":
                        u != t && i.push(u = t),
                        a = !0;
                        break;
                    case "DW":
                    case "DH":
                    case "DHW":
                    case "CHW":
                        f != t && i.push(f = t),
                        c = !0;
                        break;
                    case "PRINT":
                        l = !0,
                        i.push(t);
                        break;
                    default:
                        i.push(t)
                    }
                }
                "string" == typeof t && (t = n(t));
                var i = []
                  , s = !1
                  , a = !1
                  , c = !1;
                t = r(t);
                for (var h in t)
                    e(t[h]);
                return !s && l && e("L"),
                !a && l && e("B"),
                c || e("CHW"),
                l = !1,
                i
            }
            var i, a = t, o = "L", u = "B", f = "CHW", c = !1, l = !1;
            this.prop = function(t) {
                return a.prop(t)
            }
            ,
            this.infos = function(t) {
                return t ? a.infos[t] : a.infos
            }
            ,
            this.width = function() {
                return this.prop("width")
            }
            ,
            this.name = function() {
                return this.prop("name")
            }
            ,
            this.key = function() {
                return a.key
            }
            ,
            this.flag = function() {
                return a.flag()
            }
            ,
            this.open = function() {
                return a.open()
            }
            ,
            this.close = function() {
                return a.close()
            }
            ,
            this.write = function(t, n) {
                return a.write ? a.write(t, n) : !1
            }
            ,
            this.canWrite = function() {
                return !!a.write
            }
            ,
            this.type = function() {
                return a.type
            }
            ,
            this.set = function(t) {
                a.set && a.set(t)
            }
            ,
            this.test = function(t) {
                if (void 0 !== i && !t)
                    return i;
                if (a.test)
                    return i = a.test().success;
                if (!this.open())
                    return !1;
                try {
                    return i = this.init()
                } catch (n) {
                    return !1
                } finally {
                    this.close()
                }
            }
            ,
            this.init = function(t) {
                if (t) {
                    var n = t.pageWidth || 0
                      , r = _self.charWidthOfPageWidth(n) || this.width()
                      , e = {
                        pageWidth: n,
                        charWidth: r,
                        cmdModel: t.cmdModel,
                        orderType: t.orderType
                    };
                    t.font && (e.font = utils.base64Decode(t.font)),
                    this.set(e)
                }
                var i = a.init();
                return c = !1,
                l = !1,
                o = "L",
                u = "B",
                f = "CHW",
                i.success
            }
            ,
            this.unknown = function() {
                return a.unknown ? a.unknown() : !1
            }
            ,
            this.pageEnd = function(t) {
                a.pageEnd && a.pageEnd(t)
            }
            ,
            this.cmd = function(t, r) {
                for (var i = null !== r && void 0 != r ? n : e, s = i(t), o = 0, u = s.length; u > o; o++)
                    a.cmd(s[o], r);
                return this
            }
            ,
            this.pt = function(t, n) {
                return this.cmd(n),
                !String.empty(t) && (a.data(t),
                c = !1),
                this
            }
            ,
            this.ptf = function(t) {
                var n = -1
                  , r = Array.clone(arguments)
                  , e = r.length;
                r.push(function(t, r) {
                    n = Math.max(n, t)
                });
                var i = String.format.apply(null, r);
                return this.pt(i, e - 1 > n ? r[e - 1] : void 0)
            }
            ,
            this.ptl = function(t, n) {
                return this.pt(t, n),
                this.cmd("PRINT")
            }
            ,
            this.ptfl = function(t) {
                return this.ptf.apply(this, arguments),
                this.ptl()
            }
            ,
            this.pts = function(t, n, r) {
                n || (n = this.width()),
                1 > n && (n = parseInt(this.width() * n)),
                "object" != typeof t && (t = {
                    "char": (t || "-").toString(),
                    text: "",
                    align: "C"
                });
                var e = t["char"] || "-"
                  , i = t.text || ""
                  , a = t.align || "C";
                if (i && i.length) {
                    var o = i.width();
                    o >= n ? s = i : "L" == a ? s = i.fill(n, e) : "R" == a ? s = i.fill(-n, e) : s = i.fill(-((n - o) / 2 + o), e).fill(n, e)
                } else
                    s = "".fill(n, e);
                return this.pt(s, r)
            }
            ,
            this.ptsl = function(t, n, r) {
                return this.pts(t, n, r),
                c = !0,
                this.ptl()
            }
            ,
            this.ptsli = function(t, n, r) {
                return c || this.ptsl(t, n, r),
                this
            }
            ,
            this.ptqc = function(t, n) {
                return t || (t = ""),
                n || (n = 5),
                n = Math.min(Math.max(1, n), 16),
                t.length > 124 && (t = t.substr(0, 124)),
                this.cmd("QC_SIZE", n),
                this.cmd("QC_LEN", t.length),
                this.pt(t),
                this.cmd("QC_PRINT"),
                this
            }
            ,
            this.cut = function() {
                this.cmd("CUT")
            }
        }
        function _getUdVpids() {
            return _udVpids || (_udVpids = {},
            $(_pt.getUserDefineUsbPrinterFlags()).each(function() {
                _udVpids[this.vpid.toUpperCase()] = this
            })),
            _udVpids
        }
        function _isUsbPrinter(t, n) {
            var r = _flagToKey(n)
              , e = _getUdVpids()
              , i = e[r];
            return i && (String.empty(i.service) || i.service.toLowerCase() == t) ? (!_allProps[r] && (_allProps[r] = {}),
            !String.empty(i.name) && (_allProps[r].name = i.name),
            !0) : _self.containts(n) && t && t.indexOf("libusb") >= 0 || "usbprint" == t
        }
        function _refresh() {
            var t = {}
              , n = _pt && _pt.getUsbDevices();
            n && n.success && $(n.devices).each(function(n, r) {
                var e = (r.infos.SERVICE || "").toLowerCase()
                  , i = {
                    vid: r.vid,
                    pid: r.pid
                };
                if (i.toString = function() {
                    return _flagToKey(i)
                }
                ,
                _isUsbPrinter(e, i)) {
                    var s, a = _all ? _all[r.key] : null, o = r.init;
                    a || (a = new _WmPrinterWrapper(r),
                    r.init = function() {
                        var t = o ? o.call(r, _self.getCmd(i, "INIT"), 2e3) : r.cmd("INIT");
                        return t && t.success && r.cmd("ENCODING", "chs"),
                        t
                    }
                    ,
                    r.set = function(t) {
                        s = t
                    }
                    ,
                    r.cmd = function(t, n) {
                        var e = _self.getCmd(i, t, n, s && s.cmdModel);
                        return !String.empty(e) && r.write(e)
                    }
                    ,
                    r.data = function(t) {
                        return !String.empty(t) && r.write(t)
                    }
                    ,
                    r.prop = function(t) {
                        return _self.getProp(i, t)
                    }
                    ,
                    r.flag = function() {
                        return i
                    }
                    ,
                    r.unknown = function() {
                        return !_self.containts(i)
                    }
                    ,
                    r.pageEnd = function(t) {
                        t = t || 4;
                        for (var n = 0, r = Math.max(0, t - 3); t > n; n++)
                            n == r ? a.ptsl("  .      ") : a.ptl();
                        a.cmd("CUT")
                    }
                    ),
                    t[a.key()] = a
                }
            });
            var r = _pt && _pt.getGdiPrinters();
            r && r.success && $(r.printers).each(function(n, r) {
                try {
                    r.key = _appInfo && _appInfo.code > 32 ? decodeURIComponent(r.key.replace(/\+/g, " ")) : r.key
                } catch (e) {}
                utils.allASCII(r.key) || (r.key = utils.base64Encode(r.key));
                var i = _all ? _all[r.key] : null;
                i || (i = new _WmPrinterWrapper(r),
                r.prop = function(t) {
                    switch (t) {
                    case "name":
                        return r.name || "";
                    case "width":
                        return 32
                    }
                    return void 0
                }
                ,
                r.infos.name || (r.infos.name = this.name),
                r.flag = function() {
                    return null
                }
                ,
                r.pageEnd = function() {
                    i.cmd("CUT")
                }
                ),
                t[i.key()] = i
            }),
            _all = t
        }
        function _allPrinters(t) {
            return (!_all || t) && _refresh(),
            _all
        }
        function _first(t, n) {
            var r;
            return $(t).each(function(t, e) {
                return n.call(e, t, e) ? (r = e,
                !1) : void 0
            }),
            r
        }
        function _findDefaultPinter(t) {
            var n = _first(t, function(t, n) {
                return "usb" == n.type() && n.test()
            });
            if (n)
                return n;
            var r = _pt && _pt.getDefaultPrinter()
              , n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.name() == r && n.test()
            });
            if (n)
                return n;
            var n = _first(t, function(t, n) {
                return "gdi" == n.type() && n.test()
            });
            return n
        }
        function _char(t) {
            return String.fromCharCode([parseInt(t)])
        }
        function _charOfEncoding(t) {
            var n = {
                chs: 15
            }
              , r = n[t];
            return void 0 === r && (r = 15),
            _char(r)
        }
        function _flagToKey(t) {
            return t.vid.toString(16).fill(-4, "0").toUpperCase() + "-" + t.pid.toString(16).fill(-4, "0").toUpperCase()
        }
        var _all = null, _self = this, _udVpids;
        this.refresh = _refresh,
        this.getDefaultPrinter = function(t) {
            return _findDefaultPinter(this.allPrinters(t))
        }
        ,
        this.getPrinters = function(t, n) {
            var r = this.settings
              , e = r.getSettings(t, !0);
            !e.useModel && "-1" != t && (e = r.getSettings("-1", !0),
            t = "-1");
            var i = []
              , s = this.allPrinters(n);
            if (n && _refresh(),
            0 == e.model) {
                var a = _findDefaultPinter(s);
                a && i.push(a)
            } else
                $(s).each(function(n, e) {
                    var s = r.getPrinterSetting(t, e.key(), !0);
                    s && s.enable && i.push(e)
                });
            return i
        }
        ,
        this.anyPrinter = function(t) {
            var n = _allPrinters(t)
              , r = null;
            for (var e in n) {
                var i = n[e];
                if (i.test()) {
                    if (_self.containts(i.flag()))
                        return i;
                    r || (r = i)
                }
            }
            return r
        }
        ,
        this.allPrinters = function(t) {
            var n = []
              , r = _allPrinters(t);
            for (var e in r)
                n.push(r[e]);
            return n
        }
        ,
        this.allCmdModels = function() {
            var t = [];
            for (var n in _allProps) {
                var r = _allProps[n];
                r.title && (r.name = n,
                t.push(r))
            }
            return t
        }
        ,
        this.settings = new function() {
            function t(t) {
                try {
                    return JSON.parse(t)
                } catch (n) {
                    return null
                }
            }
            function n(t) {
                return JSON.parse(JSON.stringify(t))
            }
            function r(t) {
                for (var n in t)
                    return t[k]
            }
            function e(t) {
                function n(n, r) {
                    void 0 === t[n] && (t[n] = r)
                }
                n("orderCount", 1),
                n("orderInterval", 1),
                n("inshopCount", 1),
                n("inshopInterval", 1),
                n("inshopAutoPrint", !0),
                n("pageWidth", 0),
                n("cmdModel", "default"),
                n("orderType", "default")
            }
            function i() {
                if (!s) {
                    var i, o = _sys && _sys.getStorage(a);
                    if (!o || !(i = t(o))) {
                        var u = {};
                        $(_pt && _pt.allPrinterSettings()).each(function() {
                            u[this.id] = this
                        }),
                        i = {
                            "-1": {
                                list: u || {},
                                model: _pt && _pt.getPrinterModel(),
                                useModel: 0
                            }
                        },
                        _sys && _sys.setStorage(a, JSON.stringify(i))
                    }
                    i[-1] || (i[-1] = n(r(i) || {
                        "-1": {
                            list: {},
                            model: 0,
                            useModel: 0
                        }
                    })),
                    $(i).each(function(t) {
                        $(this.list).each(function() {
                            e(this)
                        })
                    }),
                    s = i
                }
                return s
            }
            var s, a = "printer_settings";
            this.allSettings = function() {
                return i()
            }
            ,
            this.getSettings = function(t, r) {
                var e = i()
                  , s = e[t];
                return !s && r && (e[t] = s = n(e[-1])),
                s
            }
            ,
            this.newDefPrintSetting = function(t) {
                var n = {
                    id: t,
                    enable: !1
                };
                return e(n),
                n
            }
            ,
            this.getPrinterSetting = function(t, n, r) {
                var e = this.getSettings(t, r);
                if (e) {
                    var i = e.list[n];
                    return !i && r && (e.list[n] = i = this.newDefPrintSetting(n)),
                    i
                }
                return null
            }
            ,
            this.save = function() {
                if (s) {
                    _sys && _sys.setStorage(a, JSON.stringify(s));
                    var t = this.getSettings("-1");
                    t && ($(t.list).each(function() {
                        _pt.setPrinterSetting(this.id, this)
                    }),
                    _pt.setPrinterModel(t.model))
                }
            }
            ,
            this.reload = function() {
                s = null
            }
        }
        ;
        var _allProps = {
            "default": {
                title: "默认",
                commands: {
                    ENCODING: function(t) {
                        return "R" + _char(t)
                    },
                    NOP_STOP: function(t) {
                        return "c4" + _char(void 0 === t ? 1 : t)
                    },
                    INIT: "@",
                    PRINT: "\n",
                    L: "a\x00",
                    C: "a",
                    R: "a",
                    DH: "!",
                    DW: "! ",
                    DHW: "!0",
                    CHW: "!\x00",
                    CUT: "i",
                    QC_SIZE: function(t) {
                        return "(k\x001C" + _char(t)
                    },
                    QC_LEN: function(t) {
                        return "(k" + _char(t + 3 & 255) + _char(t + 3 >> 8) + "1P0"
                    },
                    QC_PRINT: "(k\x001Q0"
                },
                width: 32,
                name: "USB打印机",
                endsWith: "\x00"
            },
            "default-2": {
                title: "方案二",
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                }
            },
            "067B-2305": {
                commands: {
                    ENCODING: "",
                    NOP_STOP: "",
                    L: "",
                    C: "",
                    R: ""
                },
                name: "爱宝打印机",
                endsWith: null
            },
            "0416-5011": {
                name: "浩顺打印机"
            },
            "6868-0300": {
                name: "佳博打印机"
            },
            "1A86-7584": {
                name: "佳博打印机"
            },
            "1CBE-0002": {
                commands: {
                    DH: "!",
                    DW: "!",
                    DHW: "!"
                },
                name: "佳博打印机"
            }
        }
          , _defProp = _allProps["default"];
        if (this.containts = function(t) {
            return t && !!_allProps[_flagToKey(t)]
        }
        ,
        this.getProp = function(t, n, r) {
            var e = r && "default" != r && _allProps[r] ? r : t ? _flagToKey(t) : "default"
              , i = _allProps[e] || _defProp;
            return n ? void 0 !== i[n] ? i[n] : _defProp[n] : i
        }
        ,
        this.getCmd = function(t, n, r, e) {
            var i = this.getProp(t, "commands", e)[n]
              , s = void 0 !== i ? i : this.getProp(null, "commands")[n];
            if (s = "function" == typeof s ? s(r) : s,
            !String.empty(s)) {
                var a = this.getProp(t, "endsWith");
                "string" == typeof a && (s += a)
            }
            return s
        }
        ,
        this.printTestPage = function() {
            var t = printer.getPrinter(!0);
            if (!t)
                return void alert("当前尚未连接打印机");
            if (!t.open())
                return void alert("打印机连接失败");
            try {
                t.init(),
                t.ptl("美团打印机测试页", "DHW"),
                t.close()
            } catch (n) {
                alert(n)
            }
        }
        ,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
        ,
        _sys && _sys.readFile)
            try {
                eval(_sys.readFile("printer.js"))
            } catch (e) {}
    }
    var _nt = window.wmNetworkApi
      , _sys = window.wmSystemApi
      , _pt = window.wmPrinterApi
      , _appInfo = _sys && _sys.getAppInfo && _sys.getAppInfo();
    return String.prototype.width = function() {
        for (var t = this, n = 0, r = 0, e = t.length; e > r; r++) {
            var i = t.charCodeAt(r);
            n += i >= 256 ? 2 : 1
        }
        return n
    }
    ,
    String.prototype.fill = function(t, n) {
        var r = this
          , e = r.width();
        if (!t || e >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > e; )
                if (t >= e + i)
                    r += n,
                    e += i;
                else
                    for (var s = 0, a = n.length; a > s; s++) {
                        var o = n.charAt(s)
                          , u = o.width();
                        if (!(t >= e + u))
                            break t;
                        r += o,
                        e += u
                    }
        } else
            r = "".fill(-t - e, n) + r;
        return r
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , r = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var e in t)
            t[e] && (n += r + e + "=" + t[e],
            r = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone(arguments)
          , r = n[n.length - 1]
          , e = r instanceof Function ? (n.length--,
        r) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, r, i, s, a) {
            function o(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var u = o(n[r = parseInt(r) + 1], "").toString();
            return a && (u = u.fill(parseInt((i || "") + a), s ? s : " ")),
            e(r, a),
            u
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], r = 0, e = t.length; e > r; r++)
            n.push(t[r]);
        return n
    }
    ,
    Array.join = function(t, n, r) {
        var e = "";
        for (var i in t) {
            var s = t[i];
            r && !String.empty(s) && (e.length && (e += n),
            e += s)
        }
        return e
    }
    ,
    new WmPrinter
});
define('module/printer', ["util/code", "module/printer_33"], function(t, n) {
    function e() {
        function t(t, n) {
            var e;
            return $(t).each(function(t, r) {
                return n.call(r, t, r) ? (e = r,
                !1) : void 0
            }),
            e
        }
        function n(n) {
            var e = t(n, function(t, n) {
                return "usb" == n.type
            });
            if (e)
                return e;
            var i = r.getDefaultPrinter()
              , o = i && i.name
              , e = t(n, function(t, n) {
                return "printer" == n.type && n.name == o
            });
            if (e)
                return e;
            var e = t(n, function(t, n) {
                return "printer" == n.type
            });
            return e
        }
        this.refresh = function() {}
        ,
        this.getDefaultPrinter = function(t) {
            return n(this.allPrinters())
        }
        ,
        this.getPrinters = function(t, e) {
            var r = this.settings
              , i = r.getSettings(t, !0);
            !i.useModel && "-1" != t && (i = r.getSettings("-1", !0),
            t = "-1");
            var o = []
              , s = this.allPrinters();
            if (0 == i.model) {
                var u = n(s);
                u && o.push(u)
            } else
                $(s).each(function(n, e) {
                    var i = r.getPrinterSetting(t, e.id, !0);
                    i && i.enable && o.push(e)
                });
            return o
        }
        ,
        this.allPrinters = function() {
            return wmPrinterApi.getAllPrinters()
        }
        ,
        this.settings = new s,
        this.charWidthOfPageWidth = function(t) {
            t = parseInt(t);
            var n = 58 / 32;
            return parseInt(t / n)
        }
    }
    var r = window.wmPrinterApi
      , i = window.wmSystemApi
      , o = (window.wmNetworkApi,
    i && i.getAppInfo && i.getAppInfo());
    if (o && o.code < 4e3)
        return n;
    var s = function() {
        function t() {
            this._settings = null,
            this._settingsKey = "printer_settings"
        }
        var n = window.wmPrinterApi
          , e = window.wmSystemApi;
        window.wmNetworkApi;
        return t.prototype.jsonParse = function(t) {
            try {
                return JSON.parse(t)
            } catch (n) {
                return null
            }
        }
        ,
        t.prototype.clone = function(t) {
            return JSON.parse(JSON.stringify(t))
        }
        ,
        t.prototype._setPrintDef = function(t) {
            function n(n, e) {
                void 0 === t[n] && (t[n] = e)
            }
            n("orderCount", 1),
            n("orderInterval", 1),
            n("inshopCount", 1),
            n("inshopInterval", 1),
            n("inshopAutoPrint", !0),
            n("pageWidth", 0),
            n("cmdModel", "default"),
            n("orderType", "default")
        }
        ,
        t.prototype._getSettings = function() {
            if (!this._settings) {
                var t = e.getStorage(this._settingsKey) || ""
                  , n = this.jsonParse(t);
                (0 == t.length || null == n) && (n = {
                    "-1": this.createSettingPoi()
                },
                e.setStorage(this._settingsKey, JSON.stringify(n))),
                void 0 == n[-1] && (n[-1] = this.createSettingPoi()),
                this._settings = n
            }
            return this._settings
        }
        ,
        t.prototype.createSettingPoi = function() {
            return {
                list: {},
                model: 0,
                useModel: 0
            }
        }
        ,
        t.prototype.allSettings = function() {
            return this._getSettings()
        }
        ,
        t.prototype.getSettings = function(t, n) {
            void 0 === n && (n = !1);
            var e = this._getSettings()
              , r = e[t];
            return void 0 == r && n && (r = this.clone(e[-1]),
            e[t] = r),
            r
        }
        ,
        t.prototype.newDefPrintSetting = function(t) {
            var n = {
                id: t,
                enable: !1
            };
            return this._setPrintDef(n),
            n
        }
        ,
        t.prototype.getPrinterSetting = function(t, n, e) {
            var r = this.getSettings(t, e);
            if (r) {
                var i = r.list[n];
                return !i && e && (i = this.newDefPrintSetting(n),
                r.list[n] = i),
                i
            }
            return null
        }
        ,
        t.prototype.save = function() {
            if (this._settings) {
                e.setStorage(this._settingsKey, JSON.stringify(this._settings));
                var t = this.getSettings("-1");
                t && n.setPrinterModel(t.model)
            }
        }
        ,
        t.prototype.reload = function() {
            this._settings = null
        }
        ,
        t
    }();
    return String.prototype.width = function() {
        for (var t = this, n = 0, e = 0, r = t.length; r > e; e++) {
            var i = t.charCodeAt(e);
            n += i >= 256 ? 2 : 1
        }
        return "".indexOf,
        n
    }
    ,
    String.prototype.fill = function(t, n) {
        var e = this
          , r = e.width();
        if (!t || r >= Math.abs(t))
            return this;
        if (n || (n = " "),
        t > 0) {
            var i = n.width();
            t: for (var i = n.width(); t > r; )
                if (t >= r + i)
                    e += n,
                    r += i;
                else
                    for (var o = 0, s = n.length; s > o; o++) {
                        var u = n.charAt(o)
                          , a = u.width();
                        if (!(t >= r + a))
                            break t;
                        e += u,
                        r += a
                    }
        } else
            e = "".fill(-t - r, n) + e;
        return e
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/gim, "")
    }
    ,
    String.prototype.appendUrlArgs = function(t) {
        var n = this
          , e = n && n.indexOf("?") < 0 ? "?" : "&";
        for (var r in t)
            t[r] && (n += e + r + "=" + t[r],
            e = "&");
        return n
    }
    ,
    String.format = function(t) {
        var n = Array.clone([].slice.call(arguments))
          , e = n[n.length - 1]
          , r = e instanceof Function ? (n.length--,
        e) : function() {}
          , i = t.replace(/\{(\d+)(?::(-)?([^1-9])?(\d+))?\}/gim, function(t, e, i, o, s) {
            function u(t, n) {
                return void 0 === t || null === t ? n : t
            }
            var a = u(n[e = parseInt(e) + 1], "").toString();
            return s && (a = a.fill(parseInt((i || "") + s), o ? o : " ")),
            r(e, s),
            a
        });
        return i
    }
    ,
    String.empty = function(t) {
        return null === t || void 0 === t || "string" == typeof t && 0 == t.length
    }
    ,
    Array.clone = function(t) {
        for (var n = [], e = 0, r = t.length; r > e; e++)
            n.push(t[e]);
        return n
    }
    ,
    Array.join = function(t, n, e) {
        var r = "";
        for (var i in t) {
            var o = t[i];
            e && !String.empty(o) && (r.length && (r += n),
            r += o)
        }
        return r
    }
    ,
    new e
});
require.config({
    baseUrl: VM.STATIC_URL,
    waitSeconds: 0
}),
define('util/utils', ["module/cookie"], function(e) {
    "use strict";
    return {
        urlParams: function(e) {
            e = e || window.location.search;
            var t = {}
              , r = new RegExp("([^?=&]+)(=([^&]*))?","g");
            return e && e.replace(r, function(e, r, o, n) {
                t[r] = n
            }),
            t
        },
        getTime: function(e, t) {
            var r = t ? new Date(1e3 * t) : new Date
              , o = {
                "M+": r.getMonth() + 1,
                "d+": r.getDate(),
                "h+": r.getHours(),
                "m+": r.getMinutes(),
                "s+": r.getSeconds(),
                "q+": Math.floor((r.getMonth() + 3) / 3),
                S: r.getMilliseconds()
            };
            /(y+)/.test(e) && (e = e.replace(RegExp.$1, (r.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (var n in o)
                new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? o[n] : ("00" + o[n]).substr(("" + o[n]).length)));
            return e
        },
        changeDate: function(e) {
            var t = new Date;
            t.setDate(t.getDate() + 1 - 1 * e);
            var r = t.getFullYear()
              , o = t.getMonth() + 1
              , n = t.getDate();
            return 10 > o && (o = "0" + o),
            10 > n && (n = "0" + n),
            r + "-" + o + "-" + n
        },
        getOffsetDays: function(e, t) {
            var r = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}( \\d{1,2}:\\d{1,2}:\\d{1,2})?$");
            if (!r.test(e) || !r.test(t))
                return null;
            var o = new RegExp("^\\d{4}-\\d{1,2}-\\d{1,2}$");
            o.test(e) && (e += " 00:00:00"),
            o.test(t) && (t += " 23:59:59");
            var n = new Date(e)
              , i = new Date(t);
            if (isNaN(n)) {
                var a = e.split(/[- :]/)
                  , c = t.split(/[- :]/);
                n = new Date(a[0],a[1] - 1,a[2],a[3],a[4],a[5]),
                i = new Date(c[0],c[1] - 1,c[2],c[3],c[4],c[5])
            }
            var s = n.getTime()
              , l = i.getTime();
            return s > l ? -1 : (l - s + 1e3) / 864e5
        },
        formatSecond: function(e, t, r) {
            if (0 >= e)
                return '<strong class="time">00</strong>:<strong class="time">00</strong>:<strong class="time">00</strong>';
            if (r) {
                var o = Math.floor(e / 86400)
                  , n = o > 0 ? '<strong class="time">' + o + "</strong>" : '<strong class="time">00</strong>';
                e %= 86400
            }
            var i = Math.floor(e / 3600)
              , a = i > 0 ? '<strong class="time">' + (i >= 10 ? i : "0" + i) + "</strong>" : '<strong class="time">00</strong>';
            e %= 3600;
            var c = Math.floor(e / 60)
              , s = c > 0 ? '<strong class="time">' + (c >= 10 ? c : "0" + c) + "</strong>" : '<strong class="time">00</strong>';
            e %= 60;
            var l = e > 0 ? '<strong class="time">' + (e >= 10 ? e : "0" + e) + "</strong>" : '<strong class="time">00</strong>';
            return t ? r ? n + "天" + a + "小时" + s + "分钟" + l + "秒" : a + "小时" + s + "分钟" + l + "秒" : r ? n + ":" + a + ":" + s + ":" + l : a + ":" + s + ":" + l
        },
        countDown: function(e) {
            var t = this
              , r = new Date
              , o = 0
              , n = !1
              , i = function() {
                if (!document.body.contains || document.body.contains(e.jQelem[0])) {
                    var a = Math.floor((new Date - r) / 1e3);
                    e.countStyle ? (o = e.time - a,
                    e.midTime && o <= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0))) : (o = e.time + a,
                    e.midTime && o >= e.midTime && "function" == typeof e.midCb && (n || (e.midCb(),
                    n = !0)));
                    var c = t.formatSecond(0 > o ? 0 : o, e.chn, e.needDay);
                    return e.jQelem.html(e.txt.replace("{time}", c)),
                    0 > o ? (o = 0,
                    e.jQelem.trigger("endCount"),
                    void ("function" == typeof e.cb && e.cb())) : void setTimeout(i, 1e3)
                }
            };
            i()
        },
        setStorage: function(e, t) {
            var r = window.wmSystemApi;
            r ? (t = String(t),
            r.setStorage(e, encodeURIComponent(t))) : localStorage.setItem(e, t)
        },
        getStorage: function(e) {
            var t, r = window.wmSystemApi;
            return r ? (t = r.getStorage(e),
            t && (t = decodeURIComponent(r.getStorage(e)))) : t = localStorage.getItem(e),
            t
        },
        removeStorage: function(e) {
            var t = window.wmSystemApi;
            t ? t.setStorage(e, "") : localStorage.removeItem(e)
        },
        replaceChinese: function(e) {
            return e.replace(/[^\x00-\xff]/g, "")
        },
        checkTag: function(e) {
            return /<|>/.test(e)
        },
        showTip: function(e, t) {
            e || (e = "未知错误"),
            $().inform({
                type: t ? t : "warn",
                title: e,
                delay: e.length < 10 ? 2e3 : 200 * e.length,
                size: "large"
            })
        },
        filterShowString: function(e) {
            return e.replace(/[<>"&]/g, function(e) {
                switch (e) {
                case "<":
                    return "&lt;";
                case ">":
                    return "&gt;";
                case '"':
                    return "&quot;";
                case "&":
                    return "&amp;";
                default:
                    return e
                }
            })
        },
        ifAutoAccept: function(e) {
            var t = localStorage.getItem("autoAcceptWmPoiList") || "";
            if (!t)
                return !1;
            for (var r = t.split(","), o = 0, n = r.length; n > o; o++)
                if (e == r[o])
                    return !0;
            return !1
        },
        getGraphicPrintConfig: function(t) {
            try {
                t = t || e.getCookie("wmPoiId");
                var r = JSON.parse(localStorage.getItem("GraphicPrintAfterOrderAcceptConfig") || "{}");
                return r[t] || {}
            } catch (o) {}
            return {}
        },
        graphicPrintAfterOrderConfirm: function(e, t, r) {
            var o = this.getGraphicPrintConfig(t);
            if ("" + o.auto == "1") {
                var n = 0 === e.code
                  , i = "object" == typeof e.data && 1 === e.data.updateStatus;
                n && i ? (this.graphicPrint(t, r, o),
                this.reportMC("b_shangou_online_e_46grpax8_mc", "c_shangou_online_e_vbzrhmnc")) : (this.reportMC("b_shangou_online_e_28cu7gpz_mc", "c_shangou_online_e_vbzrhmnc"),
                this.ajaxWarn("接单失败", {
                    tag1: n ? "接口调用成功" : "接口调用失败"
                }, "utils.graphicPrintAfterOrderConfirm"))
            }
        },
        graphicPrint: function(e, t, r) {
            window.nw && (console.log("接单后自动A4打印"),
            window.nw.Window.open(location.protocol + "//" + location.host + "/page/printer/graphic/template?orderId=" + t + "&wmPoiId=" + e + "&copies=" + r.copies + "&printer=" + encodeURIComponent(r.printer) + "&mode=auto&callFrom=pcapi", {
                show: !1
            }))
        },
        multiply: function(e, t) {
            var r = 0
              , o = e.toString()
              , n = t.toString();
            try {
                r += o.split(".")[1].length
            } catch (i) {}
            try {
                r += n.split(".")[1].length
            } catch (i) {}
            return Number(o.replace(".", "")) * Number(n.replace(".", "")) / Math.pow(10, r)
        },
        getVerifyCode: function(e, t, r) {
            var o = this;
            e.off("endCount").on("endCount", function() {
                e.text("免费获取手机动态码"),
                e.removeAttr("disabled")
            }),
            r(function() {
                e.attr("disabled", !0),
                o.countDown({
                    countStyle: !0,
                    time: 60,
                    jQelem: e,
                    txt: t
                })
            })
        },
        reportLogData: function(e, t) {
            var r = {
                nm: "mge",
                val: {
                    act: e,
                    lab: t
                }
            };
            Analytics("event", r)
        },
        changeImgUrl: function(e, t) {
            return e.indexOf("/0.0.o") > -1 && (e = e.replace("/0.0.o", "")),
            localStorage.getItem("hasSupportWebp") && (e += ".webp"),
            e += "@" + t + "w"
        },
        getPoiNickName: function() {
            var t = e.getCookie("wmPoiId")
              , r = this.getStorage("poiNickName" + t);
            if (!r) {
                var o = e.getCookie("wmPoiName") || localStorage.getItem("wmPoiName")
                  , n = e.getCookie("device_uuid").substr(-2);
                r = (-1 == t ? "总店" : o) + "客服" + n
            }
            return r
        },
        isOrNewThanChrome70: function() {
            var e = navigator.userAgent
              , t = Number((e.match(/Chrome\/(\d+)\./) || [])[1]);
            return t >= 70
        }(),
        reportPV: function(t, r, o) {
            if (!t)
                return void console.error("pv未填写cid");
            var n = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, r)
            }
              , i = $.extend({}, {
                uid: ""
            }, o);
            try {
                LXAnalytics("pageView", n, i, t)
            } catch (a) {}
        },
        reportMV: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mv未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleView", t, a, s)
            } catch (l) {}
        },
        reportMVList: function(t, r, o, n) {
            if (!t)
                return void console.error("mv未填写bid");
            var i = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            }
              , a = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleViewList", t, i, a)
            } catch (c) {}
        },
        reportMC: function(t, r, o, n, i) {
            if (!t)
                return void console.error("mc未填写bid");
            var a = {
                poi_id: e.getCookie("wmPoiId"),
                custom: $.extend({}, o)
            };
            if (i)
                for (var c in i)
                    a[c] = i[c];
            var s = $.extend({
                cid: r
            }, n);
            try {
                LXAnalytics("moduleClick", t, a, s)
            } catch (l) {}
        },
        reportMC_SG: {
            setCid: function(t) {
                return t ? void e.setCookie("LX_SC_CONSTANT", t) : void console.error("mc未填写cid")
            },
            report: function(t, r, o) {
                if (!t)
                    return void console.error("mc未填写bid");
                r = r || {};
                var n = {
                    poi_id: e.getCookie("wmPoiId"),
                    order_id: r.order_id || ""
                };
                n = $.extend({}, n, r);
                var i = {
                    cid: o || e.getCookie("LX_SC_CONSTANT")
                };
                try {
                    LXAnalytics("moduleClick", t, n, i)
                } catch (a) {}
            }
        },
        addJsError: function(t, r) {
            console.warn(t),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.wmPoiId = e.getCookie("wmPoiId"),
            r.acctId = e.getCookie("acctId"),
            window.Owl.addError(t, {
                level: "warn",
                combo: !1,
                tags: r
            }))
        },
        ajaxWarn: function(t, r, o) {
            console.warn(t, o),
            window.Owl && (r && "object" == typeof r || (r = {}),
            r.userId = e.getCookie("wmPoiId"),
            window.Owl.addError("string" == typeof o ? {
                name: t,
                msg: o
            } : t, {
                level: "warn",
                category: "ajaxError",
                tags: r
            }))
        },
        versionCompare: function(e, t) {
            function r(e, t) {
                return "number" != typeof e && (e = 0),
                "number" != typeof t && (t = 0),
                e > t ? n : t > e ? i : a
            }
            var o, n = 1, i = -1, a = 0, c = String(e).split(".").map(function(e) {
                return parseInt(e)
            }), s = String(t).split(".").map(function(e) {
                return parseInt(e)
            }), l = Math.max(c.length, s.length);
            if (void 0 == e || void 0 == t)
                throw new Error;
            if (0 == e.length && 0 == t.length)
                return a;
            if (0 == e.length)
                return i;
            if (0 == t.length)
                return n;
            for (var u = 0; l > u && (o = r(c[u], s[u]),
            o == a); u++)
                ;
            return o
        },
        getStaticVersion: function(e) {
            var t;
            if ("iframe" === e) {
                if (window.sameSrc) {
                    var r = window.frames[0];
                    try {
                        t = r.VM
                    } catch (o) {
                        console.error("frame blocked")
                    }
                }
            } else
                t = window.VM;
            var n = (t || {}).STATIC_URL || ""
              , i = n.indexOf("/static");
            return n.slice(i + 8, i + 16) || ""
        },
        customReport: function(e, t) {
            if (Owl && Owl.metricManager) {
                var r = Owl.metricManager;
                t && r.setTags(t),
                r.setMetric(e, 1),
                r.report()
            }
        },
        detectCrash: function() {
            if (window.localStorage && window.performance && window.performance.memory) {
                var e = "crash"
                  , t = this
                  , r = t.getStorage(e)
                  , o = window.performance.memory;
                r && t.customReport(e, JSON.parse(r)),
                window.crash_heartbeat = function() {
                    r = {
                        memory: Math.min(Math.ceil(o.usedJSHeapSize / (o.totalJSHeapSize || 1) * 100), 100),
                        hash: location.hash.split("?")[0].replace(/\W+/g, "|")
                    },
                    t.setStorage(e, JSON.stringify(r))
                }
                ,
                window.addEventListener("beforeunload", function() {
                    t.removeStorage(e)
                }, !1)
            }
        },
        url2Cid: function() {
            var e = {
                "/v2/order/pre": "c_bd35rzn5",
                "/v2/order/reminder": "c_v48si7wf",
                "/v2/order/refund/unprocessed": "c_o1skm0jl",
                "/v2/order/change_address": "c_waimai_7hhk8b99",
                "/v2/order/history": "c_nehoktcu",
                "/v2/order/deliveryException": "c_pxn9pjfg",
                "/v2/order/compensate/unprocessed": "c_kfuonr1m"
            }
              , t = location.hash.split("?")[0].slice(0) || location.pathname;
            return e[t] || "c_nehoktcu"
        },
        _debounce: function(e, t) {
            var r = null;
            return function() {
                var o = this
                  , n = arguments;
                clearTimeout(r),
                r = setTimeout(function() {
                    e.apply(o, n)
                }, t)
            }
        },
        getLocalAllPoiList: function() {
            return "object" == typeof CommConstants && CommConstants.waimai_e_poi_list ? CommConstants.waimai_e_poi_list : JSON.parse(localStorage.getItem("localAllPoiList")) || []
        },
        ownRightReportBid: {
            beforeOrder: "b_shangou_online_e_v9x42u5d_mv",
            orderDetail: "b_shangou_online_e_fho0spxq_mv",
            orderDetailClick: "b_shangou_online_e_fho0spxq_mc",
            beforeOrdered: "b_shangou_online_e_1pi68e7q_mv",
            ordered: "b_shangou_online_e_sm8oxu53_mv"
        }
    }
});
require.config({
    baseUrl: VM.STATIC_URL
}),
define('page/common_report', ["module/cookie", "module/printer", "util/utils"], function(e, t, o) {
    function i(e) {
        return "function" == typeof e.name ? e.name() : e.name
    }
    function r(e) {
        return "function" == typeof e.type ? e.type() : e.type
    }
    function n() {
        var e = Number(o.getStorage(s));
        if (e !== u) {
            var n = {
                event: "CommonInfo",
                logLevel: "info",
                time: p.getTime(),
                acctId: f,
                wmPoiId: l
            }
              , a = {
                isInApp: d,
                ua: m,
                httpType: location.protocol.replace(/:$/g, ""),
                printers: []
            };
            if (n.data = a,
            d) {
                a.appInfo = {
                    appVersion: y,
                    appFullVersion: h
                },
                n.sysVer = S,
                a.systemInfo = {
                    release: S,
                    platform: k,
                    servicePack: C
                };
                var c = t.getPrinters(l, !0);
                c && c.length && (a.printers = c.map(function(e) {
                    return {
                        name: i(e),
                        type: r(e)
                    }
                }))
            }
            $.post("/v2/pc/report/log", {
                data: JSON.stringify([n])
            }).success(function() {
                o.setStorage(s, u)
            })
        }
    }
    function a() {
        var e = o.getStorage(c);
        try {
            r = JSON.parse(e) || {}
        } catch (t) {
            r = {}
        }
        if ("http:" === location.protocol) {
            if (r.time === u) {
                if (r.acctReport)
                    return;
                if (!f)
                    return
            }
            var i = {
                acctId: f,
                wmPoiId: w ? "-1" : l,
                token: g,
                uuid: I.substring(0, 100),
                deviceUuid: v.substring(0, 100),
                osInfo: JSON.stringify({
                    release: S,
                    platform: k,
                    servicePack: C
                }).substring(0, 256),
                version: y,
                subVersion: h.substring(0, 10),
                clientTime: Math.floor(p / 1e3),
                reportInfo: ""
            }
              , r = []
              , n = (window.ROOT || {}).checkUrl || ""
              , a = n ? n.split(",") : ["https://waimaie.meituan.com/static/62416314/imgs/logo.webp", "https://e.waimai.meituan.com/static/62416314/imgs/logo.webp"]
              , s = 0
              , m = function() {
                s === a.length && (i.reportInfo = JSON.stringify(r),
                $.post("/v2/pc/report/domain/info", i).success(function() {
                    o.setStorage(c, JSON.stringify({
                        time: u,
                        acctReport: !!f
                    }))
                }))
            }
              , d = function(e) {
                var t = document.createElement("a");
                t.href = e;
                var o = t.origin
                  , i = new Image;
                i.crossOrigin = "*",
                i.onload = function() {
                    s += 1,
                    r.push({
                        url: o,
                        result: 1,
                        error: ""
                    }),
                    m()
                }
                ,
                i.onerror = function(e) {
                    s += 1,
                    r.push({
                        url: o,
                        result: 0,
                        error: ""
                    }),
                    m()
                }
                ,
                i.src = e
            };
            a.forEach(d)
        }
    }
    var s = "commonInfoReportTime"
      , c = "networkInfoReportInfo"
      , m = navigator.userAgent
      , p = new Date
      , u = Math.floor(p / 864e5)
      , f = e.getCookie("acctId")
      , l = e.getCookie("wmPoiId")
      , g = e.getCookie("token")
      , d = !!CommConstants.IS_IN_APP && window.wmSystemApi && window.wmSystemApi.getSystemInfo
      , I = e.getCookie("uuid") || ""
      , v = e.getCookie("device_uuid") || ""
      , w = "1" === localStorage.getItem("isChain")
      , y = -1
      , h = ""
      , S = ""
      , k = ""
      , C = "";
    if (d) {
        var b = m.match(/waimai_e_pc_client\/([^\s]+)/);
        if (b)
            y = 4,
            h = b[1];
        else {
            var P = m.match(/MeituanWaimai\/([^\s]+)/);
            P && (y = 3,
            h = P[1])
        }
        var O = wmSystemApi.getSystemInfo();
        S = 3 === y ? O.majorVersion + "." + O.minorVersion : O.release,
        k = 3 === y ? O.platformId : O.platform,
        C = O.servicePackMajor
    }
    n(),
    a()
});

require.config({
    baseUrl: VM.STATIC_URL
}),
require(["module/root/head_nav", "module/root/left_nav", "module/root/push_schedule", "module/root/global_polling", "module/printer", "module/root/print_template", "module/cookie", "module/interface", "module/page_jump", "module/ajax_util", "module/bridge/bridge_platform", "widgets/global_poptip", "module/root/url_mapping", "widgets/get_poilist", "widgets/normal_dialog", "module/root/im", "util/utils", "module/download_newclient", "module/set", "module/root/account_role_permission", "widgets/sc_normal_dialog", "util/request", "module/root/deposit_global_modal", "page/common_report"], function(o, e, t, l, i, a, r, s, u, d, n, m, g, p, c, _, h, f, b, w, v, j, q) {
    "use strict";
    var D = /localhost/
      , P = /debug=/
      , R = "/health-static";
    (D.test(location.host) || P.test(location.search)) && (R = "https://shangoue.meituan.com/health-static");
    var T = R + "/sg_root.json?v=" + (new Date).getTime();
    j.get(T, function(o, e) {
        if ("success" === e) {
            var t = R + o["root.umd.js"];
            require.config({
                paths: {
                    sgRoot: t.replace(/\.js/, "")
                }
            }),
            require(["sgRoot"], function(o) {
                var e = {
                    printer: i,
                    cookie: r,
                    pageJump: u,
                    bridge: n,
                    globalPoptip: m,
                    getPoiList: p,
                    openDialog: c,
                    utils: h,
                    downloadNewClient: f,
                    set: b,
                    scDialog: v
                };
                o.passMethod(e),
                o.start()
            })
        }
    }),
    h.reportPV("c_shangou_online_e_22anofv7")
});
define("page/root", function() {});
