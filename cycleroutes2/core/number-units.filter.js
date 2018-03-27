// display units for km or m depending on distance
angular
  .module('numberUnitsFtl', [])
  .filter('numberUnits', function() {
    return function(input) {
      var output = 0;
      if (input > 1000) {
        // divide the input by 1000 to convert to km
        output = 'km';
      } else {
        // leave the number as metres
        output = 'm';
      }
      return (output);
    };
  });
