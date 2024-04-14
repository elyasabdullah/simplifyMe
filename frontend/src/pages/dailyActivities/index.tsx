import AddTaskForm from 'src/components/addTaskForm'
import Button from 'src/components/Button'
import {
  Container,
  BtnContainer,
  TasksContainer,
} from './styles';
import TasksCaption from 'src/components/tasksCaption';
import TasksGrid from 'src/components/tasksGrid';
import { useEffect, useState } from 'react';
import { useGetActivitiesQuery } from 'src/data/activity';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'src/state/store';
import { logout } from 'src/state/user';
import { useNavigate } from 'react-router-dom';

const DailyActivities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.user._id)
  const [refresh, setRefresh] = useState(false);

  const [taskType, setTaskType] = useState({
    activityType: 'General', generalType: 'DailyActivities'
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
    if(err.data == 'Forbidden' || err.message == 'Failed to refresh token'){
      dispatch(logout());
      navigate('/');
    }
    content = <p>{`Enternal Server Error`}</p>
  }else if(isSuccess) {
    content = <TasksGrid 
      tasks={activitiesData.dailyActivities}
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
        refresh= {refresh}
        setRefresh = {setRefresh}
        hidden={hideForm}
        activitiesType = {taskType}
      />
      <TasksContainer>
        <TasksCaption />
        {content}
      </TasksContainer>
    </Container>
  )
}

export default DailyActivities

