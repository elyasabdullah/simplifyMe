import AddTaskForm from 'src/components/addTaskForm'
import Button from 'src/components/Button'
import {
  Container,
  BtnContainer,
  TasksContainer,
} from './styles';
import TasksCaption from 'src/components/tasksCaption';
import TasksGrid from 'src/components/tasksGrid';
import { useState, useEffect } from 'react';
import { useGetActivitiesQuery } from 'src/data/activity';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/state/user';
import { useNavigate } from 'react-router-dom';

const WeeklyActivities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const userId = useSelector((state: any) => state.user._id)
  const [refresh, setRefresh] = useState(false)

  const [taskType, setTaskType] = useState({
    activityType: 'General', generalType: 'WeeklyActivities'
  })

  const {data: activitiesData, isSuccess, isLoading, isError, refetch , error}  = 
  useGetActivitiesQuery({userId:userId, activityType: taskType.activityType, generalType: taskType.generalType});
  
  useEffect(() => {
    if (refresh) {
      refetch();
      setRefresh(false);
    }
  }, [refresh, refetch]);

  const [hideForm, setHideForm] = useState(true);

  const handleHideForm = () => {
    setHideForm(!hideForm)
  }

  let content;
  if(isLoading) {
    content = <p>Loading...</p>
  }else if(isError) {
    const err = error as any
    if(err.data == 'Forbidden'){
      dispatch(logout());
      navigate('/');
    }
    content = <p>{`Enternal Server Error`}</p>
  }else if(isSuccess) {
    content = <TasksGrid 
      tasks={activitiesData.weeklyActivities}
      hideEditInfo={hideForm}
      setHideEditInfo={setHideForm}
      refresh = {refresh}
      setRefresh = {setRefresh}
      activitiesType = {taskType}
    />
  }

  
  return (
    <Container>
      <BtnContainer onClick={handleHideForm}>
        <Button onClick={() => {}} text='Add New Activity' />
      </BtnContainer>
      <AddTaskForm 
        hidden={hideForm}
        refresh= {refresh}
        setRefresh = {setRefresh}
        activitiesType = {taskType}
      />
      <TasksContainer>
        <TasksCaption />
        {content}
      </TasksContainer>
    </Container>
  )
}

export default WeeklyActivities

