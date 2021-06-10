import {Express} from 'express';
import { CarRoutesController } from './routeController/car.routeController';

export class Route {
    public routeController: CarRoutesController;
    
    constructor(app: Express , routController: CarRoutesController){
        this.routeController = routController;
        this.configRoutes(app);
    }

    public configRoutes(app:Express){
        app.route('/cars')
            .get(this.routeController.getAllCars);
        app.route('/cars/:id')
            .get(this.routeController.getOneCar);
        app.route('/cars')
            .post(this.routeController.createCar)
        app.route('/cars/:id')
            .put(this.routeController.updateCar);
        app.route('/cars/:id')
            .delete(this.routeController.deleteCar)
    }
}