export type TaskPriority = "low"| "medium"| "high"

export type TaskStatus = "todo"|"doing"|"done"

export interface Task {
    id: string
    description: string
    title: string
    status: TaskStatus
    priority: TaskPriority

}