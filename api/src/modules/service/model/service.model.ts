import {
  AllowNull,
  BelongsTo,
  AutoIncrement,
  Column,
  Table,
  DataType,
  ForeignKey,
  Model,
  NotEmpty,
  PrimaryKey,
} from "sequelize-typescript";

import Transaction from "../../transaction/model/transaction.model";


export interface ServiceI {
    id?:number;
    type:string;
    charge: number;
    transaction_id: number;

}

@Table({
  tableName: 'services',
  timestamps: true,
})
export default class Service extends Model implements ServiceI {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id?: number;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.ENUM({
      values: ['Oil Change','Filter Change','Belt Change','General Review','Other']
    }),
  })
  type!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
      type: DataType.INTEGER
  })
  charge!:number;
  
  @ForeignKey(() => Transaction)
  @Column({
    type: DataType.INTEGER,
  })
  transaction_id!: number;

  @BelongsTo(() => Transaction)
  transaction!: Transaction;
}
