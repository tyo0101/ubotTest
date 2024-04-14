"use strict";

function calculateChecksum(arcNumber) {
  var areaCodeMap = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    G: 16,
    H: 17,
    I: 34,
    J: 18,
    K: 19,
    L: 20,
    M: 21,
    N: 22,
    O: 35,
    P: 23,
    Q: 24,
    R: 25,
    S: 26,
    T: 27,
    U: 28,
    V: 29,
    W: 32,
    X: 30,
    Y: 31,
    Z: 33
  };
  var firstChar = arcNumber.charAt(0);
  var secondChar = arcNumber.charAt(1);
  var areaCode = areaCodeMap[firstChar];
  var genderCode = areaCodeMap[secondChar];
  var firstPart;

  if (secondChar === 'A' || secondChar === 'B' || secondChar === 'C' || secondChar === 'D') {
    firstPart = Math.floor(areaCode / 10) * 1 + areaCode * 9 % 10 + genderCode % 10 * 8;
    var digits = arcNumber.substr(2);
    var secondPart = 0;

    for (var i = 0; i < 7; i++) {
      secondPart += parseInt(digits.charAt(i)) * (7 - i);
    }

    var sum = firstPart + secondPart;
    var checksum = 10 - sum % 10;
    return checksum;
  } else {
    firstPart = Math.floor(areaCode / 10) * 1 + areaCode * 9 % 10;

    var _digits = arcNumber.substr(1);

    var _secondPart = 0;

    for (var _i = 0; _i < 8; _i++) {
      _secondPart += parseInt(_digits.charAt(_i)) * (8 - _i);
    }

    var _sum = firstPart + _secondPart;

    var _checksum = 10 - _sum % 10;

    return _checksum;
  }
}

var form = document.getElementById('arcNumberForm');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  var arcNumberInput = document.getElementById('arcNumberInput');
  var arcNumber = arcNumberInput.value.trim();
  var enteredChecksum = parseInt(arcNumber.charAt(arcNumber.length - 1)); // 使用者輸入的檢查碼

  var expectedChecksum = calculateChecksum(arcNumber.substr(0, arcNumber.length - 1)); // 預期的檢查碼

  if (enteredChecksum === expectedChecksum) {
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = "\u5C45\u7559\u8B49\u865F\u78BC ".concat(arcNumber, " \u7684\u6AA2\u67E5\u78BC\u6B63\u78BA\uFF1A").concat(enteredChecksum);
  } else {
    var correctarcNumber = arcNumber.substr(0, arcNumber.length - 1) + expectedChecksum;

    var _resultDiv = document.getElementById('result');

    _resultDiv.textContent = "\u60A8\u8F38\u5165\u7684\u6AA2\u67E5\u78BC ".concat(enteredChecksum, " \u932F\u8AA4\uFF0C\u6B63\u78BA\u7684\u6AA2\u67E5\u78BC\u61C9\u70BA ").concat(expectedChecksum, "\u3002\u91CD\u65B0\u8A08\u7B97\u5F8C\u7684\u5C45\u7559\u8B49\u865F\u78BC\uFF1A").concat(correctarcNumber);
    arcNumberInput.value = correctarcNumber; // 更新輸入框的值為正確的居留證號碼
  }
});
//# sourceMappingURL=ARC.dev.js.map
