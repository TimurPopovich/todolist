import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import listRouter from './routes/List.routes.js'
import userRouter from './routes/User.routes.js'

const app = express();

mongoose.connect('mongodb://localhost:27017/ListTask', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', listRouter);
app.use('/', userRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started at ${port} port`);
});
