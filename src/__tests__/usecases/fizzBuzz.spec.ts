import { fizzBuzz } from '@/usecases/fizzBuzz';

describe('test fizzBuzz', () => {
  describe('3と5の両方で割り切れる値を渡した時', () => {
    it('「FizzBuzz」という文字列を返却すること', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
  });

  describe('3で割り切れる値を渡した時', () => {
    it('「Fizz」という文字列を返却すること', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
    });
  });

  describe('5で割り切れる値を渡した時', () => {
    it('「Buzz」という文字列を返却すること', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
    });
  });

  describe('3でも5でも割り切れない値を渡したとき', () => {
    it('渡した値が文字列となって返却されること', () => {
      expect(fizzBuzz(2)).toBe('2');
    });
  });
});
