const express = require('express');
const cors = require('cors');

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

const runServer = (port) => app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Enabled on port ${port}...`);
});


module.exports = { runServer };

