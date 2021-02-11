var http = require('http');

var loginRequest = http.request({
  host: process.env.REACT_APP_SERVER_URL,
  path: '/auth/login',
  port: process.env.PORT,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  }
}, function(response) {
  var str = ''
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end', function () {
    const { access_token } = JSON.parse(str);

    var upadatePhotosRequest = http.request({
      host: process.env.REACT_APP_SERVER_URL,
      path: '/tasks/update-photos',
      port: process.env.PORT,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        Accept: 'application/json',
      },
    }, function(response) {
      var str = ''
      response.on('data', function (chunk) {
        str += chunk;
      });
    
      response.on('end', function () {
        console.log(str)  
      });
    });
    upadatePhotosRequest.write(JSON.stringify({
      username: process.env.USER_NAME,
      password: process.env.PASSWORD
    }));
    upadatePhotosRequest.end();
  });
});
loginRequest.write(JSON.stringify({
  username: process.env.USER_NAME,
  password: process.env.PASSWORD
}));
loginRequest.end();
