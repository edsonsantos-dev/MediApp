import express from "express";
import appointmentController from "./routes/AppointmentController.js";
import doctorController from "./routes/DoctorController.js";
import pacientController from "./routes/PacientController.js";
import prescriptionController from "./routes/PrescriptionController.js";


let router = express.Router();

router.get(
    "/", function (req, res) {
        console.log("Hello World!");
        res.status(200).json({ message: "Hello World!" });
    }
)

router.use("/appointment", appointmentController);
router.use("/doctor", doctorController);
router.use("/pacient", pacientController);
router.use("/prescription", prescriptionController);

export default router;