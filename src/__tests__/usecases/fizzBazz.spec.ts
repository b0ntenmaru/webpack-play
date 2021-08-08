import { sample } from '@/usecases/fizzBazz';

test('basic', () => {
  expect(sample()).toBe(0);
});
