import { Badge,Flex,Grid, ScrollArea } from "@radix-ui/themes"
import { TaskCard } from "./TaskCard"
import type { Task } from "../entities/task"
import { useTasks } from "../hooks/useTasks"

export const TaskBoard: React.FC = () => {
  
const {tasks} = useTasks()

    const taskTodo: Task[] = tasks.filter(task => task.status === "todo") ?? []
    const taskInProgress: Task[] = tasks.filter(task => task.status === "doing") ?? []
    const tasksDone: Task[] = tasks.filter(task => task.status === "done") ?? []
   
    return (
        <ScrollArea scrollbars="horizontal">
            <Grid columns="3" gap="4" minWidth="64rem">
                <Flex direction={"column"} gap={"4"}>
                    <Badge size={"3"} color="gray">
                        Para fazer ({taskTodo.length})
                    </Badge>
                    {taskTodo.map((task) => <TaskCard key={task.id} task={task}/>)}
                 </Flex>

                 <Flex direction={"column"} gap={"4"}>
                    <Badge size={"3"} color="yellow">
                        Em Progresso ({taskInProgress.length})
                    </Badge>
                    {taskInProgress.map((task) => <TaskCard key={task.id} task={task}/>)}
                 </Flex>

                 <Flex direction={"column"} gap={"4"}>
                    <Badge size={"3"} color="green">
                        Concluído ({tasksDone.length})
                    </Badge>
                    {tasksDone.map((task) => <TaskCard key={task.id} task={task}/>)}
                 </Flex>
            </Grid>
        </ScrollArea>
        
    )
}