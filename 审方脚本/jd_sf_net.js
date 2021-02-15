// ==UserScript==
// @name         京东审方
// @namespace    jd-sf
// @version      0.1
// @description  try to take over the world!
// @author       You
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

    // 延迟事件
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function inputClick(){
        // 快速审方被点击事件
        while(ypName == ''){
            // 如果获取不到药品名称
            await sleep(1000);
            document.getElementById('tipsP').value = '正在获取药品名称...';
        }

        ypName = document.getElementById('ypName').value;

        // 发送修改
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://127.0.0.1:5000/putgitee/' + khName + '|' + khSfz + '|' + khPhone + '|' + ypName,
            timeout: 2000,
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


    async function getInfo(){
        // 获取信息
        khName = document.querySelector('input[name="rxInfo.rxExtendsInfo.patientName"]').value;  // 姓名
        console.log(khName);
        khSfz = document.querySelector('input[name="rxInfo.rxExtendsInfo.idCardNum"]').value;  // 身份证
        console.log(khSfz);

        while (document.querySelector('td#fullUserPhone').innerHTML.indexOf('****') != -1) {
            // 如果找不到电话框
            await sleep(1000);
        }
        khPhone = document.querySelector('td#fullUserPhone').innerHTML;  // 手机号码
        //alert("姓名: " + khName + " 身份证: " + khSfz + "\n手机号码: " + khPhone);

        //获取药品通用名
        var ypLink = document.querySelector('h4.d-name').children[0].href;
        //ypName = '';
        console.log(ypLink);
        GM_xmlhttpRequest({
            method: 'GET',
            url: ypLink,
            timeout: 2000,
            onload: (response) => {
                console.log('onload' + response.readyState);
                //console.log(response.responseText);
                var result = /dt>药品通用名<\/dt><dd>(.{1,25})<\/dd>/.exec(response.responseText);
                //console.log(result);
                ypName = result[1];
                console.log(ypName);
                inp2.value = ypName;
            },
            onabort: (response) => {
                console.log('onabort' + response.readyState);
            },
            onerror: (response) => {
                console.log('onerror' + response.readyState);
            },
            ontimeout: (response) => {
                console.log('ontimeout' + response.readyState);
                ypName = '-1';
            },
        });


    }

    // Your code here...

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

    var inp2 = document.createElement('input');
    inp2.setAttribute('id', 'ypName');
    //inp2.setAttribute('class', 'btn-h28 btn-white');
    inp2.style.width = '256px';
    inp2.style.height = '28px';
    inp2.style.marginLeft = '16px';
    //inp.innerHTML = '快速审方';
    parent.appendChild(inp2);

    var con = document.createElement('input');
    con.setAttribute('id', 'tipsP');
    con.value = '这里显示提示信息';
    con.style.width = '128px';
    con.style.height = '28px';
    con.style.marginLeft = '16px';
    parent.appendChild(con);


    window.onload = function(){
        // 当网页加载完毕

        // 点击显示手机号
        if(document.querySelector('a[name="fullPhone"]') != null){
            // 如果存在显示全部号码 点击
            document.querySelector('a[name="fullPhone"]').click();
        }

        getInfo();
    }

})();