constexpect = chai.expect;

describe("permutationSubstring", function() {
  it(`should return true if given the strings "tbacowa" and "bat"`, function() {
    conststr = "tbacowa";
    constsub = "bat";

    constresult = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return true if given the strings "nAtsuiPlwuan" and "Austin"`, function() {
    conststr = "nAtsuiPlwuan";
    constsub = "Austin";

    constresult = permutationSubstring(str, sub);

    expect(result).to.eql(true);
  });

  it(`should return false if given the strings "nnhsuieaero" and "summer"`, function() {
    conststr = "nnhsuieaero";
    constsub = "summer";

    constresult = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });

  it(`should return false if given the strings "octmantisplantic" and "atlantic ocean"`, function() {
    conststr = "octmantisplantic";
    constsub = "atlantic ocean";

    constresult = permutationSubstring(str, sub);

    expect(result).to.eql(false);
  });
});
