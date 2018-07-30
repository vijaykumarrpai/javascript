var pets = [
    {
      "name": "Meowsy",
      "species" : "cat",
      "petfoods": {
        "likes": ["tuna", "catnip"],
        "dislikes": ["ham", "zucchini"]
      }
    },
    {
      "name": "Barky",
      "species" : "dog",
      "petfoods": {
        "likes": ["bones", "carrots"],
        "dislikes": ["tuna"]
      }
    },
    {
      "name": "Purrpaws",
      "species" : "cat",
      "petfoods": {
        "likes": ["mice"],
        "dislikes": ["cookies"]
      }
    }
  ]

  console.log(pets[0].name);
  console.log(pets[0].species);
  console.log(pets[0].petfoods.likes.join(', '));

    function petDetails(pet) {
        return `${pet.name} the ${pet.species} like ${pet.petfoods.likes.join(', ')} and dislikes ${pet.petfoods.dislikes.join(', ')}`
    }
    
    pets.forEach(function(pet){
        //console.log(pet);
        console.log(petDetails(pet));
    });