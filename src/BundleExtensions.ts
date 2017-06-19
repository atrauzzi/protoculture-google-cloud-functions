import { Server } from "hapi";
import { Bundle } from "protoculture/lib/Bundle/Base";
import { GoogleFunctionsHttpRequest, GoogleFunctionsHttpResponse, googleFunctionsHttpToHapi } from "./GoogleFunctionsHttpToHapi";
import { hapiSymbols } from "protoculture-hapi/lib";


declare module "protoculture/lib/Bundle/Base" {

    export interface Bundle {

        googleCloudFunction(first: any, second: any): Promise<void>;

        httpGoogleCloudFunction(request: GoogleFunctionsHttpRequest, response: GoogleFunctionsHttpResponse): Promise<void>;

        backgroundGoogleCloudFunction(first: any, second: any): Promise<void>;
    }
}

// tslint:disable-next-line:only-arrow-functions
Bundle.prototype.googleCloudFunction = async function (first: any, second: any) {

    if (isGoogleHttpCall(first, second)) {

        await this.httpGoogleCloudFunction(first, second);
    }
    else {

        await this.backgroundGoogleCloudFunction(first, second);
    }
};

// tslint:disable-next-line:only-arrow-functions
Bundle.prototype.httpGoogleCloudFunction = async function (first: GoogleFunctionsHttpRequest, second: GoogleFunctionsHttpResponse) {

    await this.run();

    const hapiServer = this.container.get(hapiSymbols.Server);

    await googleFunctionsHttpToHapi(first, second, hapiServer);
};

// tslint:disable-next-line:only-arrow-functions
Bundle.prototype.backgroundGoogleCloudFunction = async function (first: any, second: any) {

    // todo
};

function isGoogleHttpCall(request: GoogleFunctionsHttpRequest, response: GoogleFunctionsHttpResponse) {

    return (
        request && response
        && request.url
        && response.req
    );
}
