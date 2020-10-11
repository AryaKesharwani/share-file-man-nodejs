const router=require('express').Router();


router.get('/',(req,res)=>{
    return res.render('index')
})

module.exports=router