

$(window).ready(function() {
  console.log("Max's mapmyride script is ready to go");

  // Insert CSS
  // var path = chrome.extension.getURL('trakttv/mycss.css');
  // $('head').append($('<link>')
  //     .attr("rel","stylesheet")
  //     .attr("type","text/css")
  //     .attr("href", path));

  // Insert HTML file
  insertThisFile('mapmyride/myhtml.html');
});

// Update the contents of the page when using pagination
// $(".button-j8tje").click (function() {
//   insertThisFile('mapmyride/myhtml.html');
// });

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
    // console.log("myHTML is: ", myHTML);
    var currentPageContent = $(".tableContainer-3g8hA tbody").get();
    console.log("Content on the current page is: ", currentPageContent);
    var rowArray = currentPageContent[0].children;
    console.log("the children are: ", rowArray);
    console.log("row length is: ", rowArray.length);

    for (i = 0; i < rowArray.length; i++) {
      columnArray = rowArray[i].children;
      // console.log("row[" +i +"] is ", columnArray);

      var map = columnArray[0].firstChild.firstChild;
      console.log("map " +i +": ", map);

      var date = columnArray[1].firstChild.firstChild;
      console.log("date " +i +": ", date);

      var distance = columnArray[2].firstChild.firstChild;
      console.log("distance " +i +": ", distance);

      var distanceUnit = columnArray[2].firstChild.children[1];
      console.log("distance unit " +i +": ", distanceUnit);

      var elevation = columnArray[3].firstChild.firstChild;
      console.log("elevation " +i +": ", elevation);

      var elevationUnit = columnArray[3].firstChild.children[1];
      console.log("elevation unit " +i +": ", elevationUnit);

      var name = columnArray[4].firstChild;
      console.log("name " +i +": ", name);

      var city = columnArray[5].firstChild;
      console.log("city " +i +": ", city);

      var privacy = columnArray[6].firstChild;
      console.log("privacy " +i +": ", privacy);

      var copy = columnArray[7].children[0];
      console.log("copy " +i +": ", copy);

      var edit = columnArray[7].children[1];
      console.log("ride " +i +": ", edit);

      // Replace elements in HTML


      outputHTML = myHTML.replace("<map></map>", map.outerHTML);

      // change map size
      outputHTML = outputHTML.replace("size=100x100", "size=400x400");
      outputHTML = outputHTML.replace("<date></date>", date.outerHTML);
      outputHTML = outputHTML.replace("<distance></distance>", distance.outerHTML);
      outputHTML = outputHTML.replace("<distanceUnit></distanceUnit>", distanceUnit.outerHTML);
      outputHTML = outputHTML.replace("<elevation></elevation>", elevation.outerHTML);
      outputHTML = outputHTML.replace("<elevationUnit></elevationUnit>", elevationUnit.outerHTML);
      outputHTML = outputHTML.replace("<name></name>", name.outerHTML);
      outputHTML = outputHTML.replace("<city></city>", city.data);
      outputHTML = outputHTML.replace("<privacy></privacy>", privacy.outerHTML);
      outputHTML = outputHTML.replace("<copy></copy>", copy.outerHTML);
      outputHTML = outputHTML.replace("<edit></edit>", edit.outerHTML);

      console.log("outputHTML is: ", outputHTML);
      $(".resultsContainer--gP9T").before(outputHTML);
    }



    // console.log("row 0 is: ", row[0]);
    // console.log("first child is: ", currentPageContent[0].firstChild);
    // $("#watch-now-content").replaceWith(myHTML);

    // var mapImage = $(".thumbnailCell-2isXz").get();
    // console.log("mapImage is: ", mapImage);

  });

  // var newItem = $(thisURL).filter('.test')[0].outerHTML;
  // console.log("Contents of thisURL is ", newItem);
}
