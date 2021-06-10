import { CarRepository } from "../repositories/car.repository"

export class CarBusinessController {
    private carRepository : CarRepository;

    constructor(){
        this.carRepository = new CarRepository()
    }

    public async askForAllCars () {
        return this.carRepository.getAllCarsFromDb()
    }

}