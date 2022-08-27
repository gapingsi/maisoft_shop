const express = require('express');
const app = express();
const db = require('./src/config/db');
const env = require('./env');
const customerRoutes = require('./src/routers/customer');

db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('Db connected!');
});

app.use(express.json());
app.use('/api/customer', customerRoutes);

app.listen(env.port, () => {
  console.log(`Server up and running on port ${env.port}`);
});
