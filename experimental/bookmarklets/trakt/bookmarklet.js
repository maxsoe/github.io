javascript: (function() {
  removeAds();
  downloadLinks();
})();

function removeAds() {
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

function downloadLinks() {
  var myKeyValues = {
    "Bob's Burgers": "tt1561755",
    "Curb Your Enthusiasm": "tt0264235",
    "Fresh Off the Boat": "tt3551096",
    "It's Always Sunny in Philadelphia": "tt0472954",
    "Modern Family": "tt1442437",
    "Rick and Morty": "tt2861424",
    "Silicon Valley": "tt2575988",
    "The Mandalorian": "tt8111088",
    "South Park": "tt0121955",
    "Star Trek: Picard": "tt8806524",
    "Supergirl": "tt4016454",
    "The Flash": "tt3107288",
    "The Simpsons": "tt0096697"
  };

  var onDeckShows = document.getElementById("ondeck-shows");

  var myShows = onDeckShows.getElementsByClassName("titles");
  if (myShows.length > 0) {
    console.log("myShows:", myShows);
    for (codeBlock of myShows) {
      var title = codeBlock.children[1].children[2].innerHTML;
      console.log("Title:", title);
      var url = "http://rarbg.to/tv/" + myKeyValues[title] + "/";
      console.log("URL:", url);

      var anchor = document.createElement("A");
      anchor.href = url;
      anchor.text = "Download";

      codeBlock.appendChild(anchor);
    }
  }
}
