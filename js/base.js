import { API as BaseAPI, conf, load, mix, verify } from "yonius";

import { SalesFactAPI } from "./sales_fact";
import { ShipmentFactAPI } from "./shipment_fact";

const BASE_URL = "https://ripe-warehouse-ci.platforme.com/api/";

export class API extends mix(BaseAPI).with(SalesFactAPI, ShipmentFactAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_WAREHOUSE_URL", BASE_URL);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
        this.username = kwargs.username === undefined ? this.username : kwargs.username;
        this.password = kwargs.password === undefined ? this.password : kwargs.password;
        this.token = Buffer.from(this.username + ":" + this.password).toString("base64");
        this.token = kwargs.token === undefined ? this.token : kwargs.token;
    }

    static async load() {
        await load();
    }

    async build(method, url, options = {}) {
        await super.build(method, url, options);
        options.headers = options.params !== undefined ? options.headers : {};
        options.headers.Authorization = `Basic ${this.token}`;
    }

    async _handleResponse(response) {
        const result = await this._getResult(response);
        const failure =
            result.status && result.status !== "OK" && result.status.toString()[0] !== "2";
        verify(!failure, JSON.stringify(result), result.status || 500);
        return result;
    }

    /**
     * Obtains the response object from the provided response making sure that the
     * content type is respected when doing so.
     *
     * @param {Response} response The HTTP response resulting from the request
     * made by the API client
     * @returns {Object|String|Blob} The parsed result value for the provided
     * response object taking into account the content type of it.
     */
    async _getResult(response) {
        const contentType = response.headers.get("content-type")
            ? response.headers.get("content-type").toLowerCase()
            : "";
        let result = null;
        if (
            contentType.startsWith("application/json") ||
            contentType.startsWith("application/problem+json")
        ) {
            result = await response.json();
        } else if (contentType.startsWith("text/")) {
            result = await response.text();
        } else {
            result = await response.blob();
        }
        return result;
    }
}
