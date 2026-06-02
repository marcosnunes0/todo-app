function colorPicker(task) {
    return task.completed ? 'green' : 'red';
};

function handleOverlayEvents(overlayId = 'blur-overlay', closeBtnId = 'close-form-btn') {
    const overlay = document.getElementById(overlayId);
    const closeFormButton = document.getElementById(closeBtnId);

    if (closeFormButton) {
        closeFormButton.addEventListener('click', () => {
            overlay.classList.add('hidden');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
            }
        });
    }
};

function hiddenOverlay(overlayId = 'blur-overlay') {
    const overlay = document.getElementById(overlayId);

    if (overlay) overlay.classList.add('hidden');
}

function renderTasks(tasks) {
    let tasksHTML = '';

    if (tasks.length === 0) {
        tasksHTML = `
            <div class="no-tasks-found-container">
                <span>No tasks found</span>
            </div>
        `;
    } else {
        tasks.forEach((task) => {
            const color = colorPicker(task);

            tasksHTML += `
            <div class="task">
                <div class="task-checkbox-title-container">
                    <input type="checkbox" class="checkbox" data-task-id="${task.id}" ${task.completed ? 'checked' : ''}>
                    <span class="task-title">${task.title}</span>
                </div>
                <div class="task-priority-container">
                    <span class="task-priority">${task.priority}</span>
                </div>
                <div class="task-category-container">
                    <span class="task-category">${task.category}</span>
                </div>
                <div class="task-due-date-container">
                    <span class="task-due-date">${task.dueDate}</span>
                </div>
                <div class="task-actions-container">
                    <button class="edit-btn" data-task-id="${task.id}"><i class="fa-solid fa-pen"></i></button>
                    <button class="delete-btn" data-task-id="${task.id}"><i class="fa-solid fa-trash"></i></button>
                    <span style="background-color: ${color}; border-radius: 50%; width: 20px; height: 20px;"></span>
                </div>
            </div>
        `;
        });
    }

    document.getElementById('js-tasks-list-grid').innerHTML = tasksHTML;
};

function renderAddTaskForm(categories) {

    const formHTML = `
        <div id="add-task-overlay" class="overlay">
            <div class="add-task-form-container">
                <button id="close-add-task-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="form-title">Add Task</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="task-title-input">Title</label>
                        <div class="input-box">
                            <input type="text" id="task-title-input" name="task-title" placeholder="Enter the task title" required>
                        </div>
                    </div>
                    <div class="form-priority-container">
                        <label for="task-priority-select">Priority</label>
                        <select class="form-select" name="task-priority" id="task-priority-select" required>
                            <option value="" disabled selected>Selecione uma prioridade</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div class="form-category-container">
                        <label for="task-category-select">Category</label>
                        <select class="form-select" name="task-category" id="task-category-select" required>
                            <option value="" disabled selected>Selecione uma categoria</option>
                            ${categories.map((category) => {return `<option value="${category.title}">${category.title}</option>`;})}
                        </select>
                    </div>
                    <div class="form-due-date-container">
                        <label for="task-date-input">Due Date</label>
                        <input type="date" id="task-date-input" name="task-date" required>
                    </div>
                    <div class="form-submit-btn-container">
                        <button type="submit" id="js-add-task-submit-btn" class="add-task-submit-btn">Add Task</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('js-add-task-form-container').innerHTML = formHTML;
};


function renderEditTaskForm(task, categories) {
    const formHTML = `
        <div id="edit-task-overlay" class="overlay">
            <div class="add-task-form-container">
                <button id="close-edit-task-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="form-title">Edit Task</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="task-title">Title</label>
                        <div class="input-box">
                            <input type="text" id="task-title-input" name="task-title" placeholder="Enter the task title" required value="${task.title}">
                        </div>
                    </div>
                    <div class="form-priority-container">
                        <label for="task-priority">Priority</label>
                        <select class="form-select" name="task-priority" id="task-priority-select" value="${task.priority}">
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>
                    <div class="form-category-container">
                        <label for="task-category">Category</label>
                        <select class="form-select" name="task-category" id="task-category-select" value="${task.category.title}">
                            ${categories.map((category) => {return `<option value="${category.title}">${category.title}</option>`;})}
                        </select>
                    </div>
                    <div class="form-due-date-container">
                        <label for="task-date">Due Date</label>
                        <input type="date" id="task-date-input" name="task-date" required value="${task.dueDate}">
                    </div>
                    <div class="form-submit-btn-container">
                        <button type="submit" id="js-edit-task-submit-btn" class="add-task-submit-btn">Edit Task</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('js-add-task-form-container').innerHTML = formHTML;
};

function renderCategories(categories) {
    let categoryItemsHTML = '';

    categories.forEach((category) => {
        categoryItemsHTML += `
                <div class="category-item">
                    <span class="category-title">${category.title}</span>
                    <div class="category-actions-container">
                        <button class="category-edit-btn" data-category-id="${category.id}"><i class="fa-solid fa-pen"></i></button>
                        <button class="category-delete-btn" data-category-id="${category.id}"><i class="fa-solid fa-trash"></i></button>
                    </div>
                </div>
        `;
    });

    const categoriesHTML = `
        <div id="categories-overlay" class="overlay">
            <div class="category-container">
                <button id="close-categories-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="category-header-container">
                    <h2>Categories</h2>
                </div>
                <div class="add-category-btn-container">
                    <button id="add-category-btn" class="add-category-btn"><i class="fa-solid fa-plus"></i> Add Category</button>
                </div>
                <div id="categories-grid-container" class="categories-grid-container">
                    ${categoryItemsHTML}
                </div>
            </div>
        </div>
    `;

    document.getElementById('js-categories-grid').innerHTML = categoriesHTML;

    const container = document.getElementById('categories-grid-container');
    const numberOfRows = categories.length;
    container.style.setProperty('--rows', numberOfRows);
}

function renderAddCategoryForm() {
    const formHTML = `
        <div id="add-category-overlay" class="overlay">
            <div class="add-category-form-container">
                <button id="close-add-category-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="add-category-form-title">Add Category</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="add-category-title-input">Title</label>
                        <div class="input-box">
                            <input type="text" id="add-category-title-input" class="add-category-title-input" name="category-title" placeholder="Enter the category title" required>
                        </div>
                    </div>
                    <div class="form-submit-btn-container">
                        <button type="submit" id="js-add-category-submit-btn" class="add-category-submit-btn">Add Category</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('js-add-category-form-container').innerHTML = formHTML;
};

function renderEditCategoryForm(category) {
    const formHTML = `
        <div id="edit-category-overlay" class="overlay">
            <div class="edit-category-form-container">
                <button id="close-edit-category-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="form-title">Edit Category</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="edit-category-title-input">Title</label>
                        <div class="input-box">
                            <input type="text" id="edit-category-title-input" class="edit-category-title-input" name="category-title" placeholder="Enter the category title" required value="${category.title}">
                        </div>
                    </div>
                    <div class="form-submit-btn-container">
                        <button type="submit" id="js-edit-category-submit-btn" class="edit-category-submit-btn">Edit Category</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('js-edit-category-form-container').innerHTML = formHTML;
};