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