import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './server/routes/UserRoutes';

const app = express();
const port = process.env.PORT || 8000;

config.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/api/v1/users', userRoutes);

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to this API.',
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;