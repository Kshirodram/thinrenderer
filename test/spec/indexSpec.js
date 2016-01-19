var appRoutes = require('../mock/api/appRoute');

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  describe('index', function() {
    it('returns hello world', function() {
      appRoutes['/'].fn({}, {
        json: function(data) {
          expect(data).toEqual({ foo: 'hello world' });
        }
      });
    });
  });
});