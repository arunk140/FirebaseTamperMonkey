// ==UserScript==
// @name         Firebase History
// @namespace    http://arunkhanchandani.com/
// @version      0.1
// @description  Store Browser history in Firebase!
// @author       Arun Khanchandani
// @match        *://*/*
// @grant        none
// @require      https://www.gstatic.com/firebasejs/3.1.0/firebase.js
// @noframes
// ==/UserScript==
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
};
firebase.initializeApp(config);
(function() {
    'use strict';
    var d = new Date();
    writeUserData(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours(),d.getMinutes(),d.getSeconds(),window.location.href,document.title);
})();

function writeUserData(pyear, pmonth, pday, phour, pmin, psecond, purl,ptitle) {
  firebase.database().ref(pyear+'/'+pmonth+'/'+pday+'/'+phour+'/'+pmin+'/'+psecond).set({
    url: purl,
    title: ptitle
  });
}
