const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';

app.use(cors({
  origin: FRONTEND_URL
}));

app.use(express.json());

app.get('/api/resume', (req, res) => {
  // This will be implemented once you share your resume
  res.json({ message: 'Resume endpoint' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
