import { ServiceProvider } from "protoculture";
import { DemoController } from "./Functions/DemoController";


export class FunctionsAppServiceProvder extends ServiceProvider {

    public async boot() {

        this.configureRoute({
            path: "/",
            actionObject: DemoController,
            actionMethod: "sayHello",
        });
    }
}
