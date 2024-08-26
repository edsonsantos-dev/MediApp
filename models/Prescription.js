import { mongoose } from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    appointmentId: {
        type: String,
        required: [true, 'Appointment ID is required']
    },
    medicine: {
        type: String,
        required: [true, 'Medicine is required']
    },
    dosage: {
        type: String,
        required: [true, 'Dosage is required']
    },
    instructions: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const prescription = mongoose.model('Prescription', schema);

export default prescription;