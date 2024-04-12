
export interface ActivityData {
  description: string,
  date: string,
  time: string,
  userId: string,
  groupName?: string
}
export interface ActivityGroupData {
  description: string,
  date: string,
  time: string,
  group: string,
  id: string
}

export interface Group {
  groupName: string,
}