import database from '../src/models';

class BodyPartService {

    static async getAllBodyParts() {
        try {
            return await database.BodyPart.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addBodyPart(newBodyPart) {
        try {
            return await database.BodyPart.create(newBodyPart);
        } catch (error) {
            throw error;
        }
    }

    static async getBodyPart(id) {
        try {
            const bodypart = await database.BodyPart.findOne({ where: { id: Number(id) } });
            return bodypart;
        } catch (error) {
            throw error;
        }
    }

    static async updateBodyPart(id, updateBodyPart) {
        try {
            const bodypartToUpdate = await database.BodyPart.findOne({ where: { id: Number(id) } });
        
            if (bodypartToUpdate) {
                await database.BodyPart.update(updateBodyPart, { where: { id: Number(id) } });
                return updateBodyPart;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteBodyPart(id) {
        try {
            const bodypartToDelete = await database.BodyPart.findOne({ where: { id: Number(id) } });

            if (bodypartToDelete) {
                const deletedBodyPart = await database.BodyPart.destroy({ where: { id: Number(id) } });
                return deletedBodyPart;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

}

export default BodyPartService;