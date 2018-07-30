var student = ['Ravi D L', 'ravi.daasari@gmail.com', 9945371612, 'Web Development', 'reference' ];

var studentNested = [
    ['name', 'ravi'],
    ['email', 'ravi.daasari@gmail.com'],
    ['mobile',9945371612],
    ['course','web development'],
    ['source','reference'],
];

console.log(studentNested[0] [0], studentNested[0] [0])
var studentObj = {
    name: 'Ravi',
    email: 'ravi.daasari@gmail.com', 
    mobile:  9945371612,
    course: 'Web development',
    source: 'reference',
    skills: ['js', 'ruby' ,'py', 'php'],
    education : [
        {
            "12th": 2012
        },
        {
            "Degree": 2016
        },
        {
            "Masters": 2018
        }
    ]
}

console.log('Name :', studentObj.name);
console.log('Skills :', studentObj.skills);
console.log('education :',studentObj.education);
console.log('Does he know JS :', studentObj.skills.includes('js'));
console.log('Education', studentObj.education);
console.log('Education 12 pass year', studentObj.education[0]["12th"]);