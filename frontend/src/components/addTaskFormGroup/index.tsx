import TextInput from "../textInput";
import DateInput from "../dateInput";
import TimeInput from "../timeInput";
import { Container } from './styles';
import SelectInput from "../selectInput";
import Button from "../Button";
import { useCreateActivityMutation } from "src/data/activity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/state/store";
import { useUpdateActivityMutation } from "src/data/activity";
import useCreateNewActivity from "src/hooks/useCreateNewActivity";
import React, {useEffect, useState} from "react";
import { emptyFormActivity } from "src/state/activity";
import { useGetGroupNamesQuery } from "src/data/activity";

interface Iprops {
  hidden: boolean,
  activitiesType: {activityType: string, generalType: string}
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  refetchGroups: boolean,
  setRefetchGroups: React.Dispatch<React.SetStateAction<boolean>>
}

const AddTaskFormGroup = (props:Iprops) => {
  const dispatch = useDispatch();
  const data = useSelector((state:RootState) => state.activity);
  const userId = useSelector((state: RootState) => state.user._id)

  const {data: groupNames, isError: isErrorG, error: errorG, isSuccess: isSuccessG, refetch} = 
  useGetGroupNamesQuery({userId: userId});

  const [createActivity, {error, isError, isLoading, isSuccess}] = useCreateActivityMutation();
  const [updateActivity] = useUpdateActivityMutation();

  const {values, getError, handleChange, resetForm, onSubmit} = useCreateNewActivity({
    onSubmitForm: (data, resetForm) => {
      return (
        createActivity({...data, activityType: props.activitiesType.activityType, generalType: props.activitiesType.generalType}),
        resetForm(),
        props.setRefresh(!props.refresh)
      )
    },
    initialState: {
      userId: userId ,
      description: '',
      date: '',
      time: '',
    }},
    
  );

  useEffect(() => {
    refetch();
  }, [props.refetchGroups]);

  let selectOptions: string[] = [];

  if(!errorG && isSuccessG) {
    selectOptions = groupNames.groupNames;
  }else {
    selectOptions = [];
  }

  useEffect(() => {
    if(data.description) {
      handleChange(data.description, 'description');
      handleChange(data.date, 'date');
      handleChange(data.time, 'time');
      handleChange(data.groupName, 'groupName')
    }
  }, [data])

  const handleSubmit = () => {
    dispatch(emptyFormActivity());
    onSubmit();
  }
  const handleModifications = () => {
    updateActivity({
      userId: userId, 
      activityId: data.activityId, 
      description: values.description, 
      date: values.date, 
      time: values.time,
      activityType: props.activitiesType.activityType, 
      generalType: props.activitiesType.generalType,
      groupName: values.groupName
    })
    props.setRefresh(!props.refresh);
    resetForm();
    dispatch(emptyFormActivity());
  }
  return (
    <Container className={props.hidden ? 'hide': ''}>
      <SelectInput  
        id="taskgroup"
        label="Task Group"
        onChange={(value) => handleChange(value ?? '', 'groupName')}
        value={values.groupName}
        error={getError('groupName')}
        data={selectOptions}
      >

      </SelectInput>
      <TextInput 
        id="taskdescriptioninput" 
        label="Task Description" 
        type="text"
        onChange={(value) => handleChange(value ?? '', 'description')}
        value={values.description}
        placeholder=""
        name=""
        error={getError('description')}
      />
      <DateInput 
        id="taskdateinput" 
        label="Task Date" 
        type="date"
        onChange={(value) => handleChange(value ?? '', 'date')}
        value={values.date}
        placeholder=""
        name="activityDate"
        error={getError('date')}
      />
      <TimeInput 
        id="tasktimeinput" 
        label="Task Time" 
        type="time"
        onChange={(value) => handleChange(value ?? '', 'time')}
        value={values.time}
        placeholder=""
        name="activityTime" 
        error={getError('time')}
      />
      {!data.activityId || !data.description 
        ? <Button 
        text="Add activity" 
        onClick={handleSubmit}
        /> 
        : <Button 
        text="Add modifications" 
        onClick={handleModifications}
        />}
    </Container>
  )
}

export default AddTaskFormGroup;
