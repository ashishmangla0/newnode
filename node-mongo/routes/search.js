const express = require('express');
const search = express.Router();

const Courier = require('../models/couriersmodel');

const searchId = async (req, res) => {

    try {
        const { searchId } = req.params;
        const searchResult = await Courier.findOne({ "awb": searchId });

        if (searchResult !== null) {

            res.status(200).json(searchResult)
        }
        else{
            res.status(422).json({"nodata": "nodata found"});

        }


    } catch (error) {
        res.status(422).json(error);
    }

}

search.get('/:searchId', searchId);
module.exports = search