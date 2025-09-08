import { LandscapeCard, LandscapeText, LandscapeTitle } from "../components/LandscapeCard"
import SecondTitle from "../components/SecondTitle"

const Experience: React.FC = () => {
  return (
    <div className="w-full">
      <SecondTitle className="text-center">{'<Experience />'}</SecondTitle>
      <div className="flex flex-col gap-20 items-center justify-center mt-20">
      <a href="#">
        <LandscapeCard 
          imgSrc="/images/placeholder-image.webp" 
          imgAlt="projeto corretor"
          badges={['bootstrap', 'ts', 'express', 'node', 'prisma']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>
      </a>
      <a href="#">
        <LandscapeCard 
          imgSrc="/images/placeholder-image.webp" 
          imgAlt="projeto corretor"
          badges={['css', 'html', 'js', 'git', 'prisma']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>
      </a>
      <a href="#">
        <LandscapeCard 
          imgSrc="/images/placeholder-image.webp" 
          imgAlt="projeto corretor"
          badges={['bootstrap', 'next', 'postgresql', 'node', 'github']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>
      </a>
      </div>
    </div>
  )
}

export default Experience