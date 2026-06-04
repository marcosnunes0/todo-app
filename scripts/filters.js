function getFilteredTasks(filter) {
    let filteredTasks = [];

    switch (filter) {
        case 'all':
            filteredTasks = tasks;
            break;
        case 'pending':
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case 'completed':
            filteredTasks = tasks.filter(task => task.completed);
            break;
    };

    return filteredTasks;
};