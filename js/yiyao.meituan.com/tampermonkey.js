// ==UserScript==
// @name         美团替换页面和声音次数
// @namespace    mt_change
// @version      0.24
// @description  美团替换页面和声音次数0.24
// @author       fidcz
// @include      *yiyao.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js
// @downloadURL  https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/tampermonkey.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // 历史订单页面: https://yiyao.meituan.com/#/v2/order/history
    // 退款订单页面: https://yiyao.meituan.com/#/v2/order/refund/unprocessed
    // 催单订单页面: https://yiyao.meituan.com/#/v2/order/reminder
    console.log('mt_change ver:0.24');


    // 使用本地网站上的version
    let reVer = /\/(\w{8})\/js/g.exec(document.head.textContent);
    if(reVer == null){
        reVer = /\/(\w{8})\/js/g.exec(document.head.innerText);
    }
    
    const localVer = GM_getValue('mt_js_ver');
    if(localVer == undefined && reVer != null){
        GM_setValue('mt_js_ver', reVer[1]);
    }else if(localVer != undefined && reVer == null){
        reVer = ['', localVer];
    }else if(localVer != undefined && reVer != null){
        if(localVer != reVer[1]){
            GM_setValue('mt_js_ver', reVer[1]);
        }
    }

    const jsVersion = reVer[1];
    // const jsVersion =  '628f3146';

    console.log('myJs: jsVer:'+jsVersion);

    const myJsUrl = 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com';
    const replaceJsUrl = [
        '/static/' + jsVersion + '/js/page/root.js',
        '/static/' + jsVersion + '/js/page/order/search.js',
        '/static/' + jsVersion + '/js/page/order/reminder/order_reminder.js',
        '/static/' + jsVersion + '/js/page/order/history.js',
        '/static/' + jsVersion + '/js/page/order/refund/unprocessed.js',
        '/static/' + jsVersion + '/js/lib/dxSDK.src.extra.min.js'
    ];
    

    

    require = function(a,b,c,d){
        //console.log('myJs Req');
        //console.log(a,b,c,d);
        if (replaceJsUrl.includes(a[0])){
            // console.log('FIND AND REPLACE!!!');
            let replaceUrl = a[0].replace('/'+jsVersion, '');
            console.log('myJs: replace Url\n'+ a[0] + '  ->  '+ replaceUrl);
            a[0] = myJsUrl + replaceUrl;
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

    // 动态加载script资源
    function loadScript(url, cb) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        if(script.readyState) {  // IE浏览器
            script.onreadystatechange = function() {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    script.onreadystatechange = null;  // 删除事件，避免重复触发
                    cb && cb();
                }
            }
        }else {
            script.onload = () => {
                cb && cb();
            }
        }
        script.src = url;
        document.querySelector('head').appendChild(script);
        console.dir(script)
    }


    function changeEle_js(fromJs, toJs){
        // 替换页面上的JS标签
        let docJsEle = document.getElementsByTagName('script');
        for(let index=0; index<docJsEle.length; index++){
            console.log(docJsEle[index]);
            console.log(docJsEle[index].getAttribute('src'));
            if(docJsEle[index].getAttribute('src') == replaceJsUrl[5]){
                docJsEle[index].setAttribute('src', 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/static/js/lib/dxSDK.src.extra.min.js');
            }
        }
    }
    console.log('Change Require');

    async function setLoop_changeJs() {
        for(let i=0;i<=50;i++){
            //$("#refund-audio").attr("data-loop", "1");
            //$("#new-order-audio").attr("data-src", "newOrderx.ogg");
            //$("#reminder-audio").attr("data-loop", "1");
            if( typeof unsafeWindow.MTDX !== 'undefined'){
                console.log('找到MTDX了!!!!');
                // delete unsafeWindow.MTDX;
                // loadScript('https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/static/js/lib/dxSDK.src.extra.min.js');
                // loadScript('https://yiyao.meituan.com/static/628f3146/js/lib/dxSDK.src.extra.min.js');
                return;
            }
            await sleep(500);
        }
            // console.log("Auto change end");
    }

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
    if(unsafeWindow.MTDX){
        console.log('!!!!找到MTDX了!!!!');
        delete unsafeWindow.MTDX;
        delete unsafeWindow.imApp;
        loadScript('https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/static/js/lib/dxSDK.src.extra.min.js');
        loadScript('https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/health-static/sgIm.umd.688cc113.js');
    }
    // loadScript('https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com/static/js/lib/dxSDK.src.extra.min.js');
    window.onload = ()=>{
        // console.log(window.MTDX);
        // delete unsafeWindow.MTDX;
        // changeEle_js();
        // 用法：
        // loadScript('https://yiyao.meituan.com/static/628f3146/js/lib/dxSDK.src.extra.min.js');
        // unsafeWindow.parseMsg = unsafeWindow.MTDX.default.parseMessage;
        // unsafeWindow.MTDX.default.parseMessage = (t)=>{
        //     console.log(t);
        //     return window.parseMsg(t);
        // }
        changeEle("refund-audio", "1", "refundSound1.ogg");
        changeEle("reminder-audio", "1", "reminderSound1.ogg");
        setLoop();
        setLoop_changeJs();
    }


    // Your code here...
})();