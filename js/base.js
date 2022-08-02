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
}
