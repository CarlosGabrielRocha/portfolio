import SilverTitle from "../components/SilverTitle"
import { Timeline, TimelineDate, TimelineText, TimelineTitle } from "../components/Timeline"
import { motion } from "motion/react"

const Education: React.FC = () => {
  return (
    <motion.div 
      className="flex flex-col gap-25 w-full"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1, delay: 0.2}}
    >
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
    </motion.div>
  )
}

export default Education