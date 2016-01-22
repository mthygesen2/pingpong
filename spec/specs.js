describe("numberInput", function() {
  it("is going to replace number with ping", function() {
    expect(numberInput(3)).to.equal("ping");
  });
  it("is going to replace number with ping if the modulo of 3 equals 0", function(){
    expect(numberInput(9)).to.equal("ping");
  });
  it("is going to replace number with pong if the modulo of 5 equals 0", function(){
    expect(numberInput(10)).to.equal("pong");
  });
  it("is going to replace number with pinpong if the modulo of 15 equals 0", function(){
    expect(numberInput(30)).to.equal("pingpong");
  });
  it("is going to return the number value if it is not divisible by 3 or 5", function (){
    expect(numberInput(2)).to.equal(2);
  });
});

describe("numberLoop", function() {
  it("is going to list numbers from 1 to the number input and replacing them with ping, pong or pingpong when needed", function(){
    expect(numberLoop(6)).to.eql([1,2,"ping",4,"pong","ping"]);
  });
});
