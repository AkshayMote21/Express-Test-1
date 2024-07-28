import { Router } from "express";
import {GetAllBooks,CreateNewBook,UpdateBook,DeleteBook,GetSingleBook} from '../controllers/book.controller.js'



const router = Router();

router.get('/get-all-books', GetAllBooks);
router.post('/create-new-book', CreateNewBook);
router.put('/update-book', UpdateBook);
router.delete('/delete-book', DeleteBook);
router.get('/get-a-book', GetSingleBook);

export default router;