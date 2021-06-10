import {Express} from 'express';
import { Route } from "./route";
import { CarRoutesController } from './routeController/car.routeController';

export class CarModule {
    public route: Route;

    constructor(app: Express){
        this.route = new Route(app , new CarRoutesController())
    }
}