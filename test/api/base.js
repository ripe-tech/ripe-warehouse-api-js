const assert = require("assert");
const ripeWarehouseAPI = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new ripeWarehouseAPI.API();
        assert.strictEqual(Boolean(api.baseUrl), true);
    });
});
