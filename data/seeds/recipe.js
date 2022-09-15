
exports.seed = async function(knex) {
  await knex('recipes').insert([
    {recipe_name: 'Steak and fries', created_at: Date()},
    {recipe_name: 'Steak and Eggs', created_at: Date()},
    {recipe_name: 'Hamburger and fries', created_at: Date()}
  ]);

  await knex('ingredients').insert([
    {ingredient_name: 'beef'},
    {ingredient_name: 'potatoes'},
    {ingredient_name: 'milk'},
    {ingredient_name: 'egg'},
    {ingredient_name: 'buns'},
    {ingredient_name: 'a1'},
  ])

  await knex('steps').insert([
    {step_number: 1, instructions: "grill the steak", recipe_id: 1},
    {step_number: 2, instructions: "fry the fries", recipe_id: 1},
    {step_number: 3, instructions: "put on a plate", recipe_id: 1},

    {step_number: 1, instructions: "grill the steak", recipe_id: 2},
    {step_number: 2, instructions: "cook the eggs", recipe_id: 2},
    {step_number: 3, instructions: "put on a plate", recipe_id: 2},

    {step_number: 1, instructions: "grill the burger", recipe_id: 3},
    {step_number: 2, instructions: "fry the fries", recipe_id: 3},
    {step_number: 3, instructions: "put on a plate", recipe_id: 3}
  ])

  await knex('steps_ingredients').insert([
    {steps_id: 1, ingredient_id: 1, quantity: 3},
    {steps_id: 2, ingredient_id: 2, quantity: 2},

    {steps_id: 4, ingredient_id: 1, quantity: 3},
    {steps_id: 5, ingredient_id: 4, quantity: 4},

    {steps_id: 7, ingredient_id: 1, quantity: 2},
    {steps_id: 8, ingredient_id: 2, quantity: 6},
  ])
};




