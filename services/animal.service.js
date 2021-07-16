import AnimalRepository from "../repositories/animal.repository.js";
import ProprietarioRepository from "../repositories/proprietario.respository.js";

async function createAnimal(animal) {
    return await AnimalRepository.insertAnimal(animal);
};

async function updateAnimal(animal) {
    if(await ProprietarioRepository.getProprietario(animal.proprietario_id)) {
        return await AnimalRepository.updateAnimal(animal);
    }
    throw new Error("ID do proprietario não encontrado no cadastro de proprietarios");
};

async function deleteAnimal(id) {
    return await AnimalRepository.deleteAnimal(id);
};

async function getAnimais() {
    return await AnimalRepository.getAnimais();
};

async function getAnimal(id) {
    return await AnimalRepository.getAnimal(id);
};

async function getAnimalProp(id) {
    return await AnimalRepository.getAnimalProp(id);
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimalProp
}