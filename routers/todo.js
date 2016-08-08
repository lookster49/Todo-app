import express from 'express'
import db from './src/database'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('todo', {title: 'Todo App'})
})
router.post('/', (req, res) => {
  console.log(req.body)
})
router.put('/', (req, res) => {
// nothing yet
})
router.delete('/', (req, res) => {
// nothing yet
})
router.post()

export default router
