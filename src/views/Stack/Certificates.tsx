import Card from "../../components/Card"
import { CardContent, CardText } from "../../components/Card/CardContent"
import { CardHeader, CardTitle } from "../../components/Card/CardHeader"
import SilverTitle from "../../components/SilverTitle"


const Certificates: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 w-full mt-35">
      <SilverTitle className="w-full p-5 text-center bg-tranparent-white backdrop-blur-md shadow-lg">Certificates</SilverTitle>
      <div className="flex flex-wrap justify-center gap-10">
        <Card>
          <CardHeader src="/images/placeholder-image.webp" alt="placeholder">
            <CardTitle>Análise e Desenvolvimento de Sistemas</CardTitle>
          </CardHeader>
          <CardContent btnProps={{ href: 'https://github.com' }}>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum magnam itaque sapiente voluptas accusantium facilis amet, doloremque, praesentium blanditiis dicta culpa corrupti debitis repellat maxime aperiam incidunt illum! Doloremque.
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader src="/images/placeholder-image.webp" alt="placeholder">
            <CardTitle>Análise e Desenvolvimento de Sistemas</CardTitle>
          </CardHeader>
          <CardContent btnProps={{ href: 'https://github.com' }}>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum magnam itaque sapiente voluptas accusantium facilis amet, doloremque, praesentium blanditiis dicta culpa corrupti debitis repellat maxime aperiam incidunt illum! Doloremque.
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader src="/images/placeholder-image.webp" alt="placeholder">
            <CardTitle>Análise e Desenvolvimento de Sistemas</CardTitle>
          </CardHeader>
          <CardContent btnProps={{ href: 'https://github.com' }}>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum magnam itaque sapiente voluptas accusantium facilis amet, doloremque, praesentium blanditiis dicta culpa corrupti debitis repellat maxime aperiam incidunt illum! Doloremque.
            </CardText>
          </CardContent>
        </Card>
        <Card>
          <CardHeader src="/images/placeholder-image.webp" alt="placeholder">
            <CardTitle>Análise e Desenvolvimento de Sistemas</CardTitle>
          </CardHeader>
          <CardContent btnProps={{ href: 'https://github.com' }}>
            <CardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatum magnam itaque sapiente voluptas accusantium facilis amet, doloremque, praesentium blanditiis dicta culpa corrupti debitis repellat maxime aperiam incidunt illum! Doloremque.
            </CardText>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Certificates