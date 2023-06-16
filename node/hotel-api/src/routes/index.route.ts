import Router from 'express'
import userRoute from './user.route'
import roomRoute from './room.route'
const router = Router()

router.use('/user', userRoute)
router.use('/room', roomRoute)

export default router