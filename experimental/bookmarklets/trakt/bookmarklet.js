javascript: (function() {
  runme();
})();

function runme() {
  var topAd = document.getElementById("hu-ck-ster-desk-top-wrapper");
  if (topAd) {
    topAd.parentNode.removeChild(topAd);
  }

  var inboxWrapper = document.getElementById("inbox-wrapper");
  if (inboxWrapper) {
    inboxWrapper.parentNode.removeChild(inboxWrapper);
  }

  var middleLight = document.getElementsByClassName("middle light");
  if (middleLight.length > 0) {
    console.log("middleLight: ", middleLight);

    for (x of middleLight) {
      x.style.backgroundColor = "red";
      x.parentNode.removeChild(x);
    }
  }

  var middleDark = document.getElementsByClassName("middle dark");
  if (middleDark.length > 0) {
    console.log("middleDark: ", middleDark);
    for (x of middleDark) {
      x.style.backgroundColor = "orange";
      x.parentNode.removeChild(x);
    }
  }

  var bottomLight = document.getElementsByClassName("bottom light");
  if (bottomLight.length > 0) {
    console.log("bottomLight: ", bottomLight);
    for (x of bottomLight) {
      x.style.backgroundColor = "yellow";
      x.parentNode.removeChild(x);
    }
  }

  var bottomDark = document.getElementsByClassName("bottom dark");
  if (bottomDark.length > 0) {
    console.log("bottomDark: ", bottomDark);
    for (x of bottomDark) {
      x.style.backgroundColor = "green";
      x.parentNode.removeChild(x);
    }
  }
}
<<<<<<< HEAD
=======

middleLight = middleLight[0];
middleLight.style.backgroundColor = "red";
middleLight = middleLight[1];
middleLight.style.backgroundColor = "red";

middleDark = middleDark[0];
middleDark.style.backgroundColor = "orange";

bottomLight = bottomLight[0];
bottomLight.style.backgroundColor = "yellow";

bottomDark = bottomDark[0];
bottomDark.style.backgroundColor = "green";
>>>>>>> fc7e0012f09a77e83eeee1f9eb95339d5afb4483
