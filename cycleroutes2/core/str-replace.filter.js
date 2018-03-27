// a generic replace filter
// README: https://stackoverflow.com/questions/31939288/angular-filter-to-replace-all-underscores-to-spaces
angular
  .module('strReplaceFtl', [])
  .filter('strReplace', function() {
    return function(input, from, to) {
      input = input || '';
      from = from || '';
      to = to || '';
      return input.replace(new RegExp(from, 'g'), to);
    };
  });
