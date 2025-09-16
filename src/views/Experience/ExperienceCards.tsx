import { ModalTrigger } from "../../components/Modal/ModalTrigger"
import { LandscapeCard, LandscapeText, LandscapeTitle } from "../../components/LandscapeCard"

const ExperienceCards: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 items-center justify-center mt-20 overflow-x-hidden">
      
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
      }
      className="max-w-3xl w-9/10"
      >
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
      }
      className="max-w-3xl w-9/10"
      >
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
      }
      className="w-9/10 max-w-3xl"
      >
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
    </div>
  )
}

export default ExperienceCards