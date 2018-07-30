var recipe = {
	"recipe_name": "Basic Fruit Salad", 
	"yields": {
	    	"servings": 6
	  		}, 
	"ingredients": [ 
		{ 
			"apple": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"banana": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"orange": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		},
		{ 
			"grapes": {
				"amounts": {
					"amount": 1,
					"unit": "each"
				}
			}
		}
	], 
	        
	"steps": [
		{ "step1": "Cut the apple into cubes." },
		{ "step2": "Cut the banana into slices." },
		{ "step3": "Peel the orange, and divide into segments."}, 
		{ "step4": "Combine all ingredients in a bowl." }, 
		{ "step5": "Mix to combine." }
	]
}

function prepareRecipe(recipe) {
    console.log(`RECIPE - ${recipe.recipe_name}`);
    console.log(`SERVES - ${recipe.yields.servings} people`);
    recipe.ingredients.forEach(function(ingredient){
        //console.log(Object.keys(ingredient)[0]);
        var item = Object.keys(ingredient)[0];
        //console.log(item);
        console.log(`${item} - ${ingredient[item].amounts.amount} ${ingredient[item].amounts.unit}`);
    });

    console.log(`STEPS`);
    recipe.steps.forEach(function(step){
        var value = Object.keys(step)[0];
        var value2 = Object.values(step)[0];
        //console.log(value2);
        console.log(`${value} : ${value2}`); // - my method
        //console.log(`${value} : ${step[value]}`); - sir's method
    });
}


console.log(prepareRecipe(recipe));