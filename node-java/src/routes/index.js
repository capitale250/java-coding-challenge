import express  from "express";
import {User} from '../controllers/users.js'


const router=express.Router();

//user login and signup

router.post('/login',User.Userlogin)
router.post('/signup',User.UserSignup)
router.post('/alluser',User.AllUser)
router.post('/sheetdata',User.Allsheetdata)


export default router
