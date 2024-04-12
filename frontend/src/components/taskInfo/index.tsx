import React, { useEffect, useState } from "react"
import { 
  TaskContainer, 
  TaskDate,
  Edit,
  Delete,
  Completed,
  TaskDescription,
  CompletedBtn,
  TasksInfoContainer,
  DateEditContainer,
  EditContainer
} from "./styles";
import { useGetActivityQuery } from "src/data/activity";
import { useDeleteActivityMutation } from "src/data/activity";
import { useMarkCompletedMutation } from "src/data/activity";
import { useDispatch, useSelector} from "react-redux";
import { setFormActivity } from "src/state/activity";

interface Iprops {
  taskDecription:string,
  taskDate: string,
  completed: boolean
  hideEditInfo: boolean,
  taskId: string,
  groupName?: string
  setHideEditInfo: (setEditInfo: boolean) => void
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>
  activitiesType: {activityType: string, generalType: string}
}

const TaskInfo = (props:Iprops) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: any) => state.user._id);

  const {data, isSuccess, error: fetchError} = useGetActivityQuery(
    {userId: userId,activityId: props.taskId, activityType: props.activitiesType.activityType, 
    generalType: props.activitiesType.generalType });

  const [deleteActivity, {isError, error}] = useDeleteActivityMutation();

  const [markCompleted] = useMarkCompletedMutation();

  // const [completed, setCompleted] = useState(false);

  const handleEditActivity = () => {
    props.setHideEditInfo(false);
    if(isSuccess) {
      dispatch(setFormActivity({
        activityId: props.taskId,
        description: data.activity.description,
        date: data.activity.date,
        groupName: data.activity.groupName,
        time: data.activity.time,
      }));
    }
  };
  
  const handleDeleteActivity = () => {
    deleteActivity({
      userId: userId, 
      activityType: props.activitiesType.activityType, 
      generalType: props.activitiesType.generalType, 
      activityId: props.taskId,
      groupName: props.groupName
    });
    props.setRefresh(!props.refresh)
  }
  const handleCompleted = () => {
    
    markCompleted({
      userId: userId, 
      activityId: props.taskId, 
      completed: props.completed ? false : true,
      activityType: props.activitiesType.activityType, 
      generalType: props.activitiesType.generalType,
    })
    props.setRefresh(!props.refresh);
  };

  return (
    <TaskContainer>
      <Completed onClick={handleCompleted}>
        <CompletedBtn 
          className={ props.completed === true ? 'completed': ''} 
        >
          {
            props.completed === true && <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#fff" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg> 
          }
        </CompletedBtn>
      </Completed>
      
      <TasksInfoContainer>
        <TaskDescription
          style={props.completed === true ? {textDecoration: 'line-through', opacity: '0.2'}: {}}
        >
          {props.taskDecription}
        </TaskDescription>
        <DateEditContainer>
          <TaskDate
            style={props.completed === true ? {textDecoration: 'line-through', opacity: '0.2'}: {}}
          >
            {props.taskDate}
          </TaskDate>
          <EditContainer>
            <Edit
              onClick={handleEditActivity}
            >Edit</Edit>
            <Delete
              onClick={handleDeleteActivity}
            >Delete</Delete>
          </EditContainer>
        </DateEditContainer>
      </TasksInfoContainer>
    </TaskContainer>
  )
}

export default TaskInfo