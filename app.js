const {Ticket} = require('./ticket.js');
// const argv = require('yargs').argv;
const {argv} = require('yargs');
 /* 
 node filename command options
 node app.js save --name='vijay' --department='Technical'
 node app.js findByCode --code='DCT-bcc1'
 node app.js findByPriority --priority='high'
 node app.js findOneAndUpdate --code='DCT-bcc1' --status='completed'
 node app.js findOneAndRemoce --code='DCT-bcc1'
 */
let ticket = new Ticket({
    name: 'Arjun',
    department: 'Technical',
    priority: 'high',
    message: 'Internet is not working again'
});

let command = argv._[0];

if(command == 'findAll') {
    Ticket.findAll();
} else if(command == 'save') {
    let ticket = new Ticket({
        name: argv.name,
        department: argv.department,
        priority: argv.priority,
        message: argv.message
    });
    ticket.save();
} else if(command == 'findByCode') {
    Ticket.findByCode(argv.code);
} else if(command == 'findByPriority')
{
    Ticket.findByPriority(argv.priority);
} else if(command == 'findOneAndUpdate') {
    Ticket.findOneAndUpdate(argv.code, argv.params);
} else if(command == 'findOneAndRemove') {
    Ticket.findOneAndRemove(argv.code);
} else {    
    console.log('Invalid Command');
}

// comparision of yargs vs native process
// console.log(argv);
//console.log(argv.name)

// console.log(process.argv.slice(2));
//console.log(process.argv.splice(2)[1].split('=')[1]);