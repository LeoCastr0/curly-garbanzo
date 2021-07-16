import AnimalService from "../services/animal.service.js";

async function createAnimal(req, res, next) {
    try{
        let animal = req.body;
        if(!animal.nome || !animal.tipo || !animal.proprietario_id ) {
            throw new Error("Nome, tipo e ID do proprietario são necessários");
        }
        animal = await AnimalService.createAnimal(animal);
        res.send(animal);
        global.logger.info(`POST /animal - ${JSON.stringify(animal)}`);

    } catch(err) {
        next(err);
    }
};

async function updateAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.animal_id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
            throw new Error ("ID do animal, nome, tipo e ID do proprietario são necessários !");
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
        global.logger.info(`PUT /animal -  ${JSON.stringify(animal)}`);
    } catch(err) {
        next(err);
    }
};

async function deleteAnimal(req, res, next) {
    try {
        await AnimalService.deleteAnimal(req.params.id);
        res.end();
        global.logger.info(`DELETE /animal/${req.params.id}`);
    } catch(err) { 
        next(err);
    }
};
async function getAnimais(req, res, next) {
    try {
        res.send(await AnimalService.getAnimais());
        global.logger.info(`GET /animal`);
    } catch(err) {
        next(err);
    } 
};

async function getAnimal(req, res, next) {
    try {
        res.send (await AnimalService.getAnimal(req.params.id));
        global.logger.info(`GET /animal/id ${req.params.id}`);
    } catch(err) {
        next(err);
    } 
};

async function getAnimalProp(req, res, next) {
    try {
        res.send (await AnimalService.getAnimalProp(req.params.id));
        global.logger.info(`GET /animal/proprietario/id ${req.params.id}`);
    } catch(err) {
        next(err);
    } 
};
    

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal,
    getAnimalProp
};