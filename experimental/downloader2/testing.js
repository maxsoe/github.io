
$.ajax({
  url:"http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20html%20where%20url%3D'http://www.google.com'&format=xml&callback=callback",
  type: 'GET',
  dataType: 'jsonp'
});

  function callback(data){
    $('#result').html(data.results[0]);
  }
