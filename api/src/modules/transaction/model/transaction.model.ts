import {
  AllowNull,
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from "sequelize-typescript";

//Models
import Car from "../../car/model/car.model";
import Service from "../../service/model/service.model";

@Table({
  tableName: 'transactions',
  timestamps: true,
})
export default class Transaction extends Model {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id?: number;

  @ForeignKey(() => Car)
  @Column({
    type: DataType.INTEGER,
  })
  car_id!: number;

  @NotEmpty
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  final_cost!: number;

  //Associations
  @BelongsTo(() => Car)
  car!: Car;

  @HasMany(() => Service)
  services!: Service[];
}
