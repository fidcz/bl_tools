// ==UserScript==
// @name         京东审方
// @namespace    jd-sf
// @version      0.13
// @description  try to take over the world!
// @author       You
// @match        *rx.shop.jd.com/rx/rxInfo_auditView.action?rxId=*
// @grant        GM_xmlhttpRequest
// @connect      *
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/%E5%AE%A1%E6%96%B9%E8%84%9A%E6%9C%AC/jd_sf_net.js
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

    async function inputClick(){
        // 快速审方被点击事件

        document.getElementById('tipsP').value = '正在修改 请稍等...';

        ypName = document.getElementById('ypName').value;

        // 发送修改
        GM_xmlhttpRequest({
            method: 'GET',
            url: 'http://192.168.101.67:5000/putgitee/' + khName + '|' + khSfz + '|' + khPhone + '|' + ypName,
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
            var ypSkuid = ypLink[y].id;
            ypSkuid = /\d{5,15}/.exec(ypSkuid)[0];
            console.log('https://item.jkcsjd.com/' + ypSkuid + '.html');
            GM_xmlhttpRequest({
                method: 'GET',
                url: 'https://item.jkcsjd.com/' + ypSkuid + '.html',
                timeout: 2000,
                onload: (response) => {
                    console.log('onload' + response.readyState);
                    //console.log(response.responseText);
                    var result = /dt>药品通用名<\/dt><dd>(.{1,25})<\/dd>/.exec(response.responseText);
                    //console.log(result);
                    if(ypName == null){
                        ypName = result[1].replace(/(^\s*)|(\s*$)/g, "");
                        inp2.value = ypName;
                    }else{
                        ypName = ypName + ',' + result[1].replace(/(^\s*)|(\s*$)/g, "");
                        inp2.value = ypName;
                    }
                    

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
        //ypName = '';



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