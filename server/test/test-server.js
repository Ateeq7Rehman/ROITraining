var assert = require('assert');
const request = require('supertest');
const app = require('../server');

describe('GET /', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
  });

  describe('GET /events', function() {
    it('responds with json', function(done) {
      request(app)
        .get('/events')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('returns two events', function(done) {
        request(app)
          .get('/events')
          .set('Accept', 'application/json')
          .expect(200)
          .then(response => {
            assert(response.body.length, 2);
        });
        done();
      });
  });