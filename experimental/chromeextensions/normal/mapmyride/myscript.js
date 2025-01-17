$(window).ready(function() {
  console.log("Max's mapmyride script is ready to go");
});

// when there are changes in the target (the table)
var observer = new MutationObserver (function(mutations){
  $(".strava_clone").remove(); // reset the new container
  createContainer(); // create the container
  insertThisFile('mapmyride/myhtml.html');
});

// types of things to observe
var observerConfig = {
  childList: true,
  subtree: true
};

// Define the target for observer
var targetNode = document.querySelector('.tableContainer-3g8hA');
observer.observe(targetNode, observerConfig);

// Set up container
function createContainer() {
  var myContainer = '<div class="strava_clone container"></div>'
  $(".resultsContainer--gP9T").before(myContainer);
}

function insertThisFile(myURL) {
  var processedURL = chrome.extension.getURL(myURL);
  // console.log("myURL is", myURL);
  // console.log("myURL is recognised as", processedURL);
  $.get( processedURL, function( myHTML ) {
    // console.log("myHTML is: ", myHTML);

    var currentPageContent = $(".tableContainer-3g8hA tbody").get();
    // console.log("Content on the current page is: ", currentPageContent);

    var rowArray = currentPageContent[0].children;
    // console.log("the children are: ", rowArray);
    // console.log("row length is: ", rowArray.length);

    for (var i = 0; i < rowArray.length; i++) {
      var columnArray = rowArray[i].children;
      // console.log("row[" +i +"] is ", columnArray);
      var map = columnArray[0].firstChild.firstChild;
      // console.log("map " +i +": ", map);
      var date = columnArray[1].firstChild.firstChild;
      // console.log("date " +i +": ", date);
      var distance = columnArray[2].firstChild.firstChild;
      // console.log("distance " +i +": ", distance);
      var distanceUnit = columnArray[2].firstChild.children[1];
      // console.log("distance unit " +i +": ", distanceUnit);
      var elevation = columnArray[3].firstChild.firstChild;
      // console.log("elevation " +i +": ", elevation);
      var elevationUnit = columnArray[3].firstChild.children[1];
      // console.log("elevation unit " +i +": ", elevationUnit);
      var name = columnArray[4].firstChild;
      // console.log("name " +i +": ", name);
      var city = columnArray[5].firstChild;
      // console.log("city " +i +": ", city);
      var privacy = columnArray[6].firstChild;
      // console.log("privacy " +i +": ", privacy);
      var copy = columnArray[7].children[0];
      // console.log("copy " +i +": ", copy);
      var edit = columnArray[7].children[1];
      // console.log("ride " +i +": ", edit);

      // Replace elements in HTML
      var outputHTML = myHTML.replace("<map></map>", map.outerHTML);
      outputHTML = outputHTML.replace("size=100x100", "size=220x124"); // change map size
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
      $(".strava_clone").append(outputHTML);
    }
    // console.log("myHTML is: ", myHTML);
    // console.log("outputHTML is: ", outputHTML);
  });
}
