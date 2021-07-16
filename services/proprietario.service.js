import ProprietarioRepository from "../repositories/proprietario.respository.js";

async function createProprietario(proprietario) {
    return await ProprietarioRepository.insertProprietario(proprietario);
};

async function updateProprietario(proprietario) {
    return await ProprietarioRepository.updateProprietario(proprietario);
};

async function deleteProprietario(id) {
    return await ProprietarioRepository.deleteProprietario(id);
};

async function getProprietarios() {
    return await ProprietarioRepository.getProprietarios();
};

async function getProprietario(id) {
    return await ProprietarioRepository.getProprietario(id);
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
};