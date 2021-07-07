import express from 'express'
import List from '../models/List.models.js'
import User from '../models/User.models.js'

const router = express.Router()

router.post('/list', async (req, res) => {

  const { title, id } = req.body;

  const findUser = await User.findOne({ _id: id })

  const newPost = new List({
    title,
    author: id
  })

  await newPost.save();

  console.log(findUser, newPost);
  findUser.list.push(newPost._id)
  

  await findUser.save()

  res.status(201).json({ newPost })

})

router.put('/list', async (req, res) => {

  const { id } = req.body;

  const findPostBoolean = await List.findById(id)

  const findPost = await List.findByIdAndUpdate(id, { status: !findPostBoolean.status })

  res.status(201).json({ findPost })

})

router.delete('/list', async (req, res) => {

  const { id, idUser } = req.body;

  const findUser = await User.findOne({ _id: idUser })

  const i = findUser.list.indexOf(id)

  findUser.list.splice(i, 1)

  await findUser.save()

  await List.findByIdAndDelete(id)

  res.sendStatus(201)

})

router.put('/listOne', async (req, res) => {

  const { id, title } = req.body;

  await List.findByIdAndUpdate(id, { title })

  res.sendStatus(201)

})
export default router;
