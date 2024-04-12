import {
  TaskDate,
  TaskDescription,
  CaptionContainer,
  TasksInfoContainer,
  DateEditContainer,
  EditContainer,
  CompletedCon,
  Completed,
  Edit,
  Delete
} from './styles'
const TasksCaption = () => {
  return (
    <CaptionContainer>
      <CompletedCon>
        <Completed>
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#fff" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
        </Completed>
      </CompletedCon>
      <TasksInfoContainer>
        <TaskDescription>Task Description</TaskDescription>
        <DateEditContainer>
          <TaskDate>
            Date and Time
          </TaskDate>
          <EditContainer>
            <Edit>Edit</Edit>
            <Delete>Delete</Delete>
          </EditContainer>
        </DateEditContainer>
      </TasksInfoContainer>
    </CaptionContainer>
  )
}

export default TasksCaption