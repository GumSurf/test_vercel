const app = require('./app');

app.get('/', (req, res) => {
  res.send('Bienvenue sur mon serveur Express !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});