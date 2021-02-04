// ==UserScript==
// @name         拼多多重新登录
// @namespace    pdd-sf3
// @version      0.1
// @description  try to take over the world!
// @author       fidcz
// @match        https://mms.pinduoduo.com/login*
// @grant        GM_openInTab
// ==/UserScript==

(function() {
    'use strict';

        function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function run(){

    document.querySelector("div.last-item").click();


                while (document.getElementById("usernameId").value == "") {
            await sleep(1000);
            if (document.getElementById("usernameId").value != ""){
                //console.log("小框框藏起来了")
                break;
            }
        }
        document.querySelector("button[data-testid='beast-core-button']").click();
        //document.querySelector("button.BTN_outerWrapperBtn_4-61-1").click();
        await sleep(3000);
        location.reload();
    }


    window.onload = function () {



    run()
}

    // Your code here...
})();