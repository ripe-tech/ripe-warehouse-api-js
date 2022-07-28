const assert = require("assert");
const warehouse = require("../..");

describe("API", function() {
    it("should be able to instantiate the API", async () => {
        const api = new warehouse.API();
        assert.strictEqual(Boolean(api.baseUrl), true);
    });
});
