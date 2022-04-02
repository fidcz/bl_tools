// ==UserScript==
// @name         MT TEST
// @namespace    mttest
// @version      0.1
// @description  heel
// @author       fff
// @include      *yiyao.meituan.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=meituan.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //require.prototype.myConfig = require.prototype.config;

    const myJsUrl = 'https://fidcz.coding.net/p/fidcz_version/d/bl_tools/git/raw/master/js/yiyao.meituan.com';
    const replaceJsUrl = [
        '/static/62416314/js/page/root.js',
        '/static/62416314/js/page/order/search.js'
        ]

    require = function(a,b,c,d){
        //console.log('myJs Req');
        //console.log(a,b,c,d);
        if (replaceJsUrl.includes(a[0])){
            console.log('FIND AND REPLACE!!!');
            a[0] = myJsUrl + a[0];
            // return;
        }
        requirejs(a,b,c,d);
    }
    require.config = function(a){
        //console.log('myJs Con')
        //console.log(a);
        requirejs.config(a);
    }

    window.onload = ()=>{
    }


    // Your code here...
})();