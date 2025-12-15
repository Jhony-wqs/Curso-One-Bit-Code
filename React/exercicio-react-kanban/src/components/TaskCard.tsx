import type { Task, TaskStatus, TaskPriority } from "../entities/task"
import { Badge, Button, Card, Flex, Text } from "@radix-ui/themes"
import { useTasks } from "../hooks/useTasks"

interface TaskCardProps {
    task:Task
}

export const TaskCard: React.FC<TaskCardProps> = ({task}) => {
  const {deleteTask, updateTask} = useTasks()

   const getActionText = (status:TaskStatus) => {
    const actionTexts = {
        "todo": "Iniciar",
        "doing": "Concluído",
        "done": "Arquivar"
    }
    return actionTexts[status]
   }

   const getActionColor = (status: TaskStatus) => {
    const actionColor: {[key: string]: 'indigo'|'green'|'bronze'
    } = {
        'todo': 'indigo',
        'doing': 'green',
        'done': 'bronze'
        }
        return actionColor[status]
   }
    
   const getPriorityColor = (priority: TaskPriority) => {
      const priorityColor: {[key: string]: "sky" | "amber" | "tomato"} = {
        'low': 'sky',
        'medium': 'amber',
        'high': 'tomato'
      }
      return priorityColor[priority]
   }

   const handleDelete = (id: string) => {
    const confirmation = confirm("Tem certeza que deseja excluir essa tarefa ? ")
    if(confirmation) {
      deleteTask(id)
    }
   }

   const handleUpdate = () => {
      if(task.status === "todo") {
          updateTask(task.id, {status: "doing"})
      }else if(task.status === "doing") {
        updateTask(task.id, {status: "done"})
      }

      
   }
   return (
          <Card>
      <Flex align="center" gap="4">
        <Text weight="bold">{task.title}</Text>
        <Badge color={getPriorityColor(task.priority)}>{task.priority}</Badge>
      </Flex>
      <Text size='3'  my="3">{task.description}</Text>
      <Flex gap="2">
        <Button color={getActionColor(task.status)} onClick={handleUpdate}>
          {getActionText(task.status)}
        </Button>
        <Button color="red" onClick={()=> handleDelete(task.id)}>Excluir</Button>
      </Flex>
    </Card>
   )
}

