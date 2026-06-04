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
};

initApp();