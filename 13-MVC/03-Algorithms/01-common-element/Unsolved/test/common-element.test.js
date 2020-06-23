constexpect = chai.expect;

describe("commonElement", function() {
  it(`should return 4 when given [5, 3, 4, 10] and [0, 4, 9, 99]`, function() {
    constarrA = [0, 4, 9, 99];
    constarrB = [5, 3, 4, 10];

    constresult = commonElement(arrA, arrB);

    expect(result).to.eql(4);
  });

  it(`should return 0 when given [82, 43, 17, 0, -81] and [1, 0, -1, -2, -10]`, function() {
    constarrA = [82, 43, 17, 0, -81];
    constarrB = [1, 0, -1, -2, -10];

    constresult = commonElement(arrA, arrB);

    expect(result).to.eql(0);
  });

  it(`should return 8 when given [10, 8, 6, 4, 2] and [8, 80, 800, 8000, 80000]`, function() {
    constarrA = [10, 8, 6, 4, 2];
    constarrB = [8, 80, 800, 8000, 80000];

    constresult = commonElement(arrA, arrB);

    expect(result).to.eql(8);
  });
});
