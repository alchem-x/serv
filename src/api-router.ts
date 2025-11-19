import { Router } from 'express'

export const createAPIRouter = () => {
  const router = Router()

  router.get('/api/hi', (req, res) => {
    res.send('serv')
  })

  return router
}
