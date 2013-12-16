
// require lets as use a third-party library
var express = require("express");

//this will create the HTTP-server
var app = express();

//Using a middleware here. and that is an logger that will log 
app.use(express.logger());


// Here we define at HTTP method, pUT that will listen to the root of the application. The put call ha two parameters. the directory and the callback. that will be executed when th route is invoked.
// !!!!REMEMBER THIS IS THE CALLBACK THAT NODE MEANS BY EVENDRIVEN OR EVENTED I/O. The callback is invoked ansychronously. This is an endpoint that can handle a myriad of simultanteous requests with out the need tho manully invoke multiple threads.
app.put('/', function(req, res) {
  res.contentType('json');
  
  //The JSON.stringify takes a hash and converts it to JSON.
  res.send(JSON.stringify({
 "deal_description":"free food at Freddie Fingers",
 "all_tags":"free,burgers,fries"    
}))
  
});


//This variable holds the port on which the application should run. either by optaining the PORT environment variable or on port 3000.
var port = process.env.PORT || 3000;


//Here again we invoke a callback which will be invoked when the app is upp an running.
app.listen(port, function() {
  console.log("Listening on " + port);
});