const values = require('./joinStrings')

describe('step 2', () => {
  test('firstName is Carlos', () => {
    expect(values.firstName).toEqual('Stefan');
  });
  test('lastName is Stevenson', () => {
    expect(values.lastName).toEqual('Sisu');
  });
  test('thisYear is 1965', () => {
    expect(values.thisYear).toEqual(2025);
  });
  test('birthYear is 1947', () => {
    expect(values.birthYear).toEqual(2005);
  });
  test('greeting is properly output', () => {
    expect(values.greeting).toEqual('Hello! My first name is Stefan and my last name is Sisu and I am 20 years old.');
  });
});

describe('step 3', () => {
  test('fullName is Carlos Stevenson', () => {
    expect(values.fullName).toEqual('Stefan Sisu');
  });
  test('age is 18', () => {
    expect(values.age).toEqual(20);
  });
});
