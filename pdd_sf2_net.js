// ==UserScript==
// @name         拼多多审方-通过
// @namespace    pdd-sf-tg
// @version      0.2
// @description  try to take over the world!
// @author       fidcz
// @match        *mms.pinduoduo.com/orders/medicine/detail?orderSn*
// @grant        none
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/pdd_sf_net.js
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


        if(document.querySelector("i[data-testid='beast-core-icon-time-circle_filled']").parentNode.querySelector("span").innerText == "待审核"){
            // 待审核
            while (document.querySelector("button.BTN_outerWrapper_4-103-1") == null) {
                await sleep(1000);
                if (document.querySelector("button.BTN_outerWrapper_4-103-1") != null){
                    //console.log("小框框藏起来了")
                    break;
                }
            }

            document.querySelectorAll("button.BTN_outerWrapper_4-103-1")[0].click()
            await sleep(1500);


        }
        window.close();


        // 主运行结束
    }

    run();
})();