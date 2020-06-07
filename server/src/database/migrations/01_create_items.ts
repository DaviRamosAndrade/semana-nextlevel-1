import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('points_items', table => {
        table.increments('id').primary();
        table.integer('image', 255).notNullable();
        table.integer('title', 255).notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('items');
}