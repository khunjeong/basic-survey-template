Object.defineProperty(exports, '__esModule', { value: true });
const react_1 = require('react');
const useClickOutside = (target, callback) => {
  const handleClickAway = event => {
    if (target.current && !target.current.contains(event.target)) {
      callback();
    }
  };
  (0, react_1.useEffect)(() => {
    document.addEventListener('mousedown', handleClickAway);
    return () => {
      document.removeEventListener('mousedown', handleClickAway);
    };
  });
};
exports.default = useClickOutside;
