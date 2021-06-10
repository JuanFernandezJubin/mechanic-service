import { CarRepository } from "../repositories/car.repository"

export class CarBusinessController {
    private carRepository : CarRepository;

    constructor(){
        this.carRepository = new CarRepository();
    }

    public async askForAllCars () {
        return this.carRepository.getAllCarsFromDb();
    }

    public async addNewCar(car:any){
        return this.carRepository.addNewCarToDb(car);
    }

    public async askForOneCar (id:string) {
        return this.carRepository.getOneCarFromDb(id);
    }

    public async deleteCar (id:string) {
        return this.carRepository.removeCarFromDb(id);
    }

    public async updateCar (car:any , id:string){
        if(car.year) car.year = new Date(car.year.toString());
        return this.carRepository.updateCarFromDb(car , id)
    }

}