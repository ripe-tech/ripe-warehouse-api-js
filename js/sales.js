export const SalesAPI = superclass =>
    class extends superclass {
        async listSales(options = {}) {
            const url = this.baseUrl + "sales";
            const response = await this.get(url, options);
            return response;
        }
    };
