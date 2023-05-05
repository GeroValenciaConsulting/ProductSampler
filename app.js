const express = require('express');
const app = express();
const port = 3000;
const productRoutes = require('./routes/productRoutes');

// to parse JSON request body
app.use(express.json());

// Use product routes
app.use('/products', productRoutes);

// Error messages
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    return res.status(400).send({ error: 'Invalid JSON' });
  } else {
    return res.status(404).send({ error: 'Resource not found' });
  }
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});