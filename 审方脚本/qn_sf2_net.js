// ==UserScript==
// @name         千牛-药师审方-通过
// @namespace    qn-sf2
// @version      0.2
// @description  try to take over the world!
// @author       fidcz
// @match        *://trade.taobao.com/trade/audit_order.htm?bizOrderId=*
// @grant        window.focus
// @grant        window.close
// @connect      *
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
        /////////// sleep /////////////////
    function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function run() {
        // 主运行

        //.cancelOrder-actions
        window.focus();
        console.log("开始判断");
        await sleep(3000);
        //J_cancelOrder_error

        if(document.querySelector("#cancelOrder-msg") == null){
            window.close();
        }

        if(document.querySelector("#J_cancelOrder_error").querySelector("p").innerText == "该处方状态已变更，请刷新页面"){
            // 刷新
            window.close();
        }
//cancelOrder-msg   确定审核通过本处方药需求单？
        if(document.querySelector("#cancelOrder-msg").querySelector("p").innerText != "确定审核通过本处方药需求单？"){
            // 没有
            window.close();
        }else{
            document.querySelector(".cancelOrder-actions").querySelectorAll("button")[0].click();
            console.log("点击了")
        }
        //console.log(document.querySelector(".cancelOrder-actions"));

        await sleep(1000);
        location.reload();

    }

    window.onload = function () {
        // 等待网页加载完毕
        run();
    }
})();