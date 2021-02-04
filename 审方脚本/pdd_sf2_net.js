// ==UserScript==
// @name         拼多多审方-通过
// @namespace    pdd-sf-tg
// @version      0.2
// @description  try to take over the world!
// @author       fidcz
// @match        *mms.pinduoduo.com/orders/medicine/detail?orderSn*
// @grant        none
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/%E5%AE%A1%E6%96%B9%E8%84%9A%E6%9C%AC/pdd_sf2_net.js
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // 延迟
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

// 主运行
    async function run(){
        //主运行
        while (document.querySelector("i[data-testid='beast-core-icon-time-circle_filled']") == null) {
            await sleep(1000);
            if (document.querySelector("i[data-testid='beast-core-icon-time-circle_filled']") != null){
                //console.log("小框框藏起来了")
                break;
            }
        }
        // 获取ClassNumber
        var tClass = document.querySelector("div[data-testid='beast-core-upload']").getAttribute("class");
        var classNum = tClass.split(" ")[0].split("_")[2];
        console.log("小框框藏起来了");
        console.log("classNumber: " + classNum);



        if(document.querySelector(".ICN_outerWrapper_" + classNum).parentNode.querySelector("span").innerText == "待审核"){
            // 待审核
            while (document.querySelector("button.BTN_outerWrapper_" + classNum) == null) {
                await sleep(1000);
                if (document.querySelector("button.BTN_outerWrapper_" + classNum) != null){
                    //console.log("小框框藏起来了")
                    break;
                }
            }

            document.querySelectorAll("button.BTN_outerWrapper_" + classNum)[0].click()
            await sleep(1500);


        }
        window.close();


        // 主运行结束
    }

    run();
})();