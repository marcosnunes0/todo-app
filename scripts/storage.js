export function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function loadTasks() {
    const tasksJSON = localStorage.getItem('tasks');
    return tasksJSON ? JSON.parse(tasksJSON) : [];
}

export function saveCategories(categories) {
    localStorage.setItem('categories', JSON.stringify(categories));
}

export function loadCategories() {
    const categoriesJSON = localStorage.getItem('categories');
    return categoriesJSON ? JSON.parse(categoriesJSON) : [];
}