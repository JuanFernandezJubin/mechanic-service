import Car from "../model/car.model";

export class CarRepository {
  public async getAllCarsFromDb(): Promise<Car[]> {
    const allCars = await Car.findAll();
    if (!allCars) throw new Error("We cant get all the cars");
    return allCars;
  }

  public async addNewCarToDb(car: any): Promise<Car> {
    const newCar = await Car.create(car);
    if (!newCar) throw new Error("Error to create the car");
    return newCar;
  }
}
