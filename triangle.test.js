const clasificarTriangulo = require('./triangle');

// Clases de equivalencia validas

test('Banana_Equilatero', () => {
  // Arrange
  const a = 5, b = 5, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Equilatero');
});

test('Banana_Isosceles_AB', () => {
  // Arrange
  const a = 5, b = 5, c = 3;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Isosceles_BC', () => {
  // Arrange
  const a = 3, b = 5, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Isosceles_AC', () => {
  // Arrange
  const a = 5, b = 3, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Escaleno', () => {
  // Arrange
  const a = 3, b = 4, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Escaleno');
});

// Clases de equivalencia invalidas

test('Banana_NoEsTriangulo_A', () => {
  // Arrange
  const a = 10, b = 3, c = 3;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_NoEsTriangulo_B', () => {
  // Arrange
  const a = 3, b = 10, c = 3;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_NoEsTriangulo_C', () => {
  // Arrange
  const a = 3, b = 3, c = 10;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_LadoCero', () => {
  // Arrange
  const a = 0, b = 5, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('Los lados deben ser positivos');
});

test('Banana_LadoNegativo', () => {
  // Arrange
  const a = -3, b = 5, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('Los lados deben ser positivos');
});

test('Banana_LadoDecimal', () => {
  // Arrange
  const a = 3.5, b = 4, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('Los lados deben ser enteros');
});

test('Banana_ParametrosFaltantes', () => {
  // Arrange
  const a = 3, b = 4;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, undefined)).toThrow('Los lados deben ser enteros');
});

// Condiciones de borde

test('Banana_CasiEquilatero', () => {
  // Arrange
  const a = 5, b = 5, c = 4;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_CasiIsosceles', () => {
  // Arrange
  const a = 5, b = 6, c = 4;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Escaleno');
});

test('Banana_MuyPequeno', () => {
  // Arrange
  const a = 1, b = 1, c = 1;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Equilatero');
});

test('Banana_MuyGrande', () => {
  // Arrange
  const a = 100000, b = 100000, c = 100000;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Equilatero');
});

test('Banana_FueraDeRango', () => {
  // Arrange
  const a = Number.MAX_SAFE_INTEGER, b = 1, c = 1;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_LadoCortoLargo_ABC', () => {
  // Arrange
  const a = 1, b = 100, c = 100;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_LadoCortoLargo_BAC', () => {
  // Arrange
  const a = 100, b = 1, c = 100;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_LadoCortoLargo_BCA', () => {
  // Arrange
  const a = 100, b = 100, c = 1;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_IgualASuma_A', () => {
  // Arrange
  const a = 10, b = 5, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_IgualASuma_B', () => {
  // Arrange
  const a = 5, b = 10, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_IgualASuma_C', () => {
  // Arrange
  const a = 5, b = 5, c = 10;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_MenorASuma_A', () => {
  // Arrange
  const a = 9, b = 5, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_MenorASuma_B', () => {
  // Arrange
  const a = 5, b = 9, c = 5;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_MenorASuma_C', () => {
  // Arrange
  const a = 5, b = 5, c = 9;
  // Act
  const result = clasificarTriangulo(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_MayorASuma_A', () => {
  // Arrange
  const a = 11, b = 5, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_MayorASuma_B', () => {
  // Arrange
  const a = 5, b = 11, c = 5;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});

test('Banana_MayorASuma_C', () => {
  // Arrange
  const a = 5, b = 5, c = 11;
  // Act & Assert
  expect(() => clasificarTriangulo(a, b, c)).toThrow('No forma un triangulo valido');
});