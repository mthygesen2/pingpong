describe("numberInput", function() {
  it("is going to replace number with ping", function() {
    expect(numberInput(6)).to.equal("ping");
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
});
