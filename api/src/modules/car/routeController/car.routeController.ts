import { Request, Response } from "express";
import { CarBusinessController } from "../businessController/car.businessController";

export class CarRoutesController {
  private businessController: CarBusinessController;

  constructor() {
    this.businessController = new CarBusinessController();
  }

  public getAllCars = async (req: Request, res: Response) => {
      try {
          const allCars = await this.businessController.askForAllCars();
          return res.status(200).send(allCars);
      } catch (error) {
        return res.status(400).send({ message: error.message });  
      }
  };

  public getOneCar = async (req: Request, res: Response) => {
    return res.status(200).send("getOneCar");
  };

  public addNewCar = async (req: Request, res: Response) => {
    const { brand, model, color, year ,patent} = req.body;

    if (!brand || !model || !color || !year || !patent)
      return res.status(400).send({ message: "All fields are mandatory" });

    try {
      const response = await this.businessController.addNewCar({
        brand,
        model,
        color,
        year: new Date(year.toString()),
        patent
      });
      return res.status(200).send(response);
    } catch (error) {
      return res.status(400).send({ message: error.message });
    }
  };

  public updateCar = async (req: Request, res: Response) => {
    return res.send("updateCar");
  };

  public deleteCar = async (req: Request, res: Response) => {
    return res.send("deleteCar");
  };
}
