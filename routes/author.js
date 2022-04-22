import express from "express";


import { name, age, gender } from "../controller/author";

const router = express.Router()

router.get('/', index)

export default router;