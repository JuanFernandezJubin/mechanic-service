import express, { Express } from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { Sequelize } from "sequelize-typescript";

//Modules
import { CarModule } from "./modules/car/car.module";

//Models
import Car from "./modules/car/model/car.model";
import Owner from "./modules/owner/model/owner.model";
import Service from "./modules/service/model/service.model";
import Transaction from "./modules/transaction/model/transaction.model";

class App {
  public app: Express;

  constructor(private port?: number) {
    this.app = express();
    dotenv.config({ path: __dirname + "/.env" });
    this.middlewares();
    this.configServer();
    this.dbConfig();
    this.initModules();
  }
  private async dbConfig() {
    const db = new Sequelize({
      database: process.env.DB_NAME,
      dialect: "mysql",
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      models: [Car, Owner, Transaction, Service],
    });
    await this.dbStart(db);
  }

  private async dbStart(db: Sequelize) {
    try {
      await db.authenticate();
      await db.sync({ force: true });
      console.log("Database Connected");
    } catch (error) {
      throw new Error(error);
    }
  }

  private middlewares() {
    this.app.use(morgan("dev"));
    this.app.use(express.json());
  }

  private configServer() {
    this.app.set("port", this.port || process.env.PORT || 3000);
  }

  public async listen() {
    this.app.listen(this.app.get("port"), () => {
      console.log("Server Listening on port: ", this.app.get("port"));
    });
  }

  private initModules() {
    const carModule = new CarModule(this.app);
  }
}

export default App;
