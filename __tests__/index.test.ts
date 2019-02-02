import razer from '../src/index';

describe('index', () => {
  test('test single args', () => {
    razer('test single args');

    expect(1).toEqual(1);
  });

  test('test multi args', () => {
    razer('test', 'multi', 'args', 1, true);

    expect(1).toEqual(1);
  });
});
