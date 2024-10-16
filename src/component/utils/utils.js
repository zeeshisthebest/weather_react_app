
/**
 *
 * @param {func} callback Function to be invoked after wait
 * @param {number} wait waiting time in milliseconds
 * @returns Function
 */

const debounce = (callback, wait) => {
    let timeoutId = null;
    return (...args) => {
      window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        return callback(...args);
      }, wait);
    };
  };


  /**
 *
 * @param {string} time Should be in the format "hh:mm [AM|PM]"
 * @returns Time in 24 hr format
 */

const to24 = (time) => {
  let [time2, amPm] = time.split(" ");
  //Before the data is loaded
  if (!amPm) return time;

  let [hr, min] = time2.split(':');
  if (amPm.toLowerCase() === 'pm') {
      return hr === "12" ? time2 : `${parseInt(hr) + 12}:${min}`;
  } else {
      return hr === '12' ? `00:${min}` : time2;
  }

}


  const utils = {
    debounce: debounce,
    to24: to24
  }

  export default utils;
