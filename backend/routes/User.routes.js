import express from 'express'
import bcrypt from 'bcrypt'
import User from '../models/User.models.js'
import jwt from 'jsonwebtoken'
import { authMiddleware } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/login', async (req, res) => {

  const { loginEmail, loginPassword } = req.body.logInfo;

  const findUser = await User.findOne({ email: loginEmail }).populate('list').exec()

  if (findUser && await bcrypt.compare(loginPassword, findUser.password)) {
    const token = jwt.sign({ id: findUser._id }, 'secretKeyTimurJan', { expiresIn: '1h' })

    res.status(200).json({ token, user: findUser })

  } else {
    res.json({ message: "Пользователь не найден" })
  }

})

router.post('/register', async (req, res) => {

  const { name, email, password } = req.body.newUser;

  const findUser = await User.findOne({ email: email })

  if (findUser !== undefined && findUser !== null) {
    const newUser = new User({
      name,
      email,
      password: await bcrypt.hash(password, 10),
    })

    await newUser.save();

    const token = jwt.sign({ id: newUser.id }, 'secretKeyTimurJan', { expiresIn: '1h' })

    res.status(201).json({ user: newUser, token })

  } else {
    res.json({ message: 'Пользователь существует' })
  }

})

router.get('/auth', authMiddleware, async (req, res) => {
  try {
    const findUser = await User.findOne({ _id: req.user.id }).populate('list').exec();
    const token = jwt.sign({ id: findUser._id }, 'secretKeyTimurJan', { expiresIn: '1h' });
    return res.json({
      token,
      user: findUser,
    });
  } catch (error) {
    res.send({ message: 'Server error' });
  }

})


export default router;
