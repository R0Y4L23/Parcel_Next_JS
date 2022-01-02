const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const userSchema = new Schema({
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    username : {
        type: String,
        required: true,
    },
    address : {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', userSchema);

const parcelSchema = new Schema({
    parcelCost : {
        type: Number,
        required: true,
    },
    parcelNotes : {
        type: String,
        required: true,
    },
    parcelStartingLocation : {
        type: String,
        required: true,
    },
    parcelDestination : {
        type: String,
        required: true,
    },
    senderName : {
        type: String,
        required: true,
    },
    senderPhone : {
        type: String,
        required: true,
    },
    senderAddress : {
        type: String,
        required: true,
    },
    receiverName : {
        type: String,
        required: true,
    },
    receiverPhone : {
        type: String,
        required: true,
    },
    receiverAddress : {
        type: String,
        required: true,
    },
    postedBy : {
        type: String,
        required: true,
    },
});

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = {
    User,
    Parcel
}
