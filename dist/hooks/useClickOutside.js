import { useEffect } from 'react';
let useClickOutside = function (target, callback) {
  let handleClickAway = function (event) {
    if (target.current && !target.current.contains(event.target)) {
      callback();
    }
  };
  useEffect(function () {
    document.addEventListener('mousedown', handleClickAway);
    return function () {
      document.removeEventListener('mousedown', handleClickAway);
    };
  });
};
export default useClickOutside;
