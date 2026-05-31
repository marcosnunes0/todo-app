function colorPicker(task) {
    return task.completed ? 'green' : 'red';
};

function handleOverlayEvents() {
    const overlay = document.getElementById('blur-overlay');
    const closeFormButton = document.getElementById('close-form-btn');

    closeFormButton.addEventListener('click', () => {
        overlay.classList.add('hidden');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.add('hidden');
        }
    });
};

function renderTasks(tasks) {
    let tasksHTML = '';

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

    document.getElementById('js-tasks-list-grid').innerHTML = tasksHTML;
};

function renderAddTaskForm(categories) {

    const formHTML = `
        <div id="blur-overlay" class="overlay">
            <div class="add-task-form-container">
                <button id="close-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="form-title">Add Task</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="task-title">Title</label>
                        <div class="input-box">
                            <input type="text" id="task-title-input" name="task-title" placeholder="Enter the task title" required>
                        </div>
                    </div>
                    <div class="form-priority-container">
                        <label for="task-priority">Priority</label>
                        <select class="form-select" name="task-priority" id="task-priority-select">
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div class="form-category-container">
                        <label for="task-category">Category</label>
                        <select class="form-select" name="task-category" id="task-category-select">
                            ${categories.map((category) => {return `<option value="${category}">${category}</option>`;})}
                        </select>
                    </div>
                    <div class="form-due-date-container">
                        <label for="task-date">Due Date</label>
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
        <div id="blur-overlay" class="overlay">
            <div class="category-container">
                <button id="close-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
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
        <div id="blur-overlay" class="overlay">
            <div class="add-category-form-container">
                <button id="close-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
                <div class="form-header">
                    <h2 class="add-category-form-title">Add Category</h2>
                </div>
                <form action="">
                    <div class="form-title-container">
                        <label for="category-title">Title</label>
                        <div class="input-box">
                            <input type="text" id="category-title-input" name="category-title" placeholder="Enter the category title" required>
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

function renderEditTaskForm(task, categories) {
    const formHTML = `
        <div id="blur-overlay" class="overlay">
            <div class="add-task-form-container">
                <button id="close-form-btn" class="close-btn"><i class="fa-solid fa-xmark"></i></button>
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
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div class="form-category-container">
                        <label for="task-category">Category</label>
                        <select class="form-select" name="task-category" id="task-category-select" value="${task.category}">
                            ${categories.map((category) => {return `<option value="${category}">${category}</option>`;})}
                        </select>
                    </div>
                    <div class="form-due-date-container">
                        <label for="task-date">Due Date</label>
                        <input type="date" id="task-date-input" name="task-date" required value="${task.dueDate}">
                    </div>
                    <div class="form-submit-btn-container">
                        <button type="submit" id="js-add-task-submit-btn" class="add-task-submit-btn">Edit Task</button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.getElementById('js-add-task-form-container').innerHTML = formHTML;
};