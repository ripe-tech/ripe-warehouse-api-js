import { API as BaseAPI, conf, load, mix } from "yonius";

import { SalesFactAPI } from "./sales_fact";
import { ShipmentFactAPI } from "./shipment_fact";

const BASE_URL = "https://ripe-warehouse-ci.platforme.com/api/";

export class API extends mix(BaseAPI).with(SalesFactAPI, ShipmentFactAPI) {
    constructor(kwargs = {}) {
        super(kwargs);
        this.baseUrl = conf("RIPE_WAREHOUSE_URL", BASE_URL);
        this.baseUrl = kwargs.baseUrl === undefined ? this.baseUrl : kwargs.baseUrl;
    }

    static async load() {
        await load();
    }
}
