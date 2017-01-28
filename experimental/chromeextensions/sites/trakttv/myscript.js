

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
  console.log("Watch now content: ",$("#watch-now-content").get());

  // Get html doc
  // var $myDoc = $.get(chrome.extension.getURL('trakttv/myhtml.html'));
  // console.log("myDoc is ", $.parseHTML($myDoc));
  // $("#ondeck-wrapper").prepend("<div>test</div>");

  $.get(chrome.extension.getURL('trakttv/myhtml.html'), function(data) {
      // $(data).appendTo('#ondeck-wrapper');
    $(data).appendTo('#watch-now-content');
    // Or if you're using jQuery 1.8+:
    // $($.parseHTML(data)).appendTo('body');
  });
});
