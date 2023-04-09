import mongoose from "mongoose";

const CONNECTION_STRING = 'mongodb+srv://pasamj:Rishita1@cluster0.puno2qv.mongodb.net/triter?retryWrites=true&w=majority'  || 'mongodb://127.0.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);

import express from 'express';
import cors from 'cors';
import HelloController
  from "./controllers/hello-controller.js";
import UserController
  from "./controllers/users/users-controller.js";
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
const app = express();
app.use(cors());
app.use(express.json());
//app.get('/hello', (req, res) => {res.send('Life is good!')})
//app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);





