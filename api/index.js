import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Tamanduá Open Source API.'
}));

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});

export default app;