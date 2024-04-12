import {
  Container
} from './styles'
import CreateActivityImgage from '../../../../statics/images/create activity.png';
import CreateActivityImgageS from '../../../../statics/images/create activity small.png';
import CompletedImage from '../../../../statics/images/completed.png';
import CompletedImageS from '../../../../statics/images/completed small.png';
import EditActivity from '../../../../statics/images/edit-delete-activity.png';
import EditActivityS from '../../../../statics/images/edit-delete-activity small.png';
import EditGroup from '../../../../statics/images/group.png';
import EditGroupS from '../../../../statics/images/group small.png';
import ActivityGroup from '../../../../statics/images/activity group.png';
import ActivityGroupS from '../../../../statics/images/activity group small.png';
import MoreInfo from './components/info';
import { useState, useEffect } from 'react';


const SectionOne = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  const data = [
    {
      url: `${windowWidth > 480 ? CreateActivityImgage : CreateActivityImgageS}`,
      headText: 'Adding New Activity',
      paragraph: 'Adding New Activity" feature allows you to easily add new tasks or activities to SimplifyMe. To add a new activity, navigate to the respective category section, such as Daily Activities, Weekly Activities, or General Activities. Click on the "Add Activity" button to open the activity creation form. Fill in the necessary details, including the activity description, date, and time. Once you have entered the information, click "Save" to add the activity to your list. This feature enables you to keep track of your upcoming tasks effectively'
    },
    {
      url: `${windowWidth > 480 ? CompletedImage : CompletedImageS}`,
      headText: 'Marking an Activity as Completed',
      paragraph: 'SimplifyMe offers a convenient way to mark your activities as completed. To mark an activity as completed, navigate to the respective category section where the activity is listed, such as Daily Activities, Weekly Activities, or General Activities. Find the activity you have finished and click on the checkbox or toggle the completion status. By marking activities as completed, you can keep track of your progress and visually identify the tasks you have finished. This feature aids in maintaining an organized and up-to-date activity list.'
    },
    {
      url: `${windowWidth > 480 ? EditActivity : EditActivityS}`,
      headText: 'Editing and Deleting an Activity',
      paragraph: 'With SimplifyMe, you have the flexibility to edit or delete existing activities as needed. To edit an activity, locate the activity you wish to modify in the respective category section. Click on the activity to access the editing options. You can then update the description, date, or time of the activity. After making the desired changes, click "Save" to update the activity details. If you want to delete an activity, simply locate the specific activity and click on the delete icon or option. Confirm the deletion when prompted. This functionality allows you to manage and customize your activity list effortlessly.'
    },
    {
      url: `${windowWidth > 480 ? EditGroup : EditGroupS}`,
      headText: 'Adding, Editing, and Deleting a Group',
      paragraph: 'SimplifyMe provides the capability to create, edit, and delete groups to organize your related activities efficiently. To add a new group, navigate to the "Related Activities" section and click on the "Add Group" button. Enter the desired group name and click "Save" to create the group. If you want to edit an existing group, locate the group you wish to modify and click on the edit icon or option. Update the group name and save the changes. To delete a group, find the specific group you want to remove and click on the delete icon or option. Confirm the deletion when prompted. This feature empowers you to categorize and manage your related activities effectively.'
    },
    {
      url: `${windowWidth > 480 ? ActivityGroup : ActivityGroupS}`,
      headText: 'Adding Activity to a Specific Group',
      paragraph: 'SimplifyMe allows you to assign activities to specific groups for better organization. To add an activity to a particular group, go to the "Related Activities" section and locate the desired group. Click on the group name to access the group details. Within the group, click on the "Add Activity" button. Fill in the activity description, date, and time, and click "Save" to add the activity to the group. This functionality helps you group related activities together for easier management and tracking.'
    },
  ]
  const elements = data.map((ele, index) => {
    return (
      <MoreInfo key={index} url={ele.url} headText={ele.headText} paragraph={ele.paragraph} />
    )
  })
  return (
    <Container>
      {elements}
    </Container>
  )
}
export default SectionOne