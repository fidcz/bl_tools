// ==UserScript==
// @name         拼多多重新登录
// @namespace    pdd-sf3
// @version      0.1
// @description  try to take over the world!
// @author       fidcz
// @match        https://mms.pinduoduo.com/login*
// @grant        window.focus
// @updateURL    https://gitee.com/fidcz/blyy_tools_update/raw/master/%E5%AE%A1%E6%96%B9%E8%84%9A%E6%9C%AC/pdd_sf3_net.js
// ==/UserScript==

(function() {
    'use strict';
    var Name = "";
    var Pwd = "";

        function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function run(){
        window.focus();

                        while (document.querySelector("div.last-item") == null) {
            await sleep(1000);
            if (document.querySelector("div.last-item") != null){
                //console.log("")
                break;
            }
        }
    console.log("点击账号密码");

    document.querySelector("div.last-item").click();
        //console.log("点击账号密码");
    await sleep(800);
        //window.focus();
    //document.getElementById("usernameId").focus();
        document.getElementById("usernameId").value = Name;
        document.getElementById("passwordId").value = Pwd;
        console.log("点击账号输入框");
        await sleep(1500);

        //window.focus();
        document.querySelector("button[data-testid='beast-core-button']").click();
        console.log("点击登录");
        //document.querySelector("button.BTN_outerWrapperBtn_4-61-1").click();
        await sleep(3000);
        location.reload();
    }


    window.onload = function () {



    run()
}

    // Your code here...
})();