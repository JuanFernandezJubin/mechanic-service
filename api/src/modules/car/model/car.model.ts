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
import Owner from "../../owner/model/owner.model";
import Transaction from "../../transaction/model/transaction.model";

export interface CarI {
  id?: number;
  brand: string;
  model: string;
  color: string;
  year: Date;
  owner_id: number;
}

@Table({
  tableName: 'cars',
  timestamps: true,
})
export default class Car extends Model implements CarI {
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
  brand!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(50),
  })
  model!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.STRING(30),
  })
  color!: string;

  @AllowNull(false)
  @NotEmpty
  @Column({
    type: DataType.DATE,
  })
  year!: Date;

  @ForeignKey(() => Owner)
  @Column({
    type: DataType.INTEGER
  })
  owner_id!: number;

  //Associations
  @BelongsTo(() => Owner)
  owner!: Owner;

  @HasMany(() => Transaction)
  trasnactions!: Transaction[];
}
