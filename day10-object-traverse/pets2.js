var pets = [
    {
        "name": "Meowsy",
        "species": "cat",
        "petFoods": [
            { "likes": ["tuna", "catnip"] }, 
            { "dislikes": ["ham", "zucchini"] }
        ]
    },
    {
        "name": "Barky",
        "species": "dog",
        "petFoods": [
            { "likes": ["bones", "carrots"] },
            { "dislikes": ["tuna"] } 
        ]
    },
    {
        "name": "Purrpaws",
        "species": "cat",
        "petFoods": [
            { "likes": ["mice"] }, 
            { "dislikes": ["cookies"] }
        ]
    }
]

function petDetails(pet) {
    return `${pet.name} the ${pet.species} like ${pet.petFoods[0].likes} and dislikes ${pet.petFoods[1].dislikes}`
} 

pets.forEach(function(pet) {
    console.log(petDetails(pet));
});