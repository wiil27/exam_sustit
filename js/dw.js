document.getElementById('quadratic-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Obtener los valores de los coeficientes
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);

  // Validar que a no sea 0
  if (a === 0) {
    alert('El valor de "a" no puede ser cero en una ecuación cuadrática.');
    return;
  }

  // Calcular el discriminante
  const discriminante = Math.pow(b, 2) - 4 * a * c;

  let resultado = '';

  if (discriminante > 0) {
    // Dos raíces reales diferentes
    const x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    resultado = `Las raíces reales son: x₁ = ${x1.toFixed(2)} y x₂ = ${x2.toFixed(2)}`;
  } else if (discriminante === 0) {
    // Una raíz real doble
    const x = -b / (2 * a);
    resultado = `La raíz real doble es: x = ${x.toFixed(2)}`;
  } else {
    // Raíces complejas (imaginarias)
    const parteReal = -b / (2 * a);
    const parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
    resultado = `Las raíces son complejas: x₁ = ${parteReal.toFixed(2)} + ${parteImaginaria.toFixed(2)}i y x₂ = ${parteReal.toFixed(2)} - ${parteImaginaria.toFixed(2)}i`;
  }

  // Mostrar el resultado
  document.getElementById('result').textContent = resultado;
});
