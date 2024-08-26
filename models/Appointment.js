import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    doctorId: {
        type: String,
        required: [true, 'Doctor ID is required']
    },
    pacientId: {
        type: String,
        required: [true, 'Pacient ID is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const appointment = mongoose.model('Appointment', schema);

export default appointment;