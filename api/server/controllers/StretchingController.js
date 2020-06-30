require('dotenv').config();

import StretchingService from '../services/StretchingService';
import Util from '../utils/Utils';

const util = new Util();

class StretchingController {

    static async getAllStretchings(req, res) {
        try {
            const allStretchings = await StretchingService.getAllStretchings();

            if (allStretchings.length > 0) {
                util.setSuccess(200, 'stretchings retrieved', allStretchings);
            } else {
                util.setSuccess(200, 'no stretching found');
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }

    static async addStretching(req, res) {

        if (!req.body.name) {
            util.setError(400, 'please provide complete details');
            return util.send(res);
        }

        const newStretching = req.body;

        try {
            const createdStretching = await StretchingService.addStretching(newStretching);
            util.setSuccess(201, 'stretching added', createdStretching);
            return util.send(res);
        } catch (error) {
            util.setError(400, error.message);
            return util.send(res);
        }
    }

    static async updatedStretching(req, res) {
        const alteredStretching = req.body;
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const updateStretching = await StretchingService.updateStretching(id, alteredStretching);

            if (!updateStretching) {
                util.setError(404, `cannot find stretching with the id: ${id}`);
            } else {
                util.setSuccess(200, 'stretching updated', updateStretching);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async getStretching(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please input a valid numeric value');
            return util.send(res);
        }

        try {
            const theStretching = await StretchingService.getStretching(id);

            if (!theStretching) {
                util.setError(404, `cannot find stretching with the id ${id}`);
            } else {
                util.setSuccess(200, 'found Stretching', theStretching);
            }

            return util.send(res);
        } catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
    }

    static async deleteStretching(req, res) {
        const { id } = req.params;

        if (!Number(id)) {
            util.setError(400, 'please provide a numeric value');
            return util.send(res);
        }

        try {
            const stretchingToDelete = await StretchingService.deleteStretching(id);

            if (stretchingToDelete) {
                util.setSuccess(200, 'stretching deleted');
            } else {
                util.setError(404, `stretching with the id ${id} cannot be found`);
            }

            return util.send(res);
        } catch (error) {
            util.setError(400, error);
            return util.send(res);
        }
    }
    
}

export default StretchingController;
