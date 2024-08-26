import Pacient from "../models/Pacient.js";

const getAllPacient = async () => {
    try {
        return await Pacient.findAll();
    } catch (error) {
        throw new Error(error);
    }
}

const getPacient = async (id) => {
    try {
        return await Pacient.findByPk(id);
    } catch (error) {
        throw new Error(error);
    }
}

const savePacient = async ({ name, birthDate, email, phone }) => {
    try {
        const pacient = new Pacient({ name, birthDate, email, phone });
        await pacient.save();
        return pacient;
    } catch (error) {
        throw new Error(error);
    }
}

const updatePacient = async (id, { name, birthDate, email, phone }) => {
    try {
        return await Pacient.findByIdAndUpdate(id, { name, birthDate, email, phone }, { new: true });
    } catch (error) {
        throw new Error(error);
    }
}

const deletePacient = async (id) => {
    try {
        return await Pacient.findByIdAndDelete(id);
    } catch (error) {
        throw new Error(error);
    }
}

const pacientRepository = {
    getAllPacient,
    getPacient,
    savePacient,
    updatePacient,
    deletePacient
}

export default pacientRepository;