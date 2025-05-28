const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// Serve chessboard.js from node_modules
app.use('/chessboard', express.static(__dirname + '/node_modules/@chrisoakman/chessboardjs/dist'));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

