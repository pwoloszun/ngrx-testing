import { myAdd } from './my-add';



describe('myAdd', () => {

  it('should do smth', () => {
    // given
    const a = 2;
    const b = 3;

    // when
    const actualValue = myAdd(a, b);

    // then
    const expectedValue = 5;
    expect(actualValue).toEqual(expectedValue);

    // expect(myAdd(2, 3)).toEqual(5);
  });



});
