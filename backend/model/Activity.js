const mongoose = require('mongoose');
const { Schema } = mongoose;

const activitiesSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  activityType: {
    General: {
      GeneralActivities: [
        {
          _id: { type: Schema.Types.ObjectId, auto: true },
          description: {
            type: String,
            required: true,
            maxlength: 150
          },
          completed: {
            type: Boolean,
            default: false
          },
          date: String,
          time: String
        }
      ],
      DailyActivities: [
        {
          _id: { type: Schema.Types.ObjectId, auto: true },
          description: {
            type: String,
            required: true,
            maxlength: 150
          },
          completed: {
            type: Boolean,
            default: false
          },
          date: String,
          time: String
        }
      ],
      WeeklyActivities: [
        {
          _id: { type: Schema.Types.ObjectId, auto: true },
          description: {
            type: String,
            required: true,
            maxlength: 150
          },
          completed: {
            type: Boolean,
            default: false
          },
          date: String,
          time: String
        }
      ]
    },
    Related: {
      RelatedActivities: [
        {
          groupname: {
            type: String,
            required: true,
            maxlength: 150
          },
          activities: [
            {
              _id: { type: Schema.Types.ObjectId, auto: true },
              description: {
                type: String,
                required: true,
                maxlength: 150
              },
              completed: {
                type: Boolean,
                default: false
              },
              date: String,
              time: String
            }
          ]
        }
      ]
    }
  }
});

module.exports = mongoose.model('Activities', activitiesSchema);