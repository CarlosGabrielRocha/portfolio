import SilverTitle from "../components/SilverTitle"
import { Timeline, TimelineDate, TimelineText, TimelineTitle } from "../components/Timeline"

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-25 w-full">
      <SilverTitle className="text-center">
        {'<Education />'}
      </SilverTitle>
      <div className="flex flex-col gap-20 w-full ps-8 sm:ps-20">
        <Timeline>
          <TimelineTitle>Análise e Desenvolvimento de Sistemas</TimelineTitle>
          <TimelineText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus cumque repellat hic fugiat obcaecati ipsam soluta tempora tenetur pariatur quam voluptas, iure dolores totam sequi dolorum libero, minima dolore.
          </TimelineText>
          <TimelineDate>2022-02/2024-08</TimelineDate>
        </Timeline>
         <Timeline>
          <TimelineTitle>Análise e Desenvolvimento de Sistemas</TimelineTitle>
          <TimelineText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus cumque repellat hic fugiat obcaecati ipsam soluta tempora tenetur pariatur quam voluptas, iure dolores totam sequi dolorum libero, minima dolore.
          </TimelineText>
          <TimelineDate>2022-02/2024-08</TimelineDate>
        </Timeline>
           <Timeline>
          <TimelineTitle>Análise e Desenvolvimento de Sistemas</TimelineTitle>
          <TimelineText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate delectus cumque repellat hic fugiat obcaecati ipsam soluta tempora tenetur pariatur quam voluptas, iure dolores totam sequi dolorum libero, minima dolore.
          </TimelineText>
          <TimelineDate>2022-02/2024-08</TimelineDate>
        </Timeline>    
      </div>
    </div>
  )
}

export default Education