/**
 * Hosted jQuery Bookmarklet
 * @description A nifty tool for creating hosted javascript browser bookmarklets supporting jQuery
 * @author Laander (http://laander.com) at Konscript (http://konscript.com)
 * @gist https://gist.github.com/gists/750857
 */

/**
 * Usage:
 * The following snippet should be the link saved as a bookmarklet by the user.
 * Instead of a regular website adress, this will execute the remotely located javascript on
 * the page where the user is currently located. Replace the test address with you own.
 *
 * <a alt="My Bookmarklet" href="javascript:(function(){document.body.appendChild(document.createElement('script')).src='http://maxsoe.github.io/experimental/bookmarklets/test/bookmarklet.js');})();">Drag to Bookmarks Bar to save this Bookmarklet</a>
 */

function run() {
  // Your script here.
  // Remember that you have full access to the DOM on which page the bookmarklet is loaded,
  // which means that you can manipulate the content of other sites on-the-fly

  document.body.style.background = "red";
}

function loadJQ() {
  // Load newest jQuery if it isn't already
  if (typeof jQuery == "undefined") {
    var jQuery = document.createElement("script");
    jQuery.type = "text/javascript";
    jQuery.onload = run;
    jQuery.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
    document.body.appendChild(jQuery);
  }
  // Activate no-conflict mode, remember to call jQuery().function instead of $().function
  jQuery.noConflict();
}

loadJQ();
run();
