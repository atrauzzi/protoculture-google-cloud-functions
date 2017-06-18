import { ServiceProvider } from "protoculture";
import { GoogleCloudFunctionsPlatform } from "./Platform";
import { GoogleCloudFunctionsApp } from "./App";
import { hapiSymbols } from "protoculture-hapi";

export class GoogleCloudFunctionsServiceProvider extends ServiceProvider {

    public async boot(): Promise<void> {

        this.bindPlatform(GoogleCloudFunctionsPlatform);

        this.bindApp(GoogleCloudFunctionsApp);
        this.bindConstructorParameter(hapiSymbols.Server, GoogleCloudFunctionsApp, 0);
    }
}
