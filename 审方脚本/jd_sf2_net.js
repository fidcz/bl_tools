// ==UserScript==
// @name         京东审方
// @namespace    jd-sf
// @version      0.15
// @description  京东添加快速补方按钮，自动获取姓名信息并发送
// @author       fidcz
// @match        *rx.shop.jd.com/rx/rxInfo_auditView.action?rxId=*
// @grant        GM_xmlhttpRequest
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    var khName = null;
    var khSfz = null;
    var khPhone = null;
    var ypName = null;
    var khYears = null;
    var ypSpecs = null;

    // 延迟事件
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function forceClick(){
        // 强制提交事件
        console.log('强制提交!');
        if(inp2.value == ''){
            // 没有
            document.getElementById('tipsP').value = '药品框为空';
            return;
        }

        console.log('发送内容: ' + 'http://192.168.0.29:5000/lianou/wenzhen?yp=' + inp2.value + '&name=' + khName + '&idcard=' + khSfz + '&phone=' + khPhone)
        // http://192.168.0.29:5001/lianou/wenzhen?yp=%E7%BC%AC%E6%B2%99%E5%9D%A6%E8%83%B6%E5%9B%8A@@80mg*28%E7%B2%92@@4&name=%E5%91%A8%E7%94%9C%E7%8F%8D&phone=17607606086&idcard=440620196604014225&weight=
        GM_xmlhttpRequest({
                method: 'GET',
                url: 'http://192.168.0.29:5000/lianou/wenzhen?yp=' + inp2.value + '&name=' + khName + '&idcard=' + khSfz + '&phone=' + khPhone + '&weight=' + inp3.value,
                timeout: 5000,
                onload: (response) => {
                    console.log('onload' + response.readyState);
                    //console.log(response.responseText);
                    document.getElementById('tipsP').value = response.responseText;
                },
                onabort: (response) => {
                    console.log('onabort' + response.readyState);
                },
                onerror: (response) => {
                    console.log('onerror' + response.readyState);
                },
                ontimeout: (response) => {
                    console.log('ontimeout' + response.readyState);
                    document.getElementById('tipsP').value = '请求超时 请重试';
                },
            });
    }

    async function inputClick(){
        // 快速审方被点击事件

        //document.getElementById('tipsP').value = '正在修改 请稍等...';

        //ypName = document.getElementById('ypName').value;
        document.getElementById('tipsP').value = '正在修改 请稍等...';
        getInfo()
        // 发送修改
        // GM_xmlhttpRequest({
        //     method: 'GET',
        //     url: 'http://192.168.0.29:5000/putgitee/' + khName + '|' + khSfz + '|' + khPhone + '|' + ypName,
        //     timeout: 2000,
        //     onload: (response) => {
        //         console.log('onload' + response.readyState);
        //         //console.log(response.responseText);
        //         document.getElementById('tipsP').value = response.responseText;
        //     },
        //     onabort: (response) => {
        //         console.log('onabort' + response.readyState);
        //     },
        //     onerror: (response) => {
        //         console.log('onerror' + response.readyState);
        //     },
        //     ontimeout: (response) => {
        //         console.log('ontimeout' + response.readyState);
        //         document.getElementById('tipsP').value = '请求超时 请重试';
        //     },
        // });

    }


    async function getInfo(){
        // 获取信息
        khName = document.querySelector('input[name="rxInfo.rxExtendsInfo.patientName"]').value;  // 姓名
        console.log(khName);
        khSfz = document.querySelector('input[name="rxInfo.rxExtendsInfo.idCardNum"]').value;  // 身份证
        console.log(khSfz);
        khYears = document.querySelector('input[name="rxInfo.rxExtendsInfo.age"]').value;       // 年龄
        console.log(khYears);
        if(Number(khYears) < 6){
            // 小于6岁
            if(document.querySelectorAll('div.picture-upload-txt').length >= 2){
                // 没有上传处方
                alert('年龄小于6岁 并且没有上传处方图片');
            }
        }else if(Number(khYears) < 14){
            // 小于14岁
            if(document.querySelectorAll('div.picture-upload-txt').length >= 2){
                // 没有上传处方
                alert('年龄小于14岁 请判断是否有提供体重信息');
            }
        }

        while (document.querySelector('td#fullUserPhone').innerHTML.indexOf('****') != -1) {
            // 如果找不到电话框
            await sleep(1000);
        }
        khPhone = document.querySelector('td#fullUserPhone').innerHTML;  // 手机号码
        //alert("姓名: " + khName + " 身份证: " + khSfz + "\n手机号码: " + khPhone);

        //获取药品通用名
        var ypLink = document.querySelector('tbody#skuListTB').children;

        for(var y=0; y<ypLink.length; y++){
            // 遍历

            if(document.getElementById('ypNum'+y).value == ''){
                // 如果是空的
                alert('有药品没有输入数量!!!');
                waitStauts = true;
                continue
            }

            var ypSkuid = ypLink[y].id;
            ypSkuid = /\d{5,15}/.exec(ypSkuid)[0];
            console.log('https://item.jkcsjd.com/' + ypSkuid + '.html');
            var waitStauts = false;
            GM_xmlhttpRequest({
                method: 'GET',
                url: 'https://item.jkcsjd.com/' + ypSkuid + '.html',
                timeout: 2000,
                onload: (response) => {
                    console.log('onload' + response.readyState);
                    //console.log(response.responseText);
                    var result = /dt>药品通用名<\/dt><dd>(.{1,25})<\/dd>/.exec(response.responseText);
                    ypName = result[1].replace(/(^\s*)|(\s*$)/g, "");  // 删首尾空

                    var result2 = /dt>产品规格<\/dt><dd>(.{1,20})<\/dd>/.exec(response.responseText);
                    //console.log(result);
                    ypSpecs = result2[1].replace(/(^\s*)|(\s*$)/g, ""); // 删首尾空


                    if(inp2.value != ''){
                        inp2.value = inp2.value + "||" + ypName + '@@' + ypSpecs + '@@' + document.getElementById('ypNum'+y).value
                    }else{
                        inp2.value = inp2.value + ypName + '@@' + ypSpecs + '@@' + document.getElementById('ypNum'+y).value
                    }

                    waitStauts = true;
                },
                onabort: (response) => {
                    console.log('onabort' + response.readyState);
                    waitStauts = true;
                },
                onerror: (response) => {
                    console.log('onerror' + response.readyState);
                    waitStauts = true;
                },
                ontimeout: (response) => {
                    console.log('ontimeout' + response.readyState);
                    waitStauts = true;
                    ypName = '-1';
                },
            });

            while (!waitStauts) {
                // 等待访问
                await sleep(250);
            }
        }
        document.getElementById('tipsP').value = '发送中，请稍等...';

        if(inp2.value == ''){
            // 没有
            document.getElementById('tipsP').value = '药品框为空';
            return;
        }

        console.log('发送内容: ' + 'http://192.168.0.29:5000/lianou/wenzhen?yp=' + inp2.value + '&name=' + khName + '&idcard=' + khSfz + '&phone=' + khPhone)
        // http://192.168.0.29:5000/lianou/wenzhen?yp=%E7%BC%AC%E6%B2%99%E5%9D%A6%E8%83%B6%E5%9B%8A@@80mg*28%E7%B2%92@@4&name=%E5%91%A8%E7%94%9C%E7%8F%8D&phone=17607606086&idcard=440620196604014225&weight=
        GM_xmlhttpRequest({
                method: 'GET',
                url: 'http://192.168.0.29:5001/lianou/wenzhen?yp=' + inp2.value + '&name=' + khName + '&idcard=' + khSfz + '&phone=' + khPhone + '&weight=' + inp3.value,
                timeout: 5000,
                onload: (response) => {
                    console.log('onload' + response.readyState);
                    //console.log(response.responseText);
                    document.getElementById('tipsP').value = response.responseText;
                },
                onabort: (response) => {
                    console.log('onabort' + response.readyState);
                },
                onerror: (response) => {
                    console.log('onerror' + response.readyState);
                },
                ontimeout: (response) => {
                    console.log('ontimeout' + response.readyState);
                    document.getElementById('tipsP').value = '请求超时 请重试';
                },
            });



    }

    // Your code here...

    console.log('创建按钮...');

    // 创建按钮和输入框
    var parent = document.querySelector('div.drug-btns');
    var inp = document.createElement('input');
    inp.setAttribute('id', 'myInput');
    inp.setAttribute('type', 'button');
    inp.setAttribute('class', 'btn-h28 btn-white');
    inp.setAttribute('value', '快速补方');
    //inp.innerHTML = '快速审方';
    parent.appendChild(inp);
    inp.addEventListener('click', inputClick);

    console.log('创建药品名称框...');

    // 药品名称输入框
    var inp2 = document.createElement('input');
    inp2.setAttribute('id', 'ypName');
    //inp2.setAttribute('class', 'btn-h28 btn-white');
    inp2.style.width = '320px';
    inp2.style.height = '28px';
    inp2.style.marginLeft = '16px';
    //inp.innerHTML = '快速审方';
    parent.appendChild(inp2);

    // 体重输入框
    var inp3 = document.createElement('input');
    inp3.setAttribute('id', 'weight_num');
    //inp2.setAttribute('class', 'btn-h28 btn-white');
    inp3.style.width = '36px';
    inp3.style.height = '28px';
    inp3.style.marginLeft = '16px';
    //inp.innerHTML = '快速审方';
    parent.appendChild(inp3);


    console.log('创建提示框...');

    var con = document.createElement('input');
    con.setAttribute('id', 'tipsP');
    con.value = '这里显示提示信息';
    con.style.width = '100px';
    con.style.height = '28px';
    con.style.marginLeft = '16px';
    parent.appendChild(con);

    // 创建强制提交按钮
    var inp4 = document.createElement('input');
    inp4.setAttribute('id', 'force_sub');
    inp4.setAttribute('type', 'button');
    inp4.setAttribute('class', 'btn-h28 btn-white');
    inp4.setAttribute('value', '强制提交');
    //inp.innerHTML = '快速审方';
    inp4.style.marginLeft = '16px';
    parent.appendChild(inp4);
    inp4.addEventListener('click', forceClick);

    console.log('创建数量输入框...');

    // 创建数量输入框
    var ypLink2 = document.querySelector('tbody#skuListTB').children;
    for(var xx=0; xx<ypLink2.length; xx++){
        console.log(xx);
        var con2 = document.createElement('input')
        con2.setAttribute('id', 'ypNum'+xx);
        con2.value = '';
        con2.style.width = '36px';
        con2.style.height = '28px';
        con2.style.marginLeft = '2px';
        con2.style.border = 'solid 1px'
        document.querySelector('tbody#skuListTB').children[xx].querySelectorAll('td')[1].appendChild(con2);
    }


    window.onload = function(){
        // 当网页加载完毕

        // 点击显示手机号
        if(document.querySelector('a[name="fullPhone"]') != null){
            // 如果存在显示全部号码 点击
            document.querySelector('a[name="fullPhone"]').click();
        }

        //getInfo();
    }

})();