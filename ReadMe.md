1. Getting started:

prerequisites: node and npm
    these are available inside GCP cloud shell if you can't install them locally.

a. open two separate terminals: 1 in /server, 1 in /client
b. run npm install in each terminal
c. run npm start in each terminal
d. navigate to http://localhost:8080

2. The sample app

Uses nodejs with the express web server on both server and client microservices.

The backend server receives REST requests on port 8081 and returns mock data.

The client inserts json from the server into an html template in the Views folder
and returns it to the requestor on port 8080.

client and server both use the following npm packages:

express: a web server
body-parser to convert json and form data in the request into parameters.
mocha, chai and supertest (for unit testing - not included)

The client uses the following additional libaries:

request (sends REST requests)
express-handlebars ( a templating library)
nock (for mocking in unit tests - not included)


