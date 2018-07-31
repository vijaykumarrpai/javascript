console.log('script file loaded');

var baseUrl = 'http:dct-api-data.herokuapp.com';
var key = '7ceb386c03ae9510';

var countHandle = document.getElementById('count');
var tableBodyHandle = document.getElementById('tableBody');
var ticketFormHandle = document.getElementById('ticketForm');

var nameHandle = document.getElementById('name');
var nameErrorHandle = document.getElementById('nameError');

var departmentHandle = document.getElementById('department');
var departmentErrorHandle = document.getElementById('departmentError');

var priorityHandle = document.getElementById('priority');
var priorityErrorHandle = document.getElementById('priorityError');

var priorityNames = document.getElementsByName('priority');
var messageHandle = document.getElementById('message');
var messageErrorHandle = document.getElementById('messageError');

var allBtnHandle = document.getElementById('allBtn');
var highBtnHandle = document.getElementById('highBtn');
var mediumBtnHandle = document.getElementById('mediumBtn');
var lowBtnHandle = document.getElementById('lowBtn');
var selectHandle = document.getElementById('select');

var searchHandle = document.getElementById('search');

var alertHandle = document.getElementById('alert');

var tickets;

function filterTickets(priority) {
    tableBodyHandle.innerHTML = '';
    var count = 0;
    tickets.forEach(function(ticket){
        if(ticket.priority === priority) {
            count++;
            buildRow(ticket);
        }
    });
    countHandle.innerHTML = count;
}

allBtnHandle.addEventListener('click', function(){
    tableBodyHandle.innerHTML = '';
    tickets.forEach(function(ticket){
        buildRow(ticket);
    })
    countHandle.innerHTML = tickets.length;
}, false);

highBtnHandle.addEventListener('click', function(){
    filterTickets('high');
}, false);

mediumBtnHandle.addEventListener('click', function(){
    filterTickets('medium');
}, false);

lowBtnHandle.addEventListener('click', function(){
    filterTickets('low');
},false);

// selectHandle.addEventListener('change', function(){
//     if(selectHandle.value === 'high') {
//         filterTickets('high');
//     } else if (selectHandle.value === 'medium') {
//         filterTickets('medium');
//     } else if (selectHandle.value === 'low') {
//         filterTickets('low');
//     } else {
//         tableBodyHandle.innerHTML = '';
//         tickets.forEach(function(ticket){
//         buildRow(ticket);
//         });
//         countHandle.innerHTML = tickets.length;
//     }
// }, false);

searchHandle.addEventListener('keyup', function(){
    tableBodyHandle.innerHTML = '';
    var searchResults = tickets.filter(function(ticket){
        return (ticket.ticket_code.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0) || (ticket.name.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0) || (ticket.department.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0) || (ticket.priority.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0) || (ticket.status.toLowerCase().indexOf(searchHandle.value.toLowerCase()) >= 0);
    });

    searchResults.forEach(function(ticket){
        buildRow(ticket);
    })
    countHandle.innerHTML = searchResults.length;
}, false);

var hasErrors = {
    name: true,
    department: true,
    priority: true,
    message: true
}

function validateName() {
    if(nameHandle.value === '') {
        nameErrorHandle.innerHTML = 'can not be empty';
        hasErrors.name = true;
    } else {
        nameErrorHandle.innerHTML = '';
        hasErrors.name = false;
    }
}

function validateDepartment() {
    if(departmentHandle.value === "") {
        departmentErrorHandle.innerHTML = 'please select an option';
        hasErrors.department = true;
    } else {
        departmentErrorHandle.innerHTML = '';
        hasErrors.department = false;
    }
}

function validatePriority() {
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked === 'true') {
            priorityErrorHandle.innerHTML = 'select a priority';
            hasErrors.priority = true;
        } else {
            priorityErrorHandle.innerHTML = '';
            hasErrors.priority = false;
        }
    }
}

function validateMessage() {
    if(messageHandle.value === "") {
        messageErrorHandle.innerHTML = 'please enter message';
        hasErrors.message = true;
    } else {
        messageErrorHandle.innerHTML = '';
        hasErrors.message = false;
    }
}

function buildRow(ticket) {
    var tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${ticket.ticket_code}</td>
        <td>${ticket.name}</td>
        <td>${ticket.department}</td>
        <td>${ticket.priority}</td>
        <td>${ticket.message}</td>
        <td>${ticket.status}</td>
    `;  
    tableBodyHandle.appendChild(tr);
}

function getTickets() {
    axios.get(`${baseUrl}/tickets?api_key=${key}`)
    .then(function(response){
    tickets = response.data;
    countHandle.innerHTML = tickets.length;
    tickets.forEach(function(ticket){
        buildRow(ticket);
    })
})

.catch(function(err){
    console.log(err);
}); 
}


function getPriorityValue() {
    for(var i = 0; i < priorityNames.length; i++) {
        if(priorityNames[i].checked) {
            return priorityNames[i].value;
        }
    }
}

ticketFormHandle.addEventListener('submit', function(e){
    validateName();
    validateDepartment();
    validatePriority();
    validateMessage();

    e.preventDefault();

    var formData = {
        name: nameHandle.value,
        department: departmentHandle.value,
        priority: getPriorityValue(),
        message: messageHandle.value 
    }; 

    axios.post(`${baseUrl}/tickets?api_key=${key}`, formData)
    .then(function(response){
        var ticket = response.data; 
        buildRow(ticket); 
        countHandle.innerHTML = parseInt(countHandle.innerHTML) + 1; 
        ticketFormHandle.reset(); 
        alertHandle.innerHTML = '<div class="alert alert-success" role="alert">Successfully created</div>';
        setTimeout(function(){
            alertHandle.innerHTML = '';
        }, 3000);
    })
    .catch(function(err){
        console.log(err); 
    })
}, false); 

window.addEventListener('load', function(){
    getTickets();
}, false)