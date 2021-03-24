// ==UserScript==
// @name         拼多多掉线提醒
// @namespace    pdd-sf3
// @version      0.1
// @description  try to take over the world!
// @author       fidcz
// @match        https://mms.pinduoduo.com/login*
// @grant        window.focus
// @grant        GM_xmlhttpRequest
// @connect      192.168.0.29
// ==/UserScript==

(function() {
    'use strict';
    var ip_port = "192.168.0.29:5000"

        function sleep(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }

    async function run(){
        window.focus();
        GM_xmlhttpRequest({
            method: "GET",
            url: "http://" + ip_port + "/send/拼多多菠萝审方掉线了!",
            timeout: 2000,
            onload: (response) => {
                console.log(response.status)
            }
        });
    }


    window.onload = function () {



    run()
}

    // Your code here...
})();