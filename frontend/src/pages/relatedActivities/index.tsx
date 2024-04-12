import AddTaskFormGroup from 'src/components/addTaskFormGroup';
import { useState, useEffect } from 'react';
import Button from 'src/components/Button';
import TextInput from 'src/components/textInput';
import TasksCaption from 'src/components/tasksCaption';
import GroupedTasksGrid from 'src/components/groupedTasksGrid';
import useCreateNewGroup from 'src/hooks/useCreateNewGroup';
import { useGetActivitiesQuery } from 'src/data/activity';
import { useAddNewgroupMutation } from 'src/data/activity';
import { emptyFormActivityGroup } from 'src/state/activityGroup';
import { useModifyGroupNameMutation } from 'src/data/activity';
import {
  Container,
  BtnsContainer,
  BtnContainer,
  TasksContainer,
  GroupInputCon
} from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'src/state/user';
import { useNavigate } from 'react-router-dom';

const RelatedActivities = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
    
  const userId = useSelector((state: any) => state.user._id)
  const [refresh, setRefresh] = useState(false);
  const [refetchGroups, setRefetchGroups] = useState(false);
  const [groupAndActivities, setGroupAndActivities] = useState({
    groupName: "", 
  })
  
  const storeGroupName = useSelector((state:any) => state.activityGroup);

  useEffect(() => {
    if(storeGroupName.groupName) {
      handleChange(storeGroupName.groupName, 'groupName')
    }
  }, [storeGroupName]);

  const [taskType, setTaskType] = useState({
    activityType: 'Related', generalType: 'RelatedActivities'
  })

  const {data: activitiesData, isSuccess, isLoading, isError, refetch , error}  = 
    useGetActivitiesQuery({userId:userId, activityType: taskType.activityType, 
    generalType: taskType.generalType});
  
  const [addNewgroup, {error: groupError, isSuccess: isSuccessG, data: da}] = useAddNewgroupMutation();
  const [modifyGroupName, {}] = useModifyGroupNameMutation();


  const {values, handleChange, getError, resetForm} = useCreateNewGroup(
    {
      onSubmitForm: () => {},
      initialState: {
        groupName: ""
      }
    }
  );
  
  useEffect(() => {
    if (refresh) {
      refetch();
      setRefresh(false);
    }
  }, [refresh, refetch]);

  const [hideForm, setHideForm] = useState(true);
  const [hideForm2, setHideForm2] = useState(true);

  const handleHideTaskForm = () => {
    setHideForm(!hideForm)
  }
  const handleHideGroupForm = () => {
    setHideForm2(!hideForm2)
  }
  const [showDeleteBox, setShowDeleteBox] = useState(false);

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
    content = <GroupedTasksGrid 
      groupdata={activitiesData.relatedActivities}
      hideEditInfo={hideForm}
      setHideEditInfo={setHideForm}
      refresh = {refresh}
      setRefresh = {setRefresh}
      activitiesType = {taskType}
      setHideFormGroup = {setHideForm2}
      groupAndActivities={groupAndActivities}
      setGroupAndActivities={setGroupAndActivities}
    />
    
  }
  const [showError, setShowError] = useState(false);

  const handleSubmitGroup = () => {
    addNewgroup({userId: userId, groupName: values.groupName})
    resetForm();
    setRefresh(!refresh);
    setRefetchGroups(!refetchGroups);
    values.groupName && values.groupName.length > 0 ? setShowError(true) : setShowError(false)
  };

  const handleGroupFormChange = (value: string) => {
    handleChange(value ?? '', 'groupName');
    (value.length > 0) ? setShowError(true) : setShowError(false)
  };
  const handleModifyGroupName = () => {
    modifyGroupName({
      userId: userId,
      newGroupName: values.groupName,
      previousGroupName:storeGroupName.groupName 
    })
    dispatch(emptyFormActivityGroup());
    handleChange('', 'groupName');
    setRefresh(!refresh)
  }
  return (
    <Container>
      <BtnsContainer>
        <BtnContainer onClick={handleHideTaskForm}>
          <Button onClick={() => {}} text='Add New Activity' />
        </BtnContainer>
        <AddTaskFormGroup 
          hidden={hideForm} 
          refresh={refresh}
          setRefresh={setRefresh}
          activitiesType={taskType}
          refetchGroups = {refetchGroups}
          setRefetchGroups = {setRefetchGroups}
        />
        <BtnContainer onClick={handleHideGroupForm}>
          <Button onClick={() => {}} text="Add New Tasks Group" />
        </BtnContainer>
      </BtnsContainer>
      <GroupInputCon className={hideForm2 ? 'hide': ''}>
        <TextInput 
          label='Group Name' 
          id='tasksgroupname'
          type='text'
          onChange={handleGroupFormChange}
          value={values.groupName}
          name=""
          placeholder=""
          error={getError("groupName")}
        />
        <span style={{ display: showError ? 'none' : 'block', color:'red', padding: '0 0 8px' }}>
          You should enter a group name
        </span>
        {!storeGroupName.groupName ? <Button 
          text="Add group"
          isDisabled={!showError ? true : false}
          onClick={handleSubmitGroup} 
        /> : 
        <Button 
          text="Add modifications"
          onClick={handleModifyGroupName} 
        />}
      </GroupInputCon>
      <TasksContainer>
        <TasksCaption />
        {content}
      </TasksContainer>
    </Container>
  )
};

export default RelatedActivities

