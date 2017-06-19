import { ServiceProvider, Bundle } from "protoculture";
import "../../../src/index";
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
export const protoculture = (arg1: any, arg2: any) => googleCloudFunctionsDemo.googleCloudFunction(arg1, arg2);
// export function protoculture(...args: any[]) { googleCloudFunctionsDemo.googleCloudFunction(args[0], args[1]); }
