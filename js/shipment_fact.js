export const ShipmentFactAPI = superclass =>
    class extends superclass {
        async listShipmentfacts(options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.get(url, options);
            return response;
        }

        async createShipmentFact(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    };
