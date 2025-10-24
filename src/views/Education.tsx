import SilverTitle from "../components/SilverTitle";
import {
  Timeline,
  TimelineDate,
  TimelineText,
  TimelineTitle,
} from "../components/Timeline";
import { motion } from "motion/react";

const Education: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col gap-25 w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <SilverTitle className="text-center">{"<Education />"}</SilverTitle>
      <div className="flex flex-col gap-20 w-full ps-8 sm:ps-20">
        <Timeline>
          <TimelineTitle>
            Degree in Software Analysis and Development
          </TimelineTitle>
          <TimelineText>
            The degree covered core areas such as software modeling, software
            architecture, cloud computing, databases, business-oriented AI,
            project management, object-oriented programming, software
            engineering, quality assurance, and software testing, providing a
            solid foundation for developing robust and scalable systems.
          </TimelineText>
          <TimelineDate>2022/02 - 2024/07</TimelineDate>
        </Timeline>
        <Timeline>
          <TimelineTitle>FullStack JavaScript From OneBitCode</TimelineTitle>
          <TimelineText>
            Covers web fundamentals, including HTML5, CSS3, JavaScript, and
            TypeScript, as well as project versioning with Git and GitHub and
            software design principles such as cohesion and coupling. In
            frontend development, React.js, Next.js, Bootstrap, and Sass. In
            backend development, Node.js, Express.js, Prisma ORM, PostgreSQL,
            and relational databases.
          </TimelineText>
          <TimelineDate>2024/07 - 2025/09</TimelineDate>
        </Timeline>
      </div>
    </motion.div>
  );
};

export default Education;
