// ==UserScript==
// @name         千牛-药师审方
// @namespace    qn-sf1
// @version      0.2
// @description  千牛审方:主页面
// @author       fidcz
// @match        *://trade.taobao.com/trade/itemlist/*
// @grant        GM_xmlhttpRequest
// @grant        GM_openInTab
// @connect      *
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/%E5%AE%A1%E6%96%B9%E8%84%9A%E6%9C%AC/qn_sf_net.js
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...

    var tc1 = ["零盒装", "一盒", "二盒", "三盒", "四盒", "五盒", "六盒", "七盒", "八盒", "九盒", "十盒"];
    var tc2 = ["0盒装", "1盒装", "2盒装", "3盒装", "4盒装", "5盒装", "6盒装", "7盒装", "8盒装", "9盒装", "10盒装", "11盒装", "12盒装", "13盒装", "14盒装", "15盒装", "16盒装", "17盒装", "18盒装", "19盒装", "20盒装"];
    var tc3 = ["套餐零", "套餐一", "套餐二", "套餐三", "套餐四", "套餐五", "套餐六", "套餐七", "套餐八", "套餐九", "套餐十", "套餐十一", "套餐十二", "套餐十三", "套餐十四", "套餐十五"];
    var str_ddList = []
    var temp_dd;
    var jso;

    /////////// sleep /////////////////
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function run2() {
        // 定时刷新
        await sleep(3 * 60 * 1000);
        document.querySelector("div[data-reactid='.0.4.0.$drugPending']").click();
        run2();
    }

    ////////////// 根据套餐类型获取数字/////////////////
    var getTc = function (tc) {
        //根据传入的套餐文本 返回套餐数量
        if (tc == "标准装" || tc == "一盒装" || tc == "1盒装") {
            return "1";
        } else if (/\d{1,3}盒/.exec(tc) != null) {
            return /\d{1,3}/.exec(/\d{1,3}盒/.exec(tc)[0])[0];
        } else if (tc2.indexOf(tc) != -1) {
            return String(tc2.indexOf(tc));
        } else if (tc1.indexOf(tc) != -1) {
            return String(tc1.indexOf(tc));
        } else if (tc3.indexOf(tc) != -1) {
            return String(tc1.indexOf(tc));
        } else {
            return "0";
        }
    }
    //////////////////////////////////

    //////////// 根据编码获取编码和数量 ////////////////////
    var getBm = function (bm) {
        //处理编码返回数量和编码
        var bmList = bm.split("*");
        if (bmList.length == 1) {
            // 如果为1
            return [bmList[0], "1"];
        } else {
            return [bmList[0], bmList[1]];
        }
    }
    ///////////////////////////////////////////////


    async function run() {
        // 主运行
        // var p1 = waitLoad();
        // console.log(p1)
        // p1.then(function (result) {
        //     // 运行完毕
        //     console.log(result);
        // });
        // var jmp = false
        console.log("开始检测小框框")
        var kkClass = document.querySelector("div[data-reactid='.0.7']").getAttribute("class");
        while (kkClass.indexOf("hidden") == -1) {
            await sleep(1000);
            kkClass = document.querySelector("div[data-reactid='.0.7']").getAttribute("class");
            if (kkClass.indexOf("hidden") != -1) {
                //console.log("小框框藏起来了")
                break;
            }
        }
                //console.log(document.querySelector("div[data-reactid='.0.7']").getAttribute("class"));


        console.log("小框框藏起来了");

        // 如果提示订单多 刷新
        if (document.querySelector("span[data-reactid='.0.6.0.2']") != null) {
            // 存在
            if (document.querySelector("span[data-reactid='.0.6.0.2']").innerText != "由于订单量太大, 导致查询订单超时, 无法返回结果, 请设置查询条件(比如成交时间), 减少查询的订单数量.") {
                // 内容 刷新
                location.reload();
            }
        }

        // 订单加载完毕 开始获取订单号列表
        //div .0.6
        var ddList = document.querySelector("div[data-reactid='.0.6']");
        // trade-order-main
        var allList = ddList.querySelectorAll(".trade-order-main");
        //alert(allList.length);
        //console.log("获取订单DIV")
        /*try{*/
        if (allList.length <= 0) {

            // 刷新
            location.reload();
        }
        for (var i = 0; i < allList.length; i++) {
            //console.log(allList[i].getAttribute("data-reactid"));
            var temp = allList[i].getAttribute("data-reactid").split("$")[1];
            str_ddList.push(temp)
        }

        console.log(str_ddList)

        // 开始获取订单

        var ddDict = {}

        //console.log("获取每个订单")

        for (var id = 0; id < str_ddList.length; id++) {
            // 开始遍历每个订单
            // 判断订单是否标记
            temp_dd = str_ddList[id]
            //console.log("判断订单标记" +  str_ddList[id])
/*             if (document.querySelector("a[data-reactid='.0.6.3:$" + str_ddList[id] + ".0.1.0.1.0.$0.0']").getAttribute("action") != null) {
                // 如果有标记
                console.log("订单号: " + str_ddList[id] + " 标记了")
                continue;
            } */


            // 获取该笔订单物品数量
            var ypList = document.querySelector("tbody[data-reactid='.0.6.3:$" + str_ddList[id] + ".1.1']").querySelectorAll("tr");
            for (var yp = 0; yp < ypList.length; yp++) {
                // console.log("YP"+ String(yp))
                // 遍历药品列表
                // 获取列表当前的id
                //console.log("药品ID")
                var ypId = ypList[yp].getAttribute("data-reactid");
                // 获取数量
                var num = document.querySelector("p[data-reactid='" + ypId + ".$2.0.0']").innerText;
                // 获取套餐类型
                var tcl = document.querySelector("span[data-reactid='" + ypId + ".$0.0.1.1.$0.2']").innerText;
                // 获取编码
                var bm = document.querySelector("span[data-reactid='" + ypId + ".$0.0.1.3:$0.1']").innerText;
                // 旺旺id
                var userid = document.querySelector("a[data-reactid='.0.6.3:$" + temp_dd + ".1.1.$0.$4.0.0.0']").innerText;

                //判断编码数量相符合
/*                 if (bmNum != tcl) {
                    //如果不相等
                    GM_xmlhttpRequest({
                        method: "GET",
                        url: "http://127.0.0.1:5000/send/订单号:" + str_ddList[id] + "  商品编码: " + bm + " 套餐: " + tcl + "  数量:" + num + " 和套餐设置不符合，请检查审方",
                        timeout: 2000
                    });
                    break;
                } */

                if (temp_dd in ddDict) {
                    // 如果已经存在里面
                    var temp_array = ddDict[temp_dd]
                    var temp_array2 = [bm, tcl, num]
                    temp_array.push(temp_array2)
                    ddDict[temp_dd] = temp_array
                } else {
                    // 还没有存在里面
                    var temp_array3 = [bm, tcl, num]
                    ddDict[temp_dd] = [userid, temp_array3]
                }

            }


        }
        console.log("发送的内容: ")
        console.log(ddDict)

        GM_xmlhttpRequest({
            method: "POST",
            url: "http://127.0.0.1:5000/id3",
            data: JSON.stringify(ddDict),
            timeout: 2000,
            onload: (response) => {
                console.log(response.status)
                //console.log(response.responseText)
                jso = eval('(' + response.responseText + ')');
                console.log("处理完的内容: ");
                console.log(jso);
            },
            ontimeout: () => { alert("网络连接超时，请打开审方后台"); },
            onerror: () => { alert("网络连接失败，请打开审方后台"); }
        });

        // 开始检测结果
        console.log("开始检测结果");
        while (jso == undefined) {
            await sleep(1000);
            if (jso != undefined) {
                //console.log("小框框藏起来了")
                break;
            }
        }
        console.log("有结果辣:");
        console.log(jso);

        // 开始删除多余的
        /*for (var key in jso) {
            // 循环处理
            //console.log()
            if (jso[key] != "1") {
                delete jso[key];
                continue;
            }
        }*/
        //console.log("删除完的内容:")
        //console.log(jso)
        var jsoA = jso['1']
        console.log(jsoA)

        for (var ii=0; ii<jsoA.length; ii++) {
            // 开始点击
            var url = "https://trade.taobao.com/trade/audit_order.htm?bizOrderId=" + jsoA[ii] + "&bizType=200&rx2=true&operateType=30&from=listSoldItems";
            GM_openInTab(url)
            await sleep(1000);

        }



            // 寻找订单号下的通过按钮
            //document.querySelector("button[data-reactid='.0.6.3:$" + key + ".1.1.$0.$5.0.1.$0.0']").click();

            //while (document.querySelector(".cancelOrder-actions") == null){
            //await sleep(1000);
            // }
            // 寻找确定按钮
            //    document.querySelector(".cancelOrder-actions").querySelectorAll("button")[0].click();

            //await sleep(3000);
        



        await sleep(5000);
        if (document.querySelector("button[data-reactid='.0.6.0.2.0.1']") != null) {
            // 如果存在 下一页按钮
            if (!document.querySelector("button[data-reactid='.0.6.0.2.0.1']").disabled) {
                // 如果
                document.querySelector("button[data-reactid='.0.6.0.2.0.1']").click();
                await sleep(1000);
                str_ddList = [];
                jso = undefined;
                temp_dd = undefined;

                run();
            }
        }




        // 主运行}
    }



    // 等待网页加载完毕 //
    window.onload = function () {
        // 当网页加载完毕


        // 获取待处理的处方
        var dcf = document.querySelector("div[data-reactid='.0.4.0.$drugPending']");

        // 获取class值
        var dcfClass = dcf.getAttribute("class");
        // 询问是否加载待处理的处方
        if (dcfClass.split(" ").length == 1) {
            //if (!confirm("请问是否加载待处理的处方")) {
                //点击了取消
                //return;
            //}
            // 点击待处理的处方
            dcf.click();


        }
        //console.log(document.querySelector("div[data-reactid='.0.7']").getAttribute("class"));

        // 点击 下拉框
        document.querySelector("span[data-reactid='.0.6.0.1.0.6.0.$selection']").click();
        // 点击 已有处方待审核
        document.querySelector("li[data-reactid='.1.1.0.1.$10/=1$10']").click();
        //console.log(document.querySelector("div[data-reactid='.0.7']").getAttribute("class"));



        run();
        run2();
        //console.log("asdsadasaaaaaaaaaa")
        //button  .0.6.0.2.0.0   上一页 .0.6.0.2.0.1  下一页

        //waitJSO();

        //setTimeout(run2, 15000);

        //alert("1");


        // 网页加载完毕}
    }


})();