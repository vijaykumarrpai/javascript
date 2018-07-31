function rover(a,b,c,d){
   let xAxis = a;
   let yAxis = b;
   let currentDirection = c;
   let commands = d.split('');
   
   let obj = {
       rotateLeft(){
           if(currentDirection == 'N'){
               currentDirection = 'W';
           }else if(currentDirection == 'W'){
               currentDirection = 'S'
           }else if(currentDirection == 'S'){
               currentDirection = 'E'
           }else if(currentDirection == 'E'){
               currentDirection = 'N'
           }
       },
       rotateRight(){
           if(currentDirection == 'N'){
               currentDirection = 'E'
           }else if(currentDirection == 'E'){
               currentDirection = 'S'
           }else if(currentDirection == 'S'){
               currentDirection = 'W';
           }else if(currentDirection == 'W'){
               currentDirection = 'N'
           }
       },
       move(){
           if(currentDirection == 'N'){
               yAxis++;
           }else if(currentDirection == 'W'){
               xAxis--;
           }else if(currentDirection == 'S'){
               yAxis--;
           }else if(currentDirection == 'E'){
               xAxis++;
           }
       }
   }
   
   commands.forEach((command) => {
       if(command == 'L'){
           obj.rotateLeft();
       }else if(command == 'R'){
           obj.rotateRight();
       }else if(command == 'M'){
           obj.move();
       }
   })
   return `${xAxis} ${yAxis} ${currentDirection}`
}

console.log(rover(1, 2, 'N', 'LMLMLMLMM'));
console.log(rover(3, 3, 'E', 'MMRMMRMRRM'));