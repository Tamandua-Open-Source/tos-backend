require('dotenv').config();

import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './server/routes/UserRoutes';
import stretchingRoutes from './server/routes/StretchingRoutes';
import bodyPartRoutes from './server/routes/BodyPartRoutes';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/users', userRoutes);
app.use('/api/v1/stretchings', stretchingRoutes);
app.use('/api/v1/bodypart', bodyPartRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.',
}));

app.listen(port, () => {
   console.log(`Server port: ${port}`);
});

export default app;