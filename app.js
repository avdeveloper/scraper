var restify = require('restify'),
    crepe   = require('crepejs'),
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
  var scraper = new crepe(req.params.url, req.params.elements);
  scraper.scrape(function (errors, response) {
    if (errors) return next(errors);
    res.send(response);
  });
});

// Start listening for requests
server.listen(8080, function() {
  console.log("%s listening at %s", server.name, server.url);
});
