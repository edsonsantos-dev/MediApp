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

router.use("/", appointmentController);
router.use("/", doctorController);
router.use("/", pacientController);
router.use("/", prescriptionController);

export default router;