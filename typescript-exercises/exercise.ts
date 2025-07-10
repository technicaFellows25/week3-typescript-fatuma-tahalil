// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
}

enum Priority{
    Low = 0,
    Medium = 1,
    High = 2
}

interface TaskPriority extends Task {
    priority: Priority;
}

// Create your task below:
let fellowshipTask: TaskPriority = {
    id: 1,
    title: "Programming Task",
    description: "Finish Pre-Program work for fellowship",
    dueDate: "June 9th 2025",
    priority: Priority.High
}

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(fellowshipTask);