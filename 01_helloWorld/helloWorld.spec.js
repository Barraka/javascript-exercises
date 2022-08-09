const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('"Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
