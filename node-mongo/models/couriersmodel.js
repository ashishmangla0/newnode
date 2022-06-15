const {Schema} = require('mongoose');
const courierSchema = new Schema({
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
    weight:{
        type: String,
        required: true
    },
    service:{
        type: String,
        required: true
    },
    fwdngNo:{
        type: String,
    },
    rcvdBy:{
        type: String,
        required: true
    },
    rcvdBy:{
        type: String,
        required: true
    }
},{timestamps:true});


const Courier = mongoose.model('Courier',courierSchema);

module.exports = Courier;













































