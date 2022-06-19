const express = require('express');
const Courier = require('../models/couriersmodel');

const couriers = express.Router();


/**
 * @swagger
 * /api/couriers/:
 *   get:
 *     description: Get all Employee
 *     responses:
 *       200:
 *         description: Success
 *
 */
const couriersAll = async (req, res) => {
    const getCouriers = () => {
        console.log('aaaa');
        console.log(Courier.find())

        Courier.find()
            .then(result => {
                res.status(201).json(result)
            })
            .catch(err => {
                res.status(422).json(err);
                console.log(err);
            })

    }

    await getCouriers()

}
/**
 * @swagger
 * /api/couriers/{id}:
 *   get:
 *     description: Get all Employee
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Success
 *
 */
const courierSingls = async (req, res) => {

   try{
    const {awb} = req.params;
    const courierIndividual = await Courier.findOne({"awb":awb});
    console.log(courierIndividual);
        res.status(200).json(courierIndividual)
   }catch (error) {
    res.status(422).json(error);
}



}
const courierAdd = async (req, res) => {
    const {awb,shipper,consignee,destination,weight,fwdngNo,date,rcvdBy,remarks,amount,paymentStatus} = req.body;
    //const {qty,meas}= weight;
    if(!awb || !shipper || !consignee || !destination || !weight  ){
        res.status(422).json("plz fill the data");
    }
    try {

        const pretracking = await Courier.findOne({"awb":awb});

        if(pretracking){
            res.status(422).json("this tracking is already present");
        }else{
            const addtracking = new Courier({
                awb,shipper,consignee,destination,weight,fwdngNo,date,rcvdBy,remarks,amount,paymentStatus
            });

            await addtracking.save();
            res.status(201).json(addtracking);
            console.log(addtracking);
        }

    } catch (error) {
        res.status(422).json(error);
    }

}

couriers.get('/', couriersAll);
couriers.get('/:awb', courierSingls);
couriers.post('/add', courierAdd);

module.exports = couriers