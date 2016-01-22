describe("numberInput", function() {
  it("is going to replace number with ping", function() {
    expect(numberInput(6)).to.equal("ping");
  });
  it("is going to replace number with ping if the modulo of 3 equals 0", function(){
    expect(numberInput(9)).to.equal("ping");
  });
});
