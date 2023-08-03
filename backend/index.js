// index.js
import express, { json } from 'express';
import cors from 'cors';
import postDataRoutes from './src/routes/postDataRoutes.js';

const app = express();

app.use(cors());
app.use(json());

app.use('/', postDataRoutes);

const port = 3232;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
