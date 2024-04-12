import TextInput from "../textInput";
import DateInput from "../dateInput";
import TimeInput from "../timeInput";
import Button from "../Button";
import { Container } from "./styled";
import useCreateNewActivity from "src/hooks/useCreateNewActivity";
import { useCreateActivityMutation } from "src/data/activity";
import { useUpdateActivityMutation } from "src/data/activity";
import { useSelector, useDispatch } from "react-redux";
import { emptyFormActivity } from "src/state/activity";
import { useEffect } from "react";



interface Iprops {
  hidden: boolean,
  refresh: boolean,
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>,
  activitiesType: {activityType: string, generalType: string}
}

const AddTaskForm = (props:Iprops) => {
  const userId = useSelector((state: any) => state.user._id)
  const dispatch = useDispatch();
  const data = useSelector((state:any) => state.activity);

  const [createActivity] = useCreateActivityMutation();
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
      time: ''
    }},
    
  );

  useEffect(() => {
    if(data.description) {
      handleChange(data.description, 'description');
      handleChange(data.date, 'date');
      handleChange(data.time, 'time');
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
      generalType: props.activitiesType.generalType
    })
    props.setRefresh(!props.refresh);
    resetForm();
    dispatch(emptyFormActivity());
  }

  return (
    <Container className={props.hidden ? 'hide': ''}>
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
      {
        !data.activityId || !data.description 
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

export default AddTaskForm;