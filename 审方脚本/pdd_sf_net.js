// ==UserScript==
// @name         拼多多审方
// @namespace    pdd-sf1
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        *mms.pinduoduo.com/orders/medicine
// @grant        GM_openInTab
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/%E5%AE%A1%E6%96%B9%E8%84%9A%E6%9C%AC/pdd_sf_net.js
// ==/UserScript==

(function() {
    'use strict';

    // 延迟
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

// 主运行
    async function run(){
        //console.log("小框框藏起来了")
        while (document.querySelector("input[data-testid='beast-core-select-htmlInput']") == null) {
            await sleep(1000);
            if (document.querySelector("input[data-testid='beast-core-select-htmlInput']") != null){
                //console.log("小框框藏起来了")
                break;
            }
        }
        // 获取ClassNumber
        var tClass = document.querySelector("div[data-testid='beast-core-noticeBar']").getAttribute("class");
        var classNum = tClass.split(" ")[0].split("_")[2];
        console.log("小框框藏起来了");
        console.log("classNumber: " + classNum);

        document.querySelectorAll("input[data-testid='beast-core-select-htmlInput']")[1].click();
        await sleep(500);
        document.querySelector(".ST_dropdownPanel_" + classNum).querySelectorAll("li")[1].click();
        await sleep(200);
        document.querySelector("button.BTN_outerWrapper_" + classNum).click()

        // 获取列表document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']")
        // 获取列表下的子元素document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")
        // 子元素下的审核框框document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")[0].querySelectorAll("td")[6].querySelectorAll("a")[0].click()
        // 查看链接document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")[0].querySelectorAll("td")[6].querySelectorAll("a")[0].getAttribute("href")
        // https://mms.pinduoduo.com/orders/medicine.

        while (document.querySelector("div.TB_loadingInner_" + classNum) != null) {
            await sleep(1000);
            if (document.querySelector("input[data-testid='beast-core-select-htmlInput']") == null){
                //console.log("小框框藏起来了")
                break;
            }
        }



        var list = document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr");
        console.log(list.length)
        await sleep(1500);
        for(var i=0; i<list.length; i++){
            // 遍历打开
            //console.log("遍历打开")
            //console.log("https://mms.pinduoduo.com" + document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")[i].querySelectorAll("td")[6].querySelectorAll("a")[0].getAttribute("href"))
            document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")[i].querySelectorAll("td")[6].querySelectorAll("a")[0].click();
            //GM_openInTab("https://mms.pinduoduo.com" + document.querySelector("tbody[data-testid='beast-core-table-middle-tbody']").querySelectorAll("tr")[i].querySelectorAll("td")[6].querySelectorAll("a")[0].getAttribute("href"));
            await sleep(200);
        }

        await sleep(60*1000);

        location.reload();



    // 主运行结束
    }

    // Your code here...
    run();

})();