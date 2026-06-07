import { loadTasks } from "./storage.js";

export let tasks = loadTasks();

export function addTask(title, priority, category, dueDate) {

    const newTask = {
        id: crypto.randomUUID(),
        title: title.trim(),
        completed: false,
        priority: priority,
        category: category,
        dueDate: dueDate,
        createdAt: new Date().toISOString().slice(0, 10)
    };
    
    tasks.push(newTask);
};

export function deleteTask (taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
};

export function toggleTaskStatus(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
    }
};

export function editTask(taskId, title, priority, category, dueDate) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].title = title.trim();
        tasks[taskIndex].priority = priority;
        tasks[taskIndex].category = category;
        tasks[taskIndex].dueDate = dueDate;
    }
};