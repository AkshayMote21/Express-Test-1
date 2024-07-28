import { Router } from "express";
import BookRoutes from './book.routes.js'
const router = Router();

router.use('/book',BookRoutes);


export default router;