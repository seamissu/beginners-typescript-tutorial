import { Equal, Expect } from './helpers/type-utils';

type FocusChangeFn = (arg: boolean) => void;

const addListener = (onFocusChange: FocusChangeFn) => {
  window.addEventListener('focus', () => {
    onFocusChange(true);
  });

  window.addEventListener('blur', () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
