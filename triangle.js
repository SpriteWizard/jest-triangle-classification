function clasificarTriangulo(a, b, c) {
  // Validaciones de tipo y formato
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
    throw new Error('Los lados deben ser enteros');
  }

  // Negativos o ceros
  if (a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Los lados deben ser positivos');
  }

  // Desigualdad triangular
  if (a >= b + c || b >= a + c || c >= a + b) {
    throw new Error('No forma un triangulo valido');
  }

  // Clasificacion
  if (a === b && b === c) {
    return 'Equilatero';
  } else if (a === b || b === c || a === c) {
    return 'Isosceles';
  } else {
    return 'Escaleno';
  }
}

module.exports = clasificarTriangulo;