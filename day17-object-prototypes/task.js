function Task(title,isCompleted) {
    this.title = title;
    this.createdAt = new Date();
    this.isCompleted = isCompleted;

    this.details = function() {
        return `${this.title} - ${this.createdAt} - ${this.isCompleted}`;
    };
    this.markAsComplete = function() {
        this.isCompleted = true;
        return `the task has been marked as complete`;
    };
    this.markAsIncomplete = function() {
        this.isCompleted = false;
        return `the task has been marked as incomplete`;
    };
}

var t1 = new Task('go for a walk', false);
console.log(t1.details());
console.log(t1.markAsComplete());
console.log(t1.details());
console.log(t1.markAsIncomplete());
console.log(t1.details());

var tasks = [];

var t2 = new Task('gaming', true);
var t3 = new Task('play Badminton', true);
var t4 = new Task('watch news', false);
var t5 = new Task('read newspaper', false);

tasks.push(t1,t2,t3,t4,t5);

var completedTasks = tasks.filter(function(task) {
    return task.isCompleted; 
});

var incompletedTasks = tasks.filter(function(task) {
        return !task.isCompleted; 
}); 
 
console.log('listing completed tasks');
completedTasks.forEach(function(task){
    console.log(task.details());
});

console.log('listing incompleted tasks');
incompletedTasks.forEach(function(task){
    console.log(task.details());
});