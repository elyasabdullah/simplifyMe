import {
  Container,
  GroupName,
  GroupNameContainer,
  EditContainer,
  EditButton,
  DeleteButton,
  DeleteBoxContainer,
  DeleteBoxBtnsContainer,
  DeleteBoxText,
  DeleteBoxYesBtn,
  DeleteBoxNoBtn
} from './styles';
import TaskInfo from '../taskInfo';
import { useDeleteGroupWithItsActivitiesMutation } from 'src/data/activity';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/state/store';
import { setFormActivityGroup, emptyFormActivityGroup } from 'src/state/activityGroup';
import{ useEffect, useState } from 'react';

interface Iprops {
  groupdata: {
    groupname: string,
    activities: {
      description: string,
      date: string,
      time: string,
      _id: string,
      completed: boolean,
      groupName?:string,
    }[]
  }[],
  setHideFormGroup:React.Dispatch<React.SetStateAction<boolean>>,
  hideEditInfo: boolean
  setHideEditInfo: (data: boolean) => void,
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  activitiesType: {activityType: string, generalType: string},
  groupAndActivities: {groupName: string},
  setGroupAndActivities: React.Dispatch<React.SetStateAction<{groupName: string}>>,
  refetchGroups: boolean,
  setRefetchGroups: React.Dispatch<React.SetStateAction<boolean>>
}

const GroupedTasksGrid = (props:Iprops) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.user._id)
  const [deleteGroupWithItsActivities, {isSuccess, isError, error}] = useDeleteGroupWithItsActivitiesMutation();
  const handleEditGroup = (value:string) => {
    dispatch(setFormActivityGroup({groupName: value}))
    props.setHideFormGroup(false);
  };

  const handleShowDeleteGroupBox = (value: string) => {
    props.setGroupAndActivities({groupName: value})
  };

  const handleHideDeleteGroupBox = ()  => {
    props.setGroupAndActivities({groupName: ""})
  };

  const [groupNameS, setGroupNameS] = useState('');
  const [errorMsg, setError] = useState('');

  const handleDeleteGroup = (value: string)  => {
    deleteGroupWithItsActivities({userId: userId, groupName: value});
    setGroupNameS(value);
  }
  
  useEffect(() => {
    if(isSuccess) {
      props.setGroupAndActivities({groupName: groupNameS})
      props.setRefetchGroups(!props.refetchGroups);
    }else if(isError) {
      let err:any = error
      setError(err.message);// need some changes
    }
  }, [isSuccess, isError])

  const tasks = props.groupdata.map((task, index) => {
    return (
      <Container>
        <GroupNameContainer>
          <GroupName key={index}>
            {task.groupname}
          </GroupName>
          <EditContainer>
            <EditButton
              onClick={() => handleEditGroup(task.groupname)}
            >Edit</EditButton>
            <DeleteButton
              onClick={() => handleShowDeleteGroupBox(task.groupname)}
            >Delete</DeleteButton>
            {(props.groupAndActivities.groupName && task.groupname === props.groupAndActivities.groupName) && <DeleteBoxContainer>
              <DeleteBoxText>Are you sure you want to delete the group with its activities?</DeleteBoxText>
              <DeleteBoxBtnsContainer>
                <DeleteBoxYesBtn
                  onClick={() => handleDeleteGroup(task.groupname)}
                >Yes</DeleteBoxYesBtn>
                <DeleteBoxNoBtn
                  onClick={handleHideDeleteGroupBox}
                >No</DeleteBoxNoBtn>
              </DeleteBoxBtnsContainer>
            </DeleteBoxContainer>}
          </EditContainer>
        </GroupNameContainer>
        {
          task.activities.map((task, index) => {
            return (
              <TaskInfo 
                key={task._id}
                taskDecription={task.description} 
                taskDate={`${task.date}  ${task.time}`}
                completed={task.completed}
                groupName={task.groupName}
                hideEditInfo={props.hideEditInfo}
                setHideEditInfo={props.setHideEditInfo}
                taskId={task._id}
                refresh = {props.refresh}
                setRefresh = {props.setRefresh}
                activitiesType={props.activitiesType}
              />
            )
          })
        }
      </Container>
    )
  })
  
  return (
    <Container>
      {tasks}
    </Container>
  )
} 

export default GroupedTasksGrid