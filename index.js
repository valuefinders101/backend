import express from 'express'
import bodyParser from 'body-parser';
import { MONGO_URL } from './config/index.js';
import mongoose from 'mongoose';
import cors from 'cors';
const port = 5000




const app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// app.use(cors({
//     origin: 'http://localhost:3000',
//     credentials: false,
//     method: ['GET', 'POST', 'PUT', 'DELETE'],

// }));
//app.use(crossOrigin());
//app.use(cors(corsOptions)) // Use this after the variable declaration

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // Update to match the domain you will make the request from
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//import routes
import {userRoute, powerRoute, customerRoute} from './routes/index.js';

//routes
app.use('/user', userRoute);
app.use('/power', powerRoute);
app.use('/customers', customerRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Mybudy!')
})

//connect to mongodb
mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(process.env.PORT || port, () => {
    console.log(`Borrowlite listening at http://localhost:${port}`)
    }
)
