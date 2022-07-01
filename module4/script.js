(function () {

var name = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < name.length; i++) {
  var startLetter = name[i].charAt(0).toLowerCase();

  if (startLetter === 'j') {
    byeSpeaker(name[i]);
  }
  else {
    helloSpeaker(name[i]);
  }
}

})();
