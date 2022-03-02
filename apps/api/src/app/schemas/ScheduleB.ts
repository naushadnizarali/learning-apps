import {
  Column,
  DataType,
  ForeignKey,
  Index,
  Model,
  Sequelize,
  Table,
} from 'sequelize-typescript';

export interface ScheduleBAttributes {
  htsNo: string;
  description: string;
  longDescription: string;
  unit_1?: string;
  unit_2?: string;
  vehicleFlag?: string;
}

@Table({ tableName: 'schedule_b', timestamps: false })
export class ScheduleB
  extends Model<ScheduleBAttributes, ScheduleBAttributes>
  implements ScheduleBAttributes
{
  @Column({ field: 'hts_no', primaryKey: true, type: DataType.STRING(10) })
  @Index({ name: 'prik_schedule_b', unique: true })
  htsNo!: string;

  @Column({ type: DataType.STRING(200) })
  description!: string;

  @Column({ field: 'long_description', type: DataType.STRING(-1) })
  longDescription!: string;

  @Column({ allowNull: true, type: DataType.STRING(10) })
  unit_1?: string;

  @Column({ allowNull: true, type: DataType.STRING(10) })
  unit_2?: string;

  @Column({ field: 'vehicle_flag', allowNull: true, type: DataType.STRING(1) })
  vehicleFlag?: string;
}
