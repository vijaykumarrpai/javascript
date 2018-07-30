var coder = {
    name: 'Vijay',
    skills: ['js','rb','py'],
    myskills: function() {
        this.skills.forEach(function(skill){
            console.log(`${coder.name} knows this ${skill}`);
        });
        }
    } 

    console.log(coder.myskills());

    