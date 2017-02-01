

$(window).ready(function() {
  console.log("trakttv myscript is ready to go");

  // Insert CSS
  var path = chrome.extension.getURL('trakttv/mycss.css');
  $('head').append($('<link>')
      .attr("rel","stylesheet")
      .attr("type","text/css")
      .attr("href", path));
});

// Watch a show
$(".watch-now").click (function () {
  // console.log("Watch now content: ",$("#watch-now-content").get());

  insertThisFile('trakttv/myhtml.html');
  // Get html doc
  // var myURL = chrome.extension.getURL('trakttv/myhtml.html');
  //
  // $.get( myURL, function( myHTML ) {
  //   console.log("myhtml is : ", myHTML);
  //   var newItem = $(myHTML).filter('.test')[0].outerHTML;
  //   $("#watch-now-content").prepend(newItem);
  // });
});

function insertThisFile(myURL) {
  var processedURL = chrome.extension.getURL(myURL);
  console.log("myURL is", myURL);
  console.log("myURL is recognised as", processedURL);
  $.get( processedURL, function( myHTML ) {
    console.log("myHTML is : ", myHTML);
    var watchNowContent = $("#watch-now-content").get();
    console.log("Watch now content: ", watchNowContent);
    console.log("first child is : ", watchNowContent[0].firstChild);
    // $("#watch-now-content").replaceWith(myHTML);

  });

  // var newItem = $(thisURL).filter('.test')[0].outerHTML;
  // console.log("Contents of thisURL is ", newItem);
}
