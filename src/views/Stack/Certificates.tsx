import Card from "../../components/Card";
import { CardContent, CardText } from "../../components/Card/CardContent";
import { CardHeader, CardTitle } from "../../components/Card/CardHeader";
import SilverTitle from "../../components/SilverTitle";

const Certificates: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-20 w-full mt-35 px-10">
      <SilverTitle className="w-full p-5 text-center bg-tranparent-white backdrop-blur-md shadow-lg">
        Certificates
      </SilverTitle>
      <div className="flex flex-wrap justify-center gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Degree in Software Analysis and Development</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>
              The degree covered core areas such as software modeling, software
              architecture, cloud computing, databases, business-oriented AI,
              project management, object-oriented programming, software
              engineering, quality assurance, and software testing, providing a
              solid foundation for developing robust and scalable systems.
            </CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/ts-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>TypeScript course from OnebitCode</CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/nodejs-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>Node.Js</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>NodeJs course from OnebitCode</CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/database-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>PostgreSQL and Relational Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>
              PostgreSQL and Relational Databases course from OnebitCode
            </CardText>
          </CardContent>
        </Card>

        <Card btnProps={{ href: "/certificates/react-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>React.Js</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>React js course from OnebitCode</CardText>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificates;
