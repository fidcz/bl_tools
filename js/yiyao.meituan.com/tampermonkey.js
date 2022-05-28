// ==UserScript==
// @name         美团替换页面和声音次数
// @namespace    mt_change
// @version      0.25
// @description  美团替换页面和声音次数,Hook消息0.25
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
    console.log('mt_change ver:0.25');
    unsafeWindow.closeNotify = false;

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
        '/static/' + jsVersion + '/js/page/order/refund/unprocessed.js'
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
        // console.log(a);
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

    var sendLocalNotify = function (title, content, icon){
        let options = {
            dir: "auto", // 文字方向
            body: content, // 通知主体
            requireInteraction: false, // 不自动关闭通知
            // 通知图标 
            icon: "https://p0.meituan.net/business/59598679e63726afc85df1b3f2b299f978785.png"
        };
        let notification = new Notification(title, options); // 显示通知
    }
    
    var checkLocalNotify = function (data){
        
        if (typeof isFSendNotify !== 'undefined' && !Boolean(isFSendNotify)){
            return;
        }
        if(!document.hidden){
            // 当前页面显示，不提醒
            return;
        }
        if(typeof unsafeWindow.closeNotify != 'undefined' && unsafeWindow.closeNotify){
            // 关闭消息提醒
            return;
        }
    
        try{
            if(typeof(data.time) === 'undefined' || typeof(data.body) === 'undefined' || typeof(data.uuid) === 'undefined'){
                return;
            }else{
                const nowTime = new Date().getTime();
                if(nowTime - Number(data.time) > 90){
                    // 超时消息不提醒;
                    return;
                }
                if(data.uuid.slice(0,7) != 'biz-kf-'){
                    // 检查uuid
                    return;
                }
                let dataType = '';
                if(typeof(data.body.type) != 'undefined'){
                    dataType = String(data.body.type);
                }
                if(dataType == 'system.notic'){
                    // 系统消息跳过
                    return;
                }
    
                var notifyTitle = '收到美团';
                try{
                    const shopName = {
                        '菠萝大药房旗舰店（快递发全国）': '美团菠萝',
                        '誉诚医疗器械旗舰店（快递发全国）': '美团誉诚'
                    }
                    
                    const senderInfo = JSON.parse(data.extension);
                    if(senderInfo['poi_name'] in shopName){
                        notifyTitle = '收到' + shopName[senderInfo['poi_name']];
                    }
                    if('c_name' in senderInfo){
                        notifyTitle = notifyTitle + '[' + senderInfo['c_name'] + ']消息';
                    }else if('nickname' in senderInfo){
                        notifyTitle = notifyTitle + '[' + senderInfo['nickname'] + ']消息';
                    }else{
                        notifyTitle += '消息';
                    }
                }catch(err){
                    console.warn(err.message);
                }
                
    
                
                let text = '收到消息';
                if(dataType == ''){
                    // 判断图片
                    if(typeof(data.body.normal) !== 'undefined'){
                        text = '[图片消息]';
                    }else if(typeof(data.body.text) != 'undefined'){
                        text = data.body.text;
                    }
                }else{
                    if(dataType == '0'){
                        if(typeof(data.body.data) !== 'undefined'){
                            text = '[订单/商品消息]';
                        }
                    }
                }
                var notifyContent = text;
    
            }
        }catch(error){
            console.warn(error.message);
            return;
        }
    
        console.log(notifyTitle + notifyContent);
    
        // 检查浏览器支持发送消息
        if(typeof isFSendNotify === 'undefined'){
            // 开始检查
            // 先检查浏览器是否支持
            
            if (!window.Notification) {
                console.log('浏览器不支持通知');
                var isFSendNotify = false;
                return;
            } else {
                // 检查用户曾经是否同意接受通知
                if (Notification.permission === 'granted') {
                    var isFSendNotify = true;
                    sendLocalNotify(notifyTitle, notifyContent);
                } else if (Notification.permission === 'default') {
                    // 用户还未选择，可以询问用户是否同意发送通知
                    Notification.requestPermission().then(permission => {
                        if (permission === 'granted') {
                            console.log('用户同意授权');
                            var isFSendNotify = true;
                            sendLocalNotify(notifyTitle, notifyContent);
                        } else if (permission === 'default') {
                            console.warn('用户关闭授权 未刷新页面之前 可以再次请求授权');
                        } else {
                        // denied
                            var isFSendNotify = false;
                            console.log('用户拒绝授权 不能显示通知');
                        }
                    });
                } else {
                // denied 用户拒绝
                    console.log('用户曾经拒绝显示通知');
                    var isFSendNotify = false;
                }
            }
        }
    }

    // let hookMessage = function(msgData){
    //     console.log(msgData);
    // }

    async function loopHookIm(){
        for(let i=0; i<=100; i++){
            try{
                if(typeof(unsafeWindow.imApp.mtdx.eventEmitter.on) !== 'undefined'){
                    unsafeWindow.imApp.mtdx.eventEmitter.on('message', (msgdata)=>{checkLocalNotify(msgdata.message)});
                    console.log('添加消息hook成功');
                    break;
                }
            }catch(error){}
            await sleep(500);
        }
    }

    async function addCloseTip(){
        await sleep(6000);
        // 添加关闭提示按钮
        let closeA = document.createElement("a");
        closeA.innerHTML = '关闭消息提醒';
        closeA.className = 'pull-right close-im';
        let inserNode = document.getElementsByClassName('fa-custom-config');
        console.log(inserNode.length);
        for(let index=0; index<inserNode.length; index++){
            let parent = inserNode[index].parentNode;
            parent.insertBefore(closeA, inserNode[index].nextSibling);
        }

        closeA.onclick = (event)=>{
            if(typeof unsafeWindow.closeNotify != 'undefined' && unsafeWindow.closeNotify){
                // 取消关闭
                unsafeWindow.closeNotify = false;
                event.target.innerHTML = '关闭消息提醒';
            }else{
                unsafeWindow.closeNotify = true;
                event.target.innerHTML = '开启消息提醒';
            }
        };
    }

    window.onload = ()=>{
        loopHookIm();
        changeEle("refund-audio", "1", "refundSound1.ogg");
        changeEle("reminder-audio", "1", "reminderSound1.ogg");
        setLoop();
        addCloseTip();
    }


    // Your code here...
})();