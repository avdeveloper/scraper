# Page Scraper
A NodeJS scraper as light as crepe

## How to Use
1. Clone the repo and start the server:
    node app
2. Pass a JSON object to the server containing URL and elements you want to select (use jQuery selectors)
    curl -X POST -H "Content-Type:application/json" -d "{ "url": "http://google.com", "elements": { "navButton": "#gb_25" } }" http://your-scraper-server/
3. Digest the scraped data

## Notes
At the moment, crepejs only scrapes text from the selected elements. In a future release, there will be an option to fetch the entire DOM element instead
