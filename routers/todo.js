import express from 'express'
import todos from '../seeds/dev/todos'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('todo', {title: 'Todo App'})
})
router.post('/add', (req, res) => {
  console.log(req.body)
})
router.get('/edit', (req, res) => {
// nothing yet
})
router.delete('/delete', (req, res) => {
// nothing yet
})

export default router
