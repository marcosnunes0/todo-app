const categories = [
    {
        id: crypto.randomUUID(),
        title: 'Work'
    },
    {
        id: crypto.randomUUID(),
        title: 'Personal'
    },
    {
        id: crypto.randomUUID(),
        title: 'Other'
    }
];

const tasks = [
    {
        id: crypto.randomUUID(),
        title: 'Walk the dog',
        completed: false,
        priority: 'Medium',
        category: 'Other',
        dueDate: '2022-01-02',
        createdAt: new Date().toISOString().slice(0,10)
    },
    {
        id: crypto.randomUUID(),
        title: 'Do the dishes',
        completed: false,
        priority: 'Low',
        category: 'Other',
        dueDate: '2022-01-06',
        createdAt: new Date().toISOString().slice(0,10)
    }
];

function addTask(title, priority, category, dueDate) {

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

function deleteTask (taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }
};

function toggleTaskStatus(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
    }
};

function editTask(taskId, title, priority, category, dueDate) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
        tasks[taskIndex].title = title.trim();
        tasks[taskIndex].priority = priority;
        tasks[taskIndex].category = category;
        tasks[taskIndex].dueDate = dueDate;
    }
};

function addCategory(title) {
    const newCategory = {
        id: crypto.randomUUID(),
        title: title.trim(),
    };

    categories.push(newCategory);
}

function deleteCategory(categoryId) {
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);

    if (categoryIndex !== -1) {
        const categoryTitle = categories[categoryIndex].title;
        categories.splice(categoryIndex, 1);

        tasks.forEach(task => {
            if (task.category === categoryTitle) {
                task.category = "Not defined";
            }
        });
    }
}

function editCategory(categoryId, title) {
    const newCategoryTitle = title.trim();
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);

    if (categoryIndex !== -1) {
        const oldCategoryTitle = categories[categoryIndex].title;

        if (oldCategoryTitle === newCategoryTitle) {
            return;
        }
        
        categories[categoryIndex].title = newCategoryTitle;

        tasks.forEach(task => {
            if (task.category === oldCategoryTitle) {
                task.category = newCategoryTitle;
            }
        });
    }
}