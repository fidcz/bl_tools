// ==UserScript==
// @name         美团替换页面和声音次数
// @namespace    mt_change
// @version      0.14
// @description  美团替换页面和声音次数0.14
// @author       fidcz
// @include      *yiyao.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        none
// @updateURL    https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js?download=true
// @downloadURL  https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js?download=true
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // 历史订单页面: https://yiyao.meituan.com/#/v2/order/history
    // 退款订单页面: https://yiyao.meituan.com/#/v2/order/refund/unprocessed
    // 催单订单页面: https://yiyao.meituan.com/#/v2/order/reminder
    console.log('mt_change ver:0.14');

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

        function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    function changeEle(id, loop, ogg){
        var ele = document.getElementById(id);
        //console.log(ele);
        if(ele == undefined){return;}
        //console.log('<div id="' + id + '" data-loop="' + loop + '" data-src="' + ogg + '"></div>');
        ele.setAttribute("data-loop", loop);
        ele.setAttribute("data-src", ogg);

        //ele.innerHTML='<div id="' + id + '" data-loop="' + loop + '" data-src="' + ogg + '"></div>';
    }
    console.log('Change Require');

    async function setLoop() {
        for(let i=0;i<=20;i++){
            //$("#refund-audio").attr("data-loop", "1");
            //$("#new-order-audio").attr("data-src", "newOrderx.ogg");
            //$("#reminder-audio").attr("data-loop", "1");
            changeEle("refund-audio", "1", "refundSound1.ogg");
            changeEle("reminder-audio", "1", "reminderSound1.ogg");
            await sleep(500);
        }
            console.log("Auto change end");
    }
    console.log("Start modify loop");

    window.onload = ()=>{
        changeEle("refund-audio", "1", "refundSound1.ogg");
        changeEle("reminder-audio", "1", "reminderSound1.ogg");
        setLoop();
    }


    // Your code here...
})();