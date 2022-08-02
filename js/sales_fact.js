export const SalesFactAPI = superclass =>
    class extends superclass {
        async listSalesFacts(options = {}) {
            const url = this.baseUrl + "sales";
            const response = await this.get(url, {});
            return response;
        }
    };
