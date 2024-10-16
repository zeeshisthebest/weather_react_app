const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        return callback(...args);
      }, wait);
    };
  };


  const utils = {
    debounce: debounce
  }

  export default utils;
