import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Opening extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() name: string
  @column() movements: string
}
