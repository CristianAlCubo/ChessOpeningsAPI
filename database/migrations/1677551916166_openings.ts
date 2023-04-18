import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Openings extends BaseSchema {
  protected tableName = 'openings'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('movements').notNullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
