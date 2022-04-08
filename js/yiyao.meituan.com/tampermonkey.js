// ==UserScript==
// @name         美团替换页面和声音次数
// @namespace    mt_change
// @version      0.11
// @description  美团替换页面和声音次数
// @author       fidcz
// @include      *yiyao.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        none
// @updateURL    https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js
// @downloadURL  https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js
// ==/UserScript==

(function() {
    'use strict';
    // 历史订单页面: https://yiyao.meituan.com/#/v2/order/history
    // 退款订单页面: https://yiyao.meituan.com/#/v2/order/refund/unprocessed
    // 催单订单页面: https://yiyao.meituan.com/#/v2/order/reminder

    const myJsUrl = 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com';
    const replaceJsUrl = [
        '/static/624ee951/js/page/root.js',
        '/static/624ee951/js/page/order/search.js',
        '/static/624ee951/js/page/order/reminder/order_reminder.js',
        '/static/624ee951/js/page/order/history.js',
        '/static/624ee951/js/page/order/refund/unprocessed.js'
        ]

    require = function(a,b,c,d){
        //console.log('myJs Req');
        //console.log(a,b,c,d);
        if (replaceJsUrl.includes(a[0])){
            console.log('FIND AND REPLACE!!!');
            a[0] = myJsUrl + a[0];
            // return;
        }
        requirejs(a,b,c,d);
    }
    require.config = function(a){
        //console.log('myJs Con')
        //console.log(a);
        requirejs.config(a);
    }

    window.onload = ()=>{
    }


    // Your code here...
})();