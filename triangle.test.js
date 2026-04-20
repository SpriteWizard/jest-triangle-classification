const classifyTriangle = require('./triangle');

// ─── CLASES DE EQUIVALENCIA VÁLIDAS ───────────────────────────

test('Banana_Equilateral_Basic', () => {
  // Arrange
  const a = 5, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Equilateral');
});

test('Banana_Isosceles_AB', () => {
  // Arrange
  const a = 5, b = 5, c = 3;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Isosceles_BC', () => {
  // Arrange
  const a = 3, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Isosceles_AC', () => {
  // Arrange
  const a = 5, b = 3, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Scalene_Basic', () => {
  // Arrange
  const a = 3, b = 4, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Scalene');
});

// ─── CLASES DE EQUIVALENCIA INVÁLIDAS ─────────────────────────

test('Banana_Invalid_NotATriangle_A', () => {
  // Arrange
  const a = 10, b = 3, c = 3;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Invalid_NotATriangle_B', () => {
  // Arrange
  const a = 3, b = 10, c = 3;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Invalid_NotATriangle_C', () => {
  // Arrange
  const a = 3, b = 3, c = 10;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Invalid_ZeroSide', () => {
  // Arrange
  const a = 0, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: sides must be positive');
});

test('Banana_Invalid_NegativeSide', () => {
  // Arrange
  const a = -3, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: sides must be positive');
});

test('Banana_Invalid_FloatSide', () => {
  // Arrange
  const a = 3.5, b = 4, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: sides must be integers');
});

test('Banana_Invalid_WrongParams_TooFew', () => {
  // Arrange
  const a = 3, b = 4;
  // Act
  const result = classifyTriangle(a, b, undefined);
  // Assert
  expect(result).toBe('Invalid: sides must be integers');
});

// ─── CONDICIONES DE BORDE ──────────────────────────────────────

test('Banana_Border_AlmostEquilateral_Isosceles', () => {
  // Arrange - isósceles casi equilátero
  const a = 5, b = 5, c = 4;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Border_AlmostIsosceles_Scalene', () => {
  // Arrange - escaleno casi isósceles
  const a = 5, b = 6, c = 4;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Scalene');
});

test('Banana_Border_VerySmall', () => {
  // Arrange
  const a = 1, b = 1, c = 1;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Equilateral');
});

test('Banana_Border_VeryLarge', () => {
  // Arrange
  const a = 100000, b = 100000, c = 100000;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Equilateral');
});

test('Banana_Border_LongAndShort_ABC', () => {
  // Arrange
  const a = 1, b = 100, c = 100;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Border_LongAndShort_BAC', () => {
  // Arrange
  const a = 100, b = 1, c = 100;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Border_LongAndShort_BCA', () => {
  // Arrange
  const a = 100, b = 100, c = 1;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Border_EqualToSum_A', () => {
  // Arrange - a == b + c, inválido
  const a = 10, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Border_EqualToSum_B', () => {
  // Arrange
  const a = 5, b = 10, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Border_EqualToSum_C', () => {
  // Arrange
  const a = 5, b = 5, c = 10;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});

test('Banana_Border_JustBelowSum_A', () => {
  // Arrange - a apenas menor que b+c, válido
  const a = 9, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Isosceles');
});

test('Banana_Border_JustAboveSum_A', () => {
  // Arrange - a apenas mayor que b+c, inválido
  const a = 11, b = 5, c = 5;
  // Act
  const result = classifyTriangle(a, b, c);
  // Assert
  expect(result).toBe('Invalid: not a valid triangle');
});