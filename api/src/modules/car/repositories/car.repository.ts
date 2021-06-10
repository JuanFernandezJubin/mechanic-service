import Owner from "../../owner/model/owner.model";
import Car from "../model/car.model";

export class CarRepository {
  public async getAllCarsFromDb(): Promise<Car[]> {
    const allCars = await Car.findAll({include: Owner});
    if (!allCars) throw new Error("We cant get all the cars");
    return allCars;
  }

  public async addNewCarToDb(car: any): Promise<Car> {
    const newCar = await Car.create(car);
    if (!newCar) throw new Error("Error to create the car");
    return newCar;
  }

  public async getOneCarFromDb(id: string) {
    const carFromDb = await Car.findByPk(id, { include: Owner });
    if (!carFromDb) throw new Error("Error to find the car");
    return carFromDb;
  }

  public async updateCarFromDb(car: any, id: string) {
    const carToModify = await Car.update(car, { where: { id } });
  }

  public async removeCarFromDb(id: string) {
    const response = await Car.destroy({
      where: { id },
    });
    if (response === 0) throw new Error("Error removing car");
    return "Car Removed";
  }
}
