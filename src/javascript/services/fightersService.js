import callApi from '../helpers/apiHelper';

class FighterService {
    #endpoint = 'fighters.json';

    async getFighters() {
        try {
            const apiResult = await callApi(this.#endpoint);
            return apiResult;
        } catch (error) {
            throw error;
        }
    }

    async getFighterDetails(id) {
        const endpoint = `details/fighter/${id}.json`;
        try {
            this.apiResult = await callApi(endpoint);
            console.warn(this.apiResult);
            return this.apiResult;
        } catch (error) {
            throw error;
        }
    }
}

// todo: implement this method
// endpoint - `details/fighter/${id}.json`;

const fighterService = new FighterService();

export default fighterService;
