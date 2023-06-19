import Router from 'express';
import userRoute from './user.route';
import roomRoute from './room.route';
const router = Router();
router.use('/user', userRoute);
router.use('/room', roomRoute);
router.get("/healthcheck", (req, res) => {
    res.status(200).send({ message: "Server dey Up!!! .... Welcome to VicHotels ....", success: true });
});
export default router;
