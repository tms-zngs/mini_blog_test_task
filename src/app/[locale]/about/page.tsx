import css from "./About.module.css";
import { getTranslations } from "next-intl/server";

const AboutPage = async () => {
  const t = await getTranslations("AboutPage");

  return (
    <div className="container">
      <div className={css.card}>
        <h1 className={css.title}>{t("title")}</h1>
        <p className={css.text}>{t("paragraph1")}</p>
        <p className={css.text}>{t("paragraph2")}</p>
        <p className={css.text}>{t("paragraph3")}</p>
      </div>
    </div>
  );
};

export default AboutPage;
