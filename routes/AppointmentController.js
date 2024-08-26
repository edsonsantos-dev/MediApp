import express from "express";
import AppointmentService from "../services/AppointmentService.js";

let router = express.Router();

router.get('/appoiments', async (req, res) => {
    try {
        const appointments = await AppointmentService.getAllAppointment();
        res.send(appointments);
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
});

router.get('/getAppointment/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const appoiment = await AppointmentService.getAppointment(id);
        res.send(appoiment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postAppointment', async (req, res) => {
    const { date, doctorId, pacientId } = req.body;
    try {
        const appoiment = await AppointmentService.saveAppointment({ date, doctorId, pacientId });
        res.send(appoiment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putAppointment/:id', async (req, res) => {
    const { id }= req.params;
    const { date, doctorId, pacientId } = req.body;
    try {
        const appoiment = await AppointmentService.updateAppointment(id, { date, doctorId, pacientId });
        res.send(appoiment);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deleteAppointment/:id', async (req, res) => {
    const { id }= req.params;
    try {
        const appoiment = await AppointmentService.deleteAppointment(id);
        res.send(appoiment)
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;