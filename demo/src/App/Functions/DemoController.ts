import * as Hapi from "hapi";
import { action, Route } from "protoculture-hapi";


export class DemoController {

    public async sayHello(request: Hapi.Request, reply: Hapi.Base_Reply, route: Route) {

        reply("Yes sir I like it!");
    }
}
