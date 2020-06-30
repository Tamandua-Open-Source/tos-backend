require('dotenv').config();

import BodyPartService from '../services/BodyPartService';
import Util from '../utils/Utils';

const util = new Util();

class BodyPartController {

    static async getAllBodyParts(req, res) {
        try {
            const allBodyParts = await BodyPartService.getAllBodyParts();

            if (allBodyParts.length > 0) {
                util.setSuccess(200, 'bodyparts retrieved', allBodyParts);
            } else {
                util.setSuccess(200, 'no bodypart found');
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addBodyPart(req, res) {

        if (!req.body.name) {
            util.setError(400, 'please provide complete details');
            return util.send(res);
        }

        const newBodyPart = req.body;

        try {
            const createdBodyPart = await BodyPartService.addBodyPart(newBodyPart);
            util.setSuccess(201, 'bodypart added', createdBodyPart);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updatedBodyPart(req, res) {
        const alteredBodyPart = req.body;
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const updateBodyPart = await BodyPartService.updateBodyPart(id, alteredBodyPart);

            if (!updateBodyPart) {
                util.setError(404, `cannot find bodypart with the id: ${id}`);
            } else {
                util.setSuccess(200, 'bodypart updated', updateBodyPart);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getBodyPart(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const theBodyPart = await BodyPartService.getBodyPart(id);

            if (!theBodyPart) {
                util.setError(404, `cannot find bodypart with the id ${id}`);
            } else {
                util.setSuccess(200, 'found bodypart', theBodyPart);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async deleteBodyPart(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please provide a numeric value');
            return util.send(res);
        }

        try {
            const bodypartToDelete = await BodyPartService.deleteBodyPart(id);

            if (bodypartToDelete) {
                util.setSuccess(200, 'bodypart deleted');
            } else {
                util.setError(404, `bodypart with the id ${id} cannot be found`);
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    
}

export default BodyPartController;
