const Activity = require('../model/Activity');

const getAllActivities = async (req, res) => {
  const { userId, activityType, generalType } = req.query;

  if (!userId || !activityType) {
    return res.status(400).json({ message: 'userId and activity type are required' });
  }
  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'No activities found for the user' });
    }

    if (activityType === 'General') {
      if (generalType === 'GeneralActivities') {
        const generalActivities = activity.activityType.General.GeneralActivities;
        return res.json({ generalActivities });
      } 
      else if (generalType === 'DailyActivities') {
        const dailyActivities = activity.activityType.General.DailyActivities;
        return res.json({ dailyActivities });
      } 
      else if (generalType === 'WeeklyActivities') {
        const weeklyActivities = activity.activityType.General.WeeklyActivities;
        return res.json({ weeklyActivities });
      } 
      else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }
    } 
    else if (activityType === 'Related') {
      const relatedActivities = activity.activityType.Related.RelatedActivities;
      return res.json({ relatedActivities });
    } 
    else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }
  } catch (error) {
    console.error('Error retrieving activities:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const createNewActivity = async (req, res) => {
  const { description, userId, activityType, groupName, date, time } = req.body;

  if (!description || !userId || !activityType) {
    return res.status(400).json({ message: 'Description, userId, and activityType are required' });
  }

  try {
    let activity = await Activity.findOne({ userId: userId });

    if (!activity) {
      const newActivity = new Activity({
        userId,
        activityType: {
          General: {
            GeneralActivities: [],
            DailyActivities: [],
            WeeklyActivities: []
          },
          Related: {
            RelatedActivities: []
          }
        }
      });

      activity = await newActivity.save();
    }

    if (activityType === 'General') {
      const { generalType } = req.body;

      if (generalType === 'DailyActivities') {
        activity.activityType.General.DailyActivities.push({
          description,
          completed: false,
          date: date || '',
          time: time || ''
        });
      } else if (generalType === 'WeeklyActivities') {
        activity.activityType.General.WeeklyActivities.push({
          description,
          completed: false,
          date: date || '',
          time: time || ''
        });
      } else if (generalType === 'GeneralActivities') {
        activity.activityType.General.GeneralActivities.push({
          description,
          completed: false,
          date: date || '',
          time: time || ''
        });
      } else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }
    } else if (activityType === 'Related') {
      if (!groupName) {
        return res.status(400).json({ message: 'groupname is required for related activities' });
      }

      const relatedGroup = activity.activityType.Related.RelatedActivities.find(
        (group) => group.groupname === groupName
      );

      if (relatedGroup) {
        relatedGroup.activities.push({
          description,
          completed: false,
          date: date || '',
          time: time || ''
        });
      } else {
        return res.status(404).json({ message: 'Related activity group not found' });
      }
    } else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }

    await activity.save();
    return res.status(201).json({ message: 'Activity created successfully' });
  } catch (error) {
    console.error('Error creating activity:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const updateActivity = async (req, res) => {
  const { userId, activityId, activityType, groupName, description, date, time } = req.body;

  if (!userId || !activityId || !activityType) {
    return res.status(400).json({ message: 'Missing userId, activityId, or activityType' });
  }

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    if (activityType === 'General') {
      const { generalType } = req.body;

      if (!generalType) {
        return res.status(400).json({ message: 'Missing generalType for General activity' });
      }

      if (generalType === 'DailyActivities') {
        const dailyActivity = activity.activityType.General.DailyActivities.find(
          (activity) => activity._id.toString() === activityId
        );

        if (!dailyActivity) {
          return res.status(404).json({ message: 'DailyActivity not found' });
        }

        dailyActivity.description = description || dailyActivity.description;
        dailyActivity.date = date || dailyActivity.date;
        dailyActivity.time = time || dailyActivity.time;
      } else if (generalType === 'WeeklyActivities') {
        const weeklyActivity = activity.activityType.General.WeeklyActivities.find(
          (activity) => activity._id.toString() === activityId
        );

        if (!weeklyActivity) {
          return res.status(404).json({ message: 'WeeklyActivity not found' });
        }

        weeklyActivity.description = description || weeklyActivity.description;
        weeklyActivity.date = date || weeklyActivity.date;
        weeklyActivity.time = time || weeklyActivity.time;
      } else if (generalType === 'GeneralActivities') {
        const generalActivity = activity.activityType.General.GeneralActivities.find(
          (activity) => activity._id.toString() === activityId
        );

        if (!generalActivity) {
          return res.status(404).json({ message: 'GeneralActivity not found' });
        }

        generalActivity.description = description || generalActivity.description;
        generalActivity.date = date || generalActivity.date;
        generalActivity.time = time || generalActivity.time;
      } else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }
    } else if (activityType === 'Related') {
      if (!groupName) {
        return res.status(400).json({ message: 'groupName is required for related activities' });
      }

      const relatedActivity = activity.activityType.Related.RelatedActivities.find(
        (activity) => activity.groupname === groupName
      );

      if (!relatedActivity) {
        return res.status(404).json({ message: 'Related activity group not found' });
      }

      const relatedActivityToUpdate = relatedActivity.activities.find(
        (activity) => activity._id.toString() === activityId
      );

      if (!relatedActivityToUpdate) {
        return res.status(404).json({ message: 'Related activity not found' });
      }

      relatedActivityToUpdate.description = description || relatedActivityToUpdate.description;
      relatedActivityToUpdate.date = date || relatedActivityToUpdate.date;
      relatedActivityToUpdate.time = time || relatedActivityToUpdate.time;
    } else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }

    await activity.save();
    return res.status(200).json({ message: 'Activity updated successfully' });
  } catch (error) {
    console.error('Error updating activity:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteActivity = async (req, res) => {
  if (!req.body.userId || !req.body.activityId || !req.body.activityType) {
    return res.status(400).json({ message: 'userId, activityId, and activityType are required' });
  }

  const { userId, activityType, activityId } = req.body;

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    if (activityType === 'General') {
      const { generalType } = req.body;

      if (!generalType) {
        return res.status(400).json({ message: 'Missing generalType for General activity' });
      }

      if (generalType === 'DailyActivities') {
        const dailyActivityIndex = activity.activityType.General.DailyActivities.findIndex(
          (activity) => activity._id.toString() === activityId
        );

        if (dailyActivityIndex === -1) {
          return res.status(404).json({ message: 'DailyActivity not found' });
        }

        activity.activityType.General.DailyActivities.splice(dailyActivityIndex, 1);
      } else if (generalType === 'WeeklyActivities') {
        const weeklyActivityIndex = activity.activityType.General.WeeklyActivities.findIndex(
          (activity) => activity._id.toString() === activityId
        );

        if (weeklyActivityIndex === -1) {
          return res.status(404).json({ message: 'WeeklyActivity not found' });
        }

        activity.activityType.General.WeeklyActivities.splice(weeklyActivityIndex, 1);
      } else if (generalType === 'GeneralActivities') {
        const generalActivityIndex = activity.activityType.General.GeneralActivities.findIndex(
          (activity) => activity._id.toString() === activityId
        );

        if (generalActivityIndex === -1) {
          return res.status(404).json({ message: 'GeneralActivity not found' });
        }

        activity.activityType.General.GeneralActivities.splice(generalActivityIndex, 1);
      } else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }
    } else if (activityType === 'Related') {
      const relatedActivities = activity.activityType.Related.RelatedActivities;

      for (let i = 0; i < relatedActivities.length; i++) {
        const relatedActivity = relatedActivities[i];
        const activityIndex = relatedActivity.activities.findIndex(activity => activity._id.toString() === activityId);

        if (activityIndex !== -1) {
          relatedActivity.activities.splice(activityIndex, 1);

          if (relatedActivity.activities.length === 0) {
            relatedActivities.splice(i, 1);
          }

          await activity.save();
          return res.status(200).json({ message: 'Activity deleted successfully' });
        }
      }

      return res.status(404).json({ message: 'Related activity not found' });
    } else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }

    await activity.save();
    return res.status(200).json({ message: 'Activity deleted successfully' });
  } catch (error) {
    console.error('Error deleting activity:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getActivity = async (req, res) => {
  const { userId, activityType, activityId } = req.query;

  if (!userId || !activityType || !activityId) {
    return res.status(400).json({ message: 'userId, activityType, and activityId are required' });
  }

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    if (activityType === 'General') {
      const { generalType } = req.query;

      if (!generalType) {
        return res.status(400).json({ message: 'Missing generalType for General activity' });
      }

      let foundActivity;

      if (generalType === 'DailyActivities') {
        foundActivity = activity.activityType.General.DailyActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else if (generalType === 'WeeklyActivities') {
        foundActivity = activity.activityType.General.WeeklyActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else if (generalType === 'GeneralActivities') {
        foundActivity = activity.activityType.General.GeneralActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }

      if (!foundActivity) {
        return res.status(404).json({ message: 'Activity not found' });
      }

      return res.status(200).json({ activity: foundActivity });
    } else if (activityType === 'Related') {
      let foundActivity;
      let foundGroupname = '';

      for (const relatedActivity of activity.activityType.Related.RelatedActivities) {
        foundActivity = relatedActivity.activities.find(
          (activity) => activity._id.toString() === activityId
        );

        if (foundActivity) {
          foundGroupname = relatedActivity.groupname;
          break;
        }
      }

      if (!foundActivity) {
        return res.status(404).json({ message: 'Activity not found' });
      }

      const response = {
        activity: {
          _id: foundActivity._id,
          description: foundActivity.description,
          completed: foundActivity.completed,
          date: foundActivity.date,
          time: foundActivity.time,
          groupName: foundGroupname
        }
      };

      return res.status(200).json(response);
    } else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }
  } catch (error) {
    console.error('Error retrieving activity:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


const markActivityCompleted = async (req, res) => {
  if (!req.body.userId || !req.body.activityId || !req.body.activityType) {
    return res.status(400).json({ message: 'userId, activityId, and activityType are required' });
  }

  const { userId, activityType, activityId, completed } = req.body;

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    if (activityType === 'General') {
      const { generalType } = req.body;

      if (!generalType) {
        return res.status(400).json({ message: 'Missing generalType for General activity' });
      }

      let foundActivity;

      if (generalType === 'DailyActivities') {
        foundActivity = activity.activityType.General.DailyActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else if (generalType === 'WeeklyActivities') {
        foundActivity = activity.activityType.General.WeeklyActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else if (generalType === 'GeneralActivities') {
        foundActivity = activity.activityType.General.GeneralActivities.find(
          (activity) => activity._id.toString() === activityId
        );
      } else {
        return res.status(400).json({ message: 'Invalid generalType' });
      }

      if (!foundActivity) {
        return res.status(404).json({ message: 'Activity not found' });
      }

      foundActivity.completed = completed;

      await activity.save();

      return res.status(200).json({ message: 'Activity marked as completed' });
    } else if (activityType === 'Related') {
      const relatedActivity = activity.activityType.Related.RelatedActivities.find(
        (activity) => activity.activities.some((act) => act._id.toString() === activityId)
      );

      if (!relatedActivity) {
        return res.status(404).json({ message: 'Related activity not found' });
      }

      const foundActivity = relatedActivity.activities.find(
        (activity) => activity._id.toString() === activityId
      );

      if (!foundActivity) {
        return res.status(404).json({ message: 'Activity not found' });
      }

      foundActivity.completed = completed;

      await activity.save();

      return res.status(200).json({ message: 'Activity marked as completed' });
    } else {
      return res.status(400).json({ message: 'Invalid activityType' });
    }
  } catch (error) {
    console.error('Error marking activity as completed:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const addNewGroup = async (req, res) => {
  
  if (!req.body.userId || !req.body.groupName) {
    return res.status(400).json({ message: 'userId and groupName are required' });
  }

  const { userId, groupName } = req.body;

  try {
    const activity = await Activity.findOne({ userId: userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const existingGroup = activity.activityType.Related.RelatedActivities.find(
      (group) => group.groupname.toLowerCase() === groupName.toLowerCase()
    );

    if (existingGroup) {
      return res.status(400).json({ message: 'Group with the same name already exists' });
    }

    const newGroup = {
      groupname: groupName,
      activities: []
    };

    activity.activityType.Related.RelatedActivities.push(newGroup);

    await activity.save();

    return res.status(200).json({ message: 'New group added successfully' });
  } catch (error) {
    console.error('Error adding new group:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const modifyGroupName = async (req, res) => {
  if (!req.body.userId || !req.body.newGroupName || !req.body.previousGroupName) {
    return res.status(400).json({ message: 'userId, previousGroupName, and newGroupName are required' });
  }

  const { userId, newGroupName, previousGroupName } = req.body;

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const groupToModify = activity.activityType.Related.RelatedActivities.find(
      (group) => group.groupname.toLowerCase() === previousGroupName.toLowerCase()
    );

    if (!groupToModify) {
      return res.status(404).json({ message: 'Group not found' });
    }

    const existingGroup = activity.activityType.Related.RelatedActivities.find(
      (group) => group.groupname.toLowerCase() === newGroupName.toLowerCase()
    );

    if (existingGroup) {
      return res.status(400).json({ message: 'Group with the same name already exists' });
    }

    groupToModify.groupname = newGroupName;

    await activity.save();

    return res.status(200).json({ message: 'Group name modified successfully' });
  } catch (error) {
    console.error('Error modifying group name:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteGroupWithItsActivities = async (req, res) => {
  if (!req.body.userId || !req.body.groupName) {
    return res.status(400).json({ message: 'userId and groupName are required' });
  }

  const { userId, groupName } = req.body;

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const groupToDelete = activity.activityType.Related.RelatedActivities.find(
      (group) => group.groupname.toLowerCase() === groupName.toLowerCase()
    );

    if (!groupToDelete) {
      return res.status(404).json({ message: 'Group not found' });
    }

    activity.activityType.Related.RelatedActivities = activity.activityType.Related.RelatedActivities.filter(
      (group) => group.groupname.toLowerCase() !== groupName.toLowerCase()
    );

    await activity.save();

    return res.status(200).json({ message: 'Group and its activities deleted successfully' });
  } catch (error) {
    console.error('Error deleting group and its activities:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getGroupWithItsActivities = async (req, res) => {
  const { userId, groupName } = req.query;

  if (!userId || !groupName) {
    return res.status(400).json({ message: 'userId and groupName are required' });
  }

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const group = activity.activityType.Related.RelatedActivities.find(
      (group) => group.groupname.toLowerCase() === groupName.toLowerCase()
    );

    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }

    return res.status(200).json({ group });
  } catch (error) {
    console.error('Error retrieving group and its activities:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getGroupNames = async (req, res) => {
  const { userId } = req.query;

  if (!userId) {
    return res.status(400).json({ message: 'userId is required' });
  }

  try {
    const activity = await Activity.findOne({ userId });

    if (!activity) {
      return res.status(404).json({ message: 'Activity not found' });
    }

    const groupNames = activity.activityType.Related.RelatedActivities.map((group) => group.groupname);

    return res.status(200).json({ groupNames });
  } catch (error) {
    console.error('Error retrieving group names:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getAllActivities,
  getActivity,
  createNewActivity,
  updateActivity,
  markActivityCompleted,
  deleteActivity,
  addNewGroup,
  modifyGroupName,
  deleteGroupWithItsActivities,
  getGroupWithItsActivities,
  getGroupNames
}