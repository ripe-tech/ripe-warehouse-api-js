export const Sales_Fact_API = superclass =>
    class extends superclass {
        async (payload, options = {}) {
            const url = this.baseUrl + "sales";
            const response = await this.get(url, {
                dataJ: payload,
                ...options
            });
            return response;
        }
    }