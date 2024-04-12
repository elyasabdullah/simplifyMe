import { createSlice } from "@reduxjs/toolkit"

interface IintialState {
  activityId : string,
  description: string,
  date: string,
  time: string,
  completed: boolean,
  groupName?: string
}
const initialState: IintialState = {
  activityId: '',
  description: '',
  date: '',
  time: '',
  completed: false,
  groupName: ''
}

const activitySlice = createSlice({
  name: 'activity',
  initialState,
  reducers: {
    setFormActivity: (state, action) => {
      state.activityId = action.payload.activityId,
      state.description = action.payload.description,
      state.date = action.payload.date,
      state.time = action.payload.time,
      state.groupName = action.payload?.groupName
    },
    emptyFormActivity: (state) => {
      state.activityId = ""
      state.description = "",
      state.date = "",
      state.time = "",
      state.groupName = ""
    }
  }
})

export const { setFormActivity, emptyFormActivity } = activitySlice.actions;
export default activitySlice.reducer;