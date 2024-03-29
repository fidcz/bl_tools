// ==UserScript==
// @name         美团替换页面和声音次数
// @namespace    mt_change
// @version      0.36
// @description  美团替换页面和声音次数,Hook消息0.36
// @author       fidcz
// @include      *yiyao.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        GM_setValue
// @grant        GM_getValue
// @updateURL    https://git.fidcz.top/https://raw.githubusercontent.com/fidcz/bl_tools/master/js/yiyao.meituan.com/tampermonkey.js
// @downloadURL  https://git.fidcz.top/https://raw.githubusercontent.com/fidcz/bl_tools/master/js/yiyao.meituan.com/tampermonkey.js
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    // 历史订单页面: https://yiyao.meituan.com/#/v2/order/history
    // 退款订单页面: https://yiyao.meituan.com/#/v2/order/refund/unprocessed
    // 催单订单页面: https://yiyao.meituan.com/#/v2/order/reminder
    console.log('mt_change Js: ver:0.36');
    unsafeWindow.closeNotify = false;

    // 使用本地网站上的version
    let reVer = /\/(\w{8})\/js/g.exec(document.head.textContent);
    if(reVer == null){
        reVer = /\/(\w{8})\/js/g.exec(document.head.innerText);
    }
    
    const localVer = GM_getValue('mt_js_ver');
    let myJsUrl = GM_getValue('mt_js_url');
    if(myJsUrl == undefined){
        myJsUrl = 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com';
    }
    var myJsUrlFrom = '未知';
    if(myJsUrl.includes('github')){
        myJsUrlFrom = 'GITHUB';
    }else if(myJsUrl.includes('coding')){
        myJsUrlFrom = 'CODING';
    }else if(myJsUrl.includes('gitee')){
        myJsUrlFrom = 'GITEE';
    }
    console.log('mt_change: js来源:' +myJsUrlFrom + ',' + myJsUrl);

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

    console.log('mt_change: mtjsVer:'+jsVersion);

    
    const replaceJsUrl = [
        '/static/' + jsVersion + '/js/page/root.js',
        '/static/' + jsVersion + '/js/page/order/search.js',
        '/static/' + jsVersion + '/js/page/order/reminder/order_reminder.js',
        '/static/' + jsVersion + '/js/page/order/history.js',
        '/static/' + jsVersion + '/js/page/order/refund/unprocessed.js'
    ];

    const replaceJsTo = {
        'sg_im': '/health-static/sgIm.umd.688cc113.js'
    }

    require = function(a,b,c,d){
        //console.log('myJs Req');
        //console.log(a,b,c,d);
        if (a[0] in replaceJsTo){
            // 内部命名规则
            console.log('mt_change: replace Url\n'+ a[0] + '  ->  '+ replaceJsTo[a[0]]);
            a[0] = myJsUrl + replaceJsTo[a[0]];
        }else if (replaceJsUrl.includes(a[0])){
            // console.log('FIND AND REPLACE!!!');
            let replaceUrl = a[0].replace('/'+jsVersion, '');
            console.log('mt_change: replace Url\n'+ a[0] + '  ->  '+ replaceUrl);
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

    console.log('mt_change: Change Require Success');


    async function setLoop() {
        for(let i=0;i<=20;i++){
            //$("#refund-audio").attr("data-loop", "1");
            //$("#new-order-audio").attr("data-src", "newOrderx.ogg");
            //$("#reminder-audio").attr("data-loop", "1");
            changeEle("refund-audio", "1", "refundSound1.ogg");
            changeEle("reminder-audio", "1", "reminderSound1.ogg");
            await sleep(500);
        }
            console.log("mt_change: Auto change ogg end");
    }

    var sendLocalNotify = function (title, content, icon){
        let options = {
            dir: "auto", // 文字方向
            body: content, // 通知主体
            requireInteraction: false, // 不自动关闭通知
            // 通知图标 
            icon: "https://p0.meituan.net/business/59598679e63726afc85df1b3f2b299f978785.png"
        };
        unsafeWindow.mtNotification = new Notification(title, options); // 显示通知
        setTimeout("window.mtNotification.close()", 4500);
    }
    
    var checkLocalNotify = function (data){
        
        if (typeof isFSendNotify !== 'undefined' && !Boolean(isFSendNotify)){
            return;
        }
        if(document.hasFocus()){
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
                if(nowTime - Number(data.time) > 60000){
                    // 超时消息不提醒 60s
                    return;
                }
                if(data.uuid.slice(0,7) != 'biz-kf-'){
                    // 检查uuid
                    return;
                }
                let dataType = '';
                if(typeof(data.body.type) != 'undefined'){
                    dataType = String(data.body.type);
                }else if(typeof(data.body.eType) != 'undefined'){
                    dataType = String(data.body.eType);
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
                    console.warn('mt_change: Err ' + err.message);
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
            console.warn('mt_change: Err ' + error.message);
            return;
        }
    
        console.log('mt_change: ' + notifyTitle + notifyContent);
    
        // 检查浏览器支持发送消息
        if(typeof isFSendNotify === 'undefined'){
            // 开始检查
            // 先检查浏览器是否支持
            
            if (!window.Notification) {
                console.log('mt_change: 浏览器不支持通知');
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
                            // console.log('用户同意授权');
                            var isFSendNotify = true;
                            sendLocalNotify(notifyTitle, notifyContent);
                        } else if (permission === 'default') {
                            console.warn('mt_change: 用户关闭授权 未刷新页面之前 可以再次请求授权');
                        } else {
                        // denied
                            var isFSendNotify = false;
                            // console.log('用户拒绝授权 不能显示通知');
                        }
                    });
                } else {
                // denied 用户拒绝
                    console.log('mt_change: 用户曾经拒绝显示通知');
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
                    console.log('mt_change: 添加消息hook成功');
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
        // console.log(inserNode.length);
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

    async function addChangeUrl(){
        await sleep(100);
        // 添加换源按钮
        let changeUrl = document.createElement("a");
        changeUrl.innerHTML = '\xa0\xa0\xa0\xa0\xa0切换JS来源,当前:' + myJsUrlFrom;
        let titleLogo = document.getElementById('reload-page');
        if(titleLogo == undefined || titleLogo == null) return;
        titleLogo.appendChild(changeUrl);

        let nowJsUrl = GM_getValue('mt_js_url');
        changeUrl.onclick = (event)=>{
            if(nowJsUrl == undefined || nowJsUrl.includes('coding')){
                GM_setValue('mt_js_url', 'https://git.fidcz.top/https://raw.githubusercontent.com/fidcz/bl_tools/master/js/yiyao.meituan.com');
                
            }else{
                GM_setValue('mt_js_url', 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com');
            }
            setTimeout("window.location.reload()", 1000);
        }
    }

    async function addCopyCookie(){
        await sleep(100);
        // 添加复制Cookie按钮
        let copyCookie = document.createElement("a");
        copyCookie.innerHTML = '复制当前Cookie';

        let titleLogo = document.getElementById('reload-page');
        if(titleLogo == undefined || titleLogo == null) return;
        titleLogo.appendChild(copyCookie);

        copyCookie.onclick = async (event)=>{
            let clickEle = event.currentTarget;
            if(document.cookie != ''){
                try{
                    // 尝试复制
                    let searchInput = document.getElementsByClassName('J-search')[0];
                    let tmpVal = searchInput.value;
                    searchInput.value = document.cookie;
                    searchInput.select();
                    clickEle.innerHTML = '点我复制Cookie';
                    document.execCommand("copy");
                    clickEle.innerHTML = '已复制!!!';
                    searchInput.value = tmpVal;
                    await sleep(1000);
                    clickEle.innerHTML = '点我复制Cookie';
                }catch{
                    // 复制失败
                    clickEle.innerHTML = '复制失败,请重试';
                    await sleep(1000);
                    clickEle.innerHTML = '点我复制Cookie';
                }
            }else{
                clickEle.innerHTML = '当前无Cookie';
                await sleep(1000);
                clickEle.innerHTML = '点我复制Cookie';
            }
        }
    }

    window.onload = ()=>{
        loopHookIm();
        changeEle("refund-audio", "1", "refundSound1.ogg");
        changeEle("reminder-audio", "1", "reminderSound1.ogg");
        setLoop();
        addCopyCookie();
        addChangeUrl();
        addCloseTip();
    }

    document.on


    // Your code here...
})();