"use strict";

var page = require('webpage').create();
var t = 5;
page.settings.resourceTimeout = 5000;
page.open('http://192.168.33.47:8080/font/tyrant/dist/wsAutomationTestReport.html', function(status) {
  console.log("Status: " + status);

});
  	
var interval = setInterval(function(){
    if ( t > 0 ) {
        console.log(t--);
    } else {
        console.log("BLAST OFF!");
		page.render('screenshot.png');
        phantom.exit();
    }
}, 1000);

