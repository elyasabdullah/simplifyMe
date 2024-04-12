import { createSlice } from "@reduxjs/toolkit"

interface IintialState {
  groupName: string
}
const initialState: IintialState = {
  groupName: ''
}

const activityGroupSlice = createSlice({
  name: 'activityGroup',
  initialState,
  reducers: {
    setFormActivityGroup: (state, action) => {
      state.groupName = action.payload?.groupName
    },
    emptyFormActivityGroup: (state) => {
      state.groupName = ""
    }
  }
})

export const { setFormActivityGroup, emptyFormActivityGroup } = activityGroupSlice.actions;
export default activityGroupSlice.reducer;
