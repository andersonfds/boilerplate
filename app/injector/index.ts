import InjectorBase from "../base/injector/injector";
import TestService from "../services/test-service";

export default class Injector implements InjectorBase {

    private services: any[] = <any>[];

    onRegister(): void {
        this.services.push(TestService);
    }
}