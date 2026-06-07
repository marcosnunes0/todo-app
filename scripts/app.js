import {
    saveTasks,
    saveCategories
} from "./storage.js"

import {
    renderTasks
} from "./ui.js";

import {
    handleAddTask,
    handleTaskActions,
    handleFilteredTasks,
    handleCategoriesButton,
    handleCategoriesActions
} from "./eventHandlers.js";

import { tasks } from "./tasks.js";
import { categories } from "./categories.js";

const tasksListGrid = document.getElementById('js-tasks-list-grid');
const categoriesGrid = document.getElementById('js-categories-grid');

function initApp() {
    renderTasks(tasks);
    
    handleAddTask();
    handleFilteredTasks();

    if (tasksListGrid) {
        tasksListGrid.addEventListener('click', handleTaskActions);
    };

    handleCategoriesButton();

    if (categoriesGrid) {
        categoriesGrid.addEventListener('click', handleCategoriesActions);
    };

    saveTasks(tasks);
    saveCategories(categories);
};

initApp();