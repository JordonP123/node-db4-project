exports.up = async function (knex) {
    await knex.schema
        .createTable('recipes', tbl => {
            tbl.increments('recipe_id')
            tbl.string('recipe_name').notNullable().unique()
            tbl.string('created_at')
        })
        .createTable('steps', tbl => {
            tbl.increments('steps_id')
            tbl.integer('step_number').notNullable()
            tbl.string('instructions').notNullable()
            tbl.string('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
        .createTable('ingredients', tbl => {
            tbl.increments('ingredient_id')
            tbl.string('ingredient_name')
        })
        .createTable('steps_ingredients', tbl => {
            tbl.increments('steps_ingredients_id')
            tbl.integer('steps_id')
                .unsigned()
                .notNullable()
                .references('steps_id')
                .inTable('steps')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('ingredient_id')
                .unsigned()
                .notNullable()
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            tbl.integer('quantity')
        })
};

exports.down = async function (knex) {
    await knex.schema
        .dropTableIfExists('steps_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('steps')
        .dropTableIfExists('recipes')
};
