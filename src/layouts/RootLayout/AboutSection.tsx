import TextCard from "../../components/TextCard";
import TextCardTitle from "../../components/TextCard/TextCardTitle";
import Astronaut from "./Astronaut";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="flex flex-col items-center md:flex-row gap-30 justify-around sm:gap-13 md:gap-20 px-5 sm:px-10 bg-gradient-to-b from-black from-20% to-hlight-blue pt-60 pb-40 font-light">
        <TextCard className="flex-3 max-w-md md:max-w-lg 2xl:max-w-xl order-2 md:order-1">
          <TextCardTitle>About Me</TextCardTitle>
          <p className="text-md md:text-lg 2xl:text-xl">
            Hello! I’m Carlos Gabriel, a Full Stack Developer from Brazil who
            loves bringing ideas to life and solving problems through
            technology. I work with robust and intuitive web applications for
            the user, combining beauty, fluidity, performance, and security.
          </p>
          <p className="text-md md:text-lg 2xl:text-xl">
            For me, each project is challenge and an opportunity to build
            something that truly makes a difference, whether by improving the
            user experience or helping my client achieve their goals.
          </p>
          <div className="flex flex-col gap-10 items-center">
            <p className="mt-10 font-semibold text-md md:text-lg 2xl:text-xl text-start">
              Let's connect and create something amazing together!
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=carlosgabrieldesenvolvedor@gmail.com"
              target="_blank"
              className="flex justify-center min-w-20 p-3 border-1 rounded-3xl text-sm shadow-md shadow-hlight-blue cursor-pointer font-medium hover:opacity-75 active:border-hlight-blue w-fit drop-shadow-lg/50 drop-shadow-darker-blue"
            >
              Contact Me By Email
            </a>
          </div>
        </TextCard>
        <Astronaut />
      </div>
    </section>
  );
};

export default AboutSection;
