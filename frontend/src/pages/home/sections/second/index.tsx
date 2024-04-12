import { MoreInfo } from "./components/Info"
import { Container } from "./styles";
import ImageOne from '../../../../statics/images/22.png';
import ImageTwo from '../../../../statics/images/33.png';
import ImageThree from '../../../../statics/images/44.png';

export const MoreInfoSection = () => {
  const data = [
    {
      url: `${ImageOne}`,
      headText: 'Where organization meets efficiency.',
      paragraph: "Experience the power of SimplifyMe, where all your tasks can finally coexist in a harmonious and streamlined manner. Give your team a collaborative space to stay on top of tasks and projects while maintaining a clear separation from your personal responsibilities."
    },
    {
      url: `${ImageTwo}`,
      headText: 'Achieve mental clarity effortlessly.',
      paragraph: 'Discover a new level of mental clarity with SimplifyMe. Your tasks are intelligently sorted into Today, Upcoming, and customizable Filter views, allowing you to prioritize and focus on your most important work with ease.'
    },
    {
      url: `${ImageThree}`,
      headText: 'Get tasks out of your head instantly.',
      paragraph: "Experience the fastest way to unload your thoughts and tasks with SimplifyMe. Simply type anything into the task field, and SimplifyMe's advanced natural language recognition will instantly populate your to-do list, helping you stay organized and productive."
    }
  ];

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