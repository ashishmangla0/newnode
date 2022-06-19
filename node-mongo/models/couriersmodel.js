const mongoose = require('mongoose');

//const childSchema = new mongoose.Schema([{ type:,required: true },{ weight: 'string',type:'string' }]);

const courierSchema = new mongoose.Schema({
    awb: {
        type: Number,
        required: true
    },
    shipper: {
        type: String,
        required: true
    },
    consignee:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    weight: {
        qty:{type: String,required: true},
        meas:{type: String,required: true}
    },
    fwdngNo:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    rcvdBy:{
        type: String
    },
    remarks:{
        type: String
    },
    amount:{
        type: String
    },
    paymentStatus:{
        type: String
    }
},{timestamps:true});


const Courier = mongoose.model('Courier',courierSchema);

module.exports = Courier;
