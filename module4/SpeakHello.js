(function(window) {
// 	var speakWord = "Hello";
	var helloSpeaker = function (name) {
		console.log("Hello" + " " + name);
	}

	window.helloSpeaker = helloSpeaker;

})(window);
