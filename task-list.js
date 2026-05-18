const tasks = ['Задача 1'];

function addTask(newTask) {
    tasks.push(newTask);
    console.log(tasks);
}

function remove(task) {
    const index = tasks.indexOf(task)

    if (index === -1) {
        return;
    }
    return tasks.splice(index, 1);
}

function prioritize(task) {
    const result = remove(task);
    if (!result) {
        return;
    }
        tasks.unshift(result[0]);
}
    
addTask('Задача 2')
addTask('Задача 3')
prioritize('Задача 2')
console.log(tasks)
remove('Задача 3')
console.log(tasks)