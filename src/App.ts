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

        // Boot hapi
    }

    public async dispatch(...args: any[]) {

        if (this.isHttp(args[0], args[1])) {

            await this.dispatchHttp(args[0], args[1]);
        }
        else {

            await this.dispatchEvent();
        }
    }

    protected async dispatchHttp(request: GoogleFunctionsHttpRequest, response: GoogleFunctionsHttpResponse) {

        await googleFunctionsHttpToHapi(request, response, this.server);
    }

    protected async dispatchEvent() {

        // !
    }

    protected isHttp(request: GoogleFunctionsHttpRequest, response: GoogleFunctionsHttpResponse) {

        return (
            request && response
            && request.url
            && response.req
        );
    }
}
