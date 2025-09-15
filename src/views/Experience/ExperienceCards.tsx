import { ModalTrigger } from "../../components/Modal/ModalTrigger"
import { LandscapeCard, LandscapeText, LandscapeTitle } from "../../components/LandscapeCard"

const ExperienceCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center w-full mt-20">
      
      <ModalTrigger modalProps={
        {
          name: 'Real State Project',
          deploy: { 
            imgSrc: '/images/real-state-deploy.png', 
            imgAlt: 'Projeto Corretor',
            href: 'https://carlosgabrielrocha.github.io/projeto-corretor/dist/index'
          },
          planning: {
            imgSrc: '/images/real-state-figma.png', 
            imgAlt: 'Projeto Corretor',
            href: 'https://www.figma.com'            
          },
          sourceCodeHref: 'https://github.com/CarlosGabrielRocha/projeto-corretor'
        }
      }>
        <LandscapeCard 
          imgSrc="/images/real-state-deploy.png" 
          imgAlt="projeto corretor"
          badges={['bootstrap', 'ts', 'express', 'node', 'prisma']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>
      </ModalTrigger>
 
        <LandscapeCard 
          imgSrc="/images/real-state-figma.png" 
          imgAlt="projeto corretor"
          badges={['css', 'html', 'js', 'git', 'prisma']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>


        <LandscapeCard 
          imgSrc="/images/placeholder-image.webp" 
          imgAlt="projeto corretor"
          badges={['bootstrap', 'next', 'postgresql', 'node', 'github']}
        >
          <LandscapeTitle>Projeto Corretor</LandscapeTitle>
          <LandscapeText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut consequuntur fuga quis nam magni incidunt, corrupti ullam, recusandae accusamus impedit, porro earum blanditiis architecto. Ipsam ipsa harum velit amet blanditiis?     
          </LandscapeText>
        </LandscapeCard>
    </div>
  )
}

export default ExperienceCards