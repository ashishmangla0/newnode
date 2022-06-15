const express = require('express');
const couriers = express.Router();

const couriersAll = async(req,res) =>{
    const aa = () =>{
        console.log('tttttttttt');
        res.json({a:'sssssssssssss'})

    }
   await aa()

}

const courierSingls = async(req,res) =>{
    const aa = () =>{
        // console.log(req);
        console.log('I am single');
        res.json({c:'ccccccccccccccccc',a: req.params.id})

    }
   await aa()

}

couriers.get('/',couriersAll)
couriers.get('/:id',courierSingls)





module.exports = couriers