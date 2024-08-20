import express from 'express';
import mapping from './routes/index';

const app = express();
const PORT = 1245;

mapping(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
