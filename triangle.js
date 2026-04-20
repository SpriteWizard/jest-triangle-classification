function classifyTriangle(a, b, c) {
  // Validaciones de tipo y formato
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    return 'Invalid: sides must be integers';
  }

  // Negativos o ceros
  if (a <= 0 || b <= 0 || c <= 0) {
    return 'Invalid: sides must be positive';
  }

  // Desigualdad triangular
  if (a >= b + c || b >= a + c || c >= a + b) {
    return 'Invalid: not a valid triangle';
  }

  // Clasificación
  if (a === b && b === c) {
    return 'Equilateral';
  } else if (a === b || b === c || a === c) {
    return 'Isosceles';
  } else {
    return 'Scalene';
  }
}

module.exports = classifyTriangle;