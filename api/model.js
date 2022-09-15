const db = require('../data/db-config')

async function getRecipe(id) {
    const recipe = await db('recipes as r')
        .leftJoin('steps as s', 's.recipe_id', 'r.recipe_id')
        .leftJoin('steps_ingredients as si', 'si.steps_id', 's.steps_id')
        .leftJoin('ingredients as i', 'i.ingredient_id', 'si.ingredient_id')
        .select(
            'r.recipe_id', 'r.recipe_name', 'created_at',
            's.steps_id', 's.step_number', 'instructions',
            'i.ingredient_id','i.ingredient_name', 'quantity'
        ) 
        .where('r.recipe_id', id)

         const newRecipe = {
            recipe_id: recipe[0].recipe_id,
            recipe_name: recipe[0].recipe_name,
            created_at: recipe[0].created_at,
            steps: recipe.reduce((acc, ele) => {
                if(ele.ingredient_id){
                    return acc.concat({
                        step_id: ele.steps_id,
                        step_number: ele.step_number,
                        instructions: ele.instructions,
                        ingredients: [{
                            ingredient_id: ele.ingredient_id,
                            ingredient_name: ele.ingredient_name,
                            quantity: ele.quantity
                        }]
                    })
                } else {
                    return acc.concat({
                        step_id: ele.steps_id,
                        step_number: ele.step_number,
                        instructions: ele.instructions,
                        ingredients: []
                    })
                }
            }, [])
         }

        return newRecipe
}

module.exports = {
    getRecipe
}