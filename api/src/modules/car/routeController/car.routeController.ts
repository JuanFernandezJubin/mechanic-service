import {Request , Response } from 'express';
import {CarBusinessController} from '../businessController/car.businessController';

export class CarRoutesController {
    private businessController : CarBusinessController;
  
    constructor() {
        this.businessController = new CarBusinessController();
    }

  public getAllCars = async (req: Request, res: Response) => {
    const result = await this.businessController.askForAllCars()
    return res.status(200).send(result);
  }
  
  public getOneCar = async (req:Request, res:Response) => {
      return res.status(200).send('getOneCar');
  }

  public addNewCar = async (req:Request , res: Response) => {
      return res.status(200).send('addNewCar');
  }


  public updateCar = async (req:Request , res:Response) => {
      return res.send('updateCar');
  }

  public deleteCar = async (req:Request , res:Response) => {
      return res.send('deleteCar');
  }
}