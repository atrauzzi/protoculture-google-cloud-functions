import { ServiceProvider, Bundle } from "protoculture";
import { HapiServiceProvider } from "protoculture-hapi";
import { GoogleCloudFunctionsServiceProvider } from "../../../src/ServiceProvider";
import { FunctionsAppServiceProvder } from "../App/ServiceProvider";


class GoogleCloudFunctionsDemoBundle extends Bundle {

    public readonly name = "protoculture-gcf-demo";

    protected get serviceProviders() {

        return [
            HapiServiceProvider,
            GoogleCloudFunctionsServiceProvider,
            FunctionsAppServiceProvder,
        ];
    }
}

const googleCloudFunctionsDemo = new GoogleCloudFunctionsDemoBundle();
export function protoculture(...args: any[]) { googleCloudFunctionsDemo.dispatch(...args); }
