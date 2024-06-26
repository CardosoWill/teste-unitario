class ServicoExercicio {
  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Os valores não são números");
    }
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Os valores não são números");
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Os valores não são números");
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error("Os valores não são números");
    }
    if (num2 === 0) {
      throw new Error("Divisão por zero não é permitida");
    }
    return num1 / num2;
  }
}

module.exports = ServicoExercicio;
