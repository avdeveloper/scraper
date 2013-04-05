var restify = require('restify'),
    crepe   = require('crepe'),
    server  = restify.createServer();

// Setup middleware
server.use(restify.bodyParser());

/**
 * Scrape a webpage specified by a URL in the JSON data passed to this call
 * @param (String) url The location to the webpage
 * @param (Object) elements An object whose values are jQuery selectors to select a specific DOM element from scraped web page
 * @return (JSON) An object whose keys are the same as the request object but the values are now the text inside the selected DOM elements if found
 */
server.post('/', function (req, res, next) {
  crepe.scrape({
    url: req.params.url,
    items: req.params.elements,
    error: function (errors) {
      for (var error in errors)
        console.error(errors[error]);
    },
    success: function (data) {
      res.send(data);
    }
  });
});

// Start listening for requests
var port = process.env.PORT || 8080;
server.listen(port, function() {
  console.log("%s listening at %s", server.name, server.url);
});
