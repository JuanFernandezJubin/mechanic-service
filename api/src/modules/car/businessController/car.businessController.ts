import { CarRepository } from "../repositories/car.repository"

export class CarBusinessController {
    private carRepository : CarRepository;

    constructor(){
        this.carRepository = new CarRepository()
    }

    public async askForAllCars () {
        return this.carRepository.getAllCarsFromDb()
    }

    public async addNewCar(car:any){
        return this.carRepository.addNewCarToDb(car)
    }

}