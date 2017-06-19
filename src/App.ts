import * as _ from "lodash";
import { Server } from "hapi";
import { App, Bundle } from "protoculture";
import { googleFunctionsHttpToHapi, GoogleFunctionsHttpRequest, GoogleFunctionsHttpResponse } from "./GoogleFunctionsHttpToHapi";


export class GoogleCloudFunctionsApp implements App {

    public readonly name = "google-cloud-functions";

    public get working() {

        return true;
    }

    public bundle: Bundle;

    public constructor(protected server: Server) {

    }

    public async run() {

    }
}
