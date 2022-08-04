const express=require('express');
const router=express.Router();

const arrayData=[{ 
    Id:1, 
    Name:'Karan',
    Mobile:'9595986033',
    Address:'pune',
    Age:23
}]

router.get('/all',(req,res)=>{
    res.send({data:arrayData})
})

router.post('/add',(req,res)=>{
    let obj={
        Id:arrayData.length+1,
        Name:req.body.Name,
        Mobile:req.body.Mobile,
        Address:req.body.Address,
        Age:req.body.Age
    }
    arrayData.push(obj);

    res.send({data:obj,message:'New record added successfully'})
})

router.post('/update/:id?',(req,res)=>{
    let id=req.params.id || req.body.id;
    arrayData.map(arr=>{
        if(arr.Id==id){ //1
            arr.Name=req.body.Name;
            res.send({data:arr,message:'Record updated successfully'});
        }
    })
 
    res.send({data:null,message:"Record not found of Id"+id})  
})

router.post('/delete/:id?',(req,res)=>{
    res.send('');
 // this is your task 
})
module.exports=router;