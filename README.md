# Friend-Finder
Heroku app demonstrating creation of api and use of server-side processes in Node.js.
Uses clean file structure, demonstrating use of module exports and require.
Uses express node module for simplicity in routing and data parsing.
Uses Bootstrap and jQuery for simplicity in html and on-click requests.
Demonstrates use of constructors in building mock data values.
Demonstrates use of basic input validation to check for empty input fields and names already in api.
Uses routing files to hold functions that handle GET and POST requests from url, links, and buttons.
POST requests are made using JSON data, parsed with express.json() middleware.
Stores data as JavaScript objects in order to circumvent need for external database, which means that data will only be held for as long as the server remains open.
Data resets upon server reset, initializing with a set of mock values.