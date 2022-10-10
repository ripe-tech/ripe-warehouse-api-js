export const ShipmentAPI = superclass =>
    class extends superclass {
        async listShipments(options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.get(url, options);
            return response;
        }

        async createShipment(payload, options = {}) {
            const url = this.baseUrl + "shipments";
            const response = await this.post(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    };
