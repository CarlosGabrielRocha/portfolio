import Card from "../../components/Card";
import { CardContent, CardText } from "../../components/Card/CardContent";
import { CardHeader, CardTitle } from "../../components/Card/CardHeader";
import SilverTitle from "../../components/SilverTitle";
import { useTranslation } from "react-i18next";

const Certificates: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-20 w-full mt-35 px-2 sm:px-10">
      <SilverTitle className="w-full p-5 text-center bg-tranparent-white backdrop-blur-md shadow-lg">
        {t("certificates.title")}
      </SilverTitle>
      <div className="flex flex-wrap justify-center gap-10">
        <Card>
          <CardHeader>
            <CardTitle>{t("education.degreeTitle")}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>{t("education.degreeDesc")}</CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/ts-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>{t("certificates.ts")}</CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/nodejs-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>Node.Js</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>{t("certificates.node")}</CardText>
          </CardContent>
        </Card>
        <Card btnProps={{ href: "/certificates/database-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>PostgreSQL and Relational Databases</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>{t("certificates.db")}</CardText>
          </CardContent>
        </Card>

        <Card btnProps={{ href: "/certificates/react-certificate.pdf" }}>
          <CardHeader>
            <CardTitle>React.Js</CardTitle>
          </CardHeader>
          <CardContent>
            <CardText>{t("certificates.react")}</CardText>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Certificates;
