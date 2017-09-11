// Get html doc
$.get(chrome.extension.getURL('myhtml.html'), function(data) {
  // $($.parseHTML(data)).appendTo('#ondeck-wrapper');

  $($.parseHTML(data)).appendTo('#watch-now-content');
  console.log("Inserting test into #watch-now-content");
});
