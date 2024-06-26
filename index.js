const express = require('express');
const ServicoExercicio = require('./src/services/service');
const app = express();
app.use(express.json());

const servicoExercicio = new ServicoExercicio();

app.post('/api/somar', (req, res) => {
  const { num1, num2 } = req.body;

  try {
    const resultado = servicoExercicio.Somar(Number(num1), Number(num2));
    res.json({ resultado });
  } catch (error) {
    if (error.message === "Os valores não são números") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});

app.post('/api/subtrair', (req, res) => {
  const { num1, num2 } = req.body;

  try {
    const resultado = servicoExercicio.Subtrair(Number(num1), Number(num2));
    res.json({ resultado });
  } catch (error) {
    if (error.message === "Os valores não são números") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});

app.post('/api/dividir', (req, res) => {
  const { num1, num2 } = req.body;

  try {
    const resultado = servicoExercicio.Dividir(Number(num1), Number(num2));
    res.json({ resultado });
  } catch (error) {
    if (error.message === "Divisão por zero não é permitida") {
      res.status(400).json({ error: error.message });
    } else if (error.message === "Os valores não são números") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});

app.post('/api/multiplicar', (req, res) => {
  const { num1, num2 } = req.body;

  try {
    const resultado = servicoExercicio.Multiplicar(Number(num1), Number(num2));
    res.json({ resultado });
  } catch (error) {
    if (error.message === "Os valores não são números") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(3000, () => {
    console.log('Servidor está rodando na porta 3000');
  });
}

module.exports = app;
