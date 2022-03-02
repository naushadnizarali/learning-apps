import { Column, DataType, Index, Model, Table } from 'sequelize-typescript';

export interface AesCompanyAttributes {
  companyCode: string;
  partyType: string;
  partyId?: string;
  partyIdType?: string;
  partyName?: string;
  firstName?: string;
  lastName?: string;
  midInitial?: string;
  addressLine1?: string;
  addressLine2?: string;
  phone?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  sentFlag?: string;
  optionType?: string;
  transmitFlag?: string;
  cityCode?: string;
  addressId?: number;
  updateDate?: Date;
  ultConsigneeType?: string;
  vnextCompanyCode?: string;
  deletedFlag: boolean;
}

@Table({ tableName: 'aes_company', timestamps: false })
export class AesCompany
  extends Model<AesCompanyAttributes, AesCompanyAttributes>
  implements AesCompanyAttributes
{
  @Column({
    field: 'company_code',
    primaryKey: true,
    type: DataType.STRING(10),
  })
  @Index({ name: 'xpk_aes_company', unique: true })
  @Index({ name: 'PK_aes_company', unique: true })
  companyCode!: string;

  @Column({ field: 'party_type', type: DataType.STRING(1) })
  @Index({ name: 'IX_aes_company_1', unique: false })
  partyType!: string;

  @Column({ field: 'party_id', allowNull: true, type: DataType.STRING(20) })
  partyId?: string;

  @Column({ field: 'party_id_type', allowNull: true, type: DataType.STRING(1) })
  partyIdType?: string;

  @Column({ field: 'party_name', allowNull: true, type: DataType.STRING(50) })
  partyName?: string;

  @Column({ field: 'first_name', allowNull: true, type: DataType.STRING(13) })
  firstName?: string;

  @Column({ field: 'last_name', allowNull: true, type: DataType.STRING(20) })
  lastName?: string;

  @Column({ field: 'mid_initial', allowNull: true, type: DataType.STRING(1) })
  midInitial?: string;

  @Column({
    field: 'address_line1',
    allowNull: true,
    type: DataType.STRING(50),
  })
  addressLine1?: string;

  @Column({
    field: 'address_line2',
    allowNull: true,
    type: DataType.STRING(50),
  })
  addressLine2?: string;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  phone?: string;

  @Column({ allowNull: true, type: DataType.STRING(25) })
  city?: string;

  @Column({ allowNull: true, type: DataType.STRING(20) })
  state?: string;

  @Column({ allowNull: true, type: DataType.STRING(2) })
  country?: string;

  @Column({ field: 'postal_code', allowNull: true, type: DataType.STRING(20) })
  postalCode?: string;

  @Column({ field: 'sent_flag', allowNull: true, type: DataType.STRING(1) })
  sentFlag?: string;

  @Column({ field: 'option_type', allowNull: true, type: DataType.STRING(1) })
  optionType?: string;

  @Column({ field: 'transmit_flag', allowNull: true, type: DataType.STRING(1) })
  transmitFlag?: string;

  @Column({ field: 'city_code', allowNull: true, type: DataType.STRING(3) })
  cityCode?: string;

  @Column({ field: 'address_id', allowNull: true, type: DataType.INTEGER })
  addressId?: number;

  @Column({ field: 'update_date', allowNull: true, type: DataType.DATE(7) })
  updateDate?: Date;

  @Column({
    field: 'ult_consignee_type',
    allowNull: true,
    type: DataType.STRING(1),
  })
  ultConsigneeType?: string;

  @Column({
    field: 'vnext_company_code',
    allowNull: true,
    type: DataType.STRING(12),
  })
  vnextCompanyCode?: string;

  @Column({ field: 'deleted_flag', type: DataType.STRING })
  deletedFlag!: boolean;
}
