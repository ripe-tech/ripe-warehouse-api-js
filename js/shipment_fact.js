export const ShipmentFactAPI = superclass =>
    class extends superclass {
        async getShipmentfacts(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.get(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
        async postShipmentFact(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    }