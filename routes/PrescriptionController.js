import express from "express";
import PrescriptionService from "../services/PrescriptionService.js";

let router = express.Router();

router.get('/prescriptions', async (req, res) => {
    try {
        const prescriptions = await PrescriptionService.getAllPrescriptions();
        res.send(prescriptions);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.get('/getPrescription/:id', async (req, res) => {
    const { id }= req.params;
    try {
        const prescription = await PrescriptionService.getPrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.post('/postPrescription', async (req, res) => {
    const { date, appointmentId, medicine, dosage, instructions } = req.body;
    try {
        const prescription = await PrescriptionService.savePrescription({ date, appointmentId, medicine, dosage, instructions });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.put('/putPrescription/:id', async (req, res) => {
    const { id }= req.params;
    const { date, appointmentId, medicine, dosage, instructions } = req.body;
    try {
        const prescription = await PrescriptionService.updatePrescription(id, { date, appointmentId, medicine, dosage, instructions });
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

router.delete('/deletePrescription/:id', async (req, res) => {
    const { id }= req.params;
    try {
        const prescription = await PrescriptionService.deletePrescription(id);
        res.send(prescription);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});

export default router;