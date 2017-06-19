import * as _ from "lodash";
import { Platform, LogLevel, Environment, Bundle } from "protoculture";


export class GoogleCloudFunctionsPlatform implements Platform {

    public bundle: Bundle;

    public name = "google-cloud-functions";

    public get current() {

        return true;
    }

    public get environment(): Environment {

        return {
            ...process.env,
            debug: true,
            name: undefined,
            logLevel: LogLevel.Error,
        };
    }

    public log(messageLines: string[], level: LogLevel) {

        const levelName = `${LogLevel[level]} -`;

        // tslint:disable:no-console
        messageLines.forEach((messageLine) =>
            console.log(`${levelName} ${messageLine}`));
    }
}
