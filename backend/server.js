import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'
import listRouter from './routes/List.routes.js'
import userRouter from './routes/User.routes.js'
import path from 'path'

const app = express();

mongoose.connect('mongodb+srv://Admin:Beavers228@zoo.0mnlx.mongodb.net/todo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.use('/', listRouter);
app.use('/', userRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'))
})

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started at ${port} port`);
});
