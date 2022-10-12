const fibonacci = function (a) {
  if (isNaN(a)) {
    return false;
  }
  a = parseInt(a);
  if (a <= 0) {
    return "OOPS";
  }
  if (a == 1) {
    return 1;
  }
  if (a == 2) {
    return 1;
  }
  return fibonacci(a - 1) + fibonacci(a - 2);
};

// Do not edit below this line
module.exports = fibonacci;
