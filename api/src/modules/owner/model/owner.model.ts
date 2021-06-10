import Car from "../../car/model/car.model";

import {
  AllowNull,
  AutoIncrement,
  Column,
  DataType,
  HasMany,
  Model,
  NotEmpty,
  PrimaryKey,
  Table,
} from "sequelize-typescript";


export interface OwnerI {
  id?: number;
  name: string;
  lastName: string;
}

@Table({
  tableName: 'owners',
  timestamps: true,
})
export default class Owner extends Model implements OwnerI {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(50),
  })
  name!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING,
  })
  lastName!: string;  
  
  @HasMany(()=> Car)
  cars!: Car[]

}
