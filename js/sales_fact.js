export const Sales_Fact_API = superclass =>
    class extends superclass {
        async getSalesFacts(payload, options = {}) {
            const url = this.baseUrl + "sales";
            const response = await this.get(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    }