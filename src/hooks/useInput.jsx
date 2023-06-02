import {useState} from 'react';

// eslint-disable-next-line require-jsdoc
function useInput(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);
  const onValueChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return [value, onValueChangeHandler];
}

export default useInput;
