// ==UserScript==
// @name     Large YT Profile Pics
// @version  1
// @match    *://yt3.ggpht.com/*
// @grant    none
// ==/UserScript==

var imageURL = window.location.toString();
var regex = /=.*/;

window.addEventListener('load', function() {
		window.location = imageURL.replace(regex,"");
	}, false);
