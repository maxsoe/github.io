// show full string organiser name
angular
  .module('organiserNameFtl', [])
  .filter('organiserName', function() {
    return function(input) {
      switch (input) {
        case 'altura':
          return ("Altura Road Series")
          break;
        case 'brewin':
          return ("Brewin Dolphin Velo Series")
          break;
        case 'ctc':
          return ("Central London CTC")
          break;
        case 'noexcuses':
          return ("No Excuses Series")
          break;
        case 'roo':
          return ("London Roovolution")
          break;
        case 'sigma':
          return ("Sigma Sport Challenge Series")
          break;
        case 'ukce':
          return ("UK Cycling Events")
          break;
        case 'wiggle':
          return ("Wiggle Super Series")
          break;
        default:
          return (input)
      }
    };
  });
