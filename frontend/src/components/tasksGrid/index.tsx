import {
  Container
} from './styles';
import TaskInfo from '../taskInfo';


interface Iprops {
  tasks: {
    description: string,
    date: string,
    time: string,
    _id: string,
    completed: boolean
  }[],
  hideEditInfo: boolean,
  setHideEditInfo: (data: boolean) => void,
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  activitiesType: {activityType: string, generalType: string}
}

const TasksGrid = (props:Iprops) => {
  let tasks = props.tasks?.map((task, index) => {
    return (
      <TaskInfo 
        key={task._id}
        taskDecription={task.description} 
        taskDate={`${task.date}  ${task.time}`}
        completed={task.completed}
        hideEditInfo={props.hideEditInfo}
        setHideEditInfo={props.setHideEditInfo}
        taskId={task._id}
        refresh = {props.refresh}
        setRefresh = {props.setRefresh}
        activitiesType={props.activitiesType}
      />
    )
  })
  return (
    <Container>
      {tasks}
    </Container>
  )
} 

export default TasksGrid