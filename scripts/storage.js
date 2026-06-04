function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

function saveCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

function loadCategories() {
    const categoriesJSON = localStorage.getItem('categories');
    return categoriesJSON ? JSON.parse(categoriesJSON) : [];
}