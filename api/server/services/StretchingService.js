import database from '../src/models';

class StretchingService {

    static async getAllStretchings() {
        try {
            return await database.Stretching.findAll();
        } catch (error) {
            throw error;
        }
    }

    static async addStretching(newStretching) {
        try {
            return await database.Stretching.create(newStretching);
        } catch (error) {
            throw error;
        }
    }

    static async getStretching(id) {
        try {
            const stretching = await database.Stretching.findOne({ where: { id: Number(id) } });
            return stretching;
        } catch (error) {
            throw error;
        }
    }

    static async updateStretching(id, updateStretching) {
        try {
            const stretchingToUpdate = await database.Stretching.findOne({ where: { id: Number(id) } });
        
            if (stretchingToUpdate) {
                await database.Stretching.update(updateStretching, { where: { id: Number(id) } });
                return updateStretching;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

    static async deleteStretching(id) {
        try {
            const stretchingToDelete = await database.Stretching.findOne({ where: { id: Number(id) } });

            if (stretchingToDelete) {
                const deletedStretching = await database.Stretching.destroy({ where: { id: Number(id) } });
                return deletedStretching;
            }

            return null;
        } catch (error) {
            throw error;
        }
    }

}

export default StretchingService;