const {allJob,addJob,findByCategory,updateStatus,deleteJob, status, statusAndCategory}=require('./controllers/careerController')
const {login,signUp,checkUser}=require('./controllers/authController')
const express = require('express');
const router = express.Router();

router.get('/status/:status',status)
router.get('/status/:status/:category',statusAndCategory)
router.get('/',allJob)
router.post('/login',login)
router.post('/signup',signUp)
router.patch('/update_status/:id',updateStatus)
router.delete('/delete/:id',deleteJob)
router.get('/checkUser',checkUser)
router.get('/categories/:category',findByCategory)
router.post('/submit',addJob)

module.exports = router