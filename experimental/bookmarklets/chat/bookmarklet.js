javascript: (function() {
  runme();
})();

function runme() {
  var theHolder = document.getElementsByClassName("the-holder");
  var theHolder = theHolder[0];
  theHolder.parentNode.removeChild(theHolder);

  var theTxtHolder = document.getElementById("the-txt-holder");
  theTxtHolder.parentNode.removeChild(theTxtHolder);

  var chatFrame = document.getElementById("chat-frame");
  chatFrame.style.height = "100%";
}
