import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('todo', {title: 'Todo App'})
})
router.post('/', (req, res) => {
  console.log(req.body)
})

export default router