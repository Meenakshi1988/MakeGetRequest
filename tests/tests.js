const expect = require('chai').expect;
const request = require('request');

describe('Unit tests for GET request', function () {
    
    it('Check for status code', function () {
        request('https://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
            expect(response.statusCode).to.equal(200, "Error: Response code ! equals 200");
        });
    });

    it('Check for userId', function () {
        request('https://jsonplaceholder.typicode.com/posts/1', function (error, response, body) {
            expect(JSON.parse(response.body).userId).to.equal(1, "Error: Userid from response body ! equals 1");
        });
    });
});