import Appointment from "../models/Appointment.js";

const getAllAppointment = async () => {
    return await Appointment.findAll();
}

const getAppointment = async (id) => {
    try {
        return await Appointment.findByPk(id);
    } catch (error) {
        throw new Error(error); W
    }
}

const saveAppointment = async ({ date, doctorId, pacientId }) => {
    try {
        const appointment = new Appointment({ date, doctorId, pacientId });
        await appointment.save();
        return appointment;
    } catch (error) {
        throw new Error(error);
    }
}

const updateAppointment = async (id, { date, doctorId, pacientId }) => {
    try {
        return await Appointment.findByIdAndUpdate(id, { date, doctorId, pacientId }, { new: true });
    } catch (error) {
        throw new Error(error);
    }
}

const deleteAppointment = async (id) => {
    try {
        return await Appointment.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const appointmentRepository = {
    getAllAppointment,
    getAppointment,
    saveAppointment,
    updateAppointment,
    deleteAppointment
}

export default appointmentRepository;