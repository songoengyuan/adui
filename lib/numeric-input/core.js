"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isLegal = exports.stringToNumber = exports.getDecimalNumber = void 0;

var getDecimalNumber = function getDecimalNumber(value) {
  if (value % 1 === 0) {
    return 0;
  }

  return value.toString().split(".")[1].length;
};

exports.getDecimalNumber = getDecimalNumber;

var stringToNumber = function stringToNumber(value) {
  return value ? Number(value) : 0;
};

exports.stringToNumber = stringToNumber;

var isLegal = function isLegal(step, val, min, max) {
  if (val === "") {
    return true;
  }

  var value = stringToNumber(val);
  var decimal = getDecimalNumber(step);

  if (min !== undefined) {
    return value >= min && (max === undefined || value <= max) && (value * Math.pow(10, decimal) - min * Math.pow(10, decimal)) % (step * Math.pow(10, decimal)) === 0;
  }

  if (max !== undefined) {
    return value <= max && (max * Math.pow(10, decimal) - value * Math.pow(10, decimal)) % (step * Math.pow(10, decimal)) === 0;
  }

  return true;
};

exports.isLegal = isLegal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NvbXBvbmVudHMvbnVtZXJpYy1pbnB1dC9jb3JlLnRzIl0sIm5hbWVzIjpbImdldERlY2ltYWxOdW1iZXIiLCJ2YWx1ZSIsInRvU3RyaW5nIiwic3BsaXQiLCJsZW5ndGgiLCJzdHJpbmdUb051bWJlciIsIk51bWJlciIsImlzTGVnYWwiLCJzdGVwIiwidmFsIiwibWluIiwibWF4IiwiZGVjaW1hbCIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsS0FBRCxFQUFtQjtBQUNqRCxNQUFJQSxLQUFLLEdBQUcsQ0FBUixLQUFjLENBQWxCLEVBQXFCO0FBQ25CLFdBQU8sQ0FBUDtBQUNEOztBQUNELFNBQU9BLEtBQUssQ0FBQ0MsUUFBTixHQUFpQkMsS0FBakIsQ0FBdUIsR0FBdkIsRUFBNEIsQ0FBNUIsRUFBK0JDLE1BQXRDO0FBQ0QsQ0FMTTs7OztBQVdBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0osS0FBRDtBQUFBLFNBQzVCQSxLQUFLLEdBQUdLLE1BQU0sQ0FBQ0wsS0FBRCxDQUFULEdBQW1CLENBREk7QUFBQSxDQUF2Qjs7OztBQVVBLElBQU1NLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQ3JCQyxJQURxQixFQUVyQkMsR0FGcUIsRUFHckJDLEdBSHFCLEVBSXJCQyxHQUpxQixFQUtsQjtBQUNILE1BQUlGLEdBQUcsS0FBSyxFQUFaLEVBQWdCO0FBQ2QsV0FBTyxJQUFQO0FBQ0Q7O0FBQ0QsTUFBTVIsS0FBSyxHQUFHSSxjQUFjLENBQUNJLEdBQUQsQ0FBNUI7QUFDQSxNQUFNRyxPQUFPLEdBQUdaLGdCQUFnQixDQUFDUSxJQUFELENBQWhDOztBQUNBLE1BQUlFLEdBQUcsS0FBS0csU0FBWixFQUF1QjtBQU9yQixXQUNFWixLQUFLLElBQUlTLEdBQVQsS0FDQ0MsR0FBRyxLQUFLRSxTQUFSLElBQXFCWixLQUFLLElBQUlVLEdBRC9CLEtBRUEsQ0FBQ1YsS0FBSyxZQUFHLEVBQUgsRUFBU1csT0FBVCxDQUFMLEdBQXdCRixHQUFHLFlBQUcsRUFBSCxFQUFTRSxPQUFULENBQTVCLEtBQWlESixJQUFJLFlBQUcsRUFBSCxFQUFTSSxPQUFULENBQXJELE1BQ0UsQ0FKSjtBQU1EOztBQUNELE1BQUlELEdBQUcsS0FBS0UsU0FBWixFQUF1QjtBQU1yQixXQUNFWixLQUFLLElBQUlVLEdBQVQsSUFDQSxDQUFDQSxHQUFHLFlBQUcsRUFBSCxFQUFTQyxPQUFULENBQUgsR0FBc0JYLEtBQUssWUFBRyxFQUFILEVBQVNXLE9BQVQsQ0FBNUIsS0FBaURKLElBQUksWUFBRyxFQUFILEVBQVNJLE9BQVQsQ0FBckQsTUFDRSxDQUhKO0FBS0Q7O0FBSUQsU0FBTyxJQUFQO0FBQ0QsQ0F6Q00iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWPluW+l+Wwj+aVsOeCueWQjuWHoOS9jVxuICogQHBhcmFtIHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBnZXREZWNpbWFsTnVtYmVyID0gKHZhbHVlOiBudW1iZXIpID0+IHtcbiAgaWYgKHZhbHVlICUgMSA9PT0gMCkge1xuICAgIHJldHVybiAwXG4gIH1cbiAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpWzFdLmxlbmd0aFxufVxuXG4vKipcbiAqIOWwhuWtl+espuS4sui9rOaNouaIkOaVsOWtl++8jOWvueepuuWtl+espui9rOaNouaIkCAwXG4gKiBAcGFyYW0gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ1RvTnVtYmVyID0gKHZhbHVlPzogc3RyaW5nIHwgbnVsbCkgPT5cbiAgdmFsdWUgPyBOdW1iZXIodmFsdWUpIDogMFxuXG4vKipcbiAqIOWIpOaWreWtl+espuS4suaYr+WQpuWQiOazlVxuICogQHBhcmFtIHN0ZXBcbiAqIEBwYXJhbSB2YWxcbiAqIEBwYXJhbSBtaW5cbiAqIEBwYXJhbSBtYXhcbiAqL1xuZXhwb3J0IGNvbnN0IGlzTGVnYWwgPSAoXG4gIHN0ZXA6IG51bWJlcixcbiAgdmFsPzogc3RyaW5nLFxuICBtaW4/OiBudW1iZXIsXG4gIG1heD86IG51bWJlclxuKSA9PiB7XG4gIGlmICh2YWwgPT09IFwiXCIpIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG4gIGNvbnN0IHZhbHVlID0gc3RyaW5nVG9OdW1iZXIodmFsKVxuICBjb25zdCBkZWNpbWFsID0gZ2V0RGVjaW1hbE51bWJlcihzdGVwKVxuICBpZiAobWluICE9PSB1bmRlZmluZWQpIHtcbiAgICAvKipcbiAgICAgKiDlpoLmnpzmnInmnIDlsI/lgLzvvIzliJnliKTmlq3vvJpcbiAgICAgKiAxLiDmmK/lkKbkuI3mr5TmnIDlsI/lgLzlsI/vvJtcbiAgICAgKiAyLiDmmK/lkKblrZjlnKjmnIDlpKflgLzvvIzlpoLmnpzlrZjlnKjliJnopoHmr5TmnIDlpKflgLzlsI/vvJtcbiAgICAgKiAzLiDkuI7mnIDlsI/lgLznmoTlt67lgLzmmK/lkKbmlbTpmaQgc3RlcOOAglxuICAgICAqL1xuICAgIHJldHVybiAoXG4gICAgICB2YWx1ZSA+PSBtaW4gJiZcbiAgICAgIChtYXggPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA8PSBtYXgpICYmXG4gICAgICAodmFsdWUgKiAxMCAqKiBkZWNpbWFsIC0gbWluICogMTAgKiogZGVjaW1hbCkgJSAoc3RlcCAqIDEwICoqIGRlY2ltYWwpID09PVxuICAgICAgICAwXG4gICAgKVxuICB9XG4gIGlmIChtYXggIT09IHVuZGVmaW5lZCkge1xuICAgIC8qKlxuICAgICAqIOWmguaenOWPquacieacgOWkp+WAvO+8jOWImeWIpOaWre+8mlxuICAgICAqIDEuIOaYr+WQpuS4jeavlOacgOWkp+WAvOWkp++8m1xuICAgICAqIDIuIOS4juacgOWkp+WAvOeahOW3ruWAvOaYr+WQpuaVtOmZpCBzdGVw44CCXG4gICAgICovXG4gICAgcmV0dXJuIChcbiAgICAgIHZhbHVlIDw9IG1heCAmJlxuICAgICAgKG1heCAqIDEwICoqIGRlY2ltYWwgLSB2YWx1ZSAqIDEwICoqIGRlY2ltYWwpICUgKHN0ZXAgKiAxMCAqKiBkZWNpbWFsKSA9PT1cbiAgICAgICAgMFxuICAgIClcbiAgfVxuICAvKipcbiAgICog5aaC5p6c5rKh5pyJ6K6+572uIG1pbiDkuI4gbWF477yM6YKj5LmIIHN0ZXAg55qE5oSP5LmJ5Lmf5rKh5pyJ5LqG77yM6L+Z5qC35Lu75L2V5pWw6YO95piv5ZCI5rOV55qE44CCXG4gICAqL1xuICByZXR1cm4gdHJ1ZVxufVxuIl19