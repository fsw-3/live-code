import express from "express";
import { title, isbn, price, stock } from "../controller/book";

const router = express.Router()

router.get('/books', index)

export default router;