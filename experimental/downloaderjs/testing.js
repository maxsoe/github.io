var zip = new JSZip();

function loadData() {
  // input URL into the text field. must include http
  var myURL = $('#myurl').val();
  //URL needs to be in the format http://blahblah/.../pictures/album/... it's usually the page with all the pics
  var $body = $('body');

  // Check to see that URL is formatted correctly
  var match = (/^http:\/\//i);
  if (match.test(myURL)) {
    startProcessing(myURL);
  } else {
    feedbackLog('URL needs to start with http://');
  }

  return false; // function needs to return false if everything goes as planned
};

function startProcessing(myURL) {
  // Show message that button has been clicked
  feedbackLog("Starting...");

  // Use yahooapis to make a JSON call to the URL, and go return the html.
  $.ajax({
    url: "http://query.yahooapis.com/v1/public/yql?q=select * from html where url =" + "'" + myURL + "'" + "&format=json",
    type: 'GET',
    dataType: 'json'
  }).done(function(response) {
    var interestedObject = response.query.results.body.div.article.section.div[1].div[3].div[0].div[1].div; // specific to the current page
    for (var i = 0; i < interestedObject.length; i++) {
      var currentObj = interestedObject[i].a;
      var linkToFollow = 'http:' + currentObj.href;
      feedbackLog('Processing ' + linkToFollow);
      downloadFromURL(linkToFollow);
    }
    feedbackLog("DONE!");
  });

  function downloadFromURL(url) {
    // var textStr = ('Running downloadFromURL() on ' +url);
    feedbackLog('Running downloadFromURL() on ' + url);

    $.ajax({
      url: "http://query.yahooapis.com/v1/public/yql?q=select * from html where url =" + "'" + url + "'" + "&format=json",
      type: 'GET',
      dataType: 'json'
    }).done(function(response) {
      var interestedObject = response.query.results.body.div.article.section.div[0].div[1].figure.div[1].div.div[2].ul[1].li[1].a;
      feedbackLog('Acquire image from ' + url);

      // var $body = $('body');
      // $body.append('<h1>' +url +'</h1>');
      // $body.append(json2html(interestedObject));
      var imageToDownload = "http:" + interestedObject.href;
      feedbackLog('Download image from ' + '<a href="' + imageToDownload + '">' + imageToDownload + '</a>');

    });
  }
}

function time() {
  var d = new Date();
  var time = d.toLocaleDateString() + ' ' + d.toLocaleTimeString() + ':' + addZero(d.getMilliseconds(), 3);
  // console.log(time);
  return time;

  function addZero(x, n) {
    while (x.toString().length < n) {
      x = "0" + x;
    }
    return x;
  }
}



function feedbackLog(str) {
  $('.feedback-log ul').append('<li>' + time() + ' - ' + str + '</li>');
}

function json2html(json) {
  var key, ret = "";
  ret += "<ul>";
  for (key in json) {
    ret += "<li>" + key + ": ";
    if (typeof json[key] === "object") {
      ret += json2html(json[key]);
    } else {
      ret += json[key];
    }
    ret += "</li>";
  }
  ret += "</ul>";
  return ret;
}

$('#form-container').submit(loadData);
