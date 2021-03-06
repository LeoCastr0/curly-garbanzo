import ProprietarioService from "../services/proprietario.service.js";

async function createProprietario(req, res, next) {
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("Nome e telefone do proprietario são necessários !");
        }
        proprietario = await ProprietarioService.createProprietario(proprietario);
        res.send(proprietario);

        global.logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);
    } catch(err) {
        next(err);
    }
};

async function updateProprietario(req, res, next) {
    try {
        let proprietario = req.body;
        if(!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone){
            throw new Error("Proprietario ID, Nome e telefone são necessários !");
        }

        proprietario = await ProprietarioService.updateProprietario(proprietario);
        res.send(proprietario);
        global.logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
    } catch (err) {
        next(err);
    }
};

async function deleteProprietario(req, res, next) {
    try{
        await ProprietarioService.deleteProprietario(req.params.id);
        res.end();
    } catch(err) {
        next(err);
    }
};

async function getProprietarios(req, res, next) {
    try {
        res.send(await ProprietarioService.getProprietarios());
        global.logger.info(`GET /proprietarios`);
    } catch (err) {
        next(err);
    }
};

async function getProprietario(req, res, next) {
    try {
        res.send(await ProprietarioService.getProprietario(req.params.id));
        global.logger.info(`GET /proprietarios/id`);
    } catch (err) {
        next(err);
    }
};

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
};