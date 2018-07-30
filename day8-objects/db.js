var student1Obj = {
    name: 'Karthik D',
    email: 'karthik@gmail.com',
    course: 'MERN'
}

var student2Obj = {
    name: 'Shreedhar',
    email: 'shreedhar@gmail.com',
    course: 'MERN'
}

var student3Obj = {
    name: 'Sudhanva',
    email: 'sudhanva@gmail.com',
    course: 'MERN'
}

var students = [];

students.push(student1Obj);
students.push(student2Obj);
students.push(student3Obj);

students.forEach(function(student,i) {
    var i = i+1;
    console.log(`${i} | ${student.name} | ${student.email} | ${student.course}`)
})

