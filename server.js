const express = require('express');
const cors = require('cors');

const {PORT} = require('./consts')

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use(require('./routes/info'));
app.use(require('./routes/hello'));
app.use(require('./routes/store'));
app.use(require('./routes/parse'));
app.use(require('./routes/login'));
app.use(require('./routes/profile'));

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Enabled on port ${PORT}...`);
});
