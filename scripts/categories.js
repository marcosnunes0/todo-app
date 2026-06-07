import { tasks } from "./tasks.js";
import { loadCategories } from "./storage.js";

export let categories = loadCategories();

export function addCategory(title) {
    const existingCategory = categories.some(category => category.title.trim().toLowerCase() === title.trim().toLowerCase());

    if (existingCategory) {
        alert('Category already exists');
        return;
    }
    
    const newCategory = {
        id: crypto.randomUUID(),
        title: title.trim(),
    };

    categories.push(newCategory);
}

export function deleteCategory(categoryId) {
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

export function editCategory(categoryId, title) {
    const newCategoryTitle = title.trim();
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);

    if (categoryIndex !== -1) {
        const oldCategoryTitle = categories[categoryIndex].title;

        const existingCategory = categories.some(category => category.title.trim().toLowerCase() === newCategoryTitle.toLowerCase());

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