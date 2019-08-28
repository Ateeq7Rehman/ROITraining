const assert = require('assert');
const nock = require('nock');
const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    it('responds with html', function(done) {

    //specify the url to be intercepted
    nock("http://localhost:8081")
      //define the method to be intercepted
      .persist()
.log(console.log)
      .get('/events')
      //respond with a OK and the specified JSON response
      .reply(200, {
        "status": 200,
        "events" : [
            { "title": 'an event', "id": 1234, "description": 'something really cool' },
            { "title": 'another event', id: 5678, "description": 'something even cooler' }
        ]
      });


      request(app)
        .get('/')
        .end(function (err, res) {
            //assert that the mocked response is returned
            assert(res.status, 200)
            assert('Content-Type', /json/);
            done();
          });
    });
  });

