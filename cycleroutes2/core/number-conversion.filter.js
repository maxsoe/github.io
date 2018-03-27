// convert metres into kilometres
angular
  .module('numberConversionFtl', [])
  .filter('numberConversion', function() {
    return function(input) {
      var output = 0;
      if (input > 1000) {
        // divide the input by 1000 to convert to km
        output = (input / 1000).toFixed(2);
      } else {
        // leave the number as metres
        output = input;
      }
      return (output);
    };
  });
